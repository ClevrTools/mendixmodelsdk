import { Delta, IDeltaManager } from "./deltas";
import { IAbstractModel } from "./AbstractModel";
export interface IDeltaChange {
    delta: Delta;
    reversedDelta: Delta;
}
export declare type Change = IDeltaChange[];
export declare class UndoManager {
    private readonly deltaManager;
    constructor(_model: IAbstractModel);
    getUndoState(modelUnitId: string): UndoState;
    withoutUndo<T>(performAction: () => T): T;
    private onNewDelta;
    private onChangeCompleted;
    private onChangeDiscarded;
    private onUnitLoaded;
}
export declare class UndoState {
    private deltaManager;
    constructor(deltaManager: IDeltaManager);
    readonly canUndo: boolean;
    readonly canRedo: boolean;
    undo(): void;
    redo(): void;
    clear(): void;
}
