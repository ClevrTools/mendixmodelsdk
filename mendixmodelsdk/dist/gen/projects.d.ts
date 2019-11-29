import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
export declare namespace projects {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Projects`.
     */
    interface IModuleDocument extends internal.IModelUnit {
        readonly model: IModel;
        readonly containerAsFolderBase: IFolderBase;
        readonly containerAsModule: IModule;
        asLoaded(): ModuleDocument;
        load(callback: (element: ModuleDocument) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ModuleDocument>;
    }
    abstract class ModuleDocument extends internal.ModelUnit implements IModuleDocument {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: FolderBase;
        readonly containerAsModule: Module;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: IFolderBase | IModule);
    }
    interface IDocument extends IModuleDocument, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsFolderBase: IFolderBase;
        readonly name: string;
        asLoaded(): Document;
        load(callback: (element: Document) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Document>;
    }
    abstract class Document extends ModuleDocument implements IDocument {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: FolderBase;
        name: string;
        documentation: string;
        excluded: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: IFolderBase);
        readonly qualifiedName: string | null;
    }
    interface IFolderBase extends internal.IStructuralUnit {
        readonly model: IModel;
        readonly containerAsFolderBase: IFolderBase;
        readonly containerAsProject: IProject;
        folders: internal.IList<IFolder>;
        documents: internal.IList<IDocument>;
    }
    abstract class FolderBase extends internal.StructuralUnit implements IFolderBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: FolderBase;
        readonly containerAsProject: Project;
        readonly folders: internal.IList<IFolder>;
        readonly documents: internal.IList<IDocument>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: IFolderBase | IProject);
    }
    /**
     * See: {@link https://world.mendix.com/display/howto50/Add+documents+to+a+module relevant section in reference guide}
     */
    interface IFolder extends IFolderBase {
        readonly model: IModel;
        readonly containerAsFolderBase: IFolderBase;
        name: string;
    }
    /**
     * See: {@link https://world.mendix.com/display/howto50/Add+documents+to+a+module relevant section in reference guide}
     */
    class Folder extends FolderBase implements IFolder {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: FolderBase;
        name: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: IFolderBase);
        /**
         * Creates a new Folder unit in the SDK and on the server.
         * Expects one argument, the IFolderBase in which this unit is contained.
         */
        static createIn(container: IFolderBase): Folder;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/modules relevant section in reference guide}
     */
    interface IModule extends IFolderBase {
        readonly model: IModel;
        readonly containerAsProject: IProject;
        /**
         * The index of where this Module appears in the project.
         * This property is <em>required</em>, and of type double.
         * Also, its value needs to be unique among its siblings (meaning, in code: <tt>containerAsProject.modules</tt>) in the project.
         * In other words: <tt>containerAsProject.modules.map(m => m.sortedIndex)</tt> (TS syntax) needs to be a list with unique values.
         */
        sortIndex: number;
        name: string;
        /**
         * This property is required and cannot be set to null.
         */
        domainModel: domainmodels.IDomainModel;
        /**
         * This property is required and cannot be set to null.
         */
        moduleSecurity: security.IModuleSecurity;
        fromAppStore: boolean;
        appStoreGuid: string;
        appStoreVersionGuid: string;
        appStoreVersion: string;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/modules relevant section in reference guide}
     */
    class Module extends FolderBase implements IModule {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProject: Project;
        /**
         * The index of where this Module appears in the project.
         * This property is <em>required</em>, and of type double.
         * Also, its value needs to be unique among its siblings (meaning, in code: <tt>containerAsProject.modules</tt>) in the project.
         * In other words: <tt>containerAsProject.modules.map(m => m.sortedIndex)</tt> (TS syntax) needs to be a list with unique values.
         */
        sortIndex: number;
        name: string;
        domainModel: domainmodels.IDomainModel;
        moduleSecurity: security.IModuleSecurity;
        fromAppStore: boolean;
        appStoreGuid: string;
        appStoreVersionGuid: string;
        appStoreVersion: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: IProject);
        /**
         * Creates a new Module unit in the SDK and on the server.
         * Expects one argument, the IProject in which this unit is contained.
         */
        static createIn(container: IProject): Module;
    }
    class OneTimeConversionMarker extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProjectConversion: ProjectConversion;
        name: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new OneTimeConversionMarker instance in the SDK and on the server.
         * The new OneTimeConversionMarker will be automatically stored in the 'markers' property
         * of the parent ProjectConversion element passed as argument.
         */
        static createIn(container: ProjectConversion): OneTimeConversionMarker;
        /**
         * Creates and returns a new OneTimeConversionMarker instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): OneTimeConversionMarker;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/project relevant section in reference guide}
     */
    interface IProject extends internal.IStructuralUnit {
        readonly model: IModel;
        projectDocuments: internal.IList<IProjectDocument>;
        modules: internal.IList<IModule>;
        /**
         * This property is required and cannot be set to null.
         */
        projectConversion: IProjectConversion;
        isSystemProject: boolean;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/project relevant section in reference guide}
     */
    class Project extends internal.StructuralUnit implements IProject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly projectDocuments: internal.IList<IProjectDocument>;
        readonly modules: internal.IList<IModule>;
        projectConversion: IProjectConversion;
        isSystemProject: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: internal.IStructuralUnit);
    }
    interface IProjectConversion extends internal.IModelUnit {
        readonly model: IModel;
        readonly containerAsProject: IProject;
        asLoaded(): ProjectConversion;
        load(callback: (element: ProjectConversion) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ProjectConversion>;
    }
    class ProjectConversion extends internal.ModelUnit implements IProjectConversion {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProject: Project;
        readonly markers: internal.IList<OneTimeConversionMarker>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: IProject);
        /**
         * Creates a new ProjectConversion unit in the SDK and on the server.
         * Expects one argument, the IProject in which this unit is contained.
         */
        static createIn(container: IProject): ProjectConversion;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/project relevant section in reference guide}
     */
    interface IProjectDocument extends internal.IModelUnit {
        readonly model: IModel;
        readonly containerAsProject: IProject;
        asLoaded(): ProjectDocument;
        load(callback: (element: ProjectDocument) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ProjectDocument>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/project relevant section in reference guide}
     */
    abstract class ProjectDocument extends internal.ModelUnit implements IProjectDocument {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProject: Project;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: IProject);
    }
}
import { domainmodels } from "./domainmodels";
import { security } from "./security";
import { IModel } from "./base-model";
