import * as EventSource from "eventsource";
import { IModelServerClient } from "../IModelServerClient";
import { IModelEvent } from "./IModelEvent";
import { common } from "../../../common";
export declare class ModelEventReceiver {
    private workingCopyId;
    private client;
    private errorHandler;
    private eventEmitter;
    eventSource: EventSource | null;
    constructor(workingCopyId: string, client: IModelServerClient, errorHandler: {
        handleError: (message: string, errorCallback: common.IErrorCallback | undefined) => void;
    });
    onNewModelEvent(callback: (modelEvent: IModelEvent) => void): void;
    start(lastEventId: number): void;
    stop(): void;
    readonly isRunning: boolean;
}
