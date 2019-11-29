import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { pages } from "./pages";
export declare namespace reports {
    class AggregateFunctionEnum extends internal.AbstractEnum {
        static Sum: AggregateFunctionEnum;
        static Average: AggregateFunctionEnum;
        static Count: AggregateFunctionEnum;
        static Minimum: AggregateFunctionEnum;
        static Maximum: AggregateFunctionEnum;
        protected qualifiedTsTypeName: string;
    }
    class AspectRatio extends internal.AbstractEnum {
        static SixteenToNine: AspectRatio;
        static ThreeToTwo: AspectRatio;
        static FourToThree: AspectRatio;
        static OneToOne: AspectRatio;
        static ThreeToFour: AspectRatio;
        static TwoToThree: AspectRatio;
        static NineToSixteen: AspectRatio;
        protected qualifiedTsTypeName: string;
    }
    class ChartType extends internal.AbstractEnum {
        static VerticalBars: ChartType;
        static VerticalBars3D: ChartType;
        static HorizontalBars: ChartType;
        static Lines: ChartType;
        static Area: ChartType;
        protected qualifiedTsTypeName: string;
    }
    class ColumnFormat extends internal.AbstractEnum {
        static Default: ColumnFormat;
        static MonthName: ColumnFormat;
        static WeekdayName: ColumnFormat;
        protected qualifiedTsTypeName: string;
    }
    class DateRangeFieldEnum extends internal.AbstractEnum {
        static Year: DateRangeFieldEnum;
        static Month: DateRangeFieldEnum;
        static Week: DateRangeFieldEnum;
        static Period: DateRangeFieldEnum;
        static Quarter: DateRangeFieldEnum;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Reports`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide7/report-widgets relevant section in reference guide}
     */
    abstract class ReportWidget extends pages.Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetValue: customwidgets.WidgetValue;
        readonly containerAsNativeLayout: nativepages.NativeLayout;
        readonly containerAsNativeLayoutCallArgument: nativepages.NativeLayoutCallArgument;
        readonly containerAsBuildingBlock: pages.BuildingBlock;
        readonly containerAsDataView: pages.DataView;
        readonly containerAsDivContainer: pages.DivContainer;
        readonly containerAsGroupBox: pages.GroupBox;
        readonly containerAsHeader: pages.Header;
        readonly containerAsLayout: pages.Layout;
        readonly containerAsLayoutCallArgument: pages.LayoutCallArgument;
        readonly containerAsLayoutGridColumn: pages.LayoutGridColumn;
        readonly containerAsListView: pages.ListView;
        readonly containerAsListViewTemplate: pages.ListViewTemplate;
        readonly containerAsMasterDetailRegion: pages.MasterDetailRegion;
        readonly containerAsNativeLayoutContent: pages.NativeLayoutContent;
        readonly containerAsNavigationListItem: pages.NavigationListItem;
        readonly containerAsScrollContainerRegion: pages.ScrollContainerRegion;
        readonly containerAsSnippet: pages.Snippet;
        readonly containerAsSplitPane: pages.SplitPane;
        readonly containerAsTabPage: pages.TabPage;
        readonly containerAsTableCell: pages.TableCell;
        readonly containerAsTemplateGridContents: pages.TemplateGridContents;
        readonly containerAsVerticalFlow: pages.VerticalFlow;
        readonly containerAsWebLayoutContent: pages.WebLayoutContent;
        readonly containerAsReportPane: ReportPane;
        dataSet: datasets.IDataSet | null;
        readonly dataSetQualifiedName: string | null;
        /**
         * In version 6.10.0: introduced
         */
        generateOnLoad: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/report-grid relevant section in reference guide}
     */
    class BasicReport extends ReportWidget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetValue: customwidgets.WidgetValue;
        readonly containerAsNativeLayout: nativepages.NativeLayout;
        readonly containerAsNativeLayoutCallArgument: nativepages.NativeLayoutCallArgument;
        readonly containerAsBuildingBlock: pages.BuildingBlock;
        readonly containerAsDataView: pages.DataView;
        readonly containerAsDivContainer: pages.DivContainer;
        readonly containerAsGroupBox: pages.GroupBox;
        readonly containerAsHeader: pages.Header;
        readonly containerAsLayout: pages.Layout;
        readonly containerAsLayoutCallArgument: pages.LayoutCallArgument;
        readonly containerAsLayoutGridColumn: pages.LayoutGridColumn;
        readonly containerAsListView: pages.ListView;
        readonly containerAsListViewTemplate: pages.ListViewTemplate;
        readonly containerAsMasterDetailRegion: pages.MasterDetailRegion;
        readonly containerAsNativeLayoutContent: pages.NativeLayoutContent;
        readonly containerAsNavigationListItem: pages.NavigationListItem;
        readonly containerAsScrollContainerRegion: pages.ScrollContainerRegion;
        readonly containerAsSnippet: pages.Snippet;
        readonly containerAsSplitPane: pages.SplitPane;
        readonly containerAsTabPage: pages.TabPage;
        readonly containerAsTableCell: pages.TableCell;
        readonly containerAsTemplateGridContents: pages.TemplateGridContents;
        readonly containerAsVerticalFlow: pages.VerticalFlow;
        readonly containerAsWebLayoutContent: pages.WebLayoutContent;
        readonly containerAsReportPane: ReportPane;
        readonly columns: internal.IList<BasicReportColumn>;
        readonly aggregates: internal.IList<BasicReportAggregate>;
        showExportButton: boolean;
        zoomInfo: ReportZoomInfo;
        isPagingEnabled: boolean;
        pageSize: number;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.2.0 and higher
         */
        static createInWidgetValueUnderWidgets(container: customwidgets.WidgetValue): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'headerWidget' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container: nativepages.NativeLayout): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container: nativepages.NativeLayout): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container: nativepages.NativeLayoutCallArgument): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 to 7.14.0
         */
        static createInBuildingBlockUnderWidget(container: pages.BuildingBlock): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInBuildingBlockUnderWidgets(container: pages.BuildingBlock): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.14.0
         */
        static createInDataViewUnderFooterWidget(container: pages.DataView): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderFooterWidgets(container: pages.DataView): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDataViewUnderWidget(container: pages.DataView): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderWidgets(container: pages.DataView): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDivContainerUnderWidget(container: pages.DivContainer): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDivContainerUnderWidgets(container: pages.DivContainer): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInGroupBoxUnderWidget(container: pages.GroupBox): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInGroupBoxUnderWidgets(container: pages.GroupBox): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderLeftWidget(container: pages.Header): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderLeftWidgets(container: pages.Header): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderRightWidget(container: pages.Header): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderRightWidgets(container: pages.Header): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutUnderWidget(container: pages.Layout): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container: pages.Layout): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutCallArgumentUnderWidget(container: pages.LayoutCallArgument): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutCallArgumentUnderWidgets(container: pages.LayoutCallArgument): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutGridColumnUnderWidget(container: pages.LayoutGridColumn): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutGridColumnUnderWidgets(container: pages.LayoutGridColumn): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewUnderWidget(container: pages.ListView): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewUnderWidgets(container: pages.ListView): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewTemplateUnderWidget(container: pages.ListViewTemplate): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewTemplateUnderWidgets(container: pages.ListViewTemplate): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.MasterDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailRegionUnderWidget(container: pages.MasterDetailRegion): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInNativeLayoutContentUnderWidgets(container: pages.NativeLayoutContent): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInNavigationListItemUnderWidget(container: pages.NavigationListItem): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInNavigationListItemUnderWidgets(container: pages.NavigationListItem): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInScrollContainerRegionUnderWidget(container: pages.ScrollContainerRegion): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInScrollContainerRegionUnderWidgets(container: pages.ScrollContainerRegion): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSnippetUnderWidget(container: pages.Snippet): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInSnippetUnderWidgets(container: pages.Snippet): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderFirstWidget(container: pages.SplitPane): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container: pages.SplitPane): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderSecondWidget(container: pages.SplitPane): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container: pages.SplitPane): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTabPageUnderWidget(container: pages.TabPage): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTabPageUnderWidgets(container: pages.TabPage): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTableCellUnderWidget(container: pages.TableCell): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTableCellUnderWidgets(container: pages.TableCell): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTemplateGridContentsUnderWidget(container: pages.TemplateGridContents): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTemplateGridContentsUnderWidgets(container: pages.TemplateGridContents): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInVerticalFlowUnderWidgets(container: pages.VerticalFlow): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'widgets' property
         * of the parent pages.WebLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebLayoutContentUnderWidgets(container: pages.WebLayoutContent): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'parameterWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container: ReportPane): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * The new BasicReport will be automatically stored in the 'reportWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container: ReportPane): BasicReport;
        /**
         * Creates and returns a new BasicReport instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BasicReport;
    }
    class BasicReportAggregate extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsBasicReport: BasicReport;
        caption: texts.Text;
        aggregateFunction: AggregateFunctionEnum;
        readonly applicablePerColumn: internal.IList<boolean>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BasicReportAggregate instance in the SDK and on the server.
         * The new BasicReportAggregate will be automatically stored in the 'aggregates' property
         * of the parent BasicReport element passed as argument.
         */
        static createIn(container: BasicReport): BasicReportAggregate;
        /**
         * Creates and returns a new BasicReportAggregate instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BasicReportAggregate;
    }
    class BasicReportColumn extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsBasicReport: BasicReport;
        caption: texts.Text;
        dataSetColumnName: string;
        width: number;
        alignment: pages.AlignmentEnum;
        format: ColumnFormat;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BasicReportColumn instance in the SDK and on the server.
         * The new BasicReportColumn will be automatically stored in the 'columns' property
         * of the parent BasicReport element passed as argument.
         */
        static createIn(container: BasicReport): BasicReportColumn;
        /**
         * Creates and returns a new BasicReportColumn instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BasicReportColumn;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/report-button relevant section in reference guide}
     */
    class ReportButton extends pages.Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetValue: customwidgets.WidgetValue;
        readonly containerAsNativeLayout: nativepages.NativeLayout;
        readonly containerAsNativeLayoutCallArgument: nativepages.NativeLayoutCallArgument;
        readonly containerAsBuildingBlock: pages.BuildingBlock;
        readonly containerAsDataView: pages.DataView;
        readonly containerAsDivContainer: pages.DivContainer;
        readonly containerAsGroupBox: pages.GroupBox;
        readonly containerAsHeader: pages.Header;
        readonly containerAsLayout: pages.Layout;
        readonly containerAsLayoutCallArgument: pages.LayoutCallArgument;
        readonly containerAsLayoutGridColumn: pages.LayoutGridColumn;
        readonly containerAsListView: pages.ListView;
        readonly containerAsListViewTemplate: pages.ListViewTemplate;
        readonly containerAsMasterDetailRegion: pages.MasterDetailRegion;
        readonly containerAsNativeLayoutContent: pages.NativeLayoutContent;
        readonly containerAsNavigationListItem: pages.NavigationListItem;
        readonly containerAsScrollContainerRegion: pages.ScrollContainerRegion;
        readonly containerAsSnippet: pages.Snippet;
        readonly containerAsSplitPane: pages.SplitPane;
        readonly containerAsTabPage: pages.TabPage;
        readonly containerAsTableCell: pages.TableCell;
        readonly containerAsTemplateGridContents: pages.TemplateGridContents;
        readonly containerAsVerticalFlow: pages.VerticalFlow;
        readonly containerAsWebLayoutContent: pages.WebLayoutContent;
        readonly containerAsReportPane: ReportPane;
        caption: texts.Text;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.2.0 and higher
         */
        static createInWidgetValueUnderWidgets(container: customwidgets.WidgetValue): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'headerWidget' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container: nativepages.NativeLayout): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container: nativepages.NativeLayout): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container: nativepages.NativeLayoutCallArgument): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 to 7.14.0
         */
        static createInBuildingBlockUnderWidget(container: pages.BuildingBlock): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInBuildingBlockUnderWidgets(container: pages.BuildingBlock): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.14.0
         */
        static createInDataViewUnderFooterWidget(container: pages.DataView): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderFooterWidgets(container: pages.DataView): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDataViewUnderWidget(container: pages.DataView): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderWidgets(container: pages.DataView): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDivContainerUnderWidget(container: pages.DivContainer): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDivContainerUnderWidgets(container: pages.DivContainer): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInGroupBoxUnderWidget(container: pages.GroupBox): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInGroupBoxUnderWidgets(container: pages.GroupBox): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderLeftWidget(container: pages.Header): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderLeftWidgets(container: pages.Header): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderRightWidget(container: pages.Header): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderRightWidgets(container: pages.Header): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutUnderWidget(container: pages.Layout): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container: pages.Layout): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutCallArgumentUnderWidget(container: pages.LayoutCallArgument): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutCallArgumentUnderWidgets(container: pages.LayoutCallArgument): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutGridColumnUnderWidget(container: pages.LayoutGridColumn): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutGridColumnUnderWidgets(container: pages.LayoutGridColumn): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewUnderWidget(container: pages.ListView): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewUnderWidgets(container: pages.ListView): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewTemplateUnderWidget(container: pages.ListViewTemplate): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewTemplateUnderWidgets(container: pages.ListViewTemplate): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.MasterDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailRegionUnderWidget(container: pages.MasterDetailRegion): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInNativeLayoutContentUnderWidgets(container: pages.NativeLayoutContent): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInNavigationListItemUnderWidget(container: pages.NavigationListItem): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInNavigationListItemUnderWidgets(container: pages.NavigationListItem): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInScrollContainerRegionUnderWidget(container: pages.ScrollContainerRegion): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInScrollContainerRegionUnderWidgets(container: pages.ScrollContainerRegion): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSnippetUnderWidget(container: pages.Snippet): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInSnippetUnderWidgets(container: pages.Snippet): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderFirstWidget(container: pages.SplitPane): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container: pages.SplitPane): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderSecondWidget(container: pages.SplitPane): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container: pages.SplitPane): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTabPageUnderWidget(container: pages.TabPage): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTabPageUnderWidgets(container: pages.TabPage): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTableCellUnderWidget(container: pages.TableCell): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTableCellUnderWidgets(container: pages.TableCell): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTemplateGridContentsUnderWidget(container: pages.TemplateGridContents): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTemplateGridContentsUnderWidgets(container: pages.TemplateGridContents): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInVerticalFlowUnderWidgets(container: pages.VerticalFlow): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'widgets' property
         * of the parent pages.WebLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebLayoutContentUnderWidgets(container: pages.WebLayoutContent): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'parameterWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container: ReportPane): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * The new ReportButton will be automatically stored in the 'reportWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container: ReportPane): ReportButton;
        /**
         * Creates and returns a new ReportButton instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReportButton;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/report-chart relevant section in reference guide}
     */
    class ReportChart extends ReportWidget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetValue: customwidgets.WidgetValue;
        readonly containerAsNativeLayout: nativepages.NativeLayout;
        readonly containerAsNativeLayoutCallArgument: nativepages.NativeLayoutCallArgument;
        readonly containerAsBuildingBlock: pages.BuildingBlock;
        readonly containerAsDataView: pages.DataView;
        readonly containerAsDivContainer: pages.DivContainer;
        readonly containerAsGroupBox: pages.GroupBox;
        readonly containerAsHeader: pages.Header;
        readonly containerAsLayout: pages.Layout;
        readonly containerAsLayoutCallArgument: pages.LayoutCallArgument;
        readonly containerAsLayoutGridColumn: pages.LayoutGridColumn;
        readonly containerAsListView: pages.ListView;
        readonly containerAsListViewTemplate: pages.ListViewTemplate;
        readonly containerAsMasterDetailRegion: pages.MasterDetailRegion;
        readonly containerAsNativeLayoutContent: pages.NativeLayoutContent;
        readonly containerAsNavigationListItem: pages.NavigationListItem;
        readonly containerAsScrollContainerRegion: pages.ScrollContainerRegion;
        readonly containerAsSnippet: pages.Snippet;
        readonly containerAsSplitPane: pages.SplitPane;
        readonly containerAsTabPage: pages.TabPage;
        readonly containerAsTableCell: pages.TableCell;
        readonly containerAsTemplateGridContents: pages.TemplateGridContents;
        readonly containerAsVerticalFlow: pages.VerticalFlow;
        readonly containerAsWebLayoutContent: pages.WebLayoutContent;
        readonly containerAsReportPane: ReportPane;
        type: ChartType;
        readonly seriess: internal.IList<ReportChartSeries>;
        xAxisCaption: texts.Text;
        yAxisCaption: texts.Text;
        xAxisColumn: string;
        xAxisFormat: ColumnFormat;
        yAxisPrecision: number;
        yAxisUseMinMax: boolean;
        yAxisMinimum: number;
        yAxisMaximum: number;
        aspectRatio: AspectRatio;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.2.0 and higher
         */
        static createInWidgetValueUnderWidgets(container: customwidgets.WidgetValue): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'headerWidget' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container: nativepages.NativeLayout): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container: nativepages.NativeLayout): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container: nativepages.NativeLayoutCallArgument): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 to 7.14.0
         */
        static createInBuildingBlockUnderWidget(container: pages.BuildingBlock): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInBuildingBlockUnderWidgets(container: pages.BuildingBlock): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.14.0
         */
        static createInDataViewUnderFooterWidget(container: pages.DataView): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderFooterWidgets(container: pages.DataView): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDataViewUnderWidget(container: pages.DataView): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderWidgets(container: pages.DataView): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDivContainerUnderWidget(container: pages.DivContainer): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDivContainerUnderWidgets(container: pages.DivContainer): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInGroupBoxUnderWidget(container: pages.GroupBox): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInGroupBoxUnderWidgets(container: pages.GroupBox): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderLeftWidget(container: pages.Header): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderLeftWidgets(container: pages.Header): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderRightWidget(container: pages.Header): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderRightWidgets(container: pages.Header): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutUnderWidget(container: pages.Layout): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container: pages.Layout): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutCallArgumentUnderWidget(container: pages.LayoutCallArgument): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutCallArgumentUnderWidgets(container: pages.LayoutCallArgument): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutGridColumnUnderWidget(container: pages.LayoutGridColumn): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutGridColumnUnderWidgets(container: pages.LayoutGridColumn): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewUnderWidget(container: pages.ListView): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewUnderWidgets(container: pages.ListView): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewTemplateUnderWidget(container: pages.ListViewTemplate): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewTemplateUnderWidgets(container: pages.ListViewTemplate): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.MasterDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailRegionUnderWidget(container: pages.MasterDetailRegion): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInNativeLayoutContentUnderWidgets(container: pages.NativeLayoutContent): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInNavigationListItemUnderWidget(container: pages.NavigationListItem): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInNavigationListItemUnderWidgets(container: pages.NavigationListItem): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInScrollContainerRegionUnderWidget(container: pages.ScrollContainerRegion): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInScrollContainerRegionUnderWidgets(container: pages.ScrollContainerRegion): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSnippetUnderWidget(container: pages.Snippet): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInSnippetUnderWidgets(container: pages.Snippet): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderFirstWidget(container: pages.SplitPane): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container: pages.SplitPane): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderSecondWidget(container: pages.SplitPane): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container: pages.SplitPane): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTabPageUnderWidget(container: pages.TabPage): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTabPageUnderWidgets(container: pages.TabPage): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTableCellUnderWidget(container: pages.TableCell): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTableCellUnderWidgets(container: pages.TableCell): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTemplateGridContentsUnderWidget(container: pages.TemplateGridContents): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTemplateGridContentsUnderWidgets(container: pages.TemplateGridContents): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInVerticalFlowUnderWidgets(container: pages.VerticalFlow): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'widgets' property
         * of the parent pages.WebLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebLayoutContentUnderWidgets(container: pages.WebLayoutContent): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'parameterWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container: ReportPane): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * The new ReportChart will be automatically stored in the 'reportWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container: ReportPane): ReportChart;
        /**
         * Creates and returns a new ReportChart instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReportChart;
    }
    class ReportChartSeries extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsReportChart: ReportChart;
        caption: texts.Text;
        dataSetColumn: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReportChartSeries instance in the SDK and on the server.
         * The new ReportChartSeries will be automatically stored in the 'seriess' property
         * of the parent ReportChart element passed as argument.
         */
        static createIn(container: ReportChart): ReportChartSeries;
        /**
         * Creates and returns a new ReportChartSeries instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReportChartSeries;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/date-range-field relevant section in reference guide}
     */
    class ReportDateRangeField extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsReportDateRangeSelector: ReportDateRangeSelector;
        caption: texts.Text;
        type: DateRangeFieldEnum;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReportDateRangeField instance in the SDK and on the server.
         * The new ReportDateRangeField will be automatically stored in the 'fields' property
         * of the parent ReportDateRangeSelector element passed as argument.
         */
        static createIn(container: ReportDateRangeSelector): ReportDateRangeField;
        /**
         * Creates and returns a new ReportDateRangeField instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReportDateRangeField;
    }
    abstract class ReportParameter extends pages.Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetValue: customwidgets.WidgetValue;
        readonly containerAsNativeLayout: nativepages.NativeLayout;
        readonly containerAsNativeLayoutCallArgument: nativepages.NativeLayoutCallArgument;
        readonly containerAsBuildingBlock: pages.BuildingBlock;
        readonly containerAsDataView: pages.DataView;
        readonly containerAsDivContainer: pages.DivContainer;
        readonly containerAsGroupBox: pages.GroupBox;
        readonly containerAsHeader: pages.Header;
        readonly containerAsLayout: pages.Layout;
        readonly containerAsLayoutCallArgument: pages.LayoutCallArgument;
        readonly containerAsLayoutGridColumn: pages.LayoutGridColumn;
        readonly containerAsListView: pages.ListView;
        readonly containerAsListViewTemplate: pages.ListViewTemplate;
        readonly containerAsMasterDetailRegion: pages.MasterDetailRegion;
        readonly containerAsNativeLayoutContent: pages.NativeLayoutContent;
        readonly containerAsNavigationListItem: pages.NavigationListItem;
        readonly containerAsScrollContainerRegion: pages.ScrollContainerRegion;
        readonly containerAsSnippet: pages.Snippet;
        readonly containerAsSplitPane: pages.SplitPane;
        readonly containerAsTabPage: pages.TabPage;
        readonly containerAsTableCell: pages.TableCell;
        readonly containerAsTemplateGridContents: pages.TemplateGridContents;
        readonly containerAsVerticalFlow: pages.VerticalFlow;
        readonly containerAsWebLayoutContent: pages.WebLayoutContent;
        readonly containerAsReportPane: ReportPane;
        /**
         * In version 6.10.0: introduced
         */
        parameter: datasets.IDataSetParameter | null;
        readonly parameterQualifiedName: string | null;
        /**
         * In version 6.10.0: deleted
         */
        parameterName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/report-date-parameter relevant section in reference guide}
     */
    class ReportDateRangeSelector extends ReportParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetValue: customwidgets.WidgetValue;
        readonly containerAsNativeLayout: nativepages.NativeLayout;
        readonly containerAsNativeLayoutCallArgument: nativepages.NativeLayoutCallArgument;
        readonly containerAsBuildingBlock: pages.BuildingBlock;
        readonly containerAsDataView: pages.DataView;
        readonly containerAsDivContainer: pages.DivContainer;
        readonly containerAsGroupBox: pages.GroupBox;
        readonly containerAsHeader: pages.Header;
        readonly containerAsLayout: pages.Layout;
        readonly containerAsLayoutCallArgument: pages.LayoutCallArgument;
        readonly containerAsLayoutGridColumn: pages.LayoutGridColumn;
        readonly containerAsListView: pages.ListView;
        readonly containerAsListViewTemplate: pages.ListViewTemplate;
        readonly containerAsMasterDetailRegion: pages.MasterDetailRegion;
        readonly containerAsNativeLayoutContent: pages.NativeLayoutContent;
        readonly containerAsNavigationListItem: pages.NavigationListItem;
        readonly containerAsScrollContainerRegion: pages.ScrollContainerRegion;
        readonly containerAsSnippet: pages.Snippet;
        readonly containerAsSplitPane: pages.SplitPane;
        readonly containerAsTabPage: pages.TabPage;
        readonly containerAsTableCell: pages.TableCell;
        readonly containerAsTemplateGridContents: pages.TemplateGridContents;
        readonly containerAsVerticalFlow: pages.VerticalFlow;
        readonly containerAsWebLayoutContent: pages.WebLayoutContent;
        readonly containerAsReportPane: ReportPane;
        readonly fields: internal.IList<ReportDateRangeField>;
        minYear: number;
        maxYear: number;
        fieldsPerRow: number;
        showFromToRange: boolean;
        fromCaption: texts.Text;
        toCaption: texts.Text;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.2.0 and higher
         */
        static createInWidgetValueUnderWidgets(container: customwidgets.WidgetValue): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'headerWidget' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container: nativepages.NativeLayout): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container: nativepages.NativeLayout): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container: nativepages.NativeLayoutCallArgument): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 to 7.14.0
         */
        static createInBuildingBlockUnderWidget(container: pages.BuildingBlock): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInBuildingBlockUnderWidgets(container: pages.BuildingBlock): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.14.0
         */
        static createInDataViewUnderFooterWidget(container: pages.DataView): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderFooterWidgets(container: pages.DataView): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDataViewUnderWidget(container: pages.DataView): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderWidgets(container: pages.DataView): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDivContainerUnderWidget(container: pages.DivContainer): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDivContainerUnderWidgets(container: pages.DivContainer): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInGroupBoxUnderWidget(container: pages.GroupBox): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInGroupBoxUnderWidgets(container: pages.GroupBox): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderLeftWidget(container: pages.Header): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderLeftWidgets(container: pages.Header): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderRightWidget(container: pages.Header): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderRightWidgets(container: pages.Header): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutUnderWidget(container: pages.Layout): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container: pages.Layout): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutCallArgumentUnderWidget(container: pages.LayoutCallArgument): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutCallArgumentUnderWidgets(container: pages.LayoutCallArgument): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutGridColumnUnderWidget(container: pages.LayoutGridColumn): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutGridColumnUnderWidgets(container: pages.LayoutGridColumn): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewUnderWidget(container: pages.ListView): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewUnderWidgets(container: pages.ListView): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewTemplateUnderWidget(container: pages.ListViewTemplate): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewTemplateUnderWidgets(container: pages.ListViewTemplate): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.MasterDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailRegionUnderWidget(container: pages.MasterDetailRegion): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInNativeLayoutContentUnderWidgets(container: pages.NativeLayoutContent): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInNavigationListItemUnderWidget(container: pages.NavigationListItem): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInNavigationListItemUnderWidgets(container: pages.NavigationListItem): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInScrollContainerRegionUnderWidget(container: pages.ScrollContainerRegion): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInScrollContainerRegionUnderWidgets(container: pages.ScrollContainerRegion): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSnippetUnderWidget(container: pages.Snippet): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInSnippetUnderWidgets(container: pages.Snippet): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderFirstWidget(container: pages.SplitPane): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container: pages.SplitPane): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderSecondWidget(container: pages.SplitPane): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container: pages.SplitPane): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTabPageUnderWidget(container: pages.TabPage): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTabPageUnderWidgets(container: pages.TabPage): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTableCellUnderWidget(container: pages.TableCell): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTableCellUnderWidgets(container: pages.TableCell): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTemplateGridContentsUnderWidget(container: pages.TemplateGridContents): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTemplateGridContentsUnderWidgets(container: pages.TemplateGridContents): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInVerticalFlowUnderWidgets(container: pages.VerticalFlow): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'widgets' property
         * of the parent pages.WebLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebLayoutContentUnderWidgets(container: pages.WebLayoutContent): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'parameterWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container: ReportPane): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * The new ReportDateRangeSelector will be automatically stored in the 'reportWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container: ReportPane): ReportDateRangeSelector;
        /**
         * Creates and returns a new ReportDateRangeSelector instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReportDateRangeSelector;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/report-parameter relevant section in reference guide}
     */
    class ReportDropDown extends ReportParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetValue: customwidgets.WidgetValue;
        readonly containerAsNativeLayout: nativepages.NativeLayout;
        readonly containerAsNativeLayoutCallArgument: nativepages.NativeLayoutCallArgument;
        readonly containerAsBuildingBlock: pages.BuildingBlock;
        readonly containerAsDataView: pages.DataView;
        readonly containerAsDivContainer: pages.DivContainer;
        readonly containerAsGroupBox: pages.GroupBox;
        readonly containerAsHeader: pages.Header;
        readonly containerAsLayout: pages.Layout;
        readonly containerAsLayoutCallArgument: pages.LayoutCallArgument;
        readonly containerAsLayoutGridColumn: pages.LayoutGridColumn;
        readonly containerAsListView: pages.ListView;
        readonly containerAsListViewTemplate: pages.ListViewTemplate;
        readonly containerAsMasterDetailRegion: pages.MasterDetailRegion;
        readonly containerAsNativeLayoutContent: pages.NativeLayoutContent;
        readonly containerAsNavigationListItem: pages.NavigationListItem;
        readonly containerAsScrollContainerRegion: pages.ScrollContainerRegion;
        readonly containerAsSnippet: pages.Snippet;
        readonly containerAsSplitPane: pages.SplitPane;
        readonly containerAsTabPage: pages.TabPage;
        readonly containerAsTableCell: pages.TableCell;
        readonly containerAsTemplateGridContents: pages.TemplateGridContents;
        readonly containerAsVerticalFlow: pages.VerticalFlow;
        readonly containerAsWebLayoutContent: pages.WebLayoutContent;
        readonly containerAsReportPane: ReportPane;
        attribute: domainmodels.IAttribute | null;
        readonly attributeQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.2.0 and higher
         */
        static createInWidgetValueUnderWidgets(container: customwidgets.WidgetValue): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'headerWidget' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container: nativepages.NativeLayout): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container: nativepages.NativeLayout): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container: nativepages.NativeLayoutCallArgument): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 to 7.14.0
         */
        static createInBuildingBlockUnderWidget(container: pages.BuildingBlock): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInBuildingBlockUnderWidgets(container: pages.BuildingBlock): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.14.0
         */
        static createInDataViewUnderFooterWidget(container: pages.DataView): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderFooterWidgets(container: pages.DataView): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDataViewUnderWidget(container: pages.DataView): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderWidgets(container: pages.DataView): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDivContainerUnderWidget(container: pages.DivContainer): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDivContainerUnderWidgets(container: pages.DivContainer): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInGroupBoxUnderWidget(container: pages.GroupBox): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInGroupBoxUnderWidgets(container: pages.GroupBox): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderLeftWidget(container: pages.Header): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderLeftWidgets(container: pages.Header): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderRightWidget(container: pages.Header): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderRightWidgets(container: pages.Header): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutUnderWidget(container: pages.Layout): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container: pages.Layout): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutCallArgumentUnderWidget(container: pages.LayoutCallArgument): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutCallArgumentUnderWidgets(container: pages.LayoutCallArgument): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutGridColumnUnderWidget(container: pages.LayoutGridColumn): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutGridColumnUnderWidgets(container: pages.LayoutGridColumn): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewUnderWidget(container: pages.ListView): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewUnderWidgets(container: pages.ListView): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewTemplateUnderWidget(container: pages.ListViewTemplate): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewTemplateUnderWidgets(container: pages.ListViewTemplate): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.MasterDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailRegionUnderWidget(container: pages.MasterDetailRegion): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInNativeLayoutContentUnderWidgets(container: pages.NativeLayoutContent): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInNavigationListItemUnderWidget(container: pages.NavigationListItem): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInNavigationListItemUnderWidgets(container: pages.NavigationListItem): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInScrollContainerRegionUnderWidget(container: pages.ScrollContainerRegion): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInScrollContainerRegionUnderWidgets(container: pages.ScrollContainerRegion): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSnippetUnderWidget(container: pages.Snippet): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInSnippetUnderWidgets(container: pages.Snippet): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderFirstWidget(container: pages.SplitPane): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container: pages.SplitPane): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderSecondWidget(container: pages.SplitPane): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container: pages.SplitPane): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTabPageUnderWidget(container: pages.TabPage): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTabPageUnderWidgets(container: pages.TabPage): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTableCellUnderWidget(container: pages.TableCell): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTableCellUnderWidgets(container: pages.TableCell): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTemplateGridContentsUnderWidget(container: pages.TemplateGridContents): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTemplateGridContentsUnderWidgets(container: pages.TemplateGridContents): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInVerticalFlowUnderWidgets(container: pages.VerticalFlow): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'widgets' property
         * of the parent pages.WebLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebLayoutContentUnderWidgets(container: pages.WebLayoutContent): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'parameterWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container: ReportPane): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * The new ReportDropDown will be automatically stored in the 'reportWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container: ReportPane): ReportDropDown;
        /**
         * Creates and returns a new ReportDropDown instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReportDropDown;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/report-pane relevant section in reference guide}
     *
     * In version 6.10.0: deleted
     */
    class ReportPane extends pages.Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDataView: pages.DataView;
        readonly containerAsDivContainer: pages.DivContainer;
        readonly containerAsGroupBox: pages.GroupBox;
        readonly containerAsHeader: pages.Header;
        readonly containerAsLayout: pages.Layout;
        readonly containerAsLayoutCallArgument: pages.LayoutCallArgument;
        readonly containerAsLayoutGridColumn: pages.LayoutGridColumn;
        readonly containerAsListView: pages.ListView;
        readonly containerAsListViewTemplate: pages.ListViewTemplate;
        readonly containerAsNavigationListItem: pages.NavigationListItem;
        readonly containerAsScrollContainerRegion: pages.ScrollContainerRegion;
        readonly containerAsSnippet: pages.Snippet;
        readonly containerAsSplitPane: pages.SplitPane;
        readonly containerAsTabPage: pages.TabPage;
        readonly containerAsTableCell: pages.TableCell;
        readonly containerAsTemplateGridContents: pages.TemplateGridContents;
        readonly containerAsVerticalFlow: pages.VerticalFlow;
        readonly containerAsReportPane: ReportPane;
        parameterWidget: pages.Widget | null;
        reportWidget: pages.Widget | null;
        generateOnLoad: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 6.9.0
         */
        static createInDataViewUnderFooterWidget(container: pages.DataView): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInDataViewUnderWidget(container: pages.DataView): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInDivContainerUnderWidget(container: pages.DivContainer): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInGroupBoxUnderWidget(container: pages.GroupBox): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInHeaderUnderLeftWidget(container: pages.Header): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInHeaderUnderRightWidget(container: pages.Header): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInLayoutUnderWidget(container: pages.Layout): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInLayoutCallArgumentUnderWidget(container: pages.LayoutCallArgument): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInLayoutGridColumnUnderWidget(container: pages.LayoutGridColumn): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInListViewUnderWidget(container: pages.ListView): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInListViewTemplateUnderWidget(container: pages.ListViewTemplate): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInNavigationListItemUnderWidget(container: pages.NavigationListItem): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInScrollContainerRegionUnderWidget(container: pages.ScrollContainerRegion): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInSnippetUnderWidget(container: pages.Snippet): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInSplitPaneUnderFirstWidget(container: pages.SplitPane): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInSplitPaneUnderSecondWidget(container: pages.SplitPane): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInTabPageUnderWidget(container: pages.TabPage): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInTableCellUnderWidget(container: pages.TableCell): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInTemplateGridContentsUnderWidget(container: pages.TemplateGridContents): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInVerticalFlowUnderWidgets(container: pages.VerticalFlow): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'parameterWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container: ReportPane): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * The new ReportPane will be automatically stored in the 'reportWidget' property
         * of the parent ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container: ReportPane): ReportPane;
        /**
         * Creates and returns a new ReportPane instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReportPane;
    }
    class ReportZoomInfo extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsBasicReport: BasicReport;
        targetPage: pages.IPage | null;
        readonly targetPageQualifiedName: string | null;
        readonly mappings: internal.IList<ReportZoomMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReportZoomInfo instance in the SDK and on the server.
         * The new ReportZoomInfo will be automatically stored in the 'zoomInfo' property
         * of the parent BasicReport element passed as argument.
         */
        static createIn(container: BasicReport): ReportZoomInfo;
        /**
         * Creates and returns a new ReportZoomInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReportZoomInfo;
    }
    class ReportZoomMapping extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsReportZoomInfo: ReportZoomInfo;
        targetParameterName: string;
        sourceReportColumnName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReportZoomMapping instance in the SDK and on the server.
         * The new ReportZoomMapping will be automatically stored in the 'mappings' property
         * of the parent ReportZoomInfo element passed as argument.
         */
        static createIn(container: ReportZoomInfo): ReportZoomMapping;
        /**
         * Creates and returns a new ReportZoomMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReportZoomMapping;
    }
}
import { customwidgets } from "./customwidgets";
import { datasets } from "./datasets";
import { domainmodels } from "./domainmodels";
import { nativepages } from "./nativepages";
import { texts } from "./texts";
import { IModel } from "./base-model";
