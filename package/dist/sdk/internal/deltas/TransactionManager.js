"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = require("../EventEmitter");
const elements_1 = require("../elements");
const deltaUtils_1 = require("./deltaUtils");
class Transaction {
    constructor(transactionType, transactionManager) {
        this.transactionType = transactionType;
        this.transactionManager = transactionManager;
    }
    commit() {
        this.checkTransaction();
        this.transactionManager.commit();
    }
    rollback() {
        this.checkTransaction();
        this.transactionManager.rollback();
    }
    checkTransaction() {
        if (!this.transactionManager.currentTransaction) {
            throw new Error("There is no open transaction to do this operation.");
        }
        else if (this !== this.transactionManager.currentTransaction) {
            throw new Error("This operation is only allowed from the current transaction.");
        }
    }
}
exports.Transaction = Transaction;
class TransactionManager {
    constructor(model, errorCallback) {
        this.model = model;
        this.errorCallback = errorCallback;
        this.currentTransaction = null;
        this.detachedRequiredProperties = [];
        this.eventEmitter = new EventEmitter_1.EventEmitter();
    }
    commit() {
        if (!this.currentTransaction || !this.checkModel()) {
            this.currentTransaction = null;
            return;
        }
        this.eventEmitter.emit("Committed", undefined);
        this.currentTransaction = null;
    }
    rollback() {
        this.eventEmitter.emit("Rollback", undefined);
        this.currentTransaction = null;
    }
    beginTransaction() {
        if (this.currentTransaction) {
            throw new Error("Can't open a new transaction without closing the existing transaction first.");
        }
        this.currentTransaction = new Transaction("explicit", this);
        return this.currentTransaction;
    }
    onCommitted(callback) {
        this.eventEmitter.on("Committed", callback);
    }
    onRollback(callback) {
        this.eventEmitter.on("Rollback", callback);
    }
    deltaReceived(delta) {
        if (delta.deltaType === "DETACH_ELEMENT") {
            const unit = deltaUtils_1.asModelUnit(deltaUtils_1.getUnit(this.model, delta.unitId));
            const element = deltaUtils_1.getElement(this.model, unit, delta.elementId);
            const handle = element.container._childHandle(element);
            if (handle.containingProperty.isRequired && element.container instanceof elements_1.AbstractElement) {
                this.detachedRequiredProperties.push(handle.containingProperty);
            }
        }
        if (!this.currentTransaction) {
            this.beginImplicitTransaction();
        }
    }
    beginImplicitTransaction() {
        this.currentTransaction = new Transaction("implicit", this);
        setTimeout(() => this.commit(), 0);
    }
    checkModel() {
        if (this.model.detachedStructures.length > 0) {
            this.errorCallback(new Error("Some structures that were detached were not attached within the same transaction"));
            return false;
        }
        for (const property of this.detachedRequiredProperties) {
            if (!property.get()) {
                this.errorCallback(new Error(`Required part property '${property.name}' has null value`));
                return false;
            }
        }
        this.detachedRequiredProperties = [];
        return true;
    }
}
exports.TransactionManager = TransactionManager;
/**
 * Begin an explicit transaction for the given model.
 *
 * Rolling back the following actions are not possible:
 * - Changes made to a structural unit.
 * - Deleting a non-loaded unit.
 *
 * When rolling back a deleted element/unit, a new element/unit instance will be created with the same id. Be sure not to use the old - deleted - instance.
 */
function beginTransaction(model) {
    return model.deltaManager.beginTransaction();
}
exports.beginTransaction = beginTransaction;
function runInTransaction(model, action) {
    const transaction = model.deltaManager.beginTransaction();
    let result;
    try {
        result = action();
        // Check if the function's result is not a Promise (https://stackoverflow.com/a/38339199/918910)
        if (Promise.resolve(result) !== result) {
            transaction.commit();
            return result;
        }
    }
    catch (err) {
        transaction.rollback();
        throw err;
    }
    return asyncRunInTransaction(transaction, result);
}
exports.runInTransaction = runInTransaction;
function asyncRunInTransaction(transaction, resultPromise) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield resultPromise;
            transaction.commit();
            return result;
        }
        catch (err) {
            transaction.rollback();
            throw err;
        }
    });
}
//# sourceMappingURL=TransactionManager.js.map