import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace webservices {
    class AppServiceState extends internal.AbstractEnum {
        static Draft: AppServiceState;
        static Consumable: AppServiceState;
        static Deprecated: AppServiceState;
        protected qualifiedTsTypeName: string;
    }
    class HeaderAuthentication extends internal.AbstractEnum {
        static None: HeaderAuthentication;
        static UsernamePassword: HeaderAuthentication;
        static Custom: HeaderAuthentication;
        protected qualifiedTsTypeName: string;
    }
    class SoapVersion extends internal.AbstractEnum {
        static Soap11: SoapVersion;
        static Soap12: SoapVersion;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `WebServices`.
     */
    abstract class DataMember extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDataEntityBase: DataEntityBase;
        readonly containerAsPublishedParameter: PublishedParameter;
        readonly containerAsPublishedResource: PublishedResource;
        isLockedByContract: boolean;
        exposedName: string;
        isOptionalByContract: boolean;
        isOptional: boolean;
        isNillableByContract: boolean;
        isNillable: boolean;
        isKey: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    abstract class DataEntityBase extends DataMember {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDataEntityBase: DataEntityBase;
        readonly containerAsPublishedParameter: PublishedParameter;
        readonly containerAsPublishedResource: PublishedResource;
        readonly childMembers: internal.IList<DataMember>;
        entity: domainmodels.IEntity | null;
        readonly entityQualifiedName: string | null;
        exposedItemName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class DataAssociation extends DataEntityBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDataEntityBase: DataEntityBase;
        associationByContract: appservices.MsdAssociation | null;
        association: domainmodels.IAssociationBase | null;
        readonly associationQualifiedName: string | null;
        /**
         * In version 8.0.0: introduced
         */
        exposedAssociationName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataAssociation instance in the SDK and on the server.
         * The new DataAssociation will be automatically stored in the 'childMembers' property
         * of the parent DataEntityBase element passed as argument.
         */
        static createIn(container: DataEntityBase): DataAssociation;
        /**
         * Creates and returns a new DataAssociation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataAssociation;
    }
    class DataAttribute extends DataMember {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDataEntityBase: DataEntityBase;
        attributeByContract: appservices.MsdAttribute | null;
        attribute: domainmodels.IAttribute | null;
        readonly attributeQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataAttribute instance in the SDK and on the server.
         * The new DataAttribute will be automatically stored in the 'childMembers' property
         * of the parent DataEntityBase element passed as argument.
         */
        static createIn(container: DataEntityBase): DataAttribute;
        /**
         * Creates and returns a new DataAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataAttribute;
    }
    class DataEntity extends DataEntityBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDataEntityBase: DataEntityBase;
        readonly containerAsPublishedParameter: PublishedParameter;
        readonly containerAsPublishedResource: PublishedResource;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataEntity instance in the SDK and on the server.
         * The new DataEntity will be automatically stored in the 'childMembers' property
         * of the parent DataEntityBase element passed as argument.
         */
        static createInDataEntityBaseUnderChildMembers(container: DataEntityBase): DataEntity;
        /**
         * Creates and returns a new DataEntity instance in the SDK and on the server.
         * The new DataEntity will be automatically stored in the 'dataEntity' property
         * of the parent PublishedParameter element passed as argument.
         */
        static createInPublishedParameterUnderDataEntity(container: PublishedParameter): DataEntity;
        /**
         * Creates and returns a new DataEntity instance in the SDK and on the server.
         * The new DataEntity will be automatically stored in the 'dataEntity' property
         * of the parent PublishedResource element passed as argument.
         */
        static createInPublishedResourceUnderDataEntity(container: PublishedResource): DataEntity;
        /**
         * Creates and returns a new DataEntity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataEntity;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/consumed-web-services relevant section in reference guide}
     */
    interface IImportedWebService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): ImportedWebService;
        load(callback: (element: ImportedWebService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ImportedWebService>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/consumed-web-services relevant section in reference guide}
     */
    class ImportedWebService extends projects.Document implements IImportedWebService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        wsdlDescription: WsdlDescription | null;
        wsdlUrl: string;
        /**
         * In version 6.4.1: introduced
         */
        useMtom: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ImportedWebService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ImportedWebService;
    }
    class OperationInfo extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsServiceInfo: ServiceInfo;
        name: string;
        documentation: string;
        soapAction: string;
        requestHeaderRpcElement: RpcOperationElement;
        requestBodyRpcElement: RpcOperationElement;
        responseBodyRpcElement: RpcOperationElement;
        requestHeaderElementName: string;
        requestHeaderEncoded: boolean;
        requestHeaderPartEncoding: PartEncoding | null;
        requestBodyEncoded: boolean;
        requestBodyElementName: string;
        readonly requestBodyPartEncodings: internal.IList<PartEncoding>;
        responseBodyElementName: string;
        /**
         * In version 6.1.0: deleted
         */
        allowSimpleMappingInheritance: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new OperationInfo instance in the SDK and on the server.
         * The new OperationInfo will be automatically stored in the 'operations' property
         * of the parent ServiceInfo element passed as argument.
         */
        static createIn(container: ServiceInfo): OperationInfo;
        /**
         * Creates and returns a new OperationInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): OperationInfo;
    }
    class PartEncoding extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsOperationInfo: OperationInfo;
        partName: string;
        partXsdType: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PartEncoding instance in the SDK and on the server.
         * The new PartEncoding will be automatically stored in the 'requestBodyPartEncodings' property
         * of the parent OperationInfo element passed as argument.
         */
        static createInOperationInfoUnderRequestBodyPartEncodings(container: OperationInfo): PartEncoding;
        /**
         * Creates and returns a new PartEncoding instance in the SDK and on the server.
         * The new PartEncoding will be automatically stored in the 'requestHeaderPartEncoding' property
         * of the parent OperationInfo element passed as argument.
         */
        static createInOperationInfoUnderRequestHeaderPartEncoding(container: OperationInfo): PartEncoding;
        /**
         * Creates and returns a new PartEncoding instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PartEncoding;
    }
    interface IPublishedServiceBase extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): PublishedServiceBase;
        load(callback: (element: PublishedServiceBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<PublishedServiceBase>;
    }
    abstract class PublishedServiceBase extends projects.Document implements IPublishedServiceBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        readonly versionedServices: internal.IList<VersionedService>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/published-app-services relevant section in reference guide}
     */
    interface IPublishedAppService extends IPublishedServiceBase {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): PublishedAppService;
        load(callback: (element: PublishedAppService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<PublishedAppService>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/published-app-services relevant section in reference guide}
     */
    class PublishedAppService extends PublishedServiceBase implements IPublishedAppService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new PublishedAppService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): PublishedAppService;
    }
    abstract class PublishedResource extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsPublishedODataService: rest.PublishedODataService;
        readonly containerAsVersionedService: VersionedService;
        dataEntity: DataEntity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class PublishedOperation extends PublishedResource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsVersionedService: VersionedService;
        isLockedByContract: boolean;
        name: string;
        image: images.IImage | null;
        readonly imageQualifiedName: string | null;
        description: string;
        documentation: string;
        microflow: microflows.IMicroflow | null;
        readonly microflowQualifiedName: string | null;
        readonly parameters: internal.IList<PublishedParameter>;
        returnTypeNameByContract: string;
        returnTypeSpecificationByContract: string;
        entityExposedNameByContract: string;
        entityExposedName: string;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        returnType: string;
        /**
         * In version 7.9.0: introduced
         */
        operationReturnType: datatypes.DataType;
        returnTypeIsOptional: boolean;
        returnTypeIsNillable: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedOperation instance in the SDK and on the server.
         * The new PublishedOperation will be automatically stored in the 'operations' property
         * of the parent VersionedService element passed as argument.
         */
        static createIn(container: VersionedService): PublishedOperation;
        /**
         * Creates and returns a new PublishedOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedOperation;
    }
    class PublishedParameter extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsPublishedOperation: PublishedOperation;
        isLockedByContract: boolean;
        parameter: microflows.IMicroflowParameter | null;
        readonly parameterQualifiedName: string | null;
        parameterByContract: appservices.MsdMicroflowParameter;
        entityExposedName: string;
        isOptionalByContract: boolean;
        isOptional: boolean;
        isNillable: boolean;
        entityExposedItemNameByContract: string;
        entityExposedItemName: string;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        type: string;
        /**
         * In version 7.9.0: introduced
         */
        parameterType: datatypes.DataType;
        dataEntity: DataEntity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedParameter instance in the SDK and on the server.
         * The new PublishedParameter will be automatically stored in the 'parameters' property
         * of the parent PublishedOperation element passed as argument.
         */
        static createIn(container: PublishedOperation): PublishedParameter;
        /**
         * Creates and returns a new PublishedParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedParameter;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/published-web-services relevant section in reference guide}
     */
    interface IPublishedWebService extends IPublishedServiceBase {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): PublishedWebService;
        load(callback: (element: PublishedWebService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<PublishedWebService>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/published-web-services relevant section in reference guide}
     */
    class PublishedWebService extends PublishedServiceBase implements IPublishedWebService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new PublishedWebService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): PublishedWebService;
    }
    class RpcMessagePartElement extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsRpcOperationElement: RpcOperationElement;
        partName: string;
        typeName: string;
        elementName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RpcMessagePartElement instance in the SDK and on the server.
         * The new RpcMessagePartElement will be automatically stored in the 'messagePartElements' property
         * of the parent RpcOperationElement element passed as argument.
         */
        static createIn(container: RpcOperationElement): RpcMessagePartElement;
        /**
         * Creates and returns a new RpcMessagePartElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RpcMessagePartElement;
    }
    class RpcOperationElement extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsOperationInfo: OperationInfo;
        name: string;
        readonly messagePartElements: internal.IList<RpcMessagePartElement>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RpcOperationElement instance in the SDK and on the server.
         * The new RpcOperationElement will be automatically stored in the 'requestBodyRpcElement' property
         * of the parent OperationInfo element passed as argument.
         */
        static createInOperationInfoUnderRequestBodyRpcElement(container: OperationInfo): RpcOperationElement;
        /**
         * Creates and returns a new RpcOperationElement instance in the SDK and on the server.
         * The new RpcOperationElement will be automatically stored in the 'requestHeaderRpcElement' property
         * of the parent OperationInfo element passed as argument.
         */
        static createInOperationInfoUnderRequestHeaderRpcElement(container: OperationInfo): RpcOperationElement;
        /**
         * Creates and returns a new RpcOperationElement instance in the SDK and on the server.
         * The new RpcOperationElement will be automatically stored in the 'responseBodyRpcElement' property
         * of the parent OperationInfo element passed as argument.
         */
        static createInOperationInfoUnderResponseBodyRpcElement(container: OperationInfo): RpcOperationElement;
        /**
         * Creates and returns a new RpcOperationElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RpcOperationElement;
    }
    class ServiceInfo extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWsdlDescription: WsdlDescription;
        name: string;
        documentation: string;
        portName: string;
        location: string;
        soapVersion: SoapVersion;
        locationConstant: constants.IConstant | null;
        readonly locationConstantQualifiedName: string | null;
        readonly operations: internal.IList<OperationInfo>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ServiceInfo instance in the SDK and on the server.
         * The new ServiceInfo will be automatically stored in the 'services' property
         * of the parent WsdlDescription element passed as argument.
         */
        static createIn(container: WsdlDescription): ServiceInfo;
        /**
         * Creates and returns a new ServiceInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ServiceInfo;
    }
    /**
     * In version 6.7.0: introduced
     */
    class SystemIdDataAttribute extends DataMember {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDataEntityBase: DataEntityBase;
        entity: domainmodels.IEntity | null;
        readonly entityQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SystemIdDataAttribute instance in the SDK and on the server.
         * The new SystemIdDataAttribute will be automatically stored in the 'childMembers' property
         * of the parent DataEntityBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 and higher
         */
        static createIn(container: DataEntityBase): SystemIdDataAttribute;
        /**
         * Creates and returns a new SystemIdDataAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SystemIdDataAttribute;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/published-web-services relevant section in reference guide}
     */
    class VersionedService extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsPublishedServiceBase: PublishedServiceBase;
        documentation: string;
        targetNamespace: string;
        headerAuthentication: HeaderAuthentication;
        readonly operations: internal.IList<PublishedOperation>;
        isLockedByContract: boolean;
        enumerationsByContract: appservices.MsdEnumerationContainer | null;
        /**
         * In version 7.13.0: introduced
         */
        optimizedXml: boolean;
        headerImportMapping: importmappings.IImportMapping | null;
        readonly headerImportMappingQualifiedName: string | null;
        /**
         * In version 7.17.0: introduced
         */
        objectHandlingBackup: mappings.ObjectHandlingBackupEnum;
        headerMicroflow: microflows.IMicroflow | null;
        readonly headerMicroflowQualifiedName: string | null;
        versionNumber: number;
        caption: string;
        description: string;
        appServiceState: AppServiceState;
        image: images.IImage | null;
        readonly imageQualifiedName: string | null;
        validate: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new VersionedService instance in the SDK and on the server.
         * The new VersionedService will be automatically stored in the 'versionedServices' property
         * of the parent PublishedServiceBase element passed as argument.
         */
        static createIn(container: PublishedServiceBase): VersionedService;
        /**
         * Creates and returns a new VersionedService instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): VersionedService;
    }
    class WsdlDescription extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMsd: appservices.Msd;
        readonly containerAsImportedWebService: ImportedWebService;
        readonly wsdlEntries: internal.IList<WsdlEntry>;
        readonly schemaEntries: internal.IList<xmlschemas.XmlSchemaEntry>;
        readonly services: internal.IList<ServiceInfo>;
        targetNamespace: string;
        importsHaveLocations: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WsdlDescription instance in the SDK and on the server.
         * The new WsdlDescription will be automatically stored in the 'wsdlDescription' property
         * of the parent appservices.Msd element passed as argument.
         */
        static createInMsdUnderWsdlDescription(container: appservices.Msd): WsdlDescription;
        /**
         * Creates and returns a new WsdlDescription instance in the SDK and on the server.
         * The new WsdlDescription will be automatically stored in the 'wsdlDescription' property
         * of the parent ImportedWebService element passed as argument.
         */
        static createInImportedWebServiceUnderWsdlDescription(container: ImportedWebService): WsdlDescription;
        /**
         * Creates and returns a new WsdlDescription instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WsdlDescription;
    }
    class WsdlEntry extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWsdlDescription: WsdlDescription;
        location: string;
        contents: string;
        localizedLocationFormat: string;
        localizedContentsFormat: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WsdlEntry instance in the SDK and on the server.
         * The new WsdlEntry will be automatically stored in the 'wsdlEntries' property
         * of the parent WsdlDescription element passed as argument.
         */
        static createIn(container: WsdlDescription): WsdlEntry;
        /**
         * Creates and returns a new WsdlEntry instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WsdlEntry;
    }
}
import { appservices } from "./appservices";
import { constants } from "./constants";
import { datatypes } from "./datatypes";
import { domainmodels } from "./domainmodels";
import { images } from "./images";
import { importmappings } from "./importmappings";
import { mappings } from "./mappings";
import { microflows } from "./microflows";
import { rest } from "./rest";
import { xmlschemas } from "./xmlschemas";
import { IModel } from "./base-model";
