import { AbstractModel } from "../abstract-model";
import { Delta } from "./deltas";
export declare class DeltaProcessor {
    model: AbstractModel;
    constructor(model: AbstractModel);
    processDeltas(deltas: Delta[]): void;
    private processUpdatePropertyValueDelta;
    private processMutator;
    private processCreateElementTreeDelta;
    private processDeleteElementDelta;
    private processAttachElementDelta;
    private processDetachElementDelta;
    private processCreateUnitTreeDelta;
    private processDeleteUnitDelta;
    private getUnit;
}
