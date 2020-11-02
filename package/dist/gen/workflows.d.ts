import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
/**
 * @ignore
 */
export declare namespace workflows {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Workflows`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    interface IOutcome extends internal.IElement {
        readonly model: IModel;
        readonly containerAsExclusiveSplitActivity: IExclusiveSplitActivity;
        readonly containerAsParallelSplitActivity: IParallelSplitActivity;
        readonly containerAsWorkflowTask: IWorkflowTask;
        /**
         * This property is required and cannot be set to null.
         *
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        readonly flow: IFlow;
        asLoaded(): Outcome;
        load(callback: (element: Outcome) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Outcome>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    abstract class Outcome extends internal.Element<IModel> implements IOutcome {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsExclusiveSplitActivity(): ExclusiveSplitActivity;
        get containerAsParallelSplitActivity(): ParallelSplitActivity;
        get containerAsWorkflowTask(): WorkflowTask;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get flow(): Flow;
        set flow(newValue: Flow);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    interface IExclusiveSplitOutcome extends IOutcome {
        readonly model: IModel;
        readonly containerAsExclusiveSplitActivity: IExclusiveSplitActivity;
        asLoaded(): ExclusiveSplitOutcome;
        load(callback: (element: ExclusiveSplitOutcome) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ExclusiveSplitOutcome>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    abstract class ExclusiveSplitOutcome extends Outcome implements IExclusiveSplitOutcome {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsExclusiveSplitActivity(): ExclusiveSplitActivity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    interface IBooleanSplitOutcome extends IExclusiveSplitOutcome {
        readonly model: IModel;
        readonly containerAsExclusiveSplitActivity: IExclusiveSplitActivity;
        readonly value: boolean;
        asLoaded(): BooleanSplitOutcome;
        load(callback: (element: BooleanSplitOutcome) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<BooleanSplitOutcome>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class BooleanSplitOutcome extends ExclusiveSplitOutcome implements IBooleanSplitOutcome {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsExclusiveSplitActivity(): ExclusiveSplitActivity;
        get value(): boolean;
        set value(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BooleanSplitOutcome instance in the SDK and on the server.
         * The new BooleanSplitOutcome will be automatically stored in the 'outcomes' property
         * of the parent ExclusiveSplitActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createIn(container: ExclusiveSplitActivity): BooleanSplitOutcome;
        /**
         * Creates and returns a new BooleanSplitOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BooleanSplitOutcome;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    interface IWorkflowActivity extends internal.IElement {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        readonly caption: string;
        asLoaded(): WorkflowActivity;
        load(callback: (element: WorkflowActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<WorkflowActivity>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    abstract class WorkflowActivity extends internal.Element<IModel> implements IWorkflowActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        get caption(): string;
        set caption(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    interface IWorkflowTask extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        readonly outcomes: internal.IList<IWorkflowTaskOutcome>;
        asLoaded(): WorkflowTask;
        load(callback: (element: WorkflowTask) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<WorkflowTask>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    abstract class WorkflowTask extends WorkflowActivity implements IWorkflowTask {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get outcomes(): internal.IList<WorkflowTaskOutcome>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    interface ICallMicroflowTask extends IWorkflowTask {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        readonly microflow: microflows.IMicroflow | null;
        readonly microflowQualifiedName: string | null;
        asLoaded(): CallMicroflowTask;
        load(callback: (element: CallMicroflowTask) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CallMicroflowTask>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class CallMicroflowTask extends WorkflowTask implements ICallMicroflowTask {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CallMicroflowTask instance in the SDK and on the server.
         * The new CallMicroflowTask will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createIn(container: Flow): CallMicroflowTask;
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
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    interface ICallWorkflowActivity extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        readonly workflow: IWorkflow | null;
        readonly workflowQualifiedName: string | null;
        asLoaded(): CallWorkflowActivity;
        load(callback: (element: CallWorkflowActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CallWorkflowActivity>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class CallWorkflowActivity extends WorkflowActivity implements ICallWorkflowActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get workflow(): IWorkflow | null;
        set workflow(newValue: IWorkflow | null);
        get workflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CallWorkflowActivity instance in the SDK and on the server.
         * The new CallWorkflowActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createIn(container: Flow): CallWorkflowActivity;
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
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    interface IEndWorkflowActivity extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        asLoaded(): EndWorkflowActivity;
        load(callback: (element: EndWorkflowActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EndWorkflowActivity>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class EndWorkflowActivity extends WorkflowActivity implements IEndWorkflowActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EndWorkflowActivity instance in the SDK and on the server.
         * The new EndWorkflowActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createIn(container: Flow): EndWorkflowActivity;
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
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    interface IEnumerationValueSplitOutcome extends IExclusiveSplitOutcome {
        readonly model: IModel;
        readonly containerAsExclusiveSplitActivity: IExclusiveSplitActivity;
        /**
         * This property is required and cannot be set to null.
         */
        readonly value: enumerations.IEnumerationValue;
        readonly valueQualifiedName: string;
        asLoaded(): EnumerationValueSplitOutcome;
        load(callback: (element: EnumerationValueSplitOutcome) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EnumerationValueSplitOutcome>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class EnumerationValueSplitOutcome extends ExclusiveSplitOutcome implements IEnumerationValueSplitOutcome {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsExclusiveSplitActivity(): ExclusiveSplitActivity;
        get value(): enumerations.IEnumerationValue;
        set value(newValue: enumerations.IEnumerationValue);
        get valueQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EnumerationValueSplitOutcome instance in the SDK and on the server.
         * The new EnumerationValueSplitOutcome will be automatically stored in the 'outcomes' property
         * of the parent ExclusiveSplitActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createIn(container: ExclusiveSplitActivity): EnumerationValueSplitOutcome;
        /**
         * Creates and returns a new EnumerationValueSplitOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EnumerationValueSplitOutcome;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    interface IExclusiveSplitActivity extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        readonly outcomes: internal.IList<IExclusiveSplitOutcome>;
        asLoaded(): ExclusiveSplitActivity;
        load(callback: (element: ExclusiveSplitActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ExclusiveSplitActivity>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class ExclusiveSplitActivity extends WorkflowActivity implements IExclusiveSplitActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression(): string;
        set expression(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get outcomes(): internal.IList<ExclusiveSplitOutcome>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExclusiveSplitActivity instance in the SDK and on the server.
         * The new ExclusiveSplitActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createIn(container: Flow): ExclusiveSplitActivity;
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
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    interface IFlow extends internal.IElement {
        readonly model: IModel;
        readonly containerAsOutcome: IOutcome;
        readonly containerAsWorkflow: IWorkflow;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        readonly activities: internal.IList<IWorkflowActivity>;
        asLoaded(): Flow;
        load(callback: (element: Flow) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Flow>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class Flow extends internal.Element<IModel> implements IFlow {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsOutcome(): Outcome;
        get containerAsWorkflow(): Workflow;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get activities(): internal.IList<WorkflowActivity>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Flow instance in the SDK and on the server.
         * The new Flow will be automatically stored in the 'flow' property
         * of the parent Outcome element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createInOutcomeUnderFlow(container: Outcome): Flow;
        /**
         * Creates and returns a new Flow instance in the SDK and on the server.
         * The new Flow will be automatically stored in the 'flow' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createInWorkflowUnderFlow(container: Workflow): Flow;
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
     * @ignore
     *
     * In version 9.0.0: introduced
     */
    interface IParallelSplitActivity extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        readonly outcomes: internal.IList<IParallelSplitOutcome>;
        asLoaded(): ParallelSplitActivity;
        load(callback: (element: ParallelSplitActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ParallelSplitActivity>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.0: introduced
     */
    class ParallelSplitActivity extends WorkflowActivity implements IParallelSplitActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get outcomes(): internal.IList<ParallelSplitOutcome>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ParallelSplitActivity instance in the SDK and on the server.
         * The new ParallelSplitActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.0 and higher
         */
        static createIn(container: Flow): ParallelSplitActivity;
        /**
         * Creates and returns a new ParallelSplitActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ParallelSplitActivity;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.0: introduced
     */
    interface IParallelSplitOutcome extends IOutcome {
        readonly model: IModel;
        readonly containerAsParallelSplitActivity: IParallelSplitActivity;
        asLoaded(): ParallelSplitOutcome;
        load(callback: (element: ParallelSplitOutcome) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ParallelSplitOutcome>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.0: introduced
     */
    class ParallelSplitOutcome extends Outcome implements IParallelSplitOutcome {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsParallelSplitActivity(): ParallelSplitActivity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ParallelSplitOutcome instance in the SDK and on the server.
         * The new ParallelSplitOutcome will be automatically stored in the 'outcomes' property
         * of the parent ParallelSplitActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.0 and higher
         */
        static createIn(container: ParallelSplitActivity): ParallelSplitOutcome;
        /**
         * Creates and returns a new ParallelSplitOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ParallelSplitOutcome;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
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
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    interface IUserTask extends IWorkflowTask {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        readonly page: pages.IPage | null;
        readonly pageQualifiedName: string | null;
        asLoaded(): UserTask;
        load(callback: (element: UserTask) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<UserTask>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class UserTask extends WorkflowTask implements IUserTask {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        get page(): pages.IPage | null;
        set page(newValue: pages.IPage | null);
        get pageQualifiedName(): string | null;
        get subject(): microflows.StringTemplate;
        set subject(newValue: microflows.StringTemplate);
        get description(): microflows.StringTemplate;
        set description(newValue: microflows.StringTemplate);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get dueDate(): string;
        set dueDate(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get userSource(): UserSource;
        set userSource(newValue: UserSource);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new UserTask instance in the SDK and on the server.
         * The new UserTask will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createIn(container: Flow): UserTask;
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
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    interface IWorkflow extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        readonly title: string;
        readonly contextEntity: domainmodels.IEntity | null;
        readonly contextEntityQualifiedName: string | null;
        readonly overviewPage: pages.IPage | null;
        readonly overviewPageQualifiedName: string | null;
        /**
         * This property is required and cannot be set to null.
         *
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        readonly flow: IFlow;
        asLoaded(): Workflow;
        load(callback: (element: Workflow) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Workflow>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class Workflow extends projects.Document implements IWorkflow {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get title(): string;
        set title(newValue: string);
        get contextEntity(): domainmodels.IEntity | null;
        set contextEntity(newValue: domainmodels.IEntity | null);
        get contextEntityQualifiedName(): string | null;
        get overviewPage(): pages.IPage | null;
        set overviewPage(newValue: pages.IPage | null);
        get overviewPageQualifiedName(): string | null;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get flow(): Flow;
        set flow(newValue: Flow);
        get subject(): microflows.StringTemplate;
        set subject(newValue: microflows.StringTemplate);
        get description(): string;
        set description(newValue: string);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get dueDate(): string;
        set dueDate(newValue: string);
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
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    interface IWorkflowTaskOutcome extends IOutcome, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsWorkflowTask: IWorkflowTask;
        readonly name: string;
        readonly caption: string;
        asLoaded(): WorkflowTaskOutcome;
        load(callback: (element: WorkflowTaskOutcome) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<WorkflowTaskOutcome>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class WorkflowTaskOutcome extends Outcome implements IWorkflowTaskOutcome {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflowTask(): WorkflowTask;
        get name(): string;
        set name(newValue: string);
        get caption(): string;
        set caption(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WorkflowTaskOutcome instance in the SDK and on the server.
         * The new WorkflowTaskOutcome will be automatically stored in the 'outcomes' property
         * of the parent WorkflowTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
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
     * @ignore
     *
     * In version 8.15.0: introduced
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
         *  8.15.0 and higher
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
import { IModel } from "./base-model";
