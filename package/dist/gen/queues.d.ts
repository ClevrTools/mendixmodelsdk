import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
/**
 * @ignore
 */
export declare namespace queues {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Queues`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.16.0: introduced
     */
    abstract class QueueConfig extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsQueue(): Queue;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.16.0: introduced
     */
    class BasicQueueConfig extends QueueConfig {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsQueue(): Queue;
        get parallelism(): number;
        set parallelism(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BasicQueueConfig instance in the SDK and on the server.
         * The new BasicQueueConfig will be automatically stored in the 'config' property
         * of the parent Queue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.16.0 and higher
         */
        static createIn(container: Queue): BasicQueueConfig;
        /**
         * Creates and returns a new BasicQueueConfig instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BasicQueueConfig;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.16.0: introduced
     */
    interface IQueue extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): Queue;
        load(callback: (element: Queue) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Queue>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.16.0: introduced
     */
    class Queue extends projects.Document implements IQueue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get config(): QueueConfig;
        set config(newValue: QueueConfig);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new Queue unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): Queue;
    }
}
import { IModel } from "./base-model";
