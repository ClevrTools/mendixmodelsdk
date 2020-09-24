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
     * In version 8.10.0: introduced
     */
    abstract class FlowValue extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.13.0: introduced
     */
    class BooleanOutcomeValue extends FlowValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        get outcome(): boolean;
        set outcome(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BooleanOutcomeValue instance in the SDK and on the server.
         * The new BooleanOutcomeValue will be automatically stored in the 'value' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.13.0 and higher
         */
        static createIn(container: Flow): BooleanOutcomeValue;
        /**
         * Creates and returns a new BooleanOutcomeValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BooleanOutcomeValue;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.10.0: introduced
     */
    interface IWorkflowActivity extends internal.IElement {
        readonly model: IModel;
        readonly containerAsWorkflow: IWorkflow;
        /**
         * In version 8.12.0: added public
         */
        readonly caption: string;
        asLoaded(): WorkflowActivity;
        load(callback: (element: WorkflowActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<WorkflowActivity>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.10.0: introduced
     */
    abstract class WorkflowActivity extends internal.Element<IModel> implements IWorkflowActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflow(): Workflow;
        /**
         * In version 8.12.0: added public
         */
        get caption(): string;
        set caption(newValue: string);
        get size(): common.ISize;
        set size(newValue: common.ISize);
        get location(): common.IPoint;
        set location(newValue: common.IPoint);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.10.0: introduced
     */
    interface IWorkflowTask extends IWorkflowActivity, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsWorkflow: IWorkflow;
        readonly name: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        readonly possibleOutcomes: internal.IList<IWorkflowTaskOutcome>;
        asLoaded(): WorkflowTask;
        load(callback: (element: WorkflowTask) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<WorkflowTask>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.10.0: introduced
     */
    abstract class WorkflowTask extends WorkflowActivity implements IWorkflowTask {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflow(): Workflow;
        get name(): string;
        set name(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get possibleOutcomes(): internal.IList<WorkflowTaskOutcome>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        get qualifiedName(): string | null;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.11.0: introduced
     */
    interface ICallMicroflowTask extends IWorkflowTask {
        readonly model: IModel;
        readonly containerAsWorkflow: IWorkflow;
        asLoaded(): CallMicroflowTask;
        load(callback: (element: CallMicroflowTask) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CallMicroflowTask>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.11.0: introduced
     */
    class CallMicroflowTask extends WorkflowTask implements ICallMicroflowTask {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflow(): Workflow;
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CallMicroflowTask instance in the SDK and on the server.
         * The new CallMicroflowTask will be automatically stored in the 'activities' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 and higher
         */
        static createIn(container: Workflow): CallMicroflowTask;
        /**
         * Creates and returns a new CallMicroflowTask instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CallMicroflowTask;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.13.0: introduced
     */
    interface ICallWorkflowActivity extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsWorkflow: IWorkflow;
        asLoaded(): CallWorkflowActivity;
        load(callback: (element: CallWorkflowActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CallWorkflowActivity>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.13.0: introduced
     */
    class CallWorkflowActivity extends WorkflowActivity implements ICallWorkflowActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflow(): Workflow;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get workflow(): IWorkflow | null;
        set workflow(newValue: IWorkflow | null);
        get workflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CallWorkflowActivity instance in the SDK and on the server.
         * The new CallWorkflowActivity will be automatically stored in the 'activities' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.13.0 and higher
         */
        static createIn(container: Workflow): CallWorkflowActivity;
        /**
         * Creates and returns a new CallWorkflowActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CallWorkflowActivity;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.10.0: introduced
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
     * In version 8.10.0: introduced
     */
    class EndWorkflowActivity extends WorkflowActivity implements IEndWorkflowActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflow(): Workflow;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EndWorkflowActivity instance in the SDK and on the server.
         * The new EndWorkflowActivity will be automatically stored in the 'activities' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
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
     * In version 8.13.0: introduced
     */
    class EnumerationValueOutcomeValue extends FlowValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        get outcome(): enumerations.IEnumerationValue | null;
        set outcome(newValue: enumerations.IEnumerationValue | null);
        get outcomeQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EnumerationValueOutcomeValue instance in the SDK and on the server.
         * The new EnumerationValueOutcomeValue will be automatically stored in the 'value' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.13.0 and higher
         */
        static createIn(container: Flow): EnumerationValueOutcomeValue;
        /**
         * Creates and returns a new EnumerationValueOutcomeValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EnumerationValueOutcomeValue;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.13.0: introduced
     */
    interface IExclusiveSplitActivity extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsWorkflow: IWorkflow;
        asLoaded(): ExclusiveSplitActivity;
        load(callback: (element: ExclusiveSplitActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ExclusiveSplitActivity>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.13.0: introduced
     */
    class ExclusiveSplitActivity extends WorkflowActivity implements IExclusiveSplitActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflow(): Workflow;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression(): string;
        set expression(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExclusiveSplitActivity instance in the SDK and on the server.
         * The new ExclusiveSplitActivity will be automatically stored in the 'activities' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.13.0 and higher
         */
        static createIn(container: Workflow): ExclusiveSplitActivity;
        /**
         * Creates and returns a new ExclusiveSplitActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExclusiveSplitActivity;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.10.0: introduced
     */
    class Flow extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
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
        get value(): FlowValue;
        set value(newValue: FlowValue);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Flow instance in the SDK and on the server.
         * The new Flow will be automatically stored in the 'flows' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
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
     * In version 8.10.0: introduced
     */
    class NoValue extends FlowValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NoValue instance in the SDK and on the server.
         * The new NoValue will be automatically stored in the 'value' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container: Flow): NoValue;
        /**
         * Creates and returns a new NoValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NoValue;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.10.0: introduced
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
     * In version 8.10.0: introduced
     */
    class StartWorkflowActivity extends WorkflowActivity implements IStartWorkflowActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflow(): Workflow;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StartWorkflowActivity instance in the SDK and on the server.
         * The new StartWorkflowActivity will be automatically stored in the 'activities' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
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
     * In version 8.10.0: introduced
     */
    class TaskOutcomeValue extends FlowValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get outcome(): WorkflowTaskOutcome;
        set outcome(newValue: WorkflowTaskOutcome);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TaskOutcomeValue instance in the SDK and on the server.
         * The new TaskOutcomeValue will be automatically stored in the 'value' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container: Flow): TaskOutcomeValue;
        /**
         * Creates and returns a new TaskOutcomeValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TaskOutcomeValue;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.11.0: introduced
     */
    abstract class UserSource extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsUserTask(): UserTask;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.10.0: introduced
     */
    interface IUserTask extends IWorkflowTask {
        readonly model: IModel;
        readonly containerAsWorkflow: IWorkflow;
        /**
         * In version 8.13.0: added public
         */
        readonly page: pages.IPage | null;
        readonly pageQualifiedName: string | null;
        asLoaded(): UserTask;
        load(callback: (element: UserTask) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<UserTask>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.10.0: introduced
     */
    class UserTask extends WorkflowTask implements IUserTask {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflow(): Workflow;
        /**
         * In version 8.13.0: added public
         */
        get page(): pages.IPage | null;
        set page(newValue: pages.IPage | null);
        get pageQualifiedName(): string | null;
        get subject(): microflows.StringTemplate;
        set subject(newValue: microflows.StringTemplate);
        get description(): microflows.StringTemplate;
        set description(newValue: microflows.StringTemplate);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 8.13.0: introduced
         */
        get dueDate(): string;
        set dueDate(newValue: string);
        /**
         * In version 8.11.0: deleted
         */
        get userRole(): security.IUserRole | null;
        set userRole(newValue: security.IUserRole | null);
        get userRoleQualifiedName(): string | null;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.11.0: introduced
         */
        get userSource(): UserSource;
        set userSource(newValue: UserSource);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new UserTask instance in the SDK and on the server.
         * The new UserTask will be automatically stored in the 'activities' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
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
     * In version 8.10.0: introduced
     */
    interface IWorkflow extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        readonly contextEntity: domainmodels.IEntity | null;
        readonly contextEntityQualifiedName: string | null;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        readonly activities: internal.IList<IWorkflowActivity>;
        asLoaded(): Workflow;
        load(callback: (element: Workflow) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Workflow>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.10.0: introduced
     */
    class Workflow extends projects.Document implements IWorkflow {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get contextEntity(): domainmodels.IEntity | null;
        set contextEntity(newValue: domainmodels.IEntity | null);
        get contextEntityQualifiedName(): string | null;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get activities(): internal.IList<WorkflowActivity>;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get flows(): internal.IList<Flow>;
        get title(): string;
        set title(newValue: string);
        get description(): string;
        set description(newValue: string);
        /**
         * In version 8.11.0: introduced
         */
        get subject(): microflows.StringTemplate;
        set subject(newValue: microflows.StringTemplate);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 8.13.0: introduced
         */
        get dueDate(): string;
        set dueDate(newValue: string);
        /**
         * In version 8.11.0: introduced
         */
        get overviewPage(): pages.IPage | null;
        set overviewPage(newValue: pages.IPage | null);
        get overviewPageQualifiedName(): string | null;
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
     * In version 8.10.0: introduced
     */
    interface IWorkflowTaskOutcome extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsWorkflowTask: IWorkflowTask;
        readonly name: string;
        /**
         * In version 8.11.0: introduced
         */
        readonly caption: string;
        asLoaded(): WorkflowTaskOutcome;
        load(callback: (element: WorkflowTaskOutcome) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<WorkflowTaskOutcome>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.10.0: introduced
     */
    class WorkflowTaskOutcome extends internal.Element<IModel> implements IWorkflowTaskOutcome {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflowTask(): WorkflowTask;
        get name(): string;
        set name(newValue: string);
        /**
         * In version 8.11.0: introduced
         */
        get caption(): string;
        set caption(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WorkflowTaskOutcome instance in the SDK and on the server.
         * The new WorkflowTaskOutcome will be automatically stored in the 'possibleOutcomes' property
         * of the parent WorkflowTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container: WorkflowTask): WorkflowTaskOutcome;
        /**
         * Creates and returns a new WorkflowTaskOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WorkflowTaskOutcome;
        get qualifiedName(): string | null;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.11.0: introduced
     */
    class XPathBasedUserSource extends UserSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsUserTask(): UserTask;
        /**
         * The value of this property is conceptually of type xPathConstraints.XPathConstraint.
         */
        get xPathConstraint(): string;
        set xPathConstraint(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new XPathBasedUserSource instance in the SDK and on the server.
         * The new XPathBasedUserSource will be automatically stored in the 'userSource' property
         * of the parent UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 and higher
         */
        static createIn(container: UserTask): XPathBasedUserSource;
        /**
         * Creates and returns a new XPathBasedUserSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): XPathBasedUserSource;
    }
}
import { domainmodels } from "./domainmodels";
import { enumerations } from "./enumerations";
import { microflows } from "./microflows";
import { pages } from "./pages";
import { security } from "./security";
import { IModel } from "./base-model";
