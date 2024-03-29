"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaScriptSerializer = void 0;
const properties = require("../internal/properties");
const units = require("../internal/units");
var PropertyKind;
(function (PropertyKind) {
    PropertyKind[PropertyKind["Primitive"] = 0] = "Primitive";
    PropertyKind[PropertyKind["Enumeration"] = 1] = "Enumeration";
    PropertyKind[PropertyKind["ByIdReference"] = 2] = "ByIdReference";
    PropertyKind[PropertyKind["ByNameReference"] = 3] = "ByNameReference";
    PropertyKind[PropertyKind["LocalByNameReference"] = 4] = "LocalByNameReference";
    PropertyKind[PropertyKind["Part"] = 5] = "Part";
})(PropertyKind || (PropertyKind = {}));
function toFirstLowerCase(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
/**
 * Class which allows to serialize a given model part as TypeScript code that constructs that model piece.
 * Limitations:
 *  - Can only do elements in one (model) unit.
 */
class JavaScriptSerializer {
    constructor(_unit) {
        /** @internal */
        this._creations = [];
        /** @internal */
        this._creationsById = {};
        /** @internal */
        this._varNamesById = {};
        /** @internal */
        this._varNames = {};
        this._unit = _unit;
    }
    /**
     * Given a unit, generates JavaScript(/TypeScript) code that would re-create the same unit.
     * Useful as scaffolding for model generators.
     */
    static serializeToJs(unit) {
        if (!unit.isLoaded) {
            throw new Error("serializeToJs can be used on loaded units only!");
        }
        const serializer = new JavaScriptSerializer(unit);
        serializer.schedule(unit);
        return serializer.source();
    }
    schedule(structure) {
        if (!structure || this._creationsById[structure.id]) {
            return;
        }
        this._creationsById[structure.id] = true;
        this._creations.push(this._asCreation(structure));
    }
    source() {
        // 1. compute varNames:
        for (const creation of this._creations) {
            this._computeVarName(creation);
        }
        // 2. build source for everything but assignments of by-id references and local by-name reference:
        const phase1 = this._creations.map(creation => this._creationAsSource(creation)).join("\n");
        // 3. add source for assignments of by-id references and local by-name reference:
        const phase2Creations = this._creations.filter(creation => creation.settings.some(setting => setting.kind === PropertyKind.ByIdReference || setting.kind === PropertyKind.LocalByNameReference));
        const phase2 = phase2Creations
            .map(creation => "\n" +
            creation.settings
                .filter(setting => setting.kind === PropertyKind.ByIdReference || setting.kind === PropertyKind.LocalByNameReference)
                .map(setting => "\t" + this._settingAsSource(this._varNamesById[creation.id], setting) + "\n")
                .join(""))
            .join("");
        const today = new Date();
        const header = `(function (unit, model) {

\t/*
\t * JavaScript code generated by mendixmodelsdk.sdk.extras.JavaScriptSerializer
\t * from unit with id "${this._unit.id}" of type ${this._unit.structureTypeName}
\t * in working copy "${this._unit._model.workingCopy.metaData.name}"
\t * on ${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}.
\t */

`;
        return header + phase1 + phase2 + "\n})";
    }
    /** @internal */
    _computeVarName(creation) {
        let preName;
        let name;
        let uniqueIndex = 0;
        let addUnderscore = false;
        if (creation.name) {
            preName = this._sanitizeName(creation.name);
            addUnderscore = /\d$/.test(preName);
        }
        else {
            preName = toFirstLowerCase(creation.unqualifiedTypeName);
        }
        do {
            uniqueIndex++;
            name = preName + (addUnderscore ? "_" : "") + uniqueIndex;
        } while (this._varNames[name]);
        this._varNamesById[creation.id] = name;
        this._varNames[name] = true;
    }
    /** @internal */
    _sanitizeName(name) {
        name = name.replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, "");
        name = name.replace(/^\d+/, "");
        name = name.replace(/\s/g, ""); // Remove white spaces
        name = toFirstLowerCase(name);
        return name;
    }
    /** @internal */
    _creationAsSource(creation) {
        const lines = [];
        const varName = this._varNamesById[creation.id];
        lines.push(`var ${varName} = ${creation.subMetaModel.toLowerCase()}.${creation.unqualifiedTypeName}.create${creation.unit ? "In(unit" : "(model"});`);
        creation.settings
            .filter(setting => setting.kind !== PropertyKind.ByIdReference && setting.kind !== PropertyKind.LocalByNameReference)
            .forEach(setting => lines.push(...this._settingAsSource(varName, setting)));
        return lines.map(line => "\t" + line + "\n").join("");
    }
    /** @internal */
    _settingAsSource(varName, setting) {
        const commentsPostfix = setting.couldBeDefaultValue ? "   // Note: for this property a default value is defined." : "";
        if (setting.updateWithRawValue) {
            return [
                "// Note: this is an unsupported internal property of the Model SDK which is subject to change.",
                `${varName}.__${setting.propertyName}.updateWithRawValue("${setting.value}");${commentsPostfix}`
            ];
        }
        return setting.listy
            ? setting.value.map(singleValue => `${varName}.${setting.propertyName}.push(${this._singleValueAsTsExpr(varName, setting, singleValue)});${commentsPostfix}`)
            : [`${varName}.${setting.propertyName} = ${this._singleValueAsTsExpr(varName, setting, setting.value)};${commentsPostfix}`];
    }
    /** @internal */
    _singleValueAsTsExpr(varName, setting, singleValue) {
        switch (setting.kind) {
            case PropertyKind.Primitive:
                return JSON.stringify(singleValue);
            case PropertyKind.Enumeration:
                return singleValue.qualifiedTsLiteralName();
            case PropertyKind.ByIdReference:
                return this._varNamesById[singleValue];
            case PropertyKind.ByNameReference:
                const $index = setting.targetType.indexOf("$");
                return `model.find${setting.targetType.substring($index + 1)}ByQualifiedName("${singleValue}")`;
            case PropertyKind.LocalByNameReference:
                return this._varNamesById[singleValue];
            case PropertyKind.Part:
                return !singleValue ? null : this._varNamesById[singleValue.id];
            default:
                throw new Error(`unmapped property kind (${setting.kind}) for setting of ${setting.propertyName} in ${varName}`);
        }
    }
    /** @internal */
    _asCreation(structure) {
        const typeParts = structure.structureTypeName.split("$");
        const creation = {
            id: structure.id,
            subMetaModel: typeParts[0],
            unqualifiedTypeName: typeParts[1],
            settings: [],
            unit: false
        };
        if (structure.__name?.isAvailable) {
            creation.name = structure.name;
        }
        if (structure instanceof units.ModelUnit || structure instanceof units.StructuralUnit) {
            // i.e. structure instanceof units.AbstractUnit if the TS type hierarchy actually matched the one in MxCore
            creation.unit = true;
        }
        structure.allProperties().forEach(property => {
            if (property instanceof properties.EnumProperty) {
                const value = property.get();
                if (value !== property.defaultValue) {
                    creation.settings.push({
                        propertyName: property["name"],
                        kind: PropertyKind.Enumeration,
                        value: value
                    });
                }
                return;
            }
            if (property instanceof properties.EnumListProperty) {
                const value = property.get();
                if (value.length > 0) {
                    creation.settings.push({
                        propertyName: property["name"],
                        kind: PropertyKind.Enumeration,
                        value: value,
                        listy: true
                    });
                }
                return;
            }
            // Primitive(List)Property must be handled _after_ Enum(List)Property since the latter inherit from the first!
            if (property instanceof properties.PrimitiveProperty) {
                if (property["primitiveType"] === properties.PrimitiveTypeEnum.Guid) {
                    return;
                }
                const value = property.get();
                if (value !== property.defaultValue) {
                    creation.settings.push({
                        propertyName: property["name"],
                        kind: PropertyKind.Primitive,
                        value: value
                    });
                }
                return;
            }
            if (property instanceof properties.PrimitiveListProperty) {
                const value = property.get();
                if (value.length > 0) {
                    creation.settings.push({
                        propertyName: property["name"],
                        kind: PropertyKind.Primitive,
                        value: value,
                        listy: true
                    });
                }
                return;
            }
            if (property instanceof properties.PartProperty) {
                const value = property.get();
                if (value) {
                    this.schedule(value);
                }
                if (property.hasDefaultValue || value) {
                    creation.settings.push({
                        propertyName: property["name"],
                        kind: PropertyKind.Part,
                        value: value,
                        couldBeDefaultValue: property.hasDefaultValue
                    });
                }
                return;
            }
            if (property instanceof properties.PartListProperty) {
                const value = property.get();
                if (value.length > 0) {
                    value.forEach(item => this.schedule(item));
                    creation.settings.push({
                        propertyName: property["name"],
                        kind: PropertyKind.Part,
                        value: value,
                        listy: true
                    });
                }
                return;
            }
            if (property instanceof properties.ByNameReferenceProperty) {
                const value = property.get();
                if (value || property.qualifiedName()) {
                    creation.settings.push({
                        propertyName: property["name"],
                        kind: PropertyKind.ByNameReference,
                        value: property.qualifiedName(),
                        targetType: property.targetType,
                        updateWithRawValue: !value
                    });
                }
                return;
            }
            if (property instanceof properties.LocalByNameReferenceProperty) {
                const value = property.get();
                if (value) {
                    creation.settings.push({
                        propertyName: property["name"],
                        kind: PropertyKind.LocalByNameReference,
                        value: value.id
                    });
                }
                return;
            }
            if (property instanceof properties.ByNameReferenceListProperty) {
                const value = property.get();
                if (value.length > 0) {
                    creation.settings.push({
                        propertyName: property["name"],
                        kind: PropertyKind.ByNameReference,
                        value: property.qualifiedNames(),
                        targetType: property.targetType,
                        listy: true
                    });
                }
                return;
            }
            if (property instanceof properties.ByIdReferenceProperty) {
                const value = property.get();
                if (value) {
                    this.schedule(value);
                    creation.settings.push({
                        propertyName: property["name"],
                        kind: PropertyKind.ByIdReference,
                        value: value.id
                    });
                }
                return;
            }
            throw new Error(`cannot serialize property: ${property.name} in object of type ${structure.structureTypeName}`);
        });
        return creation;
    }
}
exports.JavaScriptSerializer = JavaScriptSerializer;
//# sourceMappingURL=JavaScriptSerializer.js.map