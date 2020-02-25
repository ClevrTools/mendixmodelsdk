import { IWorkingCopy } from "../transportInterfaces";
export interface IWorkingCopyDataEvent {
    type: "workingCopyData";
    data: IWorkingCopy;
}
export interface IBuildResultEvent {
    type: "buildResult";
    data: {
        eventId: number;
        problems: any[];
    };
}
export declare type IWorkingCopyEvent = IWorkingCopyDataEvent | IBuildResultEvent;
