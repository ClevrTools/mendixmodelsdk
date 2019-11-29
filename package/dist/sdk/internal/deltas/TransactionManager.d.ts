import { AbstractModel, IAbstractModel } from "../AbstractModel";
import { common } from "../../../common";
import { Delta } from "./deltas";
declare type TransactionType = "explicit" | "implicit";
export declare class Transaction {
    readonly transactionType: TransactionType;
    private transactionManager;
    constructor(transactionType: TransactionType, transactionManager: TransactionManager);
    commit(): void;
    rollback(): void;
    private checkTransaction;
}
export declare class TransactionManager {
    private model;
    private errorCallback;
    currentTransaction: Transaction | null;
    private detachedRequiredProperties;
    private eventEmitter;
    constructor(model: AbstractModel, errorCallback: common.IErrorCallback);
    commit(): void;
    rollback(): void;
    beginTransaction(): Transaction;
    onCommitted(callback: () => void): void;
    onRollback(callback: () => void): void;
    deltaReceived(delta: Delta): void;
    private beginImplicitTransaction;
    private checkModel;
}
/**
 * Begin an explicit transaction for the given model.
 *
 * Rolling back the following actions are not possible:
 * - Changes made to a structural unit.
 * - Deleting a non-loaded unit.
 *
 * When rolling back a deleted element/unit, a new element/unit instance will be created with the same id. Be sure not to use the old - deleted - instance.
 */
export declare function beginTransaction(model: IAbstractModel): Transaction;
/**
 * Run the specified action inside a transaction for the given model.
 * The transaction will be committed when the action is finished.
 * In case of an error the transaction will be rolled back.
 *
 * Rolling back the following actions are not possible:
 * - Changes made to a structural unit.
 * - Deleting a non-loaded unit.
 *
 * When rolling back a deleted element/unit, a new element/unit instance will be created with the same id. Be sure not to use the old - deleted - instance.
 */
export declare function runInTransaction<T>(model: IAbstractModel, action: () => T): T;
export declare function runInTransaction<T>(model: IAbstractModel, action: () => Promise<T>): Promise<T>;
export {};
