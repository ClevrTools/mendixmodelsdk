"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const deepEqual = require("deep-equal");
const units_1 = require("./units");
class UndoManager {
    constructor(_model) {
        /** @internal */
        this.undoStates = {};
        /** @internal */
        this.suspendTracking = false;
        this.model = _model;
        this.deltaManager = this.model.deltaManager;
        this.deltaManager.onNewDelta(this.onNewDelta.bind(this));
        this.deltaManager.onTransactionCommitted(() => this.onChangeCompleted());
        this.deltaManager.onTransactionRollback(() => this.onChangeDiscarded());
        this.model.onUnitLoaded(this.onUnitLoaded.bind(this));
    }
    getUndoState(modelUnitId) {
        if (!modelUnitId) {
            throw new Error("modelUnitId cannot be null or undefined");
        }
        if (!this.undoStates[modelUnitId]) {
            this.undoStates[modelUnitId] = new UndoState(this.deltaManager);
        }
        return this.undoStates[modelUnitId];
    }
    withoutUndo(performAction) {
        try {
            this.suspendTracking = true;
            return performAction();
        }
        finally {
            this.suspendTracking = false;
        }
    }
    onNewDelta(delta) {
        const undoState = this.getUndoState(delta.unitId);
        if (this.suspendTracking || undoState.containsCreateUnitTreeDeltaChange) {
            return;
        }
        if (delta.deltaType === "CREATE_UNIT_TREE") {
            undoState.containsCreateUnitTreeDeltaChange = true;
        }
        else if (delta.deltaType === "DELETE_UNIT") {
            delete this.undoStates[delta.unitId];
        }
        else {
            if (!(this.model._units[delta.unitId] instanceof units_1.ModelUnit)) {
                return;
            }
            const change = {
                delta: delta,
                reversedDelta: this.deltaManager.reverseDelta(delta)
            };
            if (!deepEqual(change.delta, change.reversedDelta)) {
                undoState.pendingChange.push(change);
            }
        }
    }
    onChangeCompleted() {
        for (const key in this.undoStates) {
            const undoState = this.undoStates[key];
            if (undoState) {
                if (undoState.pendingChange.length > 0) {
                    undoState.changeCompleted();
                }
                undoState.containsCreateUnitTreeDeltaChange = false;
            }
        }
    }
    onChangeDiscarded() {
        for (const key in this.undoStates) {
            const undoState = this.undoStates[key];
            if (undoState) {
                undoState.pendingChange = [];
            }
        }
    }
    onUnitLoaded(modelUnitId) {
        this.getUndoState(modelUnitId).clear();
    }
}
exports.UndoManager = UndoManager;
class UndoState {
    constructor(deltaManager) {
        this.deltaManager = deltaManager;
        this.history = [];
        this.future = [];
        this.pendingChange = [];
        this.containsCreateUnitTreeDeltaChange = false;
    }
    get canUndo() {
        return this.history.length > 0;
    }
    get canRedo() {
        return this.future.length > 0;
    }
    undo() {
        if (!this.canUndo) {
            throw new Error("No undo actions available");
        }
        if (this.pendingChange.length > 0) {
            throw new Error("Cannot undo when there are pending changes");
        }
        const change = this.history.pop();
        this.deltaManager.processDeltas(change.map(t => t.reversedDelta).reverse());
        this.future.push(change);
    }
    redo() {
        if (!this.canRedo) {
            throw new Error("No redo actions available");
        }
        if (this.pendingChange.length > 0) {
            throw new Error("Cannot redo when there are pending changes");
        }
        const change = this.future.pop();
        this.deltaManager.processDeltas(change.map(t => t.delta));
        this.history.push(change);
    }
    clear() {
        this.history.splice(0, this.history.length);
        this.future.splice(0, this.future.length);
    }
    /** @internal */
    changeCompleted() {
        if (!this.containsCreateUnitTreeDeltaChange) {
            this.history.push(this.pendingChange.slice());
            this.future.splice(0, this.future.length);
        }
        this.pendingChange = [];
    }
}
__decorate([
    mobx_1.observable.shallow
], UndoState.prototype, "history", void 0);
__decorate([
    mobx_1.observable.shallow
], UndoState.prototype, "future", void 0);
__decorate([
    mobx_1.computed
], UndoState.prototype, "canUndo", null);
__decorate([
    mobx_1.computed
], UndoState.prototype, "canRedo", null);
__decorate([
    mobx_1.action
], UndoState.prototype, "undo", null);
__decorate([
    mobx_1.action
], UndoState.prototype, "redo", null);
exports.UndoState = UndoState;
//# sourceMappingURL=UndoManager.js.map