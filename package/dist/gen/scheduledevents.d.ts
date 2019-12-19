import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace scheduledevents {
    class IntervalType extends internal.AbstractEnum {
        static Second: IntervalType;
        static Minute: IntervalType;
        static Hour: IntervalType;
        static Day: IntervalType;
        static Week: IntervalType;
        static Month: IntervalType;
        static Year: IntervalType;
        protected qualifiedTsTypeName: string;
    }
    class TimeZoneEnum extends internal.AbstractEnum {
        static UTC: TimeZoneEnum;
        static Server: TimeZoneEnum;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ScheduledEvents`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide7/scheduled-events relevant section in reference guide}
     */
    interface IScheduledEvent extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): ScheduledEvent;
        load(callback: (element: ScheduledEvent) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ScheduledEvent>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/scheduled-events relevant section in reference guide}
     */
    class ScheduledEvent extends projects.Document implements IScheduledEvent {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsFolderBase(): projects.FolderBase;
        get startDateTime(): string;
        set startDateTime(newValue: string);
        get timeZone(): TimeZoneEnum;
        set timeZone(newValue: TimeZoneEnum);
        get interval(): number;
        set interval(newValue: number);
        get intervalType(): IntervalType;
        set intervalType(newValue: IntervalType);
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        get enabled(): boolean;
        set enabled(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ScheduledEvent unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ScheduledEvent;
    }
}
import { microflows } from "./microflows";
import { IModel } from "./base-model";
