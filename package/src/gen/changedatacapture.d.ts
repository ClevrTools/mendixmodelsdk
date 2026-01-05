import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
/**
 * @ignore
 */
export declare namespace changedatacapture {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ChangeDataCapture`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/event-streams/#change-data-capture relevant section in reference guide}
     *
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.5.0: introduced
     */
    interface IEntityChangeDataCaptureService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): EntityChangeDataCaptureService;
        load(callback: (element: EntityChangeDataCaptureService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EntityChangeDataCaptureService>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/event-streams/#change-data-capture relevant section in reference guide}
     *
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.5.0: introduced
     */
    class EntityChangeDataCaptureService extends projects.Document implements IEntityChangeDataCaptureService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get sources(): internal.IList<EntityChangeSource>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new EntityChangeDataCaptureService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): EntityChangeDataCaptureService;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/event-streams/#change-data-capture relevant section in reference guide}
     *
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.5.0: introduced
     */
    class EntityChangeSource extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntityChangeDataCaptureService(): EntityChangeDataCaptureService;
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EntityChangeSource instance in the SDK and on the server.
         * The new EntityChangeSource will be automatically stored in the 'sources' property
         * of the parent EntityChangeDataCaptureService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.5.0 and higher
         */
        static createIn(container: EntityChangeDataCaptureService): EntityChangeSource;
        /**
         * Creates and returns a new EntityChangeSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EntityChangeSource;
    }
}
import { domainmodels } from "./domainmodels";
import { IModel } from "./base-model";
