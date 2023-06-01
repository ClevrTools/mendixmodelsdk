import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { domainmodels } from "./domainmodels";
import { projects } from "./projects";
import { webservices } from "./webservices";
export declare namespace rest {
    class AssociationNavigability extends internal.AbstractEnum {
        static BothDirections: AssociationNavigability;
        static ParentToChild: AssociationNavigability;
        static ChildToParent: AssociationNavigability;
        protected qualifiedTsTypeName: string;
    }
    class ODataVersion extends internal.AbstractEnum {
        static OData2: ODataVersion;
        static OData3: ODataVersion;
        static OData4: ODataVersion;
        protected qualifiedTsTypeName: string;
    }
    class PublishedODataVersion extends internal.AbstractEnum {
        static OData4: PublishedODataVersion;
        static OData3: PublishedODataVersion;
        protected qualifiedTsTypeName: string;
    }
    class RestAuthenticationType extends internal.AbstractEnum {
        static Basic: RestAuthenticationType;
        static None: RestAuthenticationType;
        static Session: RestAuthenticationType;
        static Microflow: RestAuthenticationType;
        static Guest: RestAuthenticationType;
        protected qualifiedTsTypeName: string;
    }
    class RestOperationParameterType extends internal.AbstractEnum {
        static Path: RestOperationParameterType;
        static Query: RestOperationParameterType;
        static Body: RestOperationParameterType;
        static Header: RestOperationParameterType;
        static Form: RestOperationParameterType;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Rest`.
     */
    /**
     * In version 9.11.0: introduced
     */
    abstract class ChangeMode extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestResource(): PublishedRestResource;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.11.0: introduced
     */
    class CallMicroflowToChange extends ChangeMode {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestResource(): PublishedRestResource;
        get microflow(): microflows.IMicroflow;
        set microflow(newValue: microflows.IMicroflow);
        get microflowQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * The new CallMicroflowToChange will be automatically stored in the 'deleteMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createInPublishedRestResourceUnderDeleteMode(container: PublishedRestResource): CallMicroflowToChange;
        /**
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * The new CallMicroflowToChange will be automatically stored in the 'insertMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createInPublishedRestResourceUnderInsertMode(container: PublishedRestResource): CallMicroflowToChange;
        /**
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * The new CallMicroflowToChange will be automatically stored in the 'updateMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createInPublishedRestResourceUnderUpdateMode(container: PublishedRestResource): CallMicroflowToChange;
        /**
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CallMicroflowToChange;
    }
    /**
     * In version 9.14.0: introduced
     */
    abstract class ReadMode extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestResource(): PublishedRestResource;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.14.0: introduced
     */
    class CallMicroflowToRead extends ReadMode {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestResource(): PublishedRestResource;
        /**
         * In version 9.19.0: added optional
         */
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CallMicroflowToRead instance in the SDK and on the server.
         * The new CallMicroflowToRead will be automatically stored in the 'readMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createIn(container: PublishedRestResource): CallMicroflowToRead;
        /**
         * Creates and returns a new CallMicroflowToRead instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CallMicroflowToRead;
    }
    /**
     * In version 9.11.0: introduced
     */
    class ChangeNotSupported extends ChangeMode {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestResource(): PublishedRestResource;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * The new ChangeNotSupported will be automatically stored in the 'deleteMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createInPublishedRestResourceUnderDeleteMode(container: PublishedRestResource): ChangeNotSupported;
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * The new ChangeNotSupported will be automatically stored in the 'insertMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createInPublishedRestResourceUnderInsertMode(container: PublishedRestResource): ChangeNotSupported;
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * The new ChangeNotSupported will be automatically stored in the 'updateMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createInPublishedRestResourceUnderUpdateMode(container: PublishedRestResource): ChangeNotSupported;
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ChangeNotSupported;
    }
    /**
     * In version 9.11.0: introduced
     */
    class ChangeSource extends ChangeMode {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestResource(): PublishedRestResource;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * The new ChangeSource will be automatically stored in the 'deleteMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createInPublishedRestResourceUnderDeleteMode(container: PublishedRestResource): ChangeSource;
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * The new ChangeSource will be automatically stored in the 'insertMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createInPublishedRestResourceUnderInsertMode(container: PublishedRestResource): ChangeSource;
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * The new ChangeSource will be automatically stored in the 'updateMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createInPublishedRestResourceUnderUpdateMode(container: PublishedRestResource): ChangeSource;
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ChangeSource;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-odata-service-properties relevant section in reference guide}
     *
     * In version 10.0.0: removed experimental
     * In version 7.18.0: introduced
     */
    interface IConsumedODataService extends domainmodels.IRemoteEntitySourceDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * In version 8.14.0: introduced
         */
        readonly lastUpdated: string;
        asLoaded(): ConsumedODataService;
        load(callback: (element: ConsumedODataService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConsumedODataService>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-odata-service-properties relevant section in reference guide}
     *
     * In version 10.0.0: removed experimental
     * In version 7.18.0: introduced
     */
    class ConsumedODataService extends domainmodels.RemoteEntitySourceDocument implements IConsumedODataService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * In version 8.6.0: introduced
         */
        get metadataReferences(): internal.IList<MetadataReference>;
        get proxyType(): microflows.RequestProxyType;
        set proxyType(newValue: microflows.RequestProxyType);
        get proxyHost(): constants.IConstant | null;
        set proxyHost(newValue: constants.IConstant | null);
        get proxyHostQualifiedName(): string | null;
        get proxyPort(): constants.IConstant | null;
        set proxyPort(newValue: constants.IConstant | null);
        get proxyPortQualifiedName(): string | null;
        get proxyUsername(): constants.IConstant | null;
        set proxyUsername(newValue: constants.IConstant | null);
        get proxyUsernameQualifiedName(): string | null;
        get proxyPassword(): constants.IConstant | null;
        set proxyPassword(newValue: constants.IConstant | null);
        get proxyPasswordQualifiedName(): string | null;
        /**
         * In version 8.0.0: introduced
         */
        get httpConfiguration(): microflows.HttpConfiguration;
        set httpConfiguration(newValue: microflows.HttpConfiguration);
        /**
         * In version 8.4.0: introduced
         */
        get headersMicroflow(): microflows.IMicroflow | null;
        set headersMicroflow(newValue: microflows.IMicroflow | null);
        get headersMicroflowQualifiedName(): string | null;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 8.5.0: introduced
         */
        get timeoutModel(): expressions.Expression;
        set timeoutModel(newValue: expressions.Expression);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 8.5.0: introduced
         */
        get timeoutExpression(): string;
        set timeoutExpression(newValue: string);
        /**
         * In version 8.6.0: introduced
         */
        get oDataVersion(): ODataVersion;
        set oDataVersion(newValue: ODataVersion);
        /**
         * In version 8.14.0: deleted
         * In version 8.13.0: introduced
         */
        get versionApiMockResults(): string;
        set versionApiMockResults(newValue: string);
        /**
         * In version 8.14.0: deleted
         * In version 8.0.0: introduced
         */
        get serviceId(): string;
        set serviceId(newValue: string);
        /**
         * In version 8.14.0: introduced
         */
        get lastUpdated(): string;
        set lastUpdated(newValue: string);
        /**
         * In version 9.6.0: introduced
         */
        get useQuerySegment(): boolean;
        set useQuerySegment(newValue: boolean);
        /**
         * In version 9.6.0: introduced
         */
        get errorHandlingMicroflow(): microflows.IMicroflow | null;
        set errorHandlingMicroflow(newValue: microflows.IMicroflow | null);
        get errorHandlingMicroflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ConsumedODataService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ConsumedODataService;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-rest-service relevant section in reference guide}
     *
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: introduced
     */
    interface IConsumedRestService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        readonly paths: internal.IList<IRestPath>;
        asLoaded(): ConsumedRestService;
        load(callback: (element: ConsumedRestService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConsumedRestService>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-rest-service relevant section in reference guide}
     *
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: introduced
     */
    class ConsumedRestService extends projects.Document implements IConsumedRestService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get baseUrl(): UriTemplate;
        set baseUrl(newValue: UriTemplate);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get paths(): internal.IList<RestPath>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ConsumedRestService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ConsumedRestService;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/cors-settings relevant section in reference guide}
     *
     * In version 7.18.0: introduced
     */
    class CorsConfiguration extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestService(): PublishedRestService;
        get allowedOrigins(): constants.IConstant | null;
        set allowedOrigins(newValue: constants.IConstant | null);
        get allowedOriginsQualifiedName(): string | null;
        get allowAuthentication(): boolean;
        set allowAuthentication(newValue: boolean);
        get maxAge(): constants.IConstant | null;
        set maxAge(newValue: constants.IConstant | null);
        get maxAgeQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CorsConfiguration instance in the SDK and on the server.
         * The new CorsConfiguration will be automatically stored in the 'corsConfiguration' property
         * of the parent PublishedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.18.0 and higher
         */
        static createIn(container: PublishedRestService): CorsConfiguration;
        /**
         * Creates and returns a new CorsConfiguration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CorsConfiguration;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-rest-service relevant section in reference guide}
     *
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: introduced
     */
    interface IOperationParameter extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsRestOperation: IRestOperation;
        readonly name: string;
        asLoaded(): OperationParameter;
        load(callback: (element: OperationParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<OperationParameter>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-rest-service relevant section in reference guide}
     *
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: introduced
     */
    abstract class OperationParameter extends internal.Element<IModel> implements IOperationParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestOperation(): RestOperation;
        get name(): string;
        set name(newValue: string);
        get dataType(): datatypes.DataType;
        set dataType(newValue: datatypes.DataType);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get testValue(): Value;
        set testValue(newValue: Value);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        get qualifiedName(): string | null;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: introduced
     */
    interface IHeaderParameter extends IOperationParameter {
        readonly model: IModel;
        readonly containerAsRestOperation: IRestOperation;
        asLoaded(): HeaderParameter;
        load(callback: (element: HeaderParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<HeaderParameter>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: introduced
     */
    class HeaderParameter extends OperationParameter implements IHeaderParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestOperation(): RestOperation;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new HeaderParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): HeaderParameter;
    }
    /**
     * In version 8.6.0: introduced
     */
    class MetadataReference extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConsumedKafkaService(): kafka.ConsumedKafkaService;
        get containerAsConsumedODataService(): ConsumedODataService;
        get containerAsMetadataReference(): MetadataReference;
        get uri(): string;
        set uri(newValue: string);
        get metadata(): string;
        set metadata(newValue: string);
        /**
         * In version 8.8.0: introduced
         */
        get metadataReferences(): internal.IList<MetadataReference>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * The new MetadataReference will be automatically stored in the 'metadataReferences' property
         * of the parent ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.6.0 to 8.7.0
         */
        static createIn(container: ConsumedODataService): MetadataReference;
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * The new MetadataReference will be automatically stored in the 'metadataReferences' property
         * of the parent kafka.ConsumedKafkaService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 and higher
         */
        static createInConsumedKafkaServiceUnderMetadataReferences(container: kafka.ConsumedKafkaService): MetadataReference;
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * The new MetadataReference will be automatically stored in the 'metadataReferences' property
         * of the parent ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.6.0 and higher
         */
        static createInConsumedODataServiceUnderMetadataReferences(container: ConsumedODataService): MetadataReference;
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * The new MetadataReference will be automatically stored in the 'metadataReferences' property
         * of the parent MetadataReference element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.8.0 and higher
         */
        static createInMetadataReferenceUnderMetadataReferences(container: MetadataReference): MetadataReference;
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MetadataReference;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.9.0: introduced
     */
    interface IODataKey extends internal.IElement {
        readonly model: IModel;
        readonly containerAsODataRemoteEntitySource: IODataRemoteEntitySource;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        readonly parts: internal.IList<IODataKeyPart>;
        asLoaded(): ODataKey;
        load(callback: (element: ODataKey) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ODataKey>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.9.0: introduced
     */
    class ODataKey extends internal.Element<IModel> implements IODataKey {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsODataRemoteEntitySource(): ODataRemoteEntitySource;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get parts(): internal.IList<ODataKeyPart>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataKey instance in the SDK and on the server.
         * The new ODataKey will be automatically stored in the 'key' property
         * of the parent ODataRemoteEntitySource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 and higher
         */
        static createIn(container: ODataRemoteEntitySource): ODataKey;
        /**
         * Creates and returns a new ODataKey instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataKey;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.9.0: introduced
     */
    interface IODataKeyPart extends internal.IElement {
        readonly model: IModel;
        readonly containerAsODataKey: IODataKey;
        /**
         * This property is required and cannot be set to null.
         */
        readonly type: domainmodels.IAttributeType;
        asLoaded(): ODataKeyPart;
        load(callback: (element: ODataKeyPart) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ODataKeyPart>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.9.0: introduced
     */
    class ODataKeyPart extends internal.Element<IModel> implements IODataKeyPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsODataKey(): ODataKey;
        get name(): string;
        set name(newValue: string);
        get entityKeyPartName(): string;
        set entityKeyPartName(newValue: string);
        get type(): domainmodels.AttributeType;
        set type(newValue: domainmodels.AttributeType);
        /**
         * In version 9.9.0: introduced
         */
        get remoteType(): string;
        set remoteType(newValue: string);
        /**
         * In version 9.16.0: introduced
         */
        get filterable(): boolean;
        set filterable(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataKeyPart instance in the SDK and on the server.
         * The new ODataKeyPart will be automatically stored in the 'parts' property
         * of the parent ODataKey element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createIn(container: ODataKey): ODataKeyPart;
        /**
         * Creates and returns a new ODataKeyPart instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataKeyPart;
    }
    /**
     * In version 8.10.0: introduced
     */
    interface IODataMappedValue extends domainmodels.IMappedValue {
        readonly model: IModel;
        readonly containerAsAttribute: domainmodels.IAttribute;
        /**
         * In version 8.16.0: introduced
         */
        readonly filterable: boolean;
        /**
         * In version 8.16.0: introduced
         */
        readonly sortable: boolean;
        /**
         * In version 9.11.0: introduced
         */
        readonly representsStream: boolean;
        asLoaded(): ODataMappedValue;
        load(callback: (element: ODataMappedValue) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ODataMappedValue>;
    }
    /**
     * In version 8.10.0: introduced
     */
    class ODataMappedValue extends domainmodels.MappedValue implements IODataMappedValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAttribute(): domainmodels.Attribute;
        get remoteName(): string;
        set remoteName(newValue: string);
        /**
         * In version 8.15.0: introduced
         */
        get remoteType(): string;
        set remoteType(newValue: string);
        /**
         * In version 8.16.0: introduced
         */
        get filterable(): boolean;
        set filterable(newValue: boolean);
        /**
         * In version 8.16.0: introduced
         */
        get sortable(): boolean;
        set sortable(newValue: boolean);
        /**
         * In version 9.11.0: introduced
         */
        get representsStream(): boolean;
        set representsStream(newValue: boolean);
        /**
         * In version 9.6.0: introduced
         */
        get updatable(): boolean;
        set updatable(newValue: boolean);
        /**
         * In version 9.11.0: introduced
         */
        get creatable(): boolean;
        set creatable(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataMappedValue instance in the SDK and on the server.
         * The new ODataMappedValue will be automatically stored in the 'value' property
         * of the parent domainmodels.Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container: domainmodels.Attribute): ODataMappedValue;
        /**
         * Creates and returns a new ODataMappedValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataMappedValue;
    }
    /**
     * In version 8.10.0: introduced
     */
    interface IODataRemoteAssociationSource extends domainmodels.IRemoteAssociationSource {
        readonly model: IModel;
        readonly containerAsAssociationBase: domainmodels.IAssociationBase;
        asLoaded(): ODataRemoteAssociationSource;
        load(callback: (element: ODataRemoteAssociationSource) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ODataRemoteAssociationSource>;
    }
    /**
     * In version 8.10.0: introduced
     */
    class ODataRemoteAssociationSource extends domainmodels.RemoteAssociationSource implements IODataRemoteAssociationSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAssociationBase(): domainmodels.AssociationBase;
        get remoteParentNavigationProperty(): string;
        set remoteParentNavigationProperty(newValue: string);
        get remoteChildNavigationProperty(): string;
        set remoteChildNavigationProperty(newValue: string);
        /**
         * In version 9.14.0: deleted
         * In version 8.16.0: introduced
         */
        get navigability(): AssociationNavigability;
        set navigability(newValue: AssociationNavigability);
        /**
         * In version 9.14.0: introduced
         */
        get navigability2(): domainmodels.Navigability;
        set navigability2(newValue: domainmodels.Navigability);
        /**
         * In version 9.6.0: introduced
         */
        get updatableFromChild(): boolean;
        set updatableFromChild(newValue: boolean);
        /**
         * In version 9.6.0: introduced
         */
        get updatableFromParent(): boolean;
        set updatableFromParent(newValue: boolean);
        /**
         * In version 9.11.0: introduced
         */
        get creatableFromChild(): boolean;
        set creatableFromChild(newValue: boolean);
        /**
         * In version 9.11.0: introduced
         */
        get creatableFromParent(): boolean;
        set creatableFromParent(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataRemoteAssociationSource instance in the SDK and on the server.
         * The new ODataRemoteAssociationSource will be automatically stored in the 'source' property
         * of the parent domainmodels.AssociationBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container: domainmodels.AssociationBase): ODataRemoteAssociationSource;
        /**
         * Creates and returns a new ODataRemoteAssociationSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataRemoteAssociationSource;
    }
    /**
     * In version 8.10.0: introduced
     */
    interface IODataRemoteEntitySource extends domainmodels.IQueryBasedRemoteEntitySource {
        readonly model: IModel;
        readonly containerAsEntity: domainmodels.IEntity;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 8.11.0: introduced
         */
        readonly key: IODataKey | null;
        /**
         * In version 8.16.0: introduced
         */
        readonly countable: boolean;
        asLoaded(): ODataRemoteEntitySource;
        load(callback: (element: ODataRemoteEntitySource) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ODataRemoteEntitySource>;
    }
    /**
     * In version 8.10.0: introduced
     */
    class ODataRemoteEntitySource extends domainmodels.QueryBasedRemoteEntitySource implements IODataRemoteEntitySource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntity(): domainmodels.Entity;
        get sourceDocument(): IConsumedODataService | null;
        set sourceDocument(newValue: IConsumedODataService | null);
        get sourceDocumentQualifiedName(): string | null;
        /**
         * In version 9.5.0: deleted
         */
        get remoteName(): string;
        set remoteName(newValue: string);
        /**
         * In version 9.5.0: introduced
         */
        get entityTypeName(): string;
        set entityTypeName(newValue: string);
        /**
         * In version 9.5.0: deleted
         * In version 8.11.0: introduced
         */
        get entitySet(): string;
        set entitySet(newValue: string);
        /**
         * In version 9.5.0: introduced
         */
        get entitySetName(): string;
        set entitySetName(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 8.11.0: introduced
         */
        get key(): ODataKey | null;
        set key(newValue: ODataKey | null);
        /**
         * In version 8.16.0: introduced
         */
        get countable(): boolean;
        set countable(newValue: boolean);
        /**
         * In version 9.11.0: introduced
         */
        get creatable(): boolean;
        set creatable(newValue: boolean);
        /**
         * In version 9.11.0: introduced
         */
        get deletable(): boolean;
        set deletable(newValue: boolean);
        /**
         * In version 9.21.0: introduced
         */
        get topSupported(): boolean;
        set topSupported(newValue: boolean);
        /**
         * In version 9.21.0: introduced
         */
        get skipSupported(): boolean;
        set skipSupported(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataRemoteEntitySource instance in the SDK and on the server.
         * The new ODataRemoteEntitySource will be automatically stored in the 'source' property
         * of the parent domainmodels.Entity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container: domainmodels.Entity): ODataRemoteEntitySource;
        /**
         * Creates and returns a new ODataRemoteEntitySource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataRemoteEntitySource;
    }
    /**
     * In version 9.14.0: introduced
     */
    class PublishedODataContract extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get serviceFeed(): ServiceFeed;
        set serviceFeed(newValue: ServiceFeed);
        get metadata(): string;
        set metadata(newValue: string);
        /**
         * In version 9.17.0: introduced
         */
        get openApi(): string;
        set openApi(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedODataContract instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedODataContract;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-enumeration relevant section in reference guide}
     *
     * In version 9.21.0: introduced
     */
    class PublishedODataEnumeration extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedODataService(): PublishedODataService;
        get exposedName(): string;
        set exposedName(newValue: string);
        get enumeration(): enumerations.IEnumeration;
        set enumeration(newValue: enumerations.IEnumeration);
        get enumerationQualifiedName(): string;
        get values(): internal.IList<PublishedODataEnumerationValue>;
        get summary(): string;
        set summary(newValue: string);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedODataEnumeration instance in the SDK and on the server.
         * The new PublishedODataEnumeration will be automatically stored in the 'enumerations' property
         * of the parent PublishedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.21.0 and higher
         */
        static createIn(container: PublishedODataService): PublishedODataEnumeration;
        /**
         * Creates and returns a new PublishedODataEnumeration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedODataEnumeration;
    }
    /**
     * In version 9.21.0: introduced
     */
    class PublishedODataEnumerationValue extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedODataEnumeration(): PublishedODataEnumeration;
        get exposedName(): string;
        set exposedName(newValue: string);
        get enumerationValue(): enumerations.IEnumerationValue;
        set enumerationValue(newValue: enumerations.IEnumerationValue);
        get enumerationValueQualifiedName(): string;
        get summary(): string;
        set summary(newValue: string);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedODataEnumerationValue instance in the SDK and on the server.
         * The new PublishedODataEnumerationValue will be automatically stored in the 'values' property
         * of the parent PublishedODataEnumeration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.21.0 and higher
         */
        static createIn(container: PublishedODataEnumeration): PublishedODataEnumerationValue;
        /**
         * Creates and returns a new PublishedODataEnumerationValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedODataEnumerationValue;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-microflow relevant section in reference guide}
     *
     * In version 9.19.0: introduced
     */
    class PublishedODataMicroflow extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedODataService(): PublishedODataService;
        get exposedName(): string;
        set exposedName(newValue: string);
        get microflow(): microflows.IMicroflow;
        set microflow(newValue: microflows.IMicroflow);
        get microflowQualifiedName(): string;
        /**
         * In version 10.0.0: introduced
         */
        get parameters(): internal.IList<PublishedODataMicroflowParameter>;
        get summary(): string;
        set summary(newValue: string);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedODataMicroflow instance in the SDK and on the server.
         * The new PublishedODataMicroflow will be automatically stored in the 'microflows' property
         * of the parent PublishedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.19.0 and higher
         */
        static createIn(container: PublishedODataService): PublishedODataMicroflow;
        /**
         * Creates and returns a new PublishedODataMicroflow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedODataMicroflow;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-microflow-parameter relevant section in reference guide}
     *
     * In version 10.0.0: introduced
     */
    class PublishedODataMicroflowParameter extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedODataMicroflow(): PublishedODataMicroflow;
        get exposedName(): string;
        set exposedName(newValue: string);
        get microflowParameter(): microflows.IMicroflowParameter;
        set microflowParameter(newValue: microflows.IMicroflowParameter);
        get microflowParameterQualifiedName(): string;
        get type(): datatypes.DataType;
        set type(newValue: datatypes.DataType);
        get canBeEmpty(): boolean;
        set canBeEmpty(newValue: boolean);
        get summary(): string;
        set summary(newValue: string);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedODataMicroflowParameter instance in the SDK and on the server.
         * The new PublishedODataMicroflowParameter will be automatically stored in the 'parameters' property
         * of the parent PublishedODataMicroflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createIn(container: PublishedODataMicroflow): PublishedODataMicroflowParameter;
        /**
         * Creates and returns a new PublishedODataMicroflowParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedODataMicroflowParameter;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-services relevant section in reference guide}
     */
    interface IPublishedODataService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): PublishedODataService;
        load(callback: (element: PublishedODataService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<PublishedODataService>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-services relevant section in reference guide}
     */
    class PublishedODataService extends projects.Document implements IPublishedODataService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get namespace(): string;
        set namespace(newValue: string);
        get path(): string;
        set path(newValue: string);
        get allowedModuleRoles(): internal.IList<security.IModuleRole>;
        get allowedModuleRolesQualifiedNames(): string[];
        /**
         * In version 8.0.0: introduced
         */
        get serviceName(): string;
        set serviceName(newValue: string);
        get resources(): internal.IList<PublishedRestResource>;
        /**
         * In version 9.19.0: introduced
         */
        get microflows(): internal.IList<PublishedODataMicroflow>;
        /**
         * In version 9.21.0: introduced
         */
        get enumerations(): internal.IList<PublishedODataEnumeration>;
        /**
         * In version 7.19.0: introduced
         */
        get publishAssociations(): boolean;
        set publishAssociations(newValue: boolean);
        /**
         * In version 8.0.0: introduced
         */
        get version(): string;
        set version(newValue: string);
        /**
         * In version 8.0.0: introduced
         */
        get authenticationMicroflow(): microflows.IMicroflow | null;
        set authenticationMicroflow(newValue: microflows.IMicroflow | null);
        get authenticationMicroflowQualifiedName(): string | null;
        /**
         * In version 8.0.0: introduced
         */
        get authenticationTypes(): internal.IList<RestAuthenticationType>;
        /**
         * In version 8.4.0: introduced
         */
        get summary(): string;
        set summary(newValue: string);
        /**
         * In version 8.4.0: introduced
         */
        get description(): string;
        set description(newValue: string);
        /**
         * In version 8.12.0: introduced
         */
        get replaceIllegalChars(): boolean;
        set replaceIllegalChars(newValue: boolean);
        /**
         * In version 8.18.0: introduced
         */
        get useGeneralization(): boolean;
        set useGeneralization(newValue: boolean);
        /**
         * In version 9.1.0: introduced
         */
        get oDataVersion(): PublishedODataVersion;
        set oDataVersion(newValue: PublishedODataVersion);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new PublishedODataService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): PublishedODataService;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-resource relevant section in reference guide}
     */
    class PublishedRestResource extends webservices.PublishedResource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedODataService(): PublishedODataService;
        get path(): string;
        set path(newValue: string);
        /**
         * In version 7.19.0: introduced
         */
        get exposedName(): string;
        set exposedName(newValue: string);
        /**
         * In version 8.0.0: introduced
         */
        get summary(): string;
        set summary(newValue: string);
        /**
         * In version 8.0.0: introduced
         */
        get description(): string;
        set description(newValue: string);
        get usePaging(): boolean;
        set usePaging(newValue: boolean);
        get pageSize(): number;
        set pageSize(newValue: number);
        /**
         * In version 9.11.0: deleted
         * In version 9.4.0: introduced
         */
        get updatable(): boolean;
        set updatable(newValue: boolean);
        /**
         * In version 9.11.0: deleted
         * In version 9.9.0: introduced
         */
        get updateMicroflow(): microflows.IMicroflow | null;
        set updateMicroflow(newValue: microflows.IMicroflow | null);
        get updateMicroflowQualifiedName(): string | null;
        /**
         * In version 9.11.0: deleted
         * In version 9.10.0: introduced
         */
        get insertable(): boolean;
        set insertable(newValue: boolean);
        /**
         * In version 9.11.0: deleted
         * In version 9.10.0: introduced
         */
        get deletable(): boolean;
        set deletable(newValue: boolean);
        /**
         * In version 9.11.0: introduced
         */
        get updateMode(): ChangeMode;
        set updateMode(newValue: ChangeMode);
        /**
         * In version 9.11.0: introduced
         */
        get insertMode(): ChangeMode;
        set insertMode(newValue: ChangeMode);
        /**
         * In version 9.11.0: introduced
         */
        get deleteMode(): ChangeMode;
        set deleteMode(newValue: ChangeMode);
        /**
         * In version 9.14.0: introduced
         */
        get readMode(): ReadMode;
        set readMode(newValue: ReadMode);
        /**
         * In version 9.17.0: introduced
         */
        get queryOptions(): QueryOptions;
        set queryOptions(newValue: QueryOptions);
        /**
         * In version 9.14.0: deleted
         * In version 9.9.0: introduced
         */
        get queryMicroflow(): microflows.IMicroflow | null;
        set queryMicroflow(newValue: microflows.IMicroflow | null);
        get queryMicroflowQualifiedName(): string | null;
        /**
         * In version 9.14.0: deleted
         * In version 9.9.0: introduced
         */
        get countMicroflow(): microflows.IMicroflow | null;
        set countMicroflow(newValue: microflows.IMicroflow | null);
        get countMicroflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedRestResource instance in the SDK and on the server.
         * The new PublishedRestResource will be automatically stored in the 'resources' property
         * of the parent PublishedODataService element passed as argument.
         */
        static createIn(container: PublishedODataService): PublishedRestResource;
        /**
         * Creates and returns a new PublishedRestResource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedRestResource;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-rest-services relevant section in reference guide}
     *
     * In version 7.11.0: removed experimental
     * In version 7.6.0: introduced
     */
    interface IPublishedRestService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): PublishedRestService;
        load(callback: (element: PublishedRestService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<PublishedRestService>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-rest-services relevant section in reference guide}
     *
     * In version 7.11.0: removed experimental
     * In version 7.6.0: introduced
     */
    class PublishedRestService extends projects.Document implements IPublishedRestService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get path(): string;
        set path(newValue: string);
        /**
         * In version 7.12.0: introduced
         */
        get serviceName(): string;
        set serviceName(newValue: string);
        /**
         * In version 7.12.0: introduced
         */
        get version(): string;
        set version(newValue: string);
        /**
         * In version 7.13.0: deleted
         * In version 7.11.0: introduced
         */
        get authenticationType(): RestAuthenticationType;
        set authenticationType(newValue: RestAuthenticationType);
        /**
         * In version 7.13.0: introduced
         */
        get authenticationTypes(): internal.IList<RestAuthenticationType>;
        /**
         * In version 7.17.0: introduced
         */
        get authenticationMicroflow(): microflows.IMicroflow | null;
        set authenticationMicroflow(newValue: microflows.IMicroflow | null);
        get authenticationMicroflowQualifiedName(): string | null;
        /**
         * In version 7.18.0: introduced
         */
        get corsConfiguration(): CorsConfiguration | null;
        set corsConfiguration(newValue: CorsConfiguration | null);
        get allowedRoles(): internal.IList<security.IModuleRole>;
        get allowedRolesQualifiedNames(): string[];
        /**
         * In version 7.7.0: introduced
         */
        get resources(): internal.IList<PublishedRestServiceResource>;
        /**
         * In version 7.17.0: introduced
         */
        get parameters(): internal.IList<RestOperationParameter>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new PublishedRestService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): PublishedRestService;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-rest-operation relevant section in reference guide}
     *
     * In version 7.11.0: removed experimental
     * In version 7.7.0: introduced
     */
    class PublishedRestServiceOperation extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestServiceResource(): PublishedRestServiceResource;
        get summary(): string;
        set summary(newValue: string);
        get documentation(): string;
        set documentation(newValue: string);
        get path(): string;
        set path(newValue: string);
        /**
         * In version 7.15.0: introduced
         */
        get deprecated(): boolean;
        set deprecated(newValue: boolean);
        /**
         * In version 7.17.0: introduced
         */
        get parameters(): internal.IList<RestOperationParameter>;
        get httpMethod(): services.HttpMethod;
        set httpMethod(newValue: services.HttpMethod);
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        /**
         * In version 7.14.0: introduced
         */
        get exportMapping(): exportmappings.IExportMapping | null;
        set exportMapping(newValue: exportmappings.IExportMapping | null);
        get exportMappingQualifiedName(): string | null;
        /**
         * In version 7.14.0: introduced
         */
        get importMapping(): importmappings.IImportMapping | null;
        set importMapping(newValue: importmappings.IImportMapping | null);
        get importMappingQualifiedName(): string | null;
        /**
         * In version 7.17.0: introduced
         */
        get objectHandlingBackup(): mappings.ObjectHandlingBackupEnum;
        set objectHandlingBackup(newValue: mappings.ObjectHandlingBackupEnum);
        /**
         * In version 7.14.0: introduced
         */
        get commit(): microflows.CommitEnum;
        set commit(newValue: microflows.CommitEnum);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedRestServiceOperation instance in the SDK and on the server.
         * The new PublishedRestServiceOperation will be automatically stored in the 'operations' property
         * of the parent PublishedRestServiceResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 and higher
         */
        static createIn(container: PublishedRestServiceResource): PublishedRestServiceOperation;
        /**
         * Creates and returns a new PublishedRestServiceOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedRestServiceOperation;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-rest-resource relevant section in reference guide}
     *
     * In version 7.11.0: removed experimental
     * In version 7.7.0: introduced
     */
    class PublishedRestServiceResource extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestService(): PublishedRestService;
        get name(): string;
        set name(newValue: string);
        get documentation(): string;
        set documentation(newValue: string);
        get operations(): internal.IList<PublishedRestServiceOperation>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedRestServiceResource instance in the SDK and on the server.
         * The new PublishedRestServiceResource will be automatically stored in the 'resources' property
         * of the parent PublishedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 and higher
         */
        static createIn(container: PublishedRestService): PublishedRestServiceResource;
        /**
         * Creates and returns a new PublishedRestServiceResource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedRestServiceResource;
    }
    /**
     * In version 9.17.0: introduced
     */
    class QueryOptions extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestResource(): PublishedRestResource;
        get countable(): boolean;
        set countable(newValue: boolean);
        /**
         * In version 9.19.0: introduced
         */
        get topSupported(): boolean;
        set topSupported(newValue: boolean);
        /**
         * In version 9.19.0: introduced
         */
        get skipSupported(): boolean;
        set skipSupported(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new QueryOptions instance in the SDK and on the server.
         * The new QueryOptions will be automatically stored in the 'queryOptions' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 and higher
         */
        static createIn(container: PublishedRestResource): QueryOptions;
        /**
         * Creates and returns a new QueryOptions instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): QueryOptions;
    }
    /**
     * In version 9.14.0: introduced
     */
    class ReadSource extends ReadMode {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestResource(): PublishedRestResource;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReadSource instance in the SDK and on the server.
         * The new ReadSource will be automatically stored in the 'readMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 and higher
         */
        static createIn(container: PublishedRestResource): ReadSource;
        /**
         * Creates and returns a new ReadSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReadSource;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: introduced
     */
    interface IRestOperation extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsRestPath: IRestPath;
        readonly name: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        readonly parameters: internal.IList<IOperationParameter>;
        asLoaded(): RestOperation;
        load(callback: (element: RestOperation) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<RestOperation>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: introduced
     */
    class RestOperation extends internal.Element<IModel> implements IRestOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestPath(): RestPath;
        get name(): string;
        set name(newValue: string);
        get httpMethod(): services.HttpMethod;
        set httpMethod(newValue: services.HttpMethod);
        get timeout(): number;
        set timeout(newValue: number);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get parameters(): internal.IList<OperationParameter>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RestOperation instance in the SDK and on the server.
         * The new RestOperation will be automatically stored in the 'operations' property
         * of the parent RestPath element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createIn(container: RestPath): RestOperation;
        /**
         * Creates and returns a new RestOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RestOperation;
        get qualifiedName(): string | null;
    }
    /**
     * In version 7.11.0: removed experimental
     * In version 7.8.0: introduced
     */
    class RestOperationParameter extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestService(): PublishedRestService;
        get containerAsPublishedRestServiceOperation(): PublishedRestServiceOperation;
        get name(): string;
        set name(newValue: string);
        /**
         * In version 7.17.0: introduced
         */
        get microflowParameter(): microflows.IMicroflowParameter | null;
        set microflowParameter(newValue: microflows.IMicroflowParameter | null);
        get microflowParameterQualifiedName(): string | null;
        /**
         * In version 7.17.0: introduced
         */
        get type(): datatypes.DataType;
        set type(newValue: datatypes.DataType);
        get parameterType(): RestOperationParameterType;
        set parameterType(newValue: RestOperationParameterType);
        /**
         * In version 8.3.0: introduced
         */
        get description(): string;
        set description(newValue: string);
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get dataType(): string;
        set dataType(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RestOperationParameter instance in the SDK and on the server.
         * The new RestOperationParameter will be automatically stored in the 'parameters' property
         * of the parent PublishedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInPublishedRestServiceUnderParameters(container: PublishedRestService): RestOperationParameter;
        /**
         * Creates and returns a new RestOperationParameter instance in the SDK and on the server.
         * The new RestOperationParameter will be automatically stored in the 'parameters' property
         * of the parent PublishedRestServiceOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInPublishedRestServiceOperationUnderParameters(container: PublishedRestServiceOperation): RestOperationParameter;
        /**
         * Creates and returns a new RestOperationParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RestOperationParameter;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: introduced
     */
    interface IRestPath extends internal.IElement {
        readonly model: IModel;
        readonly containerAsConsumedRestService: IConsumedRestService;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        readonly operations: internal.IList<IRestOperation>;
        asLoaded(): RestPath;
        load(callback: (element: RestPath) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<RestPath>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: introduced
     */
    class RestPath extends internal.Element<IModel> implements IRestPath {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConsumedRestService(): ConsumedRestService;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get path(): UriTemplate;
        set path(newValue: UriTemplate);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get operations(): internal.IList<RestOperation>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RestPath instance in the SDK and on the server.
         * The new RestPath will be automatically stored in the 'paths' property
         * of the parent ConsumedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createIn(container: ConsumedRestService): RestPath;
        /**
         * Creates and returns a new RestPath instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RestPath;
    }
    /**
     * In version 9.14.0: introduced
     */
    class ServiceFeed extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedODataContract(): PublishedODataContract;
        get xml(): string;
        set xml(newValue: string);
        get json(): string;
        set json(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ServiceFeed instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ServiceFeed;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: introduced
     */
    abstract class Value extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsOperationParameter(): OperationParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: introduced
     */
    class StringValue extends Value {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsOperationParameter(): OperationParameter;
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StringValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StringValue;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: introduced
     */
    class UriTemplate extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConsumedRestService(): ConsumedRestService;
        get containerAsRestPath(): RestPath;
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new UriTemplate instance in the SDK and on the server.
         * The new UriTemplate will be automatically stored in the 'baseUrl' property
         * of the parent ConsumedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createInConsumedRestServiceUnderBaseUrl(container: ConsumedRestService): UriTemplate;
        /**
         * Creates and returns a new UriTemplate instance in the SDK and on the server.
         * The new UriTemplate will be automatically stored in the 'path' property
         * of the parent RestPath element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createInRestPathUnderPath(container: RestPath): UriTemplate;
        /**
         * Creates and returns a new UriTemplate instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): UriTemplate;
    }
}
import { constants } from "./constants";
import { datatypes } from "./datatypes";
import { enumerations } from "./enumerations";
import { exportmappings } from "./exportmappings";
import { expressions } from "./expressions";
import { importmappings } from "./importmappings";
import { kafka } from "./kafka";
import { mappings } from "./mappings";
import { microflows } from "./microflows";
import { security } from "./security";
import { services } from "./services";
import { IModel } from "./base-model";
