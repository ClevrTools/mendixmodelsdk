import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { common } from "../common";
import { projects } from "./projects";
export declare namespace workflows {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Workflows`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.9.0: added public
     * In version 8.8.0: introduced
     */
    interface IWorkflowActivity extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsWorkflow: IWorkflow;
        /**
         * In version 8.9.0: introduced
         */
        readonly name: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.9.0: added public
         */
        readonly possibleOutcomes: internal.IList<IWorkflowActivityOutcome>;
        asLoaded(): WorkflowActivity;
        load(callback: (element: WorkflowActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<WorkflowActivity>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.9.0: added public
     * In version 8.8.0: introduced
     */
    abstract class WorkflowActivity extends internal.Element implements IWorkflowActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsWorkflow(): Workflow;
        /**
         * In version 8.9.0: introduced
         */
        get name(): string;
        set name(newValue: string);
        get caption(): string;
        set caption(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.9.0: added public
         */
        get possibleOutcomes(): internal.IList<WorkflowActivityOutcome>;
        get size(): common.ISize;
        set size(newValue: common.ISize);
        get location(): common.IPoint;
        set location(newValue: common.IPoint);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        get qualifiedName(): string | null;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.9.0: added public
     * In version 8.8.0: introduced
     */
    interface IEndWorkflowActivity extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsWorkflow: IWorkflow;
        asLoaded(): EndWorkflowActivity;
        load(callback: (element: EndWorkflowActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EndWorkflowActivity>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.9.0: added public
     * In version 8.8.0: introduced
     */
    class EndWorkflowActivity extends WorkflowActivity implements IEndWorkflowActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsWorkflow(): Workflow;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EndWorkflowActivity instance in the SDK and on the server.
         * The new EndWorkflowActivity will be automatically stored in the 'activities' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.8.0 and higher
         */
        static createIn(container: Workflow): EndWorkflowActivity;
        /**
         * Creates and returns a new EndWorkflowActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EndWorkflowActivity;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.8.0: introduced
     */
    class Flow extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsWorkflow(): Workflow;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get from(): WorkflowActivity;
        set from(newValue: WorkflowActivity);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get to(): WorkflowActivity;
        set to(newValue: WorkflowActivity);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get value(): WorkflowActivityOutcome | null;
        set value(newValue: WorkflowActivityOutcome | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Flow instance in the SDK and on the server.
         * The new Flow will be automatically stored in the 'flows' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.8.0 and higher
         */
        static createIn(container: Workflow): Flow;
        /**
         * Creates and returns a new Flow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Flow;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.9.0: added public
     * In version 8.8.0: introduced
     */
    interface IStartWorkflowActivity extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsWorkflow: IWorkflow;
        asLoaded(): StartWorkflowActivity;
        load(callback: (element: StartWorkflowActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<StartWorkflowActivity>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.9.0: added public
     * In version 8.8.0: introduced
     */
    class StartWorkflowActivity extends WorkflowActivity implements IStartWorkflowActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsWorkflow(): Workflow;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StartWorkflowActivity instance in the SDK and on the server.
         * The new StartWorkflowActivity will be automatically stored in the 'activities' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.8.0 and higher
         */
        static createIn(container: Workflow): StartWorkflowActivity;
        /**
         * Creates and returns a new StartWorkflowActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StartWorkflowActivity;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.9.0: added public
     * In version 8.8.0: introduced
     */
    interface IUserTask extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsWorkflow: IWorkflow;
        asLoaded(): UserTask;
        load(callback: (element: UserTask) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<UserTask>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.9.0: added public
     * In version 8.8.0: introduced
     */
    class UserTask extends WorkflowActivity implements IUserTask {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsWorkflow(): Workflow;
        get page(): pages.PageSettings | null;
        set page(newValue: pages.PageSettings | null);
        /**
         * In version 8.9.0: deleted
         */
        get taskCaption(): string;
        set taskCaption(newValue: string);
        /**
         * In version 8.9.0: introduced
         */
        get subject(): microflows.StringTemplate;
        set subject(newValue: microflows.StringTemplate);
        /**
         * In version 8.9.0: deleted
         */
        get taskDescription(): string;
        set taskDescription(newValue: string);
        /**
         * In version 8.9.0: introduced
         */
        get description(): microflows.StringTemplate;
        set description(newValue: microflows.StringTemplate);
        /**
         * In version 8.9.0: introduced
         */
        get userRole(): security.IUserRole | null;
        set userRole(newValue: security.IUserRole | null);
        get userRoleQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new UserTask instance in the SDK and on the server.
         * The new UserTask will be automatically stored in the 'activities' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.8.0 and higher
         */
        static createIn(container: Workflow): UserTask;
        /**
         * Creates and returns a new UserTask instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): UserTask;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.8.0: introduced
     */
    interface IWorkflow extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 8.9.0: deleted
         */
        readonly context: domainmodels.IEntity;
        readonly contextQualifiedName: string;
        /**
         * In version 8.9.0: introduced
         */
        readonly contextEntity: domainmodels.IEntity | null;
        readonly contextEntityQualifiedName: string | null;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.9.0: added public
         */
        readonly activities: internal.IList<IWorkflowActivity>;
        asLoaded(): Workflow;
        load(callback: (element: Workflow) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Workflow>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.8.0: introduced
     */
    class Workflow extends projects.Document implements IWorkflow {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * In version 8.9.0: deleted
         */
        get context(): domainmodels.IEntity;
        set context(newValue: domainmodels.IEntity);
        get contextQualifiedName(): string;
        /**
         * In version 8.9.0: introduced
         */
        get contextEntity(): domainmodels.IEntity | null;
        set contextEntity(newValue: domainmodels.IEntity | null);
        get contextEntityQualifiedName(): string | null;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.9.0: added public
         */
        get activities(): internal.IList<WorkflowActivity>;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get flows(): internal.IList<Flow>;
        /**
         * In version 8.9.0: introduced
         */
        get title(): string;
        set title(newValue: string);
        /**
         * In version 8.9.0: introduced
         */
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new Workflow unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): Workflow;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.9.0: added public
     * In version 8.8.0: introduced
     */
    interface IWorkflowActivityOutcome extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsWorkflowActivity: IWorkflowActivity;
        /**
         * In version 8.9.0: added public
         */
        readonly name: string;
        asLoaded(): WorkflowActivityOutcome;
        load(callback: (element: WorkflowActivityOutcome) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<WorkflowActivityOutcome>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.9.0: added public
     * In version 8.8.0: introduced
     */
    class WorkflowActivityOutcome extends internal.Element implements IWorkflowActivityOutcome {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        get containerAsWorkflowActivity(): WorkflowActivity;
        /**
         * In version 8.9.0: added public
         */
        get name(): string;
        set name(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WorkflowActivityOutcome instance in the SDK and on the server.
         * The new WorkflowActivityOutcome will be automatically stored in the 'possibleOutcomes' property
         * of the parent WorkflowActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.8.0 and higher
         */
        static createIn(container: WorkflowActivity): WorkflowActivityOutcome;
        /**
         * Creates and returns a new WorkflowActivityOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WorkflowActivityOutcome;
        get qualifiedName(): string | null;
    }
}
import { domainmodels } from "./domainmodels";
import { microflows } from "./microflows";
import { pages } from "./pages";
import { security } from "./security";
import { IModel } from "./base-model";
