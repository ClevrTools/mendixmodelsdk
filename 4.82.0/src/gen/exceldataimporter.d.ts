import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { microflows } from "./microflows";
import { projects } from "./projects";
/**
 * @ignore
 */
export declare namespace exceldataimporter {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ExcelDataImporter`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.6.0: introduced
     */
    class CSVSheet extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCSVTemplateContents(): CSVTemplateContents;
        get delimiter(): string;
        set delimiter(newValue: string);
        get quoteChar(): string;
        set quoteChar(newValue: string);
        get escapeChar(): string;
        set escapeChar(newValue: string);
        get headerIncluded(): boolean;
        set headerIncluded(newValue: boolean);
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get columnAttributeMappings(): internal.IList<ColumnAttributeMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CSVSheet instance in the SDK and on the server.
         * The new CSVSheet will be automatically stored in the 'sheet' property
         * of the parent CSVTemplateContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createIn(container: CSVTemplateContents): CSVSheet;
        /**
         * Creates and returns a new CSVSheet instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CSVSheet;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.6.0: introduced
     */
    abstract class TemplateContents extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsTemplate(): Template;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.6.0: introduced
     */
    class CSVTemplateContents extends TemplateContents {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsTemplate(): Template;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get sheet(): CSVSheet;
        set sheet(newValue: CSVSheet);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CSVTemplateContents instance in the SDK and on the server.
         * The new CSVTemplateContents will be automatically stored in the 'contents' property
         * of the parent Template element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createIn(container: Template): CSVTemplateContents;
        /**
         * Creates and returns a new CSVTemplateContents instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CSVTemplateContents;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class ColumnAttributeMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCSVSheet(): CSVSheet;
        get containerAsExcelSheet(): ExcelSheet;
        get containerAsSheet(): Sheet;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get reference(): Reference;
        set reference(newValue: Reference);
        get attribute(): domainmodels.IAttribute;
        set attribute(newValue: domainmodels.IAttribute);
        get attributeQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ColumnAttributeMapping instance in the SDK and on the server.
         * The new ColumnAttributeMapping will be automatically stored in the 'columnAttributeMappings' property
         * of the parent Sheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 to 10.5.0
         */
        static createIn(container: Sheet): ColumnAttributeMapping;
        /**
         * Creates and returns a new ColumnAttributeMapping instance in the SDK and on the server.
         * The new ColumnAttributeMapping will be automatically stored in the 'columnAttributeMappings' property
         * of the parent CSVSheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createInCSVSheetUnderColumnAttributeMappings(container: CSVSheet): ColumnAttributeMapping;
        /**
         * Creates and returns a new ColumnAttributeMapping instance in the SDK and on the server.
         * The new ColumnAttributeMapping will be automatically stored in the 'columnAttributeMappings' property
         * of the parent ExcelSheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createInExcelSheetUnderColumnAttributeMappings(container: ExcelSheet): ColumnAttributeMapping;
        /**
         * Creates and returns a new ColumnAttributeMapping instance in the SDK and on the server.
         * The new ColumnAttributeMapping will be automatically stored in the 'columnAttributeMappings' property
         * of the parent Sheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 to 10.5.0
         */
        static createInSheetUnderColumnAttributeMappings(container: Sheet): ColumnAttributeMapping;
        /**
         * Creates and returns a new ColumnAttributeMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ColumnAttributeMapping;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.6.0: introduced
     */
    class ExcelSheet extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsExcelTemplateContents(): ExcelTemplateContents;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get reference(): Reference;
        set reference(newValue: Reference);
        get headerRowStartsAt(): number;
        set headerRowStartsAt(newValue: number);
        get dataRowStartsAt(): number;
        set dataRowStartsAt(newValue: number);
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get columnAttributeMappings(): internal.IList<ColumnAttributeMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExcelSheet instance in the SDK and on the server.
         * The new ExcelSheet will be automatically stored in the 'sheets' property
         * of the parent ExcelTemplateContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createIn(container: ExcelTemplateContents): ExcelSheet;
        /**
         * Creates and returns a new ExcelSheet instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExcelSheet;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.6.0: introduced
     */
    class ExcelTemplateContents extends TemplateContents {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsTemplate(): Template;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get sheets(): internal.IList<ExcelSheet>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExcelTemplateContents instance in the SDK and on the server.
         * The new ExcelTemplateContents will be automatically stored in the 'contents' property
         * of the parent Template element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createIn(container: Template): ExcelTemplateContents;
        /**
         * Creates and returns a new ExcelTemplateContents instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExcelTemplateContents;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: introduced
     */
    class ImportExcelDataAction extends microflows.MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): microflows.ActionActivity;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 10.1.0: added optional
         */
        get template(): ITemplate | null;
        set template(newValue: ITemplate | null);
        get templateQualifiedName(): string | null;
        get fileVariableName(): string;
        set fileVariableName(newValue: string);
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ImportExcelDataAction instance in the SDK and on the server.
         * The new ImportExcelDataAction will be automatically stored in the 'action' property
         * of the parent microflows.ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createIn(container: microflows.ActionActivity): ImportExcelDataAction;
        /**
         * Creates and returns a new ImportExcelDataAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ImportExcelDataAction;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    abstract class Reference extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsColumnAttributeMapping(): ColumnAttributeMapping;
        get containerAsExcelSheet(): ExcelSheet;
        get containerAsSheet(): Sheet;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class IndexReference extends Reference {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsColumnAttributeMapping(): ColumnAttributeMapping;
        get containerAsExcelSheet(): ExcelSheet;
        get containerAsSheet(): Sheet;
        get referencedIndex(): number;
        set referencedIndex(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new IndexReference instance in the SDK and on the server.
         * The new IndexReference will be automatically stored in the 'reference' property
         * of the parent ColumnAttributeMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createInColumnAttributeMappingUnderReference(container: ColumnAttributeMapping): IndexReference;
        /**
         * Creates and returns a new IndexReference instance in the SDK and on the server.
         * The new IndexReference will be automatically stored in the 'reference' property
         * of the parent ExcelSheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createInExcelSheetUnderReference(container: ExcelSheet): IndexReference;
        /**
         * Creates and returns a new IndexReference instance in the SDK and on the server.
         * The new IndexReference will be automatically stored in the 'reference' property
         * of the parent Sheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 to 10.5.0
         */
        static createInSheetUnderReference(container: Sheet): IndexReference;
        /**
         * Creates and returns a new IndexReference instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): IndexReference;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class NameReference extends Reference {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsColumnAttributeMapping(): ColumnAttributeMapping;
        get containerAsExcelSheet(): ExcelSheet;
        get containerAsSheet(): Sheet;
        get referencedName(): string;
        set referencedName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NameReference instance in the SDK and on the server.
         * The new NameReference will be automatically stored in the 'reference' property
         * of the parent ColumnAttributeMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createInColumnAttributeMappingUnderReference(container: ColumnAttributeMapping): NameReference;
        /**
         * Creates and returns a new NameReference instance in the SDK and on the server.
         * The new NameReference will be automatically stored in the 'reference' property
         * of the parent ExcelSheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createInExcelSheetUnderReference(container: ExcelSheet): NameReference;
        /**
         * Creates and returns a new NameReference instance in the SDK and on the server.
         * The new NameReference will be automatically stored in the 'reference' property
         * of the parent Sheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 to 10.5.0
         */
        static createInSheetUnderReference(container: Sheet): NameReference;
        /**
         * Creates and returns a new NameReference instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NameReference;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.6.0: deleted
     * In version 9.24.0: introduced
     */
    class Sheet extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsTemplate(): Template;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get reference(): Reference;
        set reference(newValue: Reference);
        get headerRowStartsAt(): number;
        set headerRowStartsAt(newValue: number);
        get dataRowStartsAt(): number;
        set dataRowStartsAt(newValue: number);
        /**
         * In version 10.2.0: introduced
         */
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get columnAttributeMappings(): internal.IList<ColumnAttributeMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Sheet instance in the SDK and on the server.
         * The new Sheet will be automatically stored in the 'sheets' property
         * of the parent Template element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 to 10.5.0
         */
        static createIn(container: Template): Sheet;
        /**
         * Creates and returns a new Sheet instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Sheet;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    interface ITemplate extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): Template;
        load(callback: (element: Template) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Template>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class Template extends projects.Document implements ITemplate {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get templateName(): string;
        set templateName(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 10.6.0: deleted
         */
        get sheets(): internal.IList<Sheet>;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 10.6.0: introduced
         */
        get contents(): TemplateContents | null;
        set contents(newValue: TemplateContents | null);
        get fileName(): string;
        set fileName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new Template unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): Template;
    }
}
import { domainmodels } from "./domainmodels";
import { IModel } from "./base-model";
