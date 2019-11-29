"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delta_sender_1 = require("./delta-sender");
const delta_reverser_1 = require("./delta-reverser");
const delta_processor_1 = require("./delta-processor");
const delta_utils_1 = require("./delta-utils");
const transaction_manager_1 = require("./transaction-manager");
const event_emitter_1 = require("../event-emitter");
const units_1 = require("../units");
class DeltaManager {
    constructor(model) {
        this.model = model;
        /** @internal */
        this.queue = [];
        this.flushCallbacks = [];
        this.errorCallbacks = [];
        this.eventEmitter = new event_emitter_1.EventEmitter();
        this.deltaSender = new delta_sender_1.DeltaSender(model, () => this.callFlushCallbacks(), error => this.callErrorCallbacks(error));
        this.deltaReverser = new delta_reverser_1.DeltaReverser(model);
        this.deltaProcessor = new delta_processor_1.DeltaProcessor(model);
        this.transactionManager = new transaction_manager_1.TransactionManager(model, error => this.callErrorCallbacks(error));
        this.transactionManager.onCommitted(() => this.handleTransactionCommited());
        this.transactionManager.onRollback(() => this.handleTransactionRollback());
    }
    /**
     * Closes the "connection" with the Model API Server in the sense that
     * pending delta requests are processed, and that afterwards the given
     * `callback` will be called.
     * This function can only be called once.
     */
    closeConnection(closeCallback, errorCallback) {
        this.flushCallbacks.push(closeCallback);
        if (errorCallback) {
            this.errorCallbacks.push(errorCallback);
        }
        // If closeConnection is called in the same tick that deltas have been added, send the deltas.
        this.transactionManager.commit();
        this.deltaSender.closeConnection();
    }
    /**
     * Ensure all pending delta requests are processed in Model Server
     */
    flushChanges(flushCallback, errorCallback) {
        this.flushCallbacks.push(flushCallback);
        if (errorCallback) {
            this.errorCallbacks.push(errorCallback);
        }
        // If flushChanges is called in the same tick that deltas have been added, send the deltas.
        this.transactionManager.commit();
        this.deltaSender.flush();
    }
    /**
     * Pushes the given `delta` on the queue for scheduling/processing.
     */
    push(delta) {
        this.queue.push({
            delta: delta,
            reverseDelta: this.getReverseDelta(delta)
        });
        this.eventEmitter.emit("NewDelta", delta);
        this.transactionManager.deltaReceived(delta);
    }
    processDeltas(deltas) {
        this.deltaProcessor.processDeltas(delta_utils_1.removeUselessDeltas(deltas));
        this.deltaSender.scheduleDeltas(deltas);
    }
    reverseDelta(delta) {
        return this.deltaReverser.reverse(delta);
    }
    beginTransaction() {
        return this.transactionManager.beginTransaction();
    }
    onNewDelta(callback) {
        this.eventEmitter.on("NewDelta", callback);
    }
    onTransactionCommitted(callback) {
        this.eventEmitter.on("TransactionCommitted", callback);
    }
    onTransactionRollback(callback) {
        this.eventEmitter.on("TransactionRollback", callback);
    }
    handleTransactionCommited() {
        this.deltaSender.scheduleDeltas(this.queue.map(change => change.delta));
        this.queue.splice(0, this.queue.length);
        this.eventEmitter.emit("TransactionCommitted", undefined);
    }
    handleTransactionRollback() {
        const reverseDeltas = this.queue.map(change => change.reverseDelta).reverse();
        const error = reverseDeltas.filter(delta => delta instanceof Error)[0];
        if (error) {
            throw error;
        }
        this.deltaProcessor.processDeltas(delta_utils_1.removeUselessDeltas(reverseDeltas));
        this.queue.splice(0, this.queue.length);
        this.eventEmitter.emit("TransactionRollback", undefined);
    }
    getReverseDelta(delta) {
        const unit = this.model._units[delta.unitId];
        if (unit instanceof units_1.StructuralUnit) {
            return new Error("Can't rollback changes in structural units.");
        }
        else if (delta.deltaType === "DELETE_UNIT" && !unit.isLoaded) {
            return new Error("Can't rollback deleting non-loaded units.");
        }
        else {
            return this.reverseDelta(delta);
        }
    }
    callFlushCallbacks() {
        this.flushCallbacks.slice().forEach(flushCallback => {
            flushCallback();
            this.flushCallbacks.splice(this.flushCallbacks.indexOf(flushCallback), 1);
        });
    }
    callErrorCallbacks(error) {
        if (this.errorCallbacks.length > 0) {
            this.errorCallbacks.slice().forEach(errorCallback => {
                errorCallback(error);
                this.errorCallbacks.splice(this.errorCallbacks.indexOf(errorCallback), 1);
            });
        }
        else {
            this.model._errorHandler(error);
        }
    }
}
exports.DeltaManager = DeltaManager;
//# sourceMappingURL=delta-manager.js.map