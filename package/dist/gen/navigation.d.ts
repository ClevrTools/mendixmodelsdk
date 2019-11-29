import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace navigation {
    class DeviceType extends internal.AbstractEnum {
        static Desktop: DeviceType;
        static Tablet: DeviceType;
        static Phone: DeviceType;
        protected qualifiedTsTypeName: string;
    }
    class ProfileKind extends internal.AbstractEnum {
        static Responsive: ProfileKind;
        static Tablet: ProfileKind;
        static Phone: ProfileKind;
        static NativePhone: ProfileKind;
        static Hybrid: ProfileKind;
        static HybridOffline: ProfileKind;
        static HybridTablet: ProfileKind;
        static HybridTabletOffline: ProfileKind;
        static HybridPhone: ProfileKind;
        static HybridPhoneOffline: ProfileKind;
        protected qualifiedTsTypeName: string;
    }
    class ProfileType extends internal.AbstractEnum {
        static Desktop: ProfileType;
        static Tablet: ProfileType;
        static Phone: ProfileType;
        static HybridTablet: ProfileType;
        static HybridPhone: ProfileType;
        static OfflinePhone: ProfileType;
        static HybridPhone6: ProfileType;
        static HybridTablet6: ProfileType;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Navigation`.
     */
    abstract class HomePageBase extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsNavigationProfile: NavigationProfile;
        page: pages.IPage | null;
        readonly pageQualifiedName: string | null;
        microflow: microflows.IMicroflow | null;
        readonly microflowQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class HomePage extends HomePageBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsNavigationProfile: NavigationProfile;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new HomePage instance in the SDK and on the server.
         * The new HomePage will be automatically stored in the 'homePage' property
         * of the parent NavigationProfile element passed as argument.
         */
        static createIn(container: NavigationProfile): HomePage;
        /**
         * Creates and returns a new HomePage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): HomePage;
    }
    interface INavigationProfileBase extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsNavigationDocument: INavigationDocument;
        /**
         * In version 7.2.0: introduced
         */
        readonly name: string;
        asLoaded(): NavigationProfileBase;
        load(callback: (element: NavigationProfileBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<NavigationProfileBase>;
    }
    abstract class NavigationProfileBase extends internal.Element implements INavigationProfileBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsNavigationDocument: NavigationDocument;
        /**
         * In version 7.2.0: introduced
         */
        name: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.22.0: introduced
         */
        readonly offlineEntityConfigs: internal.IList<OfflineEntityConfig> | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        readonly qualifiedName: string | null;
    }
    /**
     * In version 7.22.0: introduced
     */
    interface INativeNavigationProfile extends INavigationProfileBase {
        readonly model: IModel;
        readonly containerAsNavigationDocument: INavigationDocument;
        asLoaded(): NativeNavigationProfile;
        load(callback: (element: NativeNavigationProfile) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<NativeNavigationProfile>;
    }
    /**
     * In version 7.22.0: introduced
     */
    class NativeNavigationProfile extends NavigationProfileBase implements INativeNavigationProfile {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsNavigationDocument: NavigationDocument;
        homePage: pages.IPage | null;
        readonly homePageQualifiedName: string | null;
        /**
         * In version 8.0.0: introduced
         */
        readonly roleBasedNativeHomePages: internal.IList<RoleBasedNativeHomePage>;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.0.0: introduced
         */
        readonly bottomBarItems: internal.IList<nativepages.BottomBarItem>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NativeNavigationProfile instance in the SDK and on the server.
         * The new NativeNavigationProfile will be automatically stored in the 'profiles' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 and higher
         */
        static createIn(container: NavigationDocument): NativeNavigationProfile;
        /**
         * Creates and returns a new NativeNavigationProfile instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NativeNavigationProfile;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/navigation relevant section in reference guide}
     */
    interface INavigationDocument extends projects.IProjectDocument {
        readonly model: IModel;
        readonly containerAsProject: projects.IProject;
        /**
         * In version 7.2.0: introduced
         */
        readonly profiles: internal.IList<INavigationProfileBase>;
        asLoaded(): NavigationDocument;
        load(callback: (element: NavigationDocument) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<NavigationDocument>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/navigation relevant section in reference guide}
     */
    class NavigationDocument extends projects.ProjectDocument implements INavigationDocument {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProject: projects.Project;
        /**
         * In version 7.2.0: introduced
         */
        readonly profiles: internal.IList<NavigationProfileBase>;
        /**
         * In version 7.2.0: deleted
         */
        phoneProfile: NavigationProfile;
        /**
         * In version 7.2.0: deleted
         */
        tabletProfile: NavigationProfile;
        /**
         * In version 7.2.0: deleted
         */
        desktopProfile: NavigationProfile;
        /**
         * In version 7.2.0: deleted
         * In version 7.0.2: introduced
         */
        hybridTabletProfile: NavigationProfile;
        /**
         * In version 7.2.0: deleted
         * In version 7.0.2: introduced
         */
        hybridPhoneProfile: NavigationProfile;
        /**
         * In version 7.0.2: deleted
         */
        offlinePhoneProfile: NavigationProfile;
        /**
         * In version 7.0.0: deleted
         * In version 6.10.4: introduced
         */
        hybridPhoneProfile6: NavigationProfile;
        /**
         * In version 7.0.0: deleted
         * In version 6.10.4: introduced
         */
        hybridTabletProfile6: NavigationProfile;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IProject);
        /**
         * Creates a new NavigationDocument unit in the SDK and on the server.
         * Expects one argument, the projects.IProject in which this unit is contained.
         */
        static createIn(container: projects.IProject): NavigationDocument;
    }
    /**
     * In version 7.2.0: added public
     */
    interface INavigationProfile extends INavigationProfileBase {
        readonly model: IModel;
        readonly containerAsNavigationDocument: INavigationDocument;
        asLoaded(): NavigationProfile;
        load(callback: (element: NavigationProfile) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<NavigationProfile>;
    }
    /**
     * In version 7.2.0: added public
     */
    class NavigationProfile extends NavigationProfileBase implements INavigationProfile {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsNavigationDocument: NavigationDocument;
        /**
         * In version 7.2.0: introduced
         */
        kind: ProfileKind;
        /**
         * In version 7.2.0: deleted
         */
        enabled: boolean;
        /**
         * In version 7.2.0: deleted
         * In version 7.0.2: introduced
         */
        offlineEnabled: boolean;
        homePage: HomePage;
        readonly roleBasedHomePages: internal.IList<RoleBasedHomePage>;
        applicationTitle: string;
        /**
         * In version 7.0.2: introduced
         */
        loginPageSettings: pages.PageSettings;
        menuItemCollection: menus.MenuItemCollection;
        /**
         * In version 7.0.0: deleted
         * In version 6.10.4: introduced
         */
        offlineEnabled6: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'profiles' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 and higher
         */
        static createIn(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'desktopProfile' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.1.0
         */
        static createInNavigationDocumentUnderDesktopProfile(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'hybridPhoneProfile' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.0.2 to 7.1.0
         */
        static createInNavigationDocumentUnderHybridPhoneProfile(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'hybridPhoneProfile6' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.10.4 to 6.10.4
         */
        static createInNavigationDocumentUnderHybridPhoneProfile6(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'hybridTabletProfile' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.0.2 to 7.1.0
         */
        static createInNavigationDocumentUnderHybridTabletProfile(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'hybridTabletProfile6' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.10.4 to 6.10.4
         */
        static createInNavigationDocumentUnderHybridTabletProfile6(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'offlinePhoneProfile' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.0.1
         */
        static createInNavigationDocumentUnderOfflinePhoneProfile(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'phoneProfile' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.1.0
         */
        static createInNavigationDocumentUnderPhoneProfile(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'profiles' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 and higher
         */
        static createInNavigationDocumentUnderProfiles(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * The new NavigationProfile will be automatically stored in the 'tabletProfile' property
         * of the parent NavigationDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 7.1.0
         */
        static createInNavigationDocumentUnderTabletProfile(container: NavigationDocument): NavigationProfile;
        /**
         * Creates and returns a new NavigationProfile instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NavigationProfile;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 7.22.0: introduced
     */
    class OfflineEntityConfig extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsNavigationProfileBase: NavigationProfileBase;
        entity: domainmodels.IEntity;
        readonly entityQualifiedName: string;
        shouldDownload: boolean;
        /**
         * The value of this property is conceptually of type xPathConstraints.XPathConstraint.
         */
        constraint: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new OfflineEntityConfig instance in the SDK and on the server.
         * The new OfflineEntityConfig will be automatically stored in the 'offlineEntityConfigs' property
         * of the parent NavigationProfileBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 and higher
         */
        static createIn(container: NavigationProfileBase): OfflineEntityConfig;
        /**
         * Creates and returns a new OfflineEntityConfig instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): OfflineEntityConfig;
    }
    class RoleBasedHomePage extends HomePageBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsNavigationProfile: NavigationProfile;
        userRole: security.IUserRole | null;
        readonly userRoleQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RoleBasedHomePage instance in the SDK and on the server.
         * The new RoleBasedHomePage will be automatically stored in the 'roleBasedHomePages' property
         * of the parent NavigationProfile element passed as argument.
         */
        static createIn(container: NavigationProfile): RoleBasedHomePage;
        /**
         * Creates and returns a new RoleBasedHomePage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RoleBasedHomePage;
    }
    /**
     * In version 8.0.0: introduced
     */
    class RoleBasedNativeHomePage extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsNativeNavigationProfile: NativeNavigationProfile;
        page: pages.IPage | null;
        readonly pageQualifiedName: string | null;
        userRole: security.IUserRole | null;
        readonly userRoleQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RoleBasedNativeHomePage instance in the SDK and on the server.
         * The new RoleBasedNativeHomePage will be automatically stored in the 'roleBasedNativeHomePages' property
         * of the parent NativeNavigationProfile element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createIn(container: NativeNavigationProfile): RoleBasedNativeHomePage;
        /**
         * Creates and returns a new RoleBasedNativeHomePage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RoleBasedNativeHomePage;
    }
}
import { domainmodels } from "./domainmodels";
import { menus } from "./menus";
import { microflows } from "./microflows";
import { nativepages } from "./nativepages";
import { pages } from "./pages";
import { security } from "./security";
import { IModel } from "./base-model";
