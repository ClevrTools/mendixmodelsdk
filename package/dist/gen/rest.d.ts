import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { domainmodels } from "./domainmodels";
import { projects } from "./projects";
import { webservices } from "./webservices";
export declare namespace rest {
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
        readonly containerAsFolderBase: projects.FolderBase;
        metadataUrl: string;
        metadata: string;
        /**
         * In version 8.0.0: introduced
         */
        serviceName: string;
        /**
         * In version 8.0.0: introduced
         */
        version: string;
        /**
         * In version 8.0.0: introduced
         */
        serviceId: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        readonly entities: internal.IList<ODataEntity>;
        proxyType: microflows.RequestProxyType;
        proxyHost: constants.IConstant | null;
        readonly proxyHostQualifiedName: string | null;
        proxyPort: constants.IConstant | null;
        readonly proxyPortQualifiedName: string | null;
        proxyUsername: constants.IConstant | null;
        readonly proxyUsernameQualifiedName: string | null;
        proxyPassword: constants.IConstant | null;
        readonly proxyPasswordQualifiedName: string | null;
        /**
         * In version 8.0.0: introduced
         */
        httpConfiguration: microflows.HttpConfiguration;
        /**
         * In version 8.4.0: introduced
         */
        headersMicroflow: microflows.IMicroflow | null;
        readonly headersMicroflowQualifiedName: string | null;
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
        readonly containerAsPublishedRestService: PublishedRestService;
        allowedOrigins: constants.IConstant | null;
        readonly allowedOriginsQualifiedName: string | null;
        allowAuthentication: boolean;
        maxAge: constants.IConstant | null;
        readonly maxAgeQualifiedName: string | null;
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
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.0.0: introduced
     */
    class ODataAttribute extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsODataEntity: ODataEntity;
        name: string;
        attribute: domainmodels.IAttribute;
        readonly attributeQualifiedName: string;
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
     * In version 7.18.0: introduced
     */
    class ODataEntity extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsConsumedODataService: ConsumedODataService;
        name: string;
        entity: domainmodels.IEntity;
        readonly entityQualifiedName: string;
        /**
         * In version 7.19.0: introduced
         */
        entitySet: string;
        /**
         * In version 7.22.0: introduced
         */
        readonly keyNames: internal.IList<string>;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.22.0: introduced
         */
        readonly navigationProperties: internal.IList<ODataNavigationProperty>;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.0.0: introduced
         */
        readonly attributes: internal.IList<ODataAttribute>;
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
     * In version 7.22.0: introduced
     */
    class ODataNavigationProperty extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsODataEntity: ODataEntity;
        name: string;
        association: domainmodels.IAssociationBase;
        readonly associationQualifiedName: string;
        thisSideIsParent: boolean;
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
        readonly containerAsFolderBase: projects.FolderBase;
        namespace: string;
        path: string;
        readonly allowedModuleRoles: internal.IList<security.IModuleRole>;
        readonly allowedModuleRolesQualifiedNames: string[];
        /**
         * In version 8.0.0: introduced
         */
        serviceName: string;
        readonly resources: internal.IList<PublishedRestResource>;
        /**
         * In version 7.19.0: introduced
         */
        publishAssociations: boolean;
        /**
         * In version 8.0.0: introduced
         */
        version: string;
        /**
         * In version 8.0.0: introduced
         */
        authenticationMicroflow: microflows.IMicroflow | null;
        readonly authenticationMicroflowQualifiedName: string | null;
        /**
         * In version 8.0.0: introduced
         */
        readonly authenticationTypes: internal.IList<RestAuthenticationType>;
        /**
         * In version 8.4.0: introduced
         */
        summary: string;
        /**
         * In version 8.4.0: introduced
         */
        description: string;
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
        readonly containerAsPublishedODataService: PublishedODataService;
        path: string;
        /**
         * In version 7.19.0: introduced
         */
        exposedName: string;
        /**
         * In version 8.0.0: introduced
         */
        summary: string;
        /**
         * In version 8.0.0: introduced
         */
        description: string;
        usePaging: boolean;
        pageSize: number;
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
        readonly containerAsFolderBase: projects.FolderBase;
        path: string;
        /**
         * In version 7.12.0: introduced
         */
        serviceName: string;
        /**
         * In version 7.12.0: introduced
         */
        version: string;
        /**
         * In version 7.13.0: deleted
         * In version 7.11.0: introduced
         */
        authenticationType: RestAuthenticationType;
        /**
         * In version 7.13.0: introduced
         */
        readonly authenticationTypes: internal.IList<RestAuthenticationType>;
        /**
         * In version 7.17.0: introduced
         */
        authenticationMicroflow: microflows.IMicroflow | null;
        readonly authenticationMicroflowQualifiedName: string | null;
        /**
         * In version 7.18.0: introduced
         */
        corsConfiguration: CorsConfiguration | null;
        readonly allowedRoles: internal.IList<security.IModuleRole>;
        readonly allowedRolesQualifiedNames: string[];
        /**
         * In version 7.7.0: introduced
         */
        readonly resources: internal.IList<PublishedRestServiceResource>;
        /**
         * In version 7.17.0: introduced
         */
        readonly parameters: internal.IList<RestOperationParameter>;
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
        readonly containerAsPublishedRestServiceResource: PublishedRestServiceResource;
        summary: string;
        documentation: string;
        path: string;
        /**
         * In version 7.15.0: introduced
         */
        deprecated: boolean;
        /**
         * In version 7.17.0: introduced
         */
        readonly parameters: internal.IList<RestOperationParameter>;
        httpMethod: services.HttpMethod;
        microflow: microflows.IMicroflow | null;
        readonly microflowQualifiedName: string | null;
        /**
         * In version 7.14.0: introduced
         */
        exportMapping: exportmappings.IExportMapping | null;
        readonly exportMappingQualifiedName: string | null;
        /**
         * In version 7.14.0: introduced
         */
        importMapping: importmappings.IImportMapping | null;
        readonly importMappingQualifiedName: string | null;
        /**
         * In version 7.17.0: introduced
         */
        objectHandlingBackup: mappings.ObjectHandlingBackupEnum;
        /**
         * In version 7.14.0: introduced
         */
        commit: microflows.CommitEnum;
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
        readonly containerAsPublishedRestService: PublishedRestService;
        name: string;
        documentation: string;
        readonly operations: internal.IList<PublishedRestServiceOperation>;
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
        readonly containerAsPublishedRestService: PublishedRestService;
        readonly containerAsPublishedRestServiceOperation: PublishedRestServiceOperation;
        name: string;
        /**
         * In version 7.17.0: introduced
         */
        microflowParameter: microflows.IMicroflowParameter | null;
        readonly microflowParameterQualifiedName: string | null;
        /**
         * In version 7.17.0: introduced
         */
        type: datatypes.DataType;
        parameterType: RestOperationParameterType;
        /**
         * In version 8.3.0: introduced
         */
        description: string;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        dataType: string;
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
import { importmappings } from "./importmappings";
import { mappings } from "./mappings";
import { microflows } from "./microflows";
import { security } from "./security";
import { services } from "./services";
import { IModel } from "./base-model";
