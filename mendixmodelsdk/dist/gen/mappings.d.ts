import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace mappings {
    class ElementType extends internal.AbstractEnum {
        static Undefined: ElementType;
        static Inheritance: ElementType;
        static Choice: ElementType;
        static Object: ElementType;
        static Value: ElementType;
        static Sequence: ElementType;
        static All: ElementType;
        static NamedArray: ElementType;
        static Array: ElementType;
        static Wrapper: ElementType;
        protected qualifiedTsTypeName: string;
    }
    class ObjectHandlingBackupEnum extends internal.AbstractEnum {
        static Create: ObjectHandlingBackupEnum;
        static Ignore: ObjectHandlingBackupEnum;
        static Error: ObjectHandlingBackupEnum;
        protected qualifiedTsTypeName: string;
    }
    class ObjectHandlingEnum extends internal.AbstractEnum {
        static Parameter: ObjectHandlingEnum;
        static Create: ObjectHandlingEnum;
        static Find: ObjectHandlingEnum;
        static Custom: ObjectHandlingEnum;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Mappings`.
     */
    /**
     * In version 6.6.0: introduced
     */
    abstract class Element extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsJsonStructure: jsonstructures.JsonStructure;
        readonly containerAsElement: Element;
        readonly containerAsEntityMessageDefinition: messagedefinitions.EntityMessageDefinition;
        elementType: ElementType;
        primitiveType: xmlschemas.XmlPrimitiveType;
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         */
        path: string;
        isDefaultType: boolean;
        minOccurs: number;
        maxOccurs: number;
        nillable: boolean;
        exposedName: string;
        /**
         * In version 7.6.0: introduced
         */
        exposedItemName: string;
        maxLength: number;
        fractionDigits: number;
        totalDigits: number;
        errorMessage: string;
        warningMessage: string;
        readonly children: internal.IList<Element>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/mapping-documents relevant section in reference guide}
     */
    interface IMappingDocument extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): MappingDocument;
        load(callback: (element: MappingDocument) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MappingDocument>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/mapping-documents relevant section in reference guide}
     */
    abstract class MappingDocument extends projects.Document implements IMappingDocument {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        readonly rootMappingElements: internal.IList<ObjectMappingElement>;
        xmlSchema: xmlschemas.IXmlSchema | null;
        readonly xmlSchemaQualifiedName: string | null;
        /**
         * In version 6.4.0: introduced
         */
        jsonStructure: jsonstructures.IJsonStructure | null;
        readonly jsonStructureQualifiedName: string | null;
        rootElementName: string;
        importedWebService: webservices.IImportedWebService | null;
        readonly importedWebServiceQualifiedName: string | null;
        serviceName: string;
        operationName: string;
        /**
         * In version 7.6.0: introduced
         */
        messageDefinition: messagedefinitions.IMessageDefinition | null;
        readonly messageDefinitionQualifiedName: string | null;
        /**
         * In version 7.14.0: introduced
         */
        publicName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
    }
    abstract class MappingElement extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMappingDocument: MappingDocument;
        readonly containerAsObjectMappingElement: ObjectMappingElement;
        documentation: string;
        elementType: ElementType;
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         *
         * In version 7.6.0: deleted
         */
        path: string;
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         *
         * In version 7.6.0: introduced
         */
        jsonPath: string;
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         *
         * In version 7.6.0: introduced
         */
        xmlPath: string;
        minOccurs: number;
        maxOccurs: number;
        nillable: boolean;
        /**
         * In version 6.6.0: introduced
         */
        exposedName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class MappingMicroflowCall extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsObjectMappingElement: ObjectMappingElement;
        microflow: microflows.IMicroflow | null;
        readonly microflowQualifiedName: string | null;
        readonly parameterMappings: internal.IList<MappingMicroflowParameter>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MappingMicroflowCall instance in the SDK and on the server.
         * The new MappingMicroflowCall will be automatically stored in the 'mappingMicroflowCall' property
         * of the parent ObjectMappingElement element passed as argument.
         */
        static createIn(container: ObjectMappingElement): MappingMicroflowCall;
        /**
         * Creates and returns a new MappingMicroflowCall instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MappingMicroflowCall;
    }
    class MappingMicroflowParameter extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMappingMicroflowCall: MappingMicroflowCall;
        parameter: microflows.IMicroflowParameter | null;
        readonly parameterQualifiedName: string | null;
        levelOfParent: number;
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         *
         * In version 7.6.0: deleted
         */
        valueElementPath: string;
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         *
         * In version 7.6.0: introduced
         */
        jsonValueElementPath: string;
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         *
         * In version 7.6.0: introduced
         */
        xmlValueElementPath: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MappingMicroflowParameter instance in the SDK and on the server.
         * The new MappingMicroflowParameter will be automatically stored in the 'parameterMappings' property
         * of the parent MappingMicroflowCall element passed as argument.
         */
        static createIn(container: MappingMicroflowCall): MappingMicroflowParameter;
        /**
         * Creates and returns a new MappingMicroflowParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MappingMicroflowParameter;
    }
    abstract class ObjectMappingElement extends MappingElement {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMappingDocument: MappingDocument;
        readonly containerAsObjectMappingElement: ObjectMappingElement;
        mappingMicroflowCall: MappingMicroflowCall | null;
        readonly children: internal.IList<MappingElement>;
        entity: domainmodels.IEntity | null;
        readonly entityQualifiedName: string | null;
        association: domainmodels.IAssociationBase | null;
        readonly associationQualifiedName: string | null;
        objectHandling: ObjectHandlingEnum;
        objectHandlingBackup: ObjectHandlingBackupEnum;
        /**
         * In version 7.17.0: introduced
         */
        objectHandlingBackupAllowOverride: boolean;
        /**
         * In version 6.4.0: introduced
         */
        isDefaultType: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    abstract class ValueMappingElement extends MappingElement {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsObjectMappingElement: ObjectMappingElement;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        xmlDataType: string;
        /**
         * In version 7.9.0: introduced
         */
        type: datatypes.DataType;
        isKey: boolean;
        isXmlAttribute: boolean;
        /**
         * In version 6.1.0: introduced
         */
        xmlPrimitiveType: xmlschemas.XmlPrimitiveType;
        isContent: boolean;
        attribute: domainmodels.IAttribute | null;
        readonly attributeQualifiedName: string | null;
        converter: microflows.IMicroflow | null;
        readonly converterQualifiedName: string | null;
        /**
         * In version 6.4.1: deleted
         */
        expectedContentTypes: string;
        maxLength: number;
        fractionDigits: number;
        totalDigits: number;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
}
import { datatypes } from "./datatypes";
import { domainmodels } from "./domainmodels";
import { jsonstructures } from "./jsonstructures";
import { messagedefinitions } from "./messagedefinitions";
import { microflows } from "./microflows";
import { webservices } from "./webservices";
import { xmlschemas } from "./xmlschemas";
import { IModel } from "./base-model";
