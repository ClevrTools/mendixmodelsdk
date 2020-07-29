import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { domainmodels } from "./domainmodels";
export declare namespace kafka {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Kafka`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.11.0: introduced
     */
    interface IConsumedKafkaService extends domainmodels.IRemoteEntitySourceDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): ConsumedKafkaService;
        load(callback: (element: ConsumedKafkaService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConsumedKafkaService>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.11.0: introduced
     */
    class ConsumedKafkaService extends domainmodels.RemoteEntitySourceDocument implements IConsumedKafkaService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsFolderBase(): projects.FolderBase;
        get metadataUrl(): string;
        set metadataUrl(newValue: string);
        get metadataReferences(): internal.IList<rest.MetadataReference>;
        get serviceName(): string;
        set serviceName(newValue: string);
        get version(): string;
        set version(newValue: string);
        get serviceId(): string;
        set serviceId(newValue: string);
        /**
         * In version 8.12.0: introduced
         */
        get serviceFeed(): string;
        set serviceFeed(newValue: string);
        get metadata(): string;
        set metadata(newValue: string);
        get brokerUrl(): constants.IConstant | null;
        set brokerUrl(newValue: constants.IConstant | null);
        get brokerUrlQualifiedName(): string | null;
        get brokerUsername(): constants.IConstant | null;
        set brokerUsername(newValue: constants.IConstant | null);
        get brokerUsernameQualifiedName(): string | null;
        get brokerPassword(): constants.IConstant | null;
        set brokerPassword(newValue: constants.IConstant | null);
        get brokerPasswordQualifiedName(): string | null;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.12.0: deleted
         */
        get entities(): internal.IList<KafkaEntity>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ConsumedKafkaService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ConsumedKafkaService;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.12.0: deleted
     */
    class KafkaAttribute extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsKafkaEntity(): KafkaEntity;
        get name(): string;
        set name(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new KafkaAttribute instance in the SDK and on the server.
         * The new KafkaAttribute will be automatically stored in the 'attributes' property
         * of the parent KafkaEntity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.11.0
         */
        static createIn(container: KafkaEntity): KafkaAttribute;
        /**
         * Creates and returns a new KafkaAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): KafkaAttribute;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.12.0: deleted
     */
    interface IKafkaEntity extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsConsumedKafkaService: IConsumedKafkaService;
        readonly name: string;
        asLoaded(): KafkaEntity;
        load(callback: (element: KafkaEntity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<KafkaEntity>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.12.0: deleted
     */
    class KafkaEntity extends internal.Element implements IKafkaEntity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsConsumedKafkaService(): ConsumedKafkaService;
        get name(): string;
        set name(newValue: string);
        get entitySet(): string;
        set entitySet(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get navigationProperties(): internal.IList<KafkaNavigationProperty>;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get attributes(): internal.IList<KafkaAttribute>;
        get topicName(): constants.IConstant | null;
        set topicName(newValue: constants.IConstant | null);
        get topicNameQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new KafkaEntity instance in the SDK and on the server.
         * The new KafkaEntity will be automatically stored in the 'entities' property
         * of the parent ConsumedKafkaService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 to 8.11.0
         */
        static createIn(container: ConsumedKafkaService): KafkaEntity;
        /**
         * Creates and returns a new KafkaEntity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): KafkaEntity;
        get qualifiedName(): string | null;
    }
    /**
     * In version 8.11.0: introduced
     */
    interface IKafkaMappedValue extends domainmodels.IMappedValue {
        readonly model: IModel;
        readonly containerAsAttribute: domainmodels.IAttribute;
        asLoaded(): KafkaMappedValue;
        load(callback: (element: KafkaMappedValue) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<KafkaMappedValue>;
    }
    /**
     * In version 8.11.0: introduced
     */
    class KafkaMappedValue extends domainmodels.MappedValue implements IKafkaMappedValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsAttribute(): domainmodels.Attribute;
        get remoteName(): string;
        set remoteName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new KafkaMappedValue instance in the SDK and on the server.
         * The new KafkaMappedValue will be automatically stored in the 'value' property
         * of the parent domainmodels.Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 and higher
         */
        static createIn(container: domainmodels.Attribute): KafkaMappedValue;
        /**
         * Creates and returns a new KafkaMappedValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): KafkaMappedValue;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.12.0: deleted
     */
    class KafkaNavigationProperty extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsKafkaEntity(): KafkaEntity;
        get name(): string;
        set name(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new KafkaNavigationProperty instance in the SDK and on the server.
         * The new KafkaNavigationProperty will be automatically stored in the 'navigationProperties' property
         * of the parent KafkaEntity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 8.11.0
         */
        static createIn(container: KafkaEntity): KafkaNavigationProperty;
        /**
         * Creates and returns a new KafkaNavigationProperty instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): KafkaNavigationProperty;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.11.0: introduced
     */
    interface IKafkaRemoteEntitySource extends domainmodels.IMaterializedRemoteEntitySource {
        readonly model: IModel;
        readonly containerAsEntity: domainmodels.IEntity;
        asLoaded(): KafkaRemoteEntitySource;
        load(callback: (element: KafkaRemoteEntitySource) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<KafkaRemoteEntitySource>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.11.0: introduced
     */
    class KafkaRemoteEntitySource extends domainmodels.MaterializedRemoteEntitySource implements IKafkaRemoteEntitySource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsEntity(): domainmodels.Entity;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get sourceDocument(): IConsumedKafkaService | null;
        set sourceDocument(newValue: IConsumedKafkaService | null);
        get sourceDocumentQualifiedName(): string | null;
        get remoteName(): string;
        set remoteName(newValue: string);
        /**
         * In version 8.12.0: introduced
         */
        get topicName(): string;
        set topicName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new KafkaRemoteEntitySource instance in the SDK and on the server.
         * The new KafkaRemoteEntitySource will be automatically stored in the 'source' property
         * of the parent domainmodels.Entity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 and higher
         */
        static createIn(container: domainmodels.Entity): KafkaRemoteEntitySource;
        /**
         * Creates and returns a new KafkaRemoteEntitySource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): KafkaRemoteEntitySource;
    }
}
import { constants } from "./constants";
import { projects } from "./projects";
import { rest } from "./rest";
import { IModel } from "./base-model";
