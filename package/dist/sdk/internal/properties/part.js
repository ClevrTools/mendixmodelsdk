"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const abstract_property_1 = require("./abstract-property");
const instances_1 = require("../instances");
function instantiateChildElement(parent, value) {
    let newChild;
    if (parent._isNew) {
        newChild = value ? instances_1.instancehelpers.createNewElementInstanceFromJSON(parent._model, value) : null;
    }
    else {
        newChild = instances_1.instancehelpers.modelElementJsonToInstance(parent._model, parent.unit, parent, value, parent._isPartial);
        if (newChild) {
            parent.unit._cacheElement(newChild);
        }
    }
    return newChild;
}
/**
 * A property value that is a (model) element.
 * Will detect when children are moved, added, deleted and sends the appropriate deltas.
 */
class PartProperty extends abstract_property_1.AbstractProperty {
    /** @internal */
    initialize(value, hasDefaultValue) {
        this.hasDefaultValue = hasDefaultValue;
        return { observableValue: mobx_1.observable.box(value, { deep: false }) };
    }
    get() {
        this.assertReadable();
        return this.observableValue.get();
    }
    set(newValue) {
        this.assertWritable();
        if (this.isRequired && !newValue) {
            throw new Error(`Cannot unset required part property`);
        }
        const oldValue = this.observableValue.get();
        if (newValue === oldValue) {
            return;
        }
        if (newValue && !(newValue._isNew || newValue._isDetached)) {
            throw new Error(`Only new or detached elements can be assigned to a part property; did you forget to call detach()?`);
        }
        if (oldValue) {
            oldValue._sendDeleteDelta();
            oldValue._deleteInternal();
        }
        if (newValue) {
            newValue.versionInfo.checkSameModelVersion(newValue.model, this.parent.model);
            newValue.versionInfo.checkStructureVersion(newValue);
            newValue._container = this.parent;
            if (newValue._isNew) {
                // just created
                if (!this.parent._isNew) {
                    newValue._updateElementsContainer(this.parent.unit);
                    this.parent._model._qualifiedNameCache.addStructureToCache(newValue);
                }
                newValue._sendCreateDelta(this.parent, this.name);
            }
            else {
                // moved TO here
                if (this.parent._isNew) {
                    throw new Error("Only new elements can be assigned to a part property of a new structure; " +
                        "please add the parent structure to the model first.");
                }
                newValue._state = "attached";
                newValue._model._removeDetachedStructure(newValue);
                newValue._sendAttachDelta(this.parent, this.name);
            }
            newValue._processNameChange();
        }
        this.observableValue.set(newValue || null);
    }
    updateWithRawValue(value) {
        const newChild = instantiateChildElement(this.parent, value);
        if (newChild) {
            newChild._container = this.parent;
        }
        // cleanup old value, we got a server side change that this child is no longer ours:
        const currentChild = this.observableValue.get();
        if (currentChild !== null && currentChild !== newChild) {
            currentChild._dispose();
        }
        this.observableValue.set(newChild);
    }
    updateElementContainer(unit) {
        const element = this.observableValue.get();
        if (element) {
            element._updateElementsContainer(unit);
        }
    }
    detachValue() {
        const element = this.observableValue.get();
        if (element) {
            element._sendDetachDelta();
            this.observableValue.set(null);
        }
    }
    dispose() {
        super.dispose();
        const element = this.observableValue.get();
        if (element) {
            element._dispose();
        }
    }
    /** @internal */
    _toJSON() {
        const value = this.get();
        return value ? value.toJSON() : null;
    }
    deepCopyInto(clone, idMap, unresolvedIdentifierFixers) {
        const val = this.get();
        if (val === null) {
            clone[this.name] = val;
        }
        else {
            val._deepCopyElementInto(clone, this.name, idMap, unresolvedIdentifierFixers);
        }
    }
}
exports.PartProperty = PartProperty;
/**
 * A property value that is a list of (model) elements.
 * Will detect when children are moved, added, deleted and sends the appropriate deltas.
 */
