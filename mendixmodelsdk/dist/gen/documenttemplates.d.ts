import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { common } from "../common";
import { projects } from "./projects";
export declare namespace documenttemplates {
    class BorderStyle extends internal.AbstractEnum {
        static None: BorderStyle;
        static Dotted: BorderStyle;
        static Dashed: BorderStyle;
        static Solid: BorderStyle;
        protected qualifiedTsTypeName: string;
    }
    class FontFamily extends internal.AbstractEnum {
        static Courier: FontFamily;
        static Tahoma: FontFamily;
        static Times: FontFamily;
        static Helvetica: FontFamily;
        static Arial: FontFamily;
        protected qualifiedTsTypeName: string;
    }
    class TextAlign extends internal.AbstractEnum {
        static Left: TextAlign;
        static Right: TextAlign;
        static Center: TextAlign;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `DocumentTemplates`.
     */
    abstract class Widget extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        readonly containerAsDropZone: DropZone;
        name: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    abstract class AttributeWidget extends Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        readonly containerAsDropZone: DropZone;
        /**
         * The value of this property is conceptually of type paths.LegacyAttributePath.
         *
         * In version 7.11.0: deleted
         */
        attributePath: string;
        /**
         * In version 7.11.0: introduced
         */
        attributeRef: domainmodels.AttributeRef | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class ConditionSettings extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsTableRow: TableRow;
        readonly conditions: internal.IList<enumerations.Condition>;
        attribute: domainmodels.IAttribute | null;
        readonly attributeQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConditionSettings instance in the SDK and on the server.
         * The new ConditionSettings will be automatically stored in the 'conditionSettings' property
         * of the parent TableRow element passed as argument.
         */
        static createIn(container: TableRow): ConditionSettings;
        /**
         * Creates and returns a new ConditionSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConditionSettings;
    }
    abstract class EntityWidget extends Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        readonly containerAsDropZone: DropZone;
        /**
         * The value of this property is conceptually of type paths.LegacyEntityPath.
         *
         * In version 7.11.0: deleted
         */
        entityPath: string;
        /**
         * In version 7.11.0: introduced
         */
        entityRef: domainmodels.EntityRef | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    abstract class Grid extends EntityWidget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        readonly containerAsDropZone: DropZone;
        cellSpacing: number;
        cellPadding: number;
        style: Style;
        sortBar: GridSortBar;
        microflow: microflows.IMicroflow | null;
        readonly microflowQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/data-grid-(document-template) relevant section in reference guide}
     */
    class DataGrid extends Grid {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        readonly containerAsDropZone: DropZone;
        readonly columns: internal.IList<DataGridColumn>;
        readonly weights: internal.IList<number>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataGrid instance in the SDK and on the server.
         * The new DataGrid will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): DataGrid;
        /**
         * Creates and returns a new DataGrid instance in the SDK and on the server.
         * The new DataGrid will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): DataGrid;
        /**
         * Creates and returns a new DataGrid instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataGrid;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/columns-(document-template) relevant section in reference guide}
     */
    class DataGridCell extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDataGridColumn: DataGridColumn;
        style: Style;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataGridCell instance in the SDK and on the server.
         * The new DataGridCell will be automatically stored in the 'evenRowsCell' property
         * of the parent DataGridColumn element passed as argument.
         */
        static createInDataGridColumnUnderEvenRowsCell(container: DataGridColumn): DataGridCell;
        /**
         * Creates and returns a new DataGridCell instance in the SDK and on the server.
         * The new DataGridCell will be automatically stored in the 'oddRowsCell' property
         * of the parent DataGridColumn element passed as argument.
         */
        static createInDataGridColumnUnderOddRowsCell(container: DataGridColumn): DataGridCell;
        /**
         * Creates and returns a new DataGridCell instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataGridCell;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/columns-(document-template) relevant section in reference guide}
     */
    class DataGridColumn extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDataGrid: DataGrid;
        /**
         * The value of this property is conceptually of type paths.LegacyAttributePath.
         *
         * In version 7.11.0: deleted
         */
        attributePath: string;
        /**
         * In version 7.11.0: introduced
         */
        attributeRef: domainmodels.AttributeRef | null;
        caption: texts.Text;
        style: Style;
        oddRowsCell: DataGridCell;
        evenRowsCell: DataGridCell | null;
        formattingInfo: pages.FormattingInfo;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataGridColumn instance in the SDK and on the server.
         * The new DataGridColumn will be automatically stored in the 'columns' property
         * of the parent DataGrid element passed as argument.
         */
        static createIn(container: DataGrid): DataGridColumn;
        /**
         * Creates and returns a new DataGridColumn instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataGridColumn;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/data-view-(document-template) relevant section in reference guide}
     */
    class DataView extends EntityWidget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        readonly containerAsDropZone: DropZone;
        contents: DataViewContents;
        microflow: microflows.IMicroflow | null;
        readonly microflowQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataView instance in the SDK and on the server.
         * The new DataView will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): DataView;
        /**
         * Creates and returns a new DataView instance in the SDK and on the server.
         * The new DataView will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): DataView;
        /**
         * Creates and returns a new DataView instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataView;
    }
    abstract class DropZone extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDataView: DataView;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        readonly containerAsTableRow: TableRow;
        readonly containerAsTemplateGrid: TemplateGrid;
        widget: Widget | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class DataViewContents extends DropZone {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDataView: DataView;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataViewContents instance in the SDK and on the server.
         * The new DataViewContents will be automatically stored in the 'contents' property
         * of the parent DataView element passed as argument.
         */
        static createIn(container: DataView): DataViewContents;
        /**
         * Creates and returns a new DataViewContents instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataViewContents;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/document-templates relevant section in reference guide}
     */
    interface IDocumentTemplate extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): DocumentTemplate;
        load(callback: (element: DocumentTemplate) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DocumentTemplate>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/document-templates relevant section in reference guide}
     */
    class DocumentTemplate extends projects.Document implements IDocumentTemplate {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        readonly toplevels: internal.IList<Widget>;
        canvasWidth: number;
        pageWidth: string;
        pageHeight: string;
        ppi: number;
        marginLeftInInch: number;
        marginRightInInch: number;
        marginTopInInch: number;
        marginBottomInInch: number;
        style: Style;
        header: Header | null;
        footer: Footer | null;
        showHeaderAndFooterOnFirstPage: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new DocumentTemplate unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): DocumentTemplate;
    }
    interface IDocumentTemplateParameter extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsDocumentTemplate: IDocumentTemplate;
        readonly name: string;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        readonly type: string | null;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 7.9.0: introduced
         */
        readonly parameterType: datatypes.IDataType;
        asLoaded(): DocumentTemplateParameter;
        load(callback: (element: DocumentTemplateParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DocumentTemplateParameter>;
    }
    class DocumentTemplateParameter extends internal.Element implements IDocumentTemplateParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDocumentTemplate: DocumentTemplate;
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
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        readonly qualifiedName: string | null;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/dynamic-image-(document-template) relevant section in reference guide}
     */
    class DynamicImageViewer extends EntityWidget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        readonly containerAsDropZone: DropZone;
        defaultImage: images.IImage | null;
        readonly defaultImageQualifiedName: string | null;
        useThumbnail: boolean;
        width: number;
        height: number;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DynamicImageViewer instance in the SDK and on the server.
         * The new DynamicImageViewer will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): DynamicImageViewer;
        /**
         * Creates and returns a new DynamicImageViewer instance in the SDK and on the server.
         * The new DynamicImageViewer will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): DynamicImageViewer;
        /**
         * Creates and returns a new DynamicImageViewer instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DynamicImageViewer;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/dynamic-label-(document-template) relevant section in reference guide}
     */
    class DynamicLabel extends AttributeWidget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        readonly containerAsDropZone: DropZone;
        style: Style;
        renderXHTML: boolean;
        formattingInfo: pages.FormattingInfo;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DynamicLabel instance in the SDK and on the server.
         * The new DynamicLabel will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): DynamicLabel;
        /**
         * Creates and returns a new DynamicLabel instance in the SDK and on the server.
         * The new DynamicLabel will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): DynamicLabel;
        /**
         * Creates and returns a new DynamicLabel instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DynamicLabel;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/footer-(document-template) relevant section in reference guide}
     */
    class Footer extends DropZone {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        bottomMargin: number;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Footer instance in the SDK and on the server.
         * The new Footer will be automatically stored in the 'footer' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createIn(container: DocumentTemplate): Footer;
        /**
         * Creates and returns a new Footer instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Footer;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/sort-bar relevant section in reference guide}
     */
    class GridSortBar extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsGrid: Grid;
        readonly sortItems: internal.IList<GridSortItem>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new GridSortBar instance in the SDK and on the server.
         * The new GridSortBar will be automatically stored in the 'sortBar' property
         * of the parent Grid element passed as argument.
         */
        static createIn(container: Grid): GridSortBar;
        /**
         * Creates and returns a new GridSortBar instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): GridSortBar;
    }
    class GridSortItem extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsGridSortBar: GridSortBar;
        /**
         * The value of this property is conceptually of type paths.LegacyAttributePath.
         *
         * In version 7.11.0: deleted
         */
        attributePath: string;
        /**
         * In version 7.11.0: introduced
         */
        attributeRef: domainmodels.AttributeRef;
        sortOrder: pages.SortDirection;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new GridSortItem instance in the SDK and on the server.
         * The new GridSortItem will be automatically stored in the 'sortItems' property
         * of the parent GridSortBar element passed as argument.
         */
        static createIn(container: GridSortBar): GridSortItem;
        /**
         * Creates and returns a new GridSortItem instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): GridSortItem;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/header-(document-template) relevant section in reference guide}
     */
    class Header extends DropZone {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        topMargin: number;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Header instance in the SDK and on the server.
         * The new Header will be automatically stored in the 'header' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createIn(container: DocumentTemplate): Header;
        /**
         * Creates and returns a new Header instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Header;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/line-break-(document-template) relevant section in reference guide}
     */
    class LineBreak extends Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        readonly containerAsDropZone: DropZone;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new LineBreak instance in the SDK and on the server.
         * The new LineBreak will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): LineBreak;
        /**
         * Creates and returns a new LineBreak instance in the SDK and on the server.
         * The new LineBreak will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): LineBreak;
        /**
         * Creates and returns a new LineBreak instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): LineBreak;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/page-break-(document-template) relevant section in reference guide}
     */
    class PageBreak extends Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        readonly containerAsDropZone: DropZone;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PageBreak instance in the SDK and on the server.
         * The new PageBreak will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): PageBreak;
        /**
         * Creates and returns a new PageBreak instance in the SDK and on the server.
         * The new PageBreak will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): PageBreak;
        /**
         * Creates and returns a new PageBreak instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PageBreak;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/static-image-(document-template) relevant section in reference guide}
     */
    class StaticImageViewer extends Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        readonly containerAsDropZone: DropZone;
        image: images.IImage | null;
        readonly imageQualifiedName: string | null;
        width: number;
        height: number;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StaticImageViewer instance in the SDK and on the server.
         * The new StaticImageViewer will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): StaticImageViewer;
        /**
         * Creates and returns a new StaticImageViewer instance in the SDK and on the server.
         * The new StaticImageViewer will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): StaticImageViewer;
        /**
         * Creates and returns a new StaticImageViewer instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StaticImageViewer;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/static-label-(document-template) relevant section in reference guide}
     */
    class StaticLabel extends Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        readonly containerAsDropZone: DropZone;
        caption: texts.Text;
        style: Style;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StaticLabel instance in the SDK and on the server.
         * The new StaticLabel will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): StaticLabel;
        /**
         * Creates and returns a new StaticLabel instance in the SDK and on the server.
         * The new StaticLabel will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): StaticLabel;
        /**
         * Creates and returns a new StaticLabel instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StaticLabel;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/style relevant section in reference guide}
     */
    class Style extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDataGridCell: DataGridCell;
        readonly containerAsDataGridColumn: DataGridColumn;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        readonly containerAsDynamicLabel: DynamicLabel;
        readonly containerAsGrid: Grid;
        readonly containerAsStaticLabel: StaticLabel;
        readonly containerAsTable: Table;
        readonly containerAsTableCell: TableCell;
        readonly containerAsTitle: Title;
        fontFamily: FontFamily;
        fontSize: number;
        bold: boolean;
        italic: boolean;
        fontColor: common.IColor;
        backgroundColor: common.IColor;
        overrideFontFamily: boolean;
        overrideFontSize: boolean;
        overrideBold: boolean;
        overrideItalic: boolean;
        overrideFontColor: boolean;
        overrideBackgroundColor: boolean;
        borderStyleTop: BorderStyle;
        borderStyleBottom: BorderStyle;
        borderStyleLeft: BorderStyle;
        borderStyleRight: BorderStyle;
        borderWidthTop: number;
        borderWidthBottom: number;
        borderWidthLeft: number;
        borderWidthRight: number;
        borderColorTop: common.IColor;
        borderColorBottom: common.IColor;
        borderColorLeft: common.IColor;
        borderColorRight: common.IColor;
        textAlign: TextAlign;
        customStyles: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent DataGridCell element passed as argument.
         */
        static createInDataGridCellUnderStyle(container: DataGridCell): Style;
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent DataGridColumn element passed as argument.
         */
        static createInDataGridColumnUnderStyle(container: DataGridColumn): Style;
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderStyle(container: DocumentTemplate): Style;
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent DynamicLabel element passed as argument.
         */
        static createInDynamicLabelUnderStyle(container: DynamicLabel): Style;
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent Grid element passed as argument.
         */
        static createInGridUnderStyle(container: Grid): Style;
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent StaticLabel element passed as argument.
         */
        static createInStaticLabelUnderStyle(container: StaticLabel): Style;
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent Table element passed as argument.
         */
        static createInTableUnderStyle(container: Table): Style;
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent TableCell element passed as argument.
         */
        static createInTableCellUnderStyle(container: TableCell): Style;
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * The new Style will be automatically stored in the 'style' property
         * of the parent Title element passed as argument.
         */
        static createInTitleUnderStyle(container: Title): Style;
        /**
         * Creates and returns a new Style instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Style;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/table-(document-template) relevant section in reference guide}
     */
    class Table extends Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        readonly containerAsDropZone: DropZone;
        readonly rows: internal.IList<TableRow>;
        readonly columnWeights: internal.IList<number>;
        cellSpacing: number;
        cellPadding: number;
        style: Style;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Table instance in the SDK and on the server.
         * The new Table will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): Table;
        /**
         * Creates and returns a new Table instance in the SDK and on the server.
         * The new Table will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): Table;
        /**
         * Creates and returns a new Table instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Table;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/cell-(document-template) relevant section in reference guide}
     */
    class TableCell extends DropZone {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsTableRow: TableRow;
        colSpan: number;
        rowSpan: number;
        isPartOfSpan: boolean;
        style: Style;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TableCell instance in the SDK and on the server.
         * The new TableCell will be automatically stored in the 'cells' property
         * of the parent TableRow element passed as argument.
         */
        static createIn(container: TableRow): TableCell;
        /**
         * Creates and returns a new TableCell instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TableCell;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/row-(document-template) relevant section in reference guide}
     */
    class TableRow extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsTable: Table;
        readonly cells: internal.IList<TableCell>;
        conditionSettings: ConditionSettings;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TableRow instance in the SDK and on the server.
         * The new TableRow will be automatically stored in the 'rows' property
         * of the parent Table element passed as argument.
         */
        static createIn(container: Table): TableRow;
        /**
         * Creates and returns a new TableRow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TableRow;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/template-grid-(document-template) relevant section in reference guide}
     */
    class TemplateGrid extends Grid {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        readonly containerAsDropZone: DropZone;
        numberOfColumns: number;
        oddRowsContents: TemplateGridContents;
        evenRowsContents: TemplateGridContents | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TemplateGrid instance in the SDK and on the server.
         * The new TemplateGrid will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): TemplateGrid;
        /**
         * Creates and returns a new TemplateGrid instance in the SDK and on the server.
         * The new TemplateGrid will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): TemplateGrid;
        /**
         * Creates and returns a new TemplateGrid instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TemplateGrid;
    }
    class TemplateGridContents extends DropZone {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsTemplateGrid: TemplateGrid;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TemplateGridContents instance in the SDK and on the server.
         * The new TemplateGridContents will be automatically stored in the 'evenRowsContents' property
         * of the parent TemplateGrid element passed as argument.
         */
        static createInTemplateGridUnderEvenRowsContents(container: TemplateGrid): TemplateGridContents;
        /**
         * Creates and returns a new TemplateGridContents instance in the SDK and on the server.
         * The new TemplateGridContents will be automatically stored in the 'oddRowsContents' property
         * of the parent TemplateGrid element passed as argument.
         */
        static createInTemplateGridUnderOddRowsContents(container: TemplateGrid): TemplateGridContents;
        /**
         * Creates and returns a new TemplateGridContents instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TemplateGridContents;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/title-(document-template) relevant section in reference guide}
     */
    class Title extends Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDocumentTemplate: DocumentTemplate;
        readonly containerAsDropZone: DropZone;
        caption: texts.Text;
        style: Style;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Title instance in the SDK and on the server.
         * The new Title will be automatically stored in the 'toplevels' property
         * of the parent DocumentTemplate element passed as argument.
         */
        static createInDocumentTemplateUnderToplevels(container: DocumentTemplate): Title;
        /**
         * Creates and returns a new Title instance in the SDK and on the server.
         * The new Title will be automatically stored in the 'widget' property
         * of the parent DropZone element passed as argument.
         */
        static createInDropZoneUnderWidget(container: DropZone): Title;
        /**
         * Creates and returns a new Title instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Title;
    }
}
import { datatypes } from "./datatypes";
import { domainmodels } from "./domainmodels";
import { enumerations } from "./enumerations";
import { images } from "./images";
import { microflows } from "./microflows";
import { pages } from "./pages";
import { texts } from "./texts";
import { IModel } from "./base-model";
