import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace security {
    class SecurityLevel extends internal.AbstractEnum {
        static CheckNothing: SecurityLevel;
        static CheckFormsAndMicroflows: SecurityLevel;
        static CheckEverything: SecurityLevel;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Security`.
     */
    abstract class AccessRuleContainerBase extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProjectSecurity: ProjectSecurity;
        readonly accessRules: internal.IList<domainmodels.AccessRule>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/demo-users relevant section in reference guide}
     */
    class DemoUser extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProjectSecurity: ProjectSecurity;
        userName: string;
        password: string;
        entity: domainmodels.IEntity | null;
        readonly entityQualifiedName: string | null;
        readonly userRoles: internal.IList<IUserRole>;
        readonly userRolesQualifiedNames: string[];
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DemoUser instance in the SDK and on the server.
         * The new DemoUser will be automatically stored in the 'demoUsers' property
         * of the parent ProjectSecurity element passed as argument.
         */
        static createIn(container: ProjectSecurity): DemoUser;
        /**
         * Creates and returns a new DemoUser instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DemoUser;
    }
    class FileDocumentAccessRuleContainer extends AccessRuleContainerBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProjectSecurity: ProjectSecurity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new FileDocumentAccessRuleContainer instance in the SDK and on the server.
         * The new FileDocumentAccessRuleContainer will be automatically stored in the 'fileDocumentAccess' property
         * of the parent ProjectSecurity element passed as argument.
         */
        static createIn(container: ProjectSecurity): FileDocumentAccessRuleContainer;
        /**
         * Creates and returns a new FileDocumentAccessRuleContainer instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): FileDocumentAccessRuleContainer;
    }
    class ImageAccessRuleContainer extends AccessRuleContainerBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProjectSecurity: ProjectSecurity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ImageAccessRuleContainer instance in the SDK and on the server.
         * The new ImageAccessRuleContainer will be automatically stored in the 'imageAccess' property
         * of the parent ProjectSecurity element passed as argument.
         */
        static createIn(container: ProjectSecurity): ImageAccessRuleContainer;
        /**
         * Creates and returns a new ImageAccessRuleContainer instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ImageAccessRuleContainer;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/module-role relevant section in reference guide}
     */
    interface IModuleRole extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsModuleSecurity: IModuleSecurity;
        readonly name: string;
        asLoaded(): ModuleRole;
        load(callback: (element: ModuleRole) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ModuleRole>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/module-role relevant section in reference guide}
     */
    class ModuleRole extends internal.Element implements IModuleRole {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsModuleSecurity: ModuleSecurity;
        name: string;
        description: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ModuleRole instance in the SDK and on the server.
         * The new ModuleRole will be automatically stored in the 'moduleRoles' property
         * of the parent ModuleSecurity element passed as argument.
         */
        static createIn(container: ModuleSecurity): ModuleRole;
        /**
         * Creates and returns a new ModuleRole instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ModuleRole;
        readonly qualifiedName: string | null;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/module-security relevant section in reference guide}
     */
    interface IModuleSecurity extends internal.IModelUnit {
        readonly model: IModel;
        readonly containerAsModule: projects.IModule;
        readonly moduleRoles: internal.IList<IModuleRole>;
        asLoaded(): ModuleSecurity;
        load(callback: (element: ModuleSecurity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ModuleSecurity>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/module-security relevant section in reference guide}
     */
    class ModuleSecurity extends internal.ModelUnit implements IModuleSecurity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsModule: projects.Module;
        readonly moduleRoles: internal.IList<ModuleRole>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IModule);
        /**
         * Creates a new ModuleSecurity unit in the SDK and on the server.
         * Expects one argument, the projects.IModule in which this unit is contained.
         */
        static createIn(container: projects.IModule): ModuleSecurity;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/password-policy relevant section in reference guide}
     */
    class PasswordPolicySettings extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProjectSecurity: ProjectSecurity;
        minimumLength: number;
        requireMixedCase: boolean;
        requireSymbol: boolean;
        requireDigit: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PasswordPolicySettings instance in the SDK and on the server.
         * The new PasswordPolicySettings will be automatically stored in the 'passwordPolicySettings' property
         * of the parent ProjectSecurity element passed as argument.
         */
        static createIn(container: ProjectSecurity): PasswordPolicySettings;
        /**
         * Creates and returns a new PasswordPolicySettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PasswordPolicySettings;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/project-security relevant section in reference guide}
     */
    interface IProjectSecurity extends projects.IProjectDocument {
        readonly model: IModel;
        readonly containerAsProject: projects.IProject;
        readonly userRoles: internal.IList<IUserRole>;
        asLoaded(): ProjectSecurity;
        load(callback: (element: ProjectSecurity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ProjectSecurity>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/project-security relevant section in reference guide}
     */
    class ProjectSecurity extends projects.ProjectDocument implements IProjectSecurity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProject: projects.Project;
        securityLevel: SecurityLevel;
        checkSecurity: boolean;
        readonly userRoles: internal.IList<UserRole>;
        adminUserName: string;
        adminPassword: string;
        adminUserRoleName: string;
        enableDemoUsers: boolean;
        readonly demoUsers: internal.IList<DemoUser>;
        enableGuestAccess: boolean;
        guestUserRoleName: string;
        /**
         * In version 8.0.0: deleted
         */
        signInMicroflow: microflows.IMicroflow | null;
        readonly signInMicroflowQualifiedName: string | null;
        passwordPolicySettings: PasswordPolicySettings;
        /**
         * In version 6.0.0: deprecated
         */
        fileDocumentAccess: FileDocumentAccessRuleContainer;
        /**
         * In version 6.0.0: deprecated
         */
        imageAccess: ImageAccessRuleContainer;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IProject);
        /**
         * Creates a new ProjectSecurity unit in the SDK and on the server.
         * Expects one argument, the projects.IProject in which this unit is contained.
         */
        static createIn(container: projects.IProject): ProjectSecurity;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/user-role relevant section in reference guide}
     */
    interface IUserRole extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsProjectSecurity: IProjectSecurity;
        readonly name: string;
        asLoaded(): UserRole;
        load(callback: (element: UserRole) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<UserRole>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/user-role relevant section in reference guide}
     */
    class UserRole extends internal.Element implements IUserRole {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProjectSecurity: ProjectSecurity;
        guid: string;
        name: string;
        description: string;
        readonly moduleRoles: internal.IList<IModuleRole>;
        readonly moduleRolesQualifiedNames: string[];
        manageAllRoles: boolean;
        readonly manageableRoles: internal.IList<IUserRole>;
        readonly manageableRolesQualifiedNames: string[];
        manageUsersWithoutRoles: boolean;
        checkSecurity: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new UserRole instance in the SDK and on the server.
         * The new UserRole will be automatically stored in the 'userRoles' property
         * of the parent ProjectSecurity element passed as argument.
         */
        static createIn(container: ProjectSecurity): UserRole;
        /**
         * Creates and returns a new UserRole instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): UserRole;
        readonly qualifiedName: string | null;
    }
}
import { domainmodels } from "./domainmodels";
import { microflows } from "./microflows";
import { IModel } from "./base-model";
