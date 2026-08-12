import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
/**
 * @ignore
 */
export declare namespace changedatacapture {
    class PropertyType extends internal.AbstractEnum {
        static ArrayOfInt64: PropertyType;
        static Binary: PropertyType;
        static Boolean: PropertyType;
        static DateTime: PropertyType;
        static Decimal: PropertyType;
        static Enumeration: PropertyType;
        static Int32: PropertyType;
        static Int64: PropertyType;
        static String: PropertyType;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ChangeDataCapture`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.9.0: introduced
     */
    abstract class EntityChangeProperty extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntityChangeSource(): EntityChangeSource;
        get exposedName(): string;
        set exposedName(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 11.12.0: introduced
         */
        get versionedProperty(): VersionedProperty | null;
        set versionedProperty(newValue: VersionedProperty | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.9.0: introduced
     */
    class AssociationProperty extends EntityChangeProperty {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntityChangeSource(): EntityChangeSource;
        get association(): domainmodels.IAssociationBase;
        set association(newValue: domainmodels.IAssociationBase);
        get associationQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AssociationProperty instance in the SDK and on the server.
         * The new AssociationProperty will be automatically stored in the 'properties' property
         * of the parent EntityChangeSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.9.0 and higher
         */
        static createIn(container: EntityChangeSource): AssociationProperty;
        /**
         * Creates and returns a new AssociationProperty instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AssociationProperty;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.9.0: introduced
     */
    class AttributeProperty extends EntityChangeProperty {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntityChangeSource(): EntityChangeSource;
        get attribute(): domainmodels.IAttribute;
        set attribute(newValue: domainmodels.IAttribute);
        get attributeQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AttributeProperty instance in the SDK and on the server.
         * The new AttributeProperty will be automatically stored in the 'properties' property
         * of the parent EntityChangeSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.9.0 and higher
         */
        static createIn(container: EntityChangeSource): AttributeProperty;
        /**
         * Creates and returns a new AttributeProperty instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AttributeProperty;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/change-data-capture relevant section in reference guide}
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
     * See: {@link https://docs.mendix.com/refguide/change-data-capture relevant section in reference guide}
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
        /**
         * In version 11.8.0: introduced
         */
        get serviceName(): string;
        set serviceName(newValue: string);
        /**
         * In version 11.12.0: introduced
         */
        get appName(): string;
        set appName(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 11.10.0: introduced
         */
        get baseline(): VersionedEntityChangeDataCaptureService | null;
        set baseline(newValue: VersionedEntityChangeDataCaptureService | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new EntityChangeDataCaptureService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): EntityChangeDataCaptureService;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/change-data-capture relevant section in reference guide}
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
        /**
         * In version 11.9.0: introduced
         */
        get exposedName(): string;
        set exposedName(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 11.9.0: introduced
         */
        get properties(): internal.IList<EntityChangeProperty>;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 11.12.0: introduced
         */
        get versionedSource(): VersionedEntityChangeSource | null;
        set versionedSource(newValue: VersionedEntityChangeSource | null);
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
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.10.0: introduced
     */
    class Version extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsVersionedEntityChangeDataCaptureService(): VersionedEntityChangeDataCaptureService;
        get containerAsVersionedEntityChangeSource(): VersionedEntityChangeSource;
        get major(): number;
        set major(newValue: number);
        get minor(): number;
        set minor(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Version instance in the SDK and on the server.
         * The new Version will be automatically stored in the 'version' property
         * of the parent VersionedEntityChangeDataCaptureService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.10.0 and higher
         */
        static createInVersionedEntityChangeDataCaptureServiceUnderVersion(container: VersionedEntityChangeDataCaptureService): Version;
        /**
         * Creates and returns a new Version instance in the SDK and on the server.
         * The new Version will be automatically stored in the 'version' property
         * of the parent VersionedEntityChangeSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.10.0 and higher
         */
        static createInVersionedEntityChangeSourceUnderVersion(container: VersionedEntityChangeSource): Version;
        /**
         * Creates and returns a new Version instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Version;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.10.0: introduced
     */
    class VersionedEntityChangeDataCaptureService extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntityChangeDataCaptureService(): EntityChangeDataCaptureService;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get version(): Version;
        set version(newValue: Version);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get sources(): internal.IList<VersionedEntityChangeSource>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new VersionedEntityChangeDataCaptureService instance in the SDK and on the server.
         * The new VersionedEntityChangeDataCaptureService will be automatically stored in the 'baseline' property
         * of the parent EntityChangeDataCaptureService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.10.0 and higher
         */
        static createIn(container: EntityChangeDataCaptureService): VersionedEntityChangeDataCaptureService;
        /**
         * Creates and returns a new VersionedEntityChangeDataCaptureService instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): VersionedEntityChangeDataCaptureService;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.10.0: introduced
     */
    class VersionedEntityChangeSource extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsVersionedEntityChangeDataCaptureService(): VersionedEntityChangeDataCaptureService;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get version(): Version;
        set version(newValue: Version);
        get entityGuid(): string;
        set entityGuid(newValue: string);
        get exposedName(): string;
        set exposedName(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get properties(): internal.IList<VersionedProperty>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new VersionedEntityChangeSource instance in the SDK and on the server.
         * The new VersionedEntityChangeSource will be automatically stored in the 'sources' property
         * of the parent VersionedEntityChangeDataCaptureService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.10.0 and higher
         */
        static createIn(container: VersionedEntityChangeDataCaptureService): VersionedEntityChangeSource;
        /**
         * Creates and returns a new VersionedEntityChangeSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): VersionedEntityChangeSource;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.10.0: introduced
     */
    class VersionedProperty extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsVersionedEntityChangeSource(): VersionedEntityChangeSource;
        get propertyGuid(): string;
        set propertyGuid(newValue: string);
        get exposedName(): string;
        set exposedName(newValue: string);
        get type(): PropertyType;
        set type(newValue: PropertyType);
        /**
         * In version 11.12.0: introduced
         */
        get associatedEntityGuid(): string;
        set associatedEntityGuid(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new VersionedProperty instance in the SDK and on the server.
         * The new VersionedProperty will be automatically stored in the 'properties' property
         * of the parent VersionedEntityChangeSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.10.0 and higher
         */
        static createIn(container: VersionedEntityChangeSource): VersionedProperty;
        /**
         * Creates and returns a new VersionedProperty instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): VersionedProperty;
    }
}
import { domainmodels } from "./domainmodels";
import { IModel } from "./base-model";
