import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { pages } from "./pages";
export declare namespace customwidgets {
    class CustomWidgetAttributeType extends internal.AbstractEnum {
        static AutoNumber: CustomWidgetAttributeType;
        static Binary: CustomWidgetAttributeType;
        static Boolean: CustomWidgetAttributeType;
        static Currency: CustomWidgetAttributeType;
        static DateTime: CustomWidgetAttributeType;
        static Enum: CustomWidgetAttributeType;
        static Float: CustomWidgetAttributeType;
        static HashString: CustomWidgetAttributeType;
        static Integer: CustomWidgetAttributeType;
        static Long: CustomWidgetAttributeType;
        static String: CustomWidgetAttributeType;
        static Decimal: CustomWidgetAttributeType;
        protected qualifiedTsTypeName: string;
    }
    class IsPath extends internal.AbstractEnum {
        static No: IsPath;
        static Optional: IsPath;
        static Yes: IsPath;
        protected qualifiedTsTypeName: string;
    }
    class PathType extends internal.AbstractEnum {
        static None: PathType;
        static Reference: PathType;
        static ReferenceSet: PathType;
        protected qualifiedTsTypeName: string;
    }
    class SystemPropertyEnum extends internal.AbstractEnum {
        static Label: SystemPropertyEnum;
        static Name: SystemPropertyEnum;
        static TabIndex: SystemPropertyEnum;
        static Editability: SystemPropertyEnum;
        static Visibility: SystemPropertyEnum;
        protected qualifiedTsTypeName: string;
    }
    class WidgetReturnTypeEnum extends internal.AbstractEnum {
        static Void: WidgetReturnTypeEnum;
        static Boolean: WidgetReturnTypeEnum;
        static Integer: WidgetReturnTypeEnum;
        static Float: WidgetReturnTypeEnum;
        static DateTime: WidgetReturnTypeEnum;
        static String: WidgetReturnTypeEnum;
        static Object: WidgetReturnTypeEnum;
        static Decimal: WidgetReturnTypeEnum;
        protected qualifiedTsTypeName: string;
    }
    class WidgetValueTypeEnum extends internal.AbstractEnum {
        static Action: WidgetValueTypeEnum;
        static Attribute: WidgetValueTypeEnum;
        static Boolean: WidgetValueTypeEnum;
        static DataSource: WidgetValueTypeEnum;
        static Entity: WidgetValueTypeEnum;
        static EntityConstraint: WidgetValueTypeEnum;
        static Enumeration: WidgetValueTypeEnum;
        static Expression: WidgetValueTypeEnum;
        static Form: WidgetValueTypeEnum;
        static Icon: WidgetValueTypeEnum;
        static Image: WidgetValueTypeEnum;
        static Integer: WidgetValueTypeEnum;
        static Microflow: WidgetValueTypeEnum;
        static Nanoflow: WidgetValueTypeEnum;
        static Object: WidgetValueTypeEnum;
        static String: WidgetValueTypeEnum;
        static TranslatableString: WidgetValueTypeEnum;
        static TextTemplate: WidgetValueTypeEnum;
        static System: WidgetValueTypeEnum;
        static Widgets: WidgetValueTypeEnum;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `CustomWidgets`.
     */
    class CustomWidget extends pages.Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetValue: WidgetValue;
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
        readonly containerAsReportPane: reports.ReportPane;
        type: CustomWidgetType | null;
        object: WidgetObject | null;
        /**
         * In version 8.1.0: introduced
         */
        labelTemplate: pages.ClientTemplate | null;
        /**
         * In version 8.1.0: introduced
         */
        conditionalEditabilitySettings: pages.ConditionalEditabilitySettings | null;
        /**
         * In version 8.1.0: introduced
         */
        editable: pages.EditableEnum;
        /**
         * In version 8.1.0: introduced
         */
        conditionalVisibilitySettings: pages.ConditionalVisibilitySettings | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.2.0 and higher
         */
        static createInWidgetValueUnderWidgets(container: WidgetValue): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'headerWidget' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container: nativepages.NativeLayout): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container: nativepages.NativeLayout): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent nativepages.NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container: nativepages.NativeLayoutCallArgument): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 to 7.14.0
         */
        static createInBuildingBlockUnderWidget(container: pages.BuildingBlock): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInBuildingBlockUnderWidgets(container: pages.BuildingBlock): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'footerWidget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.14.0
         */
        static createInDataViewUnderFooterWidget(container: pages.DataView): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderFooterWidgets(container: pages.DataView): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDataViewUnderWidget(container: pages.DataView): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDataViewUnderWidgets(container: pages.DataView): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInDivContainerUnderWidget(container: pages.DivContainer): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInDivContainerUnderWidgets(container: pages.DivContainer): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInGroupBoxUnderWidget(container: pages.GroupBox): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInGroupBoxUnderWidgets(container: pages.GroupBox): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'leftWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderLeftWidget(container: pages.Header): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderLeftWidgets(container: pages.Header): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'rightWidget' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInHeaderUnderRightWidget(container: pages.Header): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInHeaderUnderRightWidgets(container: pages.Header): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutUnderWidget(container: pages.Layout): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container: pages.Layout): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutCallArgumentUnderWidget(container: pages.LayoutCallArgument): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutCallArgumentUnderWidgets(container: pages.LayoutCallArgument): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInLayoutGridColumnUnderWidget(container: pages.LayoutGridColumn): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInLayoutGridColumnUnderWidgets(container: pages.LayoutGridColumn): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewUnderWidget(container: pages.ListView): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewUnderWidgets(container: pages.ListView): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInListViewTemplateUnderWidget(container: pages.ListViewTemplate): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInListViewTemplateUnderWidgets(container: pages.ListViewTemplate): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.MasterDetailRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.1.0 to 7.14.0
         */
        static createInMasterDetailRegionUnderWidget(container: pages.MasterDetailRegion): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.NativeLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInNativeLayoutContentUnderWidgets(container: pages.NativeLayoutContent): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInNavigationListItemUnderWidget(container: pages.NavigationListItem): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInNavigationListItemUnderWidgets(container: pages.NavigationListItem): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInScrollContainerRegionUnderWidget(container: pages.ScrollContainerRegion): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInScrollContainerRegionUnderWidgets(container: pages.ScrollContainerRegion): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSnippetUnderWidget(container: pages.Snippet): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInSnippetUnderWidgets(container: pages.Snippet): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'firstWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderFirstWidget(container: pages.SplitPane): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container: pages.SplitPane): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'secondWidget' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInSplitPaneUnderSecondWidget(container: pages.SplitPane): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container: pages.SplitPane): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTabPageUnderWidget(container: pages.TabPage): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTabPageUnderWidgets(container: pages.TabPage): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTableCellUnderWidget(container: pages.TableCell): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTableCellUnderWidgets(container: pages.TableCell): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widget' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInTemplateGridContentsUnderWidget(container: pages.TemplateGridContents): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInTemplateGridContentsUnderWidgets(container: pages.TemplateGridContents): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.VerticalFlow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.14.0
         */
        static createInVerticalFlowUnderWidgets(container: pages.VerticalFlow): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'widgets' property
         * of the parent pages.WebLayoutContent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebLayoutContentUnderWidgets(container: pages.WebLayoutContent): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'parameterWidget' property
         * of the parent reports.ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderParameterWidget(container: reports.ReportPane): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * The new CustomWidget will be automatically stored in the 'reportWidget' property
         * of the parent reports.ReportPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.9.0
         */
        static createInReportPaneUnderReportWidget(container: reports.ReportPane): CustomWidget;
        /**
         * Creates and returns a new CustomWidget instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CustomWidget;
    }
    class CustomWidgetType extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsCustomWidget: CustomWidget;
        widgetId: string;
        needsEntityContext: boolean;
        /**
         * In version 7.19.0: introduced
         */
        pluginWidget: boolean;
        name: string;
        description: string;
        /**
         * In version 8.0.0: introduced
         */
        supportedPlatform: client.SupportedPlatform;
        phoneGapEnabled: boolean;
        offlineCapable: boolean;
        /**
         * In version 7.1.0: deleted
         * In version 7.0.0: introduced
         */
        experimentalApi: boolean;
        objectType: WidgetObjectType;
        /**
         * In version 8.0.0: deleted
         * In version 7.23.0: introduced
         */
        labeled: boolean;
        /**
         * In version 8.3.0: introduced
         */
        helpUrl: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CustomWidgetType instance in the SDK and on the server.
         * The new CustomWidgetType will be automatically stored in the 'type' property
         * of the parent CustomWidget element passed as argument.
         */
        static createIn(container: CustomWidget): CustomWidgetType;
        /**
         * Creates and returns a new CustomWidgetType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CustomWidgetType;
    }
    class WidgetEnumerationValue extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetValueType: WidgetValueType;
        key: string;
        caption: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WidgetEnumerationValue instance in the SDK and on the server.
         * The new WidgetEnumerationValue will be automatically stored in the 'enumerationValues' property
         * of the parent WidgetValueType element passed as argument.
         */
        static createIn(container: WidgetValueType): WidgetEnumerationValue;
        /**
         * Creates and returns a new WidgetEnumerationValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WidgetEnumerationValue;
    }
    class WidgetObject extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsCustomWidget: CustomWidget;
        readonly containerAsWidgetValue: WidgetValue;
        /**
         * In version 7.13.0: added optional
         */
        type: WidgetObjectType | null;
        readonly properties: internal.IList<WidgetProperty>;
        /**
         * In version 8.1.0: deleted
         * In version 7.23.0: introduced
         */
        labelTemplate: pages.ClientTemplate | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WidgetObject instance in the SDK and on the server.
         * The new WidgetObject will be automatically stored in the 'object' property
         * of the parent CustomWidget element passed as argument.
         */
        static createInCustomWidgetUnderObject(container: CustomWidget): WidgetObject;
        /**
         * Creates and returns a new WidgetObject instance in the SDK and on the server.
         * The new WidgetObject will be automatically stored in the 'objects' property
         * of the parent WidgetValue element passed as argument.
         */
        static createInWidgetValueUnderObjects(container: WidgetValue): WidgetObject;
        /**
         * Creates and returns a new WidgetObject instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WidgetObject;
    }
    class WidgetObjectType extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsCustomWidgetType: CustomWidgetType;
        readonly containerAsWidgetValueType: WidgetValueType;
        readonly propertyTypes: internal.IList<WidgetPropertyType>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WidgetObjectType instance in the SDK and on the server.
         * The new WidgetObjectType will be automatically stored in the 'objectType' property
         * of the parent CustomWidgetType element passed as argument.
         */
        static createInCustomWidgetTypeUnderObjectType(container: CustomWidgetType): WidgetObjectType;
        /**
         * Creates and returns a new WidgetObjectType instance in the SDK and on the server.
         * The new WidgetObjectType will be automatically stored in the 'objectType' property
         * of the parent WidgetValueType element passed as argument.
         */
        static createInWidgetValueTypeUnderObjectType(container: WidgetValueType): WidgetObjectType;
        /**
         * Creates and returns a new WidgetObjectType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WidgetObjectType;
    }
    class WidgetProperty extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetObject: WidgetObject;
        /**
         * In version 7.13.0: added optional
         */
        type: WidgetPropertyType | null;
        /**
         * In version 7.13.0: added optional
         */
        value: WidgetValue | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WidgetProperty instance in the SDK and on the server.
         * The new WidgetProperty will be automatically stored in the 'properties' property
         * of the parent WidgetObject element passed as argument.
         */
        static createIn(container: WidgetObject): WidgetProperty;
        /**
         * Creates and returns a new WidgetProperty instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WidgetProperty;
    }
    class WidgetPropertyType extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetObjectType: WidgetObjectType;
        key: string;
        category: string;
        caption: string;
        description: string;
        isDefault: boolean;
        /**
         * In version 7.13.0: added optional
         */
        valueType: WidgetValueType | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WidgetPropertyType instance in the SDK and on the server.
         * The new WidgetPropertyType will be automatically stored in the 'propertyTypes' property
         * of the parent WidgetObjectType element passed as argument.
         */
        static createIn(container: WidgetObjectType): WidgetPropertyType;
        /**
         * Creates and returns a new WidgetPropertyType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WidgetPropertyType;
    }
    class WidgetReturnType extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetValueType: WidgetValueType;
        type: WidgetReturnTypeEnum;
        isList: boolean;
        entityProperty: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WidgetReturnType instance in the SDK and on the server.
         * The new WidgetReturnType will be automatically stored in the 'returnType' property
         * of the parent WidgetValueType element passed as argument.
         */
        static createIn(container: WidgetValueType): WidgetReturnType;
        /**
         * Creates and returns a new WidgetReturnType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WidgetReturnType;
    }
    class WidgetTranslation extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetValueType: WidgetValueType;
        languageCode: string;
        text: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WidgetTranslation instance in the SDK and on the server.
         * The new WidgetTranslation will be automatically stored in the 'translations' property
         * of the parent WidgetValueType element passed as argument.
         */
        static createIn(container: WidgetValueType): WidgetTranslation;
        /**
         * Creates and returns a new WidgetTranslation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WidgetTranslation;
    }
    class WidgetValue extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetProperty: WidgetProperty;
        type: WidgetValueType;
        primitiveValue: string;
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
        page: pages.IPage | null;
        readonly pageQualifiedName: string | null;
        microflow: microflows.IMicroflow | null;
        readonly microflowQualifiedName: string | null;
        /**
         * In version 7.13.0: introduced
         */
        nanoflow: microflows.INanoflow | null;
        readonly nanoflowQualifiedName: string | null;
        /**
         * In version 8.0.0: introduced
         */
        icon: pages.Icon | null;
        image: images.IImage | null;
        readonly imageQualifiedName: string | null;
        translatableValue: texts.Text | null;
        /**
         * In version 7.23.0: introduced
         */
        textTemplate: pages.ClientTemplate | null;
        /**
         * The value of this property is conceptually of type xPathConstraints.XPathConstraint.
         */
        xPathConstraint: string;
        readonly objects: internal.IList<WidgetObject>;
        /**
         * In version 7.19.0: introduced
         */
        action: pages.ClientAction;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 8.0.0: introduced
         */
        expression: string;
        /**
         * In version 8.2.0: introduced
         */
        readonly widgets: internal.IList<pages.Widget>;
        /**
         * In version 8.3.0: introduced
         */
        dataSource: pages.DataSource | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WidgetValue instance in the SDK and on the server.
         * The new WidgetValue will be automatically stored in the 'value' property
         * of the parent WidgetProperty element passed as argument.
         */
        static createIn(container: WidgetProperty): WidgetValue;
        /**
         * Creates and returns a new WidgetValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WidgetValue;
    }
    class WidgetValueType extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetPropertyType: WidgetPropertyType;
        type: WidgetValueTypeEnum;
        isList: boolean;
        entityProperty: string;
        allowNonPersistableEntities: boolean;
        isPath: IsPath;
        pathType: PathType;
        parameterIsList: boolean;
        multiline: boolean;
        defaultValue: string;
        required: boolean;
        /**
         * In version 8.0.0: introduced
         */
        onChangeProperty: string;
        readonly attributeTypes: internal.IList<CustomWidgetAttributeType>;
        readonly enumerationValues: internal.IList<WidgetEnumerationValue>;
        objectType: WidgetObjectType | null;
        returnType: WidgetReturnType | null;
        readonly translations: internal.IList<WidgetTranslation>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WidgetValueType instance in the SDK and on the server.
         * The new WidgetValueType will be automatically stored in the 'valueType' property
         * of the parent WidgetPropertyType element passed as argument.
         */
        static createIn(container: WidgetPropertyType): WidgetValueType;
        /**
         * Creates and returns a new WidgetValueType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WidgetValueType;
    }
}
import { client } from "./client";
import { domainmodels } from "./domainmodels";
import { images } from "./images";
import { microflows } from "./microflows";
import { nativepages } from "./nativepages";
import { reports } from "./reports";
import { texts } from "./texts";
import { IModel } from "./base-model";
