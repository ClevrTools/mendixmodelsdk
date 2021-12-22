import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
/**
 * @ignore
 */
export declare namespace businessevents {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `BusinessEvents`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: introduced
     */
    interface IConsumedBusinessEventService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): ConsumedBusinessEventService;
        load(callback: (element: ConsumedBusinessEventService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConsumedBusinessEventService>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: introduced
     */
    class ConsumedBusinessEventService extends projects.Document implements IConsumedBusinessEventService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ConsumedBusinessEventService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ConsumedBusinessEventService;
    }
}
import { IModel } from "./base-model";
