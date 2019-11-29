import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace appservices {
    class AppServiceLocationEnum extends internal.AbstractEnum {
        static Default: AppServiceLocationEnum;
        static Constant: AppServiceLocationEnum;
        static Parameter: AppServiceLocationEnum;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `AppServices`.
     */
    interface IAppServiceAction extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsConsumedAppService: IConsumedAppService;
        readonly name: string;
        readonly parameters: internal.IList<IAppServiceActionParameter>;
        asLoaded(): AppServiceAction;
        load(callback: (element: AppServiceAction) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<AppServiceAction>;
    }
    class AppServiceAction extends internal.Element implements IAppServiceAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsConsumedAppService: ConsumedAppService;
        name: string;
        caption: string;
        description: string;
        readonly parameters: internal.IList<AppServiceActionParameter>;
        microflow: microflows.IMicroflow | null;
        readonly microflowQualifiedName: string | null;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        returnType: string;
        /**
         * In version 7.9.0: introduced
         */
        actionReturnType: datatypes.DataType;
        returnTypeCanBeEmpty: boolean;
        image: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AppServiceAction instance in the SDK and on the server.
         * The new AppServiceAction will be automatically stored in the 'actions' property
         * of the parent ConsumedAppService element passed as argument.
         */
        static createIn(container: ConsumedAppService): AppServiceAction;
        /**
         * Creates and returns a new AppServiceAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AppServiceAction;
        readonly qualifiedName: string | null;
    }
    interface IAppServiceActionParameter extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsAppServiceAction: IAppServiceAction;
        readonly name: string;
        asLoaded(): AppServiceActionParameter;
        load(callback: (element: AppServiceActionParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<AppServiceActionParameter>;
    }
    class AppServiceActionParameter extends internal.Element implements IAppServiceActionParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAppServiceAction: AppServiceAction;
        name: string;
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
        canBeEmpty: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AppServiceActionParameter instance in the SDK and on the server.
         * The new AppServiceActionParameter will be automatically stored in the 'parameters' property
         * of the parent AppServiceAction element passed as argument.
         */
        static createIn(container: AppServiceAction): AppServiceActionParameter;
        /**
         * Creates and returns a new AppServiceActionParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AppServiceActionParameter;
        readonly qualifiedName: string | null;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/consumed-app-services relevant section in reference guide}
     */
    interface IConsumedAppService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        readonly actions: internal.IList<IAppServiceAction>;
        asLoaded(): ConsumedAppService;
        load(callback: (element: ConsumedAppService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConsumedAppService>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/consumed-app-services relevant section in reference guide}
     */
    class ConsumedAppService extends projects.Document implements IConsumedAppService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        readonly actions: internal.IList<AppServiceAction>;
        msd: Msd;
        fromAppStore: boolean;
        appStoreGuid: string;
        appStoreVersionGuid: string;
        appStoreVersion: string;
        appServiceLocation: AppServiceLocationEnum;
        locationConstant: constants.IConstant | null;
        readonly locationConstantQualifiedName: string | null;
        useTimeOut: boolean;
        timeOut: number;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ConsumedAppService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ConsumedAppService;
    }
    class Msd extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsConsumedAppService: ConsumedAppService;
        version: MsdVersion;
        metadata: MsdMetadata;
        domainModel: MsdDomainModel;
        enumerations: MsdEnumerationContainer;
        wsdlDescription: webservices.WsdlDescription;
        wsdl: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Msd instance in the SDK and on the server.
         * The new Msd will be automatically stored in the 'msd' property
         * of the parent ConsumedAppService element passed as argument.
         */
        static createIn(container: ConsumedAppService): Msd;
        /**
         * Creates and returns a new Msd instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Msd;
    }
    class MsdAssociation extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMsdDomainModel: MsdDomainModel;
        readonly containerAsDataAssociation: webservices.DataAssociation;
        name: string;
        guid: string;
        parentEntityName: string;
        childEntityName: string;
        associationType: string;
        associationOwner: string;
        parentDeleteBehavior: string;
        childDeleteBehavior: string;
        associationKind: string;
        parentX: number;
        parentY: number;
        childX: number;
        childY: number;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdAssociation instance in the SDK and on the server.
         * The new MsdAssociation will be automatically stored in the 'associations' property
         * of the parent MsdDomainModel element passed as argument.
         */
        static createInMsdDomainModelUnderAssociations(container: MsdDomainModel): MsdAssociation;
        /**
         * Creates and returns a new MsdAssociation instance in the SDK and on the server.
         * The new MsdAssociation will be automatically stored in the 'associationByContract' property
         * of the parent webservices.DataAssociation element passed as argument.
         */
        static createInDataAssociationUnderAssociationByContract(container: webservices.DataAssociation): MsdAssociation;
        /**
         * Creates and returns a new MsdAssociation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdAssociation;
    }
    class MsdAttribute extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMsdEntity: MsdEntity;
        readonly containerAsDataAttribute: webservices.DataAttribute;
        name: string;
        guid: string;
        attributeType: string;
        enumerationName: string;
        defaultValue: string;
        length: number;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdAttribute instance in the SDK and on the server.
         * The new MsdAttribute will be automatically stored in the 'attributes' property
         * of the parent MsdEntity element passed as argument.
         */
        static createInMsdEntityUnderAttributes(container: MsdEntity): MsdAttribute;
        /**
         * Creates and returns a new MsdAttribute instance in the SDK and on the server.
         * The new MsdAttribute will be automatically stored in the 'attributeByContract' property
         * of the parent webservices.DataAttribute element passed as argument.
         */
        static createInDataAttributeUnderAttributeByContract(container: webservices.DataAttribute): MsdAttribute;
        /**
         * Creates and returns a new MsdAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdAttribute;
    }
    class MsdDomainModel extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMsd: Msd;
        readonly entities: internal.IList<MsdEntity>;
        readonly associations: internal.IList<MsdAssociation>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdDomainModel instance in the SDK and on the server.
         * The new MsdDomainModel will be automatically stored in the 'domainModel' property
         * of the parent Msd element passed as argument.
         */
        static createIn(container: Msd): MsdDomainModel;
        /**
         * Creates and returns a new MsdDomainModel instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdDomainModel;
    }
    class MsdEntity extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMsdDomainModel: MsdDomainModel;
        name: string;
        guid: string;
        generalizationName: string;
        persistable: boolean;
        locationX: number;
        locationY: number;
        readonly attributes: internal.IList<MsdAttribute>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdEntity instance in the SDK and on the server.
         * The new MsdEntity will be automatically stored in the 'entities' property
         * of the parent MsdDomainModel element passed as argument.
         */
        static createIn(container: MsdDomainModel): MsdEntity;
        /**
         * Creates and returns a new MsdEntity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdEntity;
    }
    class MsdEnumeration extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMsdEnumerationContainer: MsdEnumerationContainer;
        name: string;
        guid: string;
        readonly values: internal.IList<MsdEnumerationValue>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdEnumeration instance in the SDK and on the server.
         * The new MsdEnumeration will be automatically stored in the 'enumerations' property
         * of the parent MsdEnumerationContainer element passed as argument.
         */
        static createIn(container: MsdEnumerationContainer): MsdEnumeration;
        /**
         * Creates and returns a new MsdEnumeration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdEnumeration;
    }
    class MsdEnumerationContainer extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMsd: Msd;
        readonly containerAsVersionedService: webservices.VersionedService;
        readonly enumerations: internal.IList<MsdEnumeration>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdEnumerationContainer instance in the SDK and on the server.
         * The new MsdEnumerationContainer will be automatically stored in the 'enumerations' property
         * of the parent Msd element passed as argument.
         */
        static createInMsdUnderEnumerations(container: Msd): MsdEnumerationContainer;
        /**
         * Creates and returns a new MsdEnumerationContainer instance in the SDK and on the server.
         * The new MsdEnumerationContainer will be automatically stored in the 'enumerationsByContract' property
         * of the parent webservices.VersionedService element passed as argument.
         */
        static createInVersionedServiceUnderEnumerationsByContract(container: webservices.VersionedService): MsdEnumerationContainer;
        /**
         * Creates and returns a new MsdEnumerationContainer instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdEnumerationContainer;
    }
    class MsdEnumerationValue extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMsdEnumeration: MsdEnumeration;
        name: string;
        guid: string;
        readonly translations: internal.IList<MsdText>;
        image: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdEnumerationValue instance in the SDK and on the server.
         * The new MsdEnumerationValue will be automatically stored in the 'values' property
         * of the parent MsdEnumeration element passed as argument.
         */
        static createIn(container: MsdEnumeration): MsdEnumerationValue;
        /**
         * Creates and returns a new MsdEnumerationValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdEnumerationValue;
    }
    class MsdMetadata extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMsd: Msd;
        name: string;
        documentation: string;
        version: number;
        publishDateTime: string;
        serviceGuid: string;
        versionGuid: string;
        instanceGuid: string;
        readonly supportedProtocols: internal.IList<string>;
        headerAuthentication: string;
        readonly microflows: internal.IList<MsdMicroflow>;
        caption: string;
        image: string;
        description: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdMetadata instance in the SDK and on the server.
         * The new MsdMetadata will be automatically stored in the 'metadata' property
         * of the parent Msd element passed as argument.
         */
        static createIn(container: Msd): MsdMetadata;
        /**
         * Creates and returns a new MsdMetadata instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdMetadata;
    }
    class MsdMicroflow extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMsdMetadata: MsdMetadata;
        name: string;
        documentation: string;
        image: string;
        description: string;
        readonly parameters: internal.IList<MsdMicroflowParameter>;
        returnType: string;
        /**
         * In version 6.1.0: deleted
         */
        systemEntityType: string;
        returnTypeSpecification: string;
        returnTypeCanBeEmpty: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdMicroflow instance in the SDK and on the server.
         * The new MsdMicroflow will be automatically stored in the 'microflows' property
         * of the parent MsdMetadata element passed as argument.
         */
        static createIn(container: MsdMetadata): MsdMicroflow;
        /**
         * Creates and returns a new MsdMicroflow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdMicroflow;
    }
    class MsdMicroflowParameter extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMsdMicroflow: MsdMicroflow;
        readonly containerAsPublishedParameter: webservices.PublishedParameter;
        name: string;
        type: string;
        typeSpecification: string;
        /**
         * In version 6.1.0: deleted
         */
        systemEntityType: string;
        canBeEmpty: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdMicroflowParameter instance in the SDK and on the server.
         * The new MsdMicroflowParameter will be automatically stored in the 'parameters' property
         * of the parent MsdMicroflow element passed as argument.
         */
        static createInMsdMicroflowUnderParameters(container: MsdMicroflow): MsdMicroflowParameter;
        /**
         * Creates and returns a new MsdMicroflowParameter instance in the SDK and on the server.
         * The new MsdMicroflowParameter will be automatically stored in the 'parameterByContract' property
         * of the parent webservices.PublishedParameter element passed as argument.
         */
        static createInPublishedParameterUnderParameterByContract(container: webservices.PublishedParameter): MsdMicroflowParameter;
        /**
         * Creates and returns a new MsdMicroflowParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdMicroflowParameter;
    }
    class MsdText extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMsdEnumerationValue: MsdEnumerationValue;
        languageCode: string;
        caption: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdText instance in the SDK and on the server.
         * The new MsdText will be automatically stored in the 'translations' property
         * of the parent MsdEnumerationValue element passed as argument.
         */
        static createIn(container: MsdEnumerationValue): MsdText;
        /**
         * Creates and returns a new MsdText instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdText;
    }
    class MsdVersion extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMsd: Msd;
        version: number;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MsdVersion instance in the SDK and on the server.
         * The new MsdVersion will be automatically stored in the 'version' property
         * of the parent Msd element passed as argument.
         */
        static createIn(container: Msd): MsdVersion;
        /**
         * Creates and returns a new MsdVersion instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MsdVersion;
    }
}
import { constants } from "./constants";
import { datatypes } from "./datatypes";
import { microflows } from "./microflows";
import { webservices } from "./webservices";
import { IModel } from "./base-model";
