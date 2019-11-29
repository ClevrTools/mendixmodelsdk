import { AbstractModel } from "../abstract-model";
import { ModelEventReceiver } from "./model-event-receiver";
import { DeltaProcessor, IDeltaManager } from "../deltas";
import { common } from "../../../common";
import { IModelEvent } from "./model-event";
export interface IModelEventManager {
    start(): void;
    stop(): void;
    loadUnitStarted(): void;
    loadUnitCompleted(eventId: number, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    onEventProcessed(callback: common.IVoidCallback): void;
}
export interface ILoadUnitResult {
    eventId: number;
    callback: common.IVoidCallback;
}
export declare class ModelEventManager implements IModelEventManager {
    private eventEmitter;
    private eventQueue;
    private deltaProcessor;
    private pendingUnits;
    private loadUnitResults;
    private currentEventId;
    private modelChanged;
    eventReceiver: ModelEventReceiver;
    constructor(model: AbstractModel, deltaManager: IDeltaManager, deltaProcessor: DeltaProcessor, workingCopyId: string, currentEventId: number);
    start(): void;
    stop(): void;
    loadUnitStarted(): void;
    loadUnitCompleted(eventId: number, callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
    onEventProcessed(callback: common.IVoidCallback): void;
    scheduleEvent(modelEvent: IModelEvent): void;
    private onNewDelta;
    private processEventsQueue;
    private processLoadedUnits;
}