class PartListProperty extends abstract_property_1.AbstractProperty {
    constructor() {
        super(...arguments);
        this._detaching = false;
    }
    /*
     * Currently, only possible default value for listy properties is [],
     * so we don't have to store initialItems to be able to distinguish from default value.
     */
    /** @internal */
    initialize(initialItems) {
        const observableValue = mobx_1.observable.array(initialItems || [], { deep: false });
        observableValue.intercept(change => this.beforeChange(change));
        const disposer = observableValue.observe(change => this.onChange(change));
        return { observableValue, disposer };
    }
    get() {
        this.assertReadable();
        return this.observableValue;
    }
    updateWithRawValue(value) {
        const newChildren = value.map(e => instantiateChildElement(this.parent, e));
        const oldChildren = this.observableValue;
        // dispose old children:
        for (let i = 0; i < oldChildren.length; i++) {
            if (newChildren.indexOf(oldChildren[i]) === -1) {
                oldChildren[i]._dispose();
            }
        }
        this.observableValue.replace(newChildren);
    }
    /** @internal */
    beforeChange(change) {
        if (!this.shouldHandleChange()) {
            return change;
        }
        this.assertWritable();
        this.checkAddedItems(change);
        switch (change.type) {
            case "splice":
                for (let i = change.removedCount - 1; i >= 0; i--) {
                    this.sendChildRemoval(this.observableValue[change.index + i], change.added);
                }
                for (let i = 0; i < change.added.length; i++) {
                    this.sendChildAddition(change.added[i], change.index + i);
                }
                break;
            case "update":
                this.sendChildRemoval(this.observableValue[change.index], [change.newValue]);
                this.sendChildAddition(change.newValue, change.index);
                break;
        }
        return change;
    }
    /** @internal */
    checkAddedItems(change) {
        const listAfterChange = change.object.slice();
        const newItems = [];
        if (change.type === "splice") {
            newItems.push(...change.added);
            listAfterChange.splice(change.index, change.removedCount, ...change.added);
        }
        else {
            newItems.push(change.newValue);
            listAfterChange[change.index] = change.newValue;
        }
        for (const item of newItems) {
            this.checkAddedItem(item, change.object.indexOf(item) >= 0);
            if (listAfterChange.filter(other => other === item).length > 1) {
                throw new Error(`Cannot add element '${item.structureTypeName}#${item.id}' more than once ` +
                    `to property '${this.name}' of '${this.parent.structureTypeName}#${this.parent.id}'`);
            }
        }
    }
    /** @internal */
    checkAddedItem(item, itemWasAlreadyInList) {
        if (!item) {
            throw new Error(`Null values cannot be added to property '${this.name}' of '${this.parent.structureTypeName}#${this.parent.id}'`);
        }
        if (!itemWasAlreadyInList && !(item._isNew || item._isDetached)) {
            throw new Error(`Only new or detached elements can be added to a part list property; did you forget to call detach()?`);
        }
        if (!item._isNew && this.parent._isNew) {
            throw new Error("Only new elements can be added to a part list property of a new structure; " +
                "please add the parent structure to the model first.");
        }
        item.versionInfo.checkSameModelVersion(item.model, this.parent.model);
        item.versionInfo.checkStructureVersion(item);
    }
    /** @internal */
    sendChildAddition(item, index) {
        if (item._isNew) {
            item._sendCreateDelta(this.parent, this.name, index);
        }
        else {
            item._sendAttachDelta(this.parent, this.name, index);
        }
    }
    /** @internal */
    sendChildRemoval(element, addedElements) {
        if (this._detaching || addedElements.indexOf(element) > -1) {
            element._sendDetachDelta();
        }
        else {
            element._sendDeleteDelta();
            element._deleteInternal();
        }
    }
    /** @internal */
    onChange(change) {
        if (!this.shouldHandleChange()) {
            return;
        }
        // For change data details see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        switch (change.type) {
            case "splice":
                for (let i = change.index; i < change.index + change.addedCount; i++) {
                    this.processChildAddition(i);
                }
                break;
            case "update":
                this.processChildAddition(change.index);
                break;
        }
    }
    /** @internal */
    processChildAddition(index) {
        const item = this.observableValue[index];
        item._container = this.parent;
        if (item._isNew) {
            if (!this.parent._isNew) {
                item._updateElementsContainer(this.parent.unit);
                this.parent._model._qualifiedNameCache.addStructureToCache(item);
            }
            item._unit = this.parent.unit;
        }
        else {
            item._state = "attached";
            item._model._removeDetachedStructure(item);
        }
        item._processNameChange();
    }
    updateElementContainer(unit) {
        this.observableValue.forEach((item) => item._updateElementsContainer(unit));
    }
    removeChild(child) {
        const idx = this.observableValue.indexOf(child);
        if (idx >= 0) {
            this.observableValue.splice(idx, 1);
            return true;
        }
        return false;
    }
    detachChild(child) {
        const idx = this.observableValue.indexOf(child);
        if (idx >= 0) {
            this._detaching = true;
            this.observableValue.splice(idx, 1);
            this._detaching = false;
        }
    }
    dispose() {
        super.dispose();
        this.observableValue.forEach(elem => elem._dispose());
    }
    /** @internal */
    _toJSON() {
        return this.get().map(item => item.toJSON());
    }
    deepCopyInto(clone, idMap, unresolvedIdentifierFixers) {
        // throw away default / existing values in the list
        clone["__" + this.name].get().clear();
        this.get()
            .filter(child => !!child)
            .forEach(child => child._deepCopyElementInto(clone, this.name, idMap, unresolvedIdentifierFixers));
    }
}
exports.PartListProperty = PartListProperty;
//# sourceMappingURL=part.js.map