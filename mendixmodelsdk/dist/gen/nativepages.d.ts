import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { pages } from "./pages";
export declare namespace nativepages {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `NativePages`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.0.0: introduced
     */
    class BottomBarItem extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsNativeNavigationProfile: navigation.NativeNavigationProfile;
        caption: texts.Text;
        icon: pages.Icon | null;
        action: pages.ClientAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BottomBarItem instance in the SDK and on the server.
         * The new BottomBarItem will be automatically stored in the 'bottomBarItems' property
         * of the parent navigation.NativeNavigationProfile element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createIn(container: navigation.NativeNavigationProfile): BottomBarItem;
        /**
         * Creates and returns a new BottomBarItem instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BottomBarItem;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.0.0: deleted
     * In version 7.21.0: introduced
     */
    interface INativeLayout extends pages.IFormBase {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): NativeLayout;
        load(callback: (element: NativeLayout) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<NativeLayout>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.0.0: deleted
     * In version 7.21.0: introduced
     */
    class NativeLayout extends pages.FormBase implements INativeLayout {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        readonly widgets: internal.IList<pages.Widget>;
        /**
         * In version 7.22.0: introduced
         */
        headerWidget: pages.Widget | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new NativeLayout unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): NativeLayout;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.0.0: deleted
     * In version 7.23.0: introduced
     */
    class NativeLayoutCallArgument extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsNativePage: NativePage;
        parameter: pages.ILayoutParameter;
        readonly parameterQualifiedName: string;
        readonly widgets: internal.IList<pages.Widget>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NativeLayoutCallArgument instance in the SDK and on the server.
         * The new NativeLayoutCallArgument will be automatically stored in the 'arguments' property
         * of the parent NativePage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createIn(container: NativePage): NativeLayoutCallArgument;
        /**
         * Creates and returns a new NativeLayoutCallArgument instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NativeLayoutCallArgument;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.0.0: deleted
     * In version 7.21.0: introduced
     */
    interface INativePage extends pages.IFormBase {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): NativePage;
        load(callback: (element: NativePage) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<NativePage>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.0.0: deleted
     * In version 7.21.0: introduced
     */
    class NativePage extends pages.FormBase implements INativePage {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        layout: INativeLayout;
        readonly layoutQualifiedName: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.23.0: introduced
         */
        readonly arguments: internal.IList<NativeLayoutCallArgument>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new NativePage unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): NativePage;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.0.0: deleted
     * In version 7.23.0: introduced
     */
    class NativePageClientAction extends pages.ClientAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetValue: customwidgets.WidgetValue;
        readonly containerAsMenuItem: menus.MenuItem;
        readonly containerAsActionButton: pages.ActionButton;
        readonly containerAsActionItem: pages.ActionItem;
        readonly containerAsAssociationWidget: pages.AssociationWidget;
        readonly containerAsAttributeWidget: pages.AttributeWidget;
        readonly containerAsDynamicImageViewer: pages.DynamicImageViewer;
        readonly containerAsGridActionButton: pages.GridActionButton;
        readonly containerAsListView: pages.ListView;
        readonly containerAsReferenceSetSelector: pages.ReferenceSetSelector;
        readonly containerAsStaticImageViewer: pages.StaticImageViewer;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        page: INativePage | null;
        readonly pageQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'action' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInWidgetValueUnderAction(container: customwidgets.WidgetValue): NativePageClientAction;
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'action' property
         * of the parent menus.MenuItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInMenuItemUnderAction(container: menus.MenuItem): NativePageClientAction;
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'action' property
         * of the parent pages.ActionButton element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInActionButtonUnderAction(container: pages.ActionButton): NativePageClientAction;
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'action' property
         * of the parent pages.ActionItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInActionItemUnderAction(container: pages.ActionItem): NativePageClientAction;
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'onChangeAction' property
         * of the parent pages.AssociationWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInAssociationWidgetUnderOnChangeAction(container: pages.AssociationWidget): NativePageClientAction;
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'onChangeAction' property
         * of the parent pages.AttributeWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInAttributeWidgetUnderOnChangeAction(container: pages.AttributeWidget): NativePageClientAction;
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'onEnterAction' property
         * of the parent pages.AttributeWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInAttributeWidgetUnderOnEnterAction(container: pages.AttributeWidget): NativePageClientAction;
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'onLeaveAction' property
         * of the parent pages.AttributeWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInAttributeWidgetUnderOnLeaveAction(container: pages.AttributeWidget): NativePageClientAction;
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'clickAction' property
         * of the parent pages.DynamicImageViewer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInDynamicImageViewerUnderClickAction(container: pages.DynamicImageViewer): NativePageClientAction;
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'action' property
         * of the parent pages.GridActionButton element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInGridActionButtonUnderAction(container: pages.GridActionButton): NativePageClientAction;
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'clickAction' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInListViewUnderClickAction(container: pages.ListView): NativePageClientAction;
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'onChangeAction' property
         * of the parent pages.ReferenceSetSelector element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInReferenceSetSelectorUnderOnChangeAction(container: pages.ReferenceSetSelector): NativePageClientAction;
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * The new NativePageClientAction will be automatically stored in the 'clickAction' property
         * of the parent pages.StaticImageViewer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInStaticImageViewerUnderClickAction(container: pages.StaticImageViewer): NativePageClientAction;
        /**
         * Creates and returns a new NativePageClientAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NativePageClientAction;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.0.0: deleted
     * In version 7.23.0: introduced
     */
    class NativePlaceholder extends pages.Widget {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsNativeLayout: NativeLayout;
        readonly containerAsNativeLayoutCallArgument: NativeLayoutCallArgument;
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
        readonly containerAsNavigationListItem: pages.NavigationListItem;
        readonly containerAsScrollContainerRegion: pages.ScrollContainerRegion;
        readonly containerAsSnippet: pages.Snippet;
        readonly containerAsSplitPane: pages.SplitPane;
        readonly containerAsTabPage: pages.TabPage;
        readonly containerAsTableCell: pages.TableCell;
        readonly containerAsTemplateGridContents: pages.TemplateGridContents;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'headerWidget' property
         * of the parent NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutUnderHeaderWidget(container: NativeLayout): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent NativeLayout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutUnderWidgets(container: NativeLayout): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent NativeLayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNativeLayoutCallArgumentUnderWidgets(container: NativeLayoutCallArgument): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.BuildingBlock element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInBuildingBlockUnderWidgets(container: pages.BuildingBlock): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'footerWidgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInDataViewUnderFooterWidgets(container: pages.DataView): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.DataView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInDataViewUnderWidgets(container: pages.DataView): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.DivContainer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInDivContainerUnderWidgets(container: pages.DivContainer): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.GroupBox element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInGroupBoxUnderWidgets(container: pages.GroupBox): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'leftWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInHeaderUnderLeftWidgets(container: pages.Header): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'rightWidgets' property
         * of the parent pages.Header element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInHeaderUnderRightWidgets(container: pages.Header): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.Layout element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInLayoutUnderWidgets(container: pages.Layout): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutCallArgument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInLayoutCallArgumentUnderWidgets(container: pages.LayoutCallArgument): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.LayoutGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInLayoutGridColumnUnderWidgets(container: pages.LayoutGridColumn): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.ListView element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInListViewUnderWidgets(container: pages.ListView): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.ListViewTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInListViewTemplateUnderWidgets(container: pages.ListViewTemplate): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.NavigationListItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInNavigationListItemUnderWidgets(container: pages.NavigationListItem): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.ScrollContainerRegion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInScrollContainerRegionUnderWidgets(container: pages.ScrollContainerRegion): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.Snippet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInSnippetUnderWidgets(container: pages.Snippet): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'firstWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInSplitPaneUnderFirstWidgets(container: pages.SplitPane): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'secondWidgets' property
         * of the parent pages.SplitPane element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInSplitPaneUnderSecondWidgets(container: pages.SplitPane): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.TabPage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInTabPageUnderWidgets(container: pages.TabPage): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.TableCell element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInTableCellUnderWidgets(container: pages.TableCell): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * The new NativePlaceholder will be automatically stored in the 'widgets' property
         * of the parent pages.TemplateGridContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.23.0 to 7.23.0
         */
        static createInTemplateGridContentsUnderWidgets(container: pages.TemplateGridContents): NativePlaceholder;
        /**
         * Creates and returns a new NativePlaceholder instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NativePlaceholder;
    }
}
import { customwidgets } from "./customwidgets";
import { menus } from "./menus";
import { navigation } from "./navigation";
import { projects } from "./projects";
import { texts } from "./texts";
import { IModel } from "./base-model";
