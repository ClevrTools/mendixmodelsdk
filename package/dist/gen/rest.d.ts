import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { domainmodels } from "./domainmodels";
import { projects } from "./projects";
import { webservices } from "./webservices";
export declare namespace rest {
    class ODataVersion extends internal.AbstractEnum {
        static OData3: ODataVersion;
        static OData4: ODataVersion;
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
     * See: {@link https://docs.mendix.com/refguide7/consumed-odata-services relevant section in reference guide}
     *
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 7.18.0: introduced
     */
    interface IConsumedODataService extends domainmodels.IRemoteEntitySourceDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.9.0: added public
         */
        readonly entities: internal.IList<IODataEntity>;
        asLoaded(): ConsumedODataService;
        load(callback: (element: ConsumedODataService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConsumedODataService>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/consumed-odata-services relevant section in reference guide}
     *
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 7.18.0: introduced
     */
    class ConsumedODataService extends domainmodels.RemoteEntitySourceDocument implements IConsumedODataService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsFolderBase(): projects.FolderBase;
        get metadataUrl(): string;
        set metadataUrl(newValue: string);
        get metadata(): string;
        set metadata(newValue: string);
        /**
         * In version 8.6.0: introduced
         */
        get metadataReferences(): internal.IList<MetadataReference>;
        /**
         * In version 8.0.0: introduced
         */
        get serviceName(): string;
        set serviceName(newValue: string);
        /**
         * In version 8.0.0: introduced
         */
        get version(): string;
        set version(newValue: string);
        /**
         * In version 8.0.0: introduced
         */
        get serviceId(): string;
        set serviceId(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.9.0: added public
         */
        get entities(): internal.IList<ODataEntity>;
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
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ConsumedODataService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ConsumedODataService;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/cors-settings relevant section in reference guide}
     *
     * In version 7.18.0: introduced
     */
    class CorsConfiguration extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
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
     * In version 8.6.0: introduced
     */
    class MetadataReference extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
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
     * In version 8.0.0: introduced
     */
    class ODataAttribute extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsODataEntity(): ODataEntity;
        get name(): string;
        set name(newValue: string);
        get attribute(): domainmodels.IAttribute;
        set attribute(newValue: domainmodels.IAttribute);
        get attributeQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataAttribute instance in the SDK and on the server.
         * The new ODataAttribute will be automatically stored in the 'attributes' property
         * of the parent ODataEntity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createIn(container: ODataEntity): ODataAttribute;
        /**
         * Creates and returns a new ODataAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataAttribute;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.9.0: added public
     * In version 7.18.0: introduced
     */
    interface IODataEntity extends internal.IElement {
        readonly model: IModel;
        readonly containerAsConsumedODataService: IConsumedODataService;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.9.0: introduced
         */
        readonly key: IODataKey | null;
        asLoaded(): ODataEntity;
        load(callback: (element: ODataEntity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ODataEntity>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.9.0: added public
     * In version 7.18.0: introduced
     */
    class ODataEntity extends internal.Element implements IODataEntity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsConsumedODataService(): ConsumedODataService;
        get name(): string;
        set name(newValue: string);
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        /**
         * In version 7.19.0: introduced
         */
        get entitySet(): string;
        set entitySet(newValue: string);
        /**
         * In version 8.9.0: deleted
         * In version 7.22.0: introduced
         */
        get keyNames(): internal.IList<string>;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.9.0: introduced
         */
        get key(): ODataKey | null;
        set key(newValue: ODataKey | null);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.22.0: introduced
         */
        get navigationProperties(): internal.IList<ODataNavigationProperty>;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.0.0: introduced
         */
        get attributes(): internal.IList<ODataAttribute>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataEntity instance in the SDK and on the server.
         * The new ODataEntity will be automatically stored in the 'entities' property
         * of the parent ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.18.0 and higher
         */
        static createIn(container: ConsumedODataService): ODataEntity;
        /**
         * Creates and returns a new ODataEntity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataEntity;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.9.0: introduced
     */
    interface IODataKey extends internal.IElement {
        readonly model: IModel;
        readonly containerAsODataEntity: IODataEntity;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        readonly parts: internal.IList<IODataKeyPart>;
        asLoaded(): ODataKey;
        load(callback: (element: ODataKey) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ODataKey>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.9.0: introduced
     */
    class ODataKey extends internal.Element implements IODataKey {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsODataEntity(): ODataEntity;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get parts(): internal.IList<ODataKeyPart>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataKey instance in the SDK and on the server.
         * The new ODataKey will be automatically stored in the 'key' property
         * of the parent ODataEntity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createIn(container: ODataEntity): ODataKey;
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
     * In version 8.9.0: introduced
     */
    class ODataKeyPart extends internal.Element implements IODataKeyPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsODataKey(): ODataKey;
        get name(): string;
        set name(newValue: string);
        get entityKeyPartName(): string;
        set entityKeyPartName(newValue: string);
        get type(): domainmodels.AttributeType;
        set type(newValue: domainmodels.AttributeType);
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
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 7.22.0: introduced
     */
    class ODataNavigationProperty extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsODataEntity(): ODataEntity;
        get name(): string;
        set name(newValue: string);
        get association(): domainmodels.IAssociationBase;
        set association(newValue: domainmodels.IAssociationBase);
        get associationQualifiedName(): string;
        get thisSideIsParent(): boolean;
        set thisSideIsParent(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataNavigationProperty instance in the SDK and on the server.
         * The new ODataNavigationProperty will be automatically stored in the 'navigationProperties' property
         * of the parent ODataEntity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 and higher
         */
        static createIn(container: ODataEntity): ODataNavigationProperty;
        /**
         * Creates and returns a new ODataNavigationProperty instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataNavigationProperty;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/published-odata-services relevant section in reference guide}
     */
    interface IPublishedODataService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): PublishedODataService;
        load(callback: (element: PublishedODataService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<PublishedODataService>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/published-odata-services relevant section in reference guide}
     */
    class PublishedODataService extends projects.Document implements IPublishedODataService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
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
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new PublishedODataService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): PublishedODataService;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/published-odata-resource relevant section in reference guide}
     */
    class PublishedRestResource extends webservices.PublishedResource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
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
     * See: {@link https://docs.mendix.com/refguide7/published-rest-services relevant section in reference guide}
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
     * See: {@link https://docs.mendix.com/refguide7/published-rest-services relevant section in reference guide}
     *
     * In version 7.11.0: removed experimental
     * In version 7.6.0: introduced
     */
    class PublishedRestService extends projects.Document implements IPublishedRestService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
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
     * See: {@link https://docs.mendix.com/refguide7/published-rest-operation relevant section in reference guide}
     *
     * In version 7.11.0: removed experimental
     * In version 7.7.0: introduced
     */
    class PublishedRestServiceOperation extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
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
     * See: {@link https://docs.mendix.com/refguide7/published-rest-resource relevant section in reference guide}
     *
     * In version 7.11.0: removed experimental
     * In version 7.7.0: introduced
     */
    class PublishedRestServiceResource extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
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
     * In version 7.11.0: removed experimental
     * In version 7.8.0: introduced
     */
    class RestOperationParameter extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
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
}
import { constants } from "./constants";
import { datatypes } from "./datatypes";
import { exportmappings } from "./exportmappings";
import { expressions } from "./expressions";
import { importmappings } from "./importmappings";
import { mappings } from "./mappings";
import { microflows } from "./microflows";
import { security } from "./security";
import { services } from "./services";
import { IModel } from "./base-model";
