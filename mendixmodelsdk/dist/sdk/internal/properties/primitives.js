"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const abstract_property_1 = require("./abstract-property");
const utils_1 = require("../../utils");
/**
 * All primitive types.
 * Note: must match exactly with MxPrimitiveTypeEnum!
 */
var PrimitiveTypeEnum;
(function (PrimitiveTypeEnum) {
    PrimitiveTypeEnum[PrimitiveTypeEnum["Integer"] = 0] = "Integer";
    PrimitiveTypeEnum[PrimitiveTypeEnum["String"] = 1] = "String";
    PrimitiveTypeEnum[PrimitiveTypeEnum["Boolean"] = 2] = "Boolean";
    PrimitiveTypeEnum[PrimitiveTypeEnum["Double"] = 3] = "Double";
    PrimitiveTypeEnum[PrimitiveTypeEnum["DateTime"] = 4] = "DateTime";
    PrimitiveTypeEnum[PrimitiveTypeEnum["Guid"] = 5] = "Guid";
    PrimitiveTypeEnum[PrimitiveTypeEnum["Point"] = 6] = "Point";
    PrimitiveTypeEnum[PrimitiveTypeEnum["Size"] = 7] = "Size";
    PrimitiveTypeEnum[PrimitiveTypeEnum["Color"] = 8] = "Color";
    PrimitiveTypeEnum[PrimitiveTypeEnum["Blob"] = 9] = "Blob";
})(PrimitiveTypeEnum = exports.PrimitiveTypeEnum || (exports.PrimitiveTypeEnum = {}));
/*
 * Primitive-typed property value
 */
class PrimitiveProperty extends abstract_property_1.AbstractProperty {
    /** @internal */
    initialize(defaultValue, primitiveType) {
        this.defaultValue = defaultValue;
        this.primitiveType = primitiveType;
        const observableValue = mobx_1.observable.box(defaultValue, { deep: false });
        observableValue.intercept(change => this.beforeChange(change));
        const disposer = observableValue.observe(change => this.onChange(change));
        return { observableValue, disposer };
    }
    get() {
        this.assertReadable();
        return this.observableValue.get();
    }
    set(newValue) {
        this.assertWritable();
        this.observableValue.set(newValue);
    }
    updateWithRawValue(value) {
        this.observableValue.set(value);
    }
    getRawValue(value) {
        return value;
    }
    beforeChange(change) {
        utils_1.utils.assertNotNull(change.newValue, this.name);
        if (this.shouldHandleChange()) {
            this.parent._sendChangeDelta(this.name, this.getRawValue(change.newValue));
        }
        return change;
    }
    /** @internal */
    onChange(change) {
        if (this.shouldHandleChange()) {
            if (this.name === "name" && this.primitiveType === PrimitiveTypeEnum.String) {
                this.parent._processNameChange();
                this.parent._processLocalNameChange(change.oldValue);
            }
        }
    }
    markCurrentValueAsDefault() {
        this.defaultValue = this.get();
    }
    /** @internal */
    _toJSON() {
        return this.get();
    }
    deepCopyInto(clone) {
        if (this.primitiveType !== PrimitiveTypeEnum.Guid) {
            // Guids should never be cloned
            clone[this.name] = this.get();
        }
    }
}
exports.PrimitiveProperty = PrimitiveProperty;
/**
 * Primitive-typed property values list.
 */
class PrimitiveListProperty extends abstract_property_1.AbstractProperty {
    /*
     * Currently, only possible default value for listy properties is [],
     * so we don't have to store initialItems to be able to distinguish from default value.
     *
     * @internal
     */
    initialize(initialItems, primitiveType) {
        this.primitiveType = primitiveType;
        const observableValue = mobx_1.observable.array(initialItems || [], { deep: false });
        observableValue.intercept(change => this.beforeChange(change));
        return { observableValue };
    }
    get() {
        this.assertReadable();
        return this.observableValue;
    }
    updateWithRawValue(value) {
        this.observableValue.replace(value);
    }
    /** @internal */
    beforeChange(change) {
        if (!this.shouldHandleChange()) {
            return change;
        }
        this.assertWritable();
        sendListChangeDeltas(this, change);
        return change;
    }
    /** @internal */
    toRawChangeValue(value) {
        return value; // primitives can be sent verbatim to the server
    }
    /** @internal */
    _toJSON() {
        return this.get().slice();
    }
    deepCopyInto(clone) {
        if (this.primitiveType !== PrimitiveTypeEnum.Guid) {
            // Guids should never be cloned
            clone[this.name].replace(this.get().slice());
        }
    }
}
exports.PrimitiveListProperty = PrimitiveListProperty;
/**
 * A property value that is an enum literal.
 */
class EnumProperty extends PrimitiveProperty {
    constructor(declaredOn, parent, name, initialValue, enumType) {
        super(declaredOn, parent, name, initialValue);
        this.initialValue = initialValue;
        this.enumType = enumType;
    }
    updateWithRawValue(value) {
        this.observableValue.set(this.enumType[value] || this.initialValue);
    }
    getRawValue(value) {
        return value.name;
    }
    set(value) {
        if (value) {
            value.checkEnumVersion(this.parent.model.metaModelVersion, true);
        }
        super.set(value);
    }
    /** @internal */
    onChange(change) {
        // Do not execute the parent behavior.
    }
    /** @internal */
    _toJSON() {
        return this.get().name;
    }
}
exports.EnumProperty = EnumProperty;
/**
 * A property value that is a list of enum literals.
 */
class EnumListProperty extends PrimitiveListProperty {
    constructor(declaredOn, parent, name, initialValue, enumType) {
        super(declaredOn, parent, name, initialValue);
        this.initialValue = initialValue;
        this.enumType = enumType;
    }
    updateWithRawValue(value) {
        this.observableValue.replace(value
            ? value.map(e => this.enumType[e] || this.initialValue) // XXX: `this.initialValue` is a list, not just one enumeration value!
            : []);
    }
    /** @internal */
    toRawChangeValue(value) {
        if (value) {
            value.checkEnumVersion(this.parent.model.metaModelVersion, true);
            return value.toString(); // send enum string representation to the server
        }
        return null;
    }
    /** @internal */
    _toJSON() {
        return this.get().map(item => item.name);
    }
}
exports.EnumListProperty = EnumListProperty;
function sendListChangeDeltas(property, change) {
    switch (change.type) {
        case "update":
            utils_1.utils.assertNotNull(change.object[change.index], property.name, true);
            property.parent._sendChangeDelta(property.name, property.toRawChangeValue(change.newValue), "CHANGE", change.index);
            break;
        case "splice":
            change.added.forEach(item => utils_1.utils.assertNotNull(item, property.name, true));
            for (let i = change.removedCount - 1; i >= 0; i--) {
                property.parent._sendChangeDelta(property.name, null, "REMOVE", change.index + i);
            }
            for (let i = 0; i < change.added.length; i++) {
                property.parent._sendChangeDelta(property.name, property.toRawChangeValue(change.added[i]), "ADD", change.index + i);
            }
            break;
    }
}
exports.sendListChangeDeltas = sendListChangeDeltas;
//# sourceMappingURL=primitives.js.map