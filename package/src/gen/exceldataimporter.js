"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceldataimporter = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
/**
 * @ignore
 */
var exceldataimporter;
(function (exceldataimporter) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ExcelDataImporter`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class ColumnAttributeMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__reference = new internal.PartProperty(ColumnAttributeMapping, this, "reference", null, true);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(ColumnAttributeMapping, this, "attribute", null, "DomainModels$Attribute");
            if (arguments.length < 4) {
                throw new Error("new ColumnAttributeMapping() cannot be invoked directly, please use 'model.exceldataimporter.createColumnAttributeMapping()'");
            }
        }
        get containerAsSheet() {
            return super.getContainerAs(Sheet);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get reference() {
            return this.__reference.get();
        }
        set reference(newValue) {
            this.__reference.set(newValue);
        }
        get attribute() {
            return this.__attribute.get();
        }
        set attribute(newValue) {
            this.__attribute.set(newValue);
        }
        get attributeQualifiedName() {
            return this.__attribute.qualifiedName();
        }
        /**
         * Creates and returns a new ColumnAttributeMapping instance in the SDK and on the server.
         * The new ColumnAttributeMapping will be automatically stored in the 'columnAttributeMappings' property
         * of the parent Sheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ColumnAttributeMapping.structureTypeName, { start: "9.24.0" });
            return internal.instancehelpers.createElement(container, ColumnAttributeMapping, "columnAttributeMappings", true);
        }
        /**
         * Creates and returns a new ColumnAttributeMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ColumnAttributeMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.reference = IndexReference.create(this.model);
        }
    }
    ColumnAttributeMapping.structureTypeName = "ExcelDataImporter$ColumnAttributeMapping";
    ColumnAttributeMapping.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        properties: {
            reference: {
                required: {
                    currentValue: true
                }
            },
            attribute: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    exceldataimporter.ColumnAttributeMapping = ColumnAttributeMapping;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class Reference extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Reference() cannot be invoked directly, please use 'model.exceldataimporter.createReference()'");
            }
        }
        get containerAsColumnAttributeMapping() {
            return super.getContainerAs(ColumnAttributeMapping);
        }
        get containerAsSheet() {
            return super.getContainerAs(Sheet);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Reference.structureTypeName = "ExcelDataImporter$Reference";
    Reference.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    exceldataimporter.Reference = Reference;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class IndexReference extends Reference {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__referencedIndex = new internal.PrimitiveProperty(IndexReference, this, "referencedIndex", 1, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new IndexReference() cannot be invoked directly, please use 'model.exceldataimporter.createIndexReference()'");
            }
        }
        get containerAsColumnAttributeMapping() {
            return super.getContainerAs(ColumnAttributeMapping);
        }
        get containerAsSheet() {
            return super.getContainerAs(Sheet);
        }
        get referencedIndex() {
            return this.__referencedIndex.get();
        }
        set referencedIndex(newValue) {
            this.__referencedIndex.set(newValue);
        }
        /**
         * Creates and returns a new IndexReference instance in the SDK and on the server.
         * The new IndexReference will be automatically stored in the 'reference' property
         * of the parent ColumnAttributeMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createInColumnAttributeMappingUnderReference(container) {
            internal.createInVersionCheck(container.model, IndexReference.structureTypeName, { start: "9.24.0" });
            return internal.instancehelpers.createElement(container, IndexReference, "reference", false);
        }
        /**
         * Creates and returns a new IndexReference instance in the SDK and on the server.
         * The new IndexReference will be automatically stored in the 'reference' property
         * of the parent Sheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createInSheetUnderReference(container) {
            internal.createInVersionCheck(container.model, IndexReference.structureTypeName, { start: "9.24.0" });
            return internal.instancehelpers.createElement(container, IndexReference, "reference", false);
        }
        /**
         * Creates and returns a new IndexReference instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, IndexReference);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.referencedIndex = 1;
        }
    }
    IndexReference.structureTypeName = "ExcelDataImporter$IndexReference";
    IndexReference.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    exceldataimporter.IndexReference = IndexReference;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class NameReference extends Reference {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__referencedName = new internal.PrimitiveProperty(NameReference, this, "referencedName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new NameReference() cannot be invoked directly, please use 'model.exceldataimporter.createNameReference()'");
            }
        }
        get containerAsColumnAttributeMapping() {
            return super.getContainerAs(ColumnAttributeMapping);
        }
        get containerAsSheet() {
            return super.getContainerAs(Sheet);
        }
        get referencedName() {
            return this.__referencedName.get();
        }
        set referencedName(newValue) {
            this.__referencedName.set(newValue);
        }
        /**
         * Creates and returns a new NameReference instance in the SDK and on the server.
         * The new NameReference will be automatically stored in the 'reference' property
         * of the parent ColumnAttributeMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createInColumnAttributeMappingUnderReference(container) {
            internal.createInVersionCheck(container.model, NameReference.structureTypeName, { start: "9.24.0" });
            return internal.instancehelpers.createElement(container, NameReference, "reference", false);
        }
        /**
         * Creates and returns a new NameReference instance in the SDK and on the server.
         * The new NameReference will be automatically stored in the 'reference' property
         * of the parent Sheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createInSheetUnderReference(container) {
            internal.createInVersionCheck(container.model, NameReference.structureTypeName, { start: "9.24.0" });
            return internal.instancehelpers.createElement(container, NameReference, "reference", false);
        }
        /**
         * Creates and returns a new NameReference instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NameReference);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NameReference.structureTypeName = "ExcelDataImporter$NameReference";
    NameReference.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    exceldataimporter.NameReference = NameReference;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class Sheet extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__reference = new internal.PartProperty(Sheet, this, "reference", null, true);
            /** @internal */
            this.__headerRowStartsAt = new internal.PrimitiveProperty(Sheet, this, "headerRowStartsAt", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__dataRowStartsAt = new internal.PrimitiveProperty(Sheet, this, "dataRowStartsAt", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__columnAttributeMappings = new internal.PartListProperty(Sheet, this, "columnAttributeMappings", []);
            if (arguments.length < 4) {
                throw new Error("new Sheet() cannot be invoked directly, please use 'model.exceldataimporter.createSheet()'");
            }
        }
        get containerAsTemplate() {
            return super.getContainerAs(Template);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get reference() {
            return this.__reference.get();
        }
        set reference(newValue) {
            this.__reference.set(newValue);
        }
        get headerRowStartsAt() {
            return this.__headerRowStartsAt.get();
        }
        set headerRowStartsAt(newValue) {
            this.__headerRowStartsAt.set(newValue);
        }
        get dataRowStartsAt() {
            return this.__dataRowStartsAt.get();
        }
        set dataRowStartsAt(newValue) {
            this.__dataRowStartsAt.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get columnAttributeMappings() {
            return this.__columnAttributeMappings.get();
        }
        /**
         * Creates and returns a new Sheet instance in the SDK and on the server.
         * The new Sheet will be automatically stored in the 'sheets' property
         * of the parent Template element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, Sheet.structureTypeName, { start: "9.24.0" });
            return internal.instancehelpers.createElement(container, Sheet, "sheets", true);
        }
        /**
         * Creates and returns a new Sheet instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Sheet);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.dataRowStartsAt = 1;
            this.headerRowStartsAt = 1;
            this.reference = IndexReference.create(this.model);
        }
    }
    Sheet.structureTypeName = "ExcelDataImporter$Sheet";
    Sheet.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        properties: {
            reference: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    exceldataimporter.Sheet = Sheet;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class Template extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__templateName = new internal.PrimitiveProperty(Template, this, "templateName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__sheets = new internal.PartListProperty(Template, this, "sheets", []);
            /** @internal */
            this.__fileName = new internal.PrimitiveProperty(Template, this, "fileName", "", internal.PrimitiveTypeEnum.String);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get templateName() {
            return this.__templateName.get();
        }
        set templateName(newValue) {
            this.__templateName.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get sheets() {
            return this.__sheets.get();
        }
        get fileName() {
            return this.__fileName.get();
        }
        set fileName(newValue) {
            this.__fileName.set(newValue);
        }
        /**
         * Creates a new Template unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, Template);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Template.structureTypeName = "ExcelDataImporter$Template";
    Template.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.ModelUnit);
    exceldataimporter.Template = Template;
})(exceldataimporter = exports.exceldataimporter || (exports.exceldataimporter = {}));
//# sourceMappingURL=exceldataimporter.js.map