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
     * In version 9.0.2: introduced
     */
    interface IOutcome extends internal.IElement {
        readonly model: IModel;
        readonly containerAsConditionOutcomeActivity: IConditionOutcomeActivity;
        readonly containerAsParallelSplitActivity: IParallelSplitActivity;
        readonly containerAsUserTask: IUserTask;
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
     * In version 9.0.2: introduced
     */
    abstract class Outcome extends internal.Element<IModel> implements IOutcome {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConditionOutcomeActivity(): ConditionOutcomeActivity;
        get containerAsParallelSplitActivity(): ParallelSplitActivity;
        get containerAsUserTask(): UserTask;
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
     * In version 9.0.2: introduced
     */
    interface IConditionOutcome extends IOutcome {
        readonly model: IModel;
        readonly containerAsConditionOutcomeActivity: IConditionOutcomeActivity;
        asLoaded(): ConditionOutcome;
        load(callback: (element: ConditionOutcome) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConditionOutcome>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.2: introduced
     */
    abstract class ConditionOutcome extends Outcome implements IConditionOutcome {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConditionOutcomeActivity(): ConditionOutcomeActivity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.2: introduced
     */
    interface IBooleanConditionOutcome extends IConditionOutcome {
        readonly model: IModel;
        readonly containerAsConditionOutcomeActivity: IConditionOutcomeActivity;
        readonly value: boolean;
        asLoaded(): BooleanConditionOutcome;
        load(callback: (element: BooleanConditionOutcome) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<BooleanConditionOutcome>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.2: introduced
     */
    class BooleanConditionOutcome extends ConditionOutcome implements IBooleanConditionOutcome {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConditionOutcomeActivity(): ConditionOutcomeActivity;
        get value(): boolean;
        set value(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BooleanConditionOutcome instance in the SDK and on the server.
         * The new BooleanConditionOutcome will be automatically stored in the 'outcomes' property
         * of the parent ConditionOutcomeActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container: ConditionOutcomeActivity): BooleanConditionOutcome;
        /**
         * Creates and returns a new BooleanConditionOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BooleanConditionOutcome;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.2: introduced
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
     * In version 9.0.2: introduced
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
     * In version 9.0.2: introduced
     */
    interface IConditionOutcomeActivity extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        readonly outcomes: internal.IList<IConditionOutcome>;
        asLoaded(): ConditionOutcomeActivity;
        load(callback: (element: ConditionOutcomeActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConditionOutcomeActivity>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.2: introduced
     */
    abstract class ConditionOutcomeActivity extends WorkflowActivity implements IConditionOutcomeActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get outcomes(): internal.IList<ConditionOutcome>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.2: introduced
     */
    interface ICallMicroflowTask extends IConditionOutcomeActivity {
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
     * In version 9.0.2: introduced
     */
    class CallMicroflowTask extends ConditionOutcomeActivity implements ICallMicroflowTask {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get parameterMappings(): internal.IList<MicroflowCallParameterMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CallMicroflowTask instance in the SDK and on the server.
         * The new CallMicroflowTask will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
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
     * In version 9.0.2: introduced
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
     * In version 9.0.2: introduced
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
         *  9.0.2 and higher
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
     * In version 9.0.2: introduced
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
     * In version 9.0.2: introduced
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
         *  9.0.2 and higher
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
     * In version 9.0.2: introduced
     */
    interface IEnumerationValueConditionOutcome extends IConditionOutcome {
        readonly model: IModel;
        readonly containerAsConditionOutcomeActivity: IConditionOutcomeActivity;
        readonly value: enumerations.IEnumerationValue | null;
        readonly valueQualifiedName: string | null;
        asLoaded(): EnumerationValueConditionOutcome;
        load(callback: (element: EnumerationValueConditionOutcome) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EnumerationValueConditionOutcome>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.2: introduced
     */
    class EnumerationValueConditionOutcome extends ConditionOutcome implements IEnumerationValueConditionOutcome {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConditionOutcomeActivity(): ConditionOutcomeActivity;
        get value(): enumerations.IEnumerationValue | null;
        set value(newValue: enumerations.IEnumerationValue | null);
        get valueQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EnumerationValueConditionOutcome instance in the SDK and on the server.
         * The new EnumerationValueConditionOutcome will be automatically stored in the 'outcomes' property
         * of the parent ConditionOutcomeActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container: ConditionOutcomeActivity): EnumerationValueConditionOutcome;
        /**
         * Creates and returns a new EnumerationValueConditionOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EnumerationValueConditionOutcome;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.2: introduced
     */
    interface IExclusiveSplitActivity extends IConditionOutcomeActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        asLoaded(): ExclusiveSplitActivity;
        load(callback: (element: ExclusiveSplitActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ExclusiveSplitActivity>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.2: introduced
     */
    class ExclusiveSplitActivity extends ConditionOutcomeActivity implements IExclusiveSplitActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression(): string;
        set expression(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExclusiveSplitActivity instance in the SDK and on the server.
         * The new ExclusiveSplitActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
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
     * In version 9.0.2: introduced
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
     * In version 9.0.2: introduced
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
         *  9.0.2 and higher
         */
        static createInOutcomeUnderFlow(container: Outcome): Flow;
        /**
         * Creates and returns a new Flow instance in the SDK and on the server.
         * The new Flow will be automatically stored in the 'flow' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
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
     * In version 9.0.3: introduced
     */
    interface IJumpToActivity extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        asLoaded(): JumpToActivity;
        load(callback: (element: JumpToActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<JumpToActivity>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.3: introduced
     */
    class JumpToActivity extends WorkflowActivity implements IJumpToActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get targetActivity(): WorkflowActivity | null;
        set targetActivity(newValue: WorkflowActivity | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JumpToActivity instance in the SDK and on the server.
         * The new JumpToActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.3 and higher
         */
        static createIn(container: Flow): JumpToActivity;
        /**
         * Creates and returns a new JumpToActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JumpToActivity;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.2: introduced
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
     * In version 9.0.2: introduced
     */
    class MicroflowBasedUserSource extends UserSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsUserTask(): UserTask;
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowBasedUserSource instance in the SDK and on the server.
         * The new MicroflowBasedUserSource will be automatically stored in the 'userSource' property
         * of the parent UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container: UserTask): MicroflowBasedUserSource;
        /**
         * Creates and returns a new MicroflowBasedUserSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowBasedUserSource;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.2: introduced
     */
    class MicroflowCallParameterMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCallMicroflowTask(): CallMicroflowTask;
        get parameter(): microflows.IMicroflowParameter;
        set parameter(newValue: microflows.IMicroflowParameter);
        get parameterQualifiedName(): string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression(): string;
        set expression(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowCallParameterMapping instance in the SDK and on the server.
         * The new MicroflowCallParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent CallMicroflowTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container: CallMicroflowTask): MicroflowCallParameterMapping;
        /**
         * Creates and returns a new MicroflowCallParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowCallParameterMapping;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.2: introduced
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
     * In version 9.0.2: introduced
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
         *  9.0.2 and higher
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
     * In version 9.0.2: introduced
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
     * In version 9.0.2: introduced
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
         *  9.0.2 and higher
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
     * In version 9.0.2: introduced
     */
    interface IUserTask extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        readonly page: pages.IPage | null;
        readonly pageQualifiedName: string | null;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        readonly outcomes: internal.IList<IUserTaskOutcome>;
        /**
         * In version 9.0.3: introduced
         */
        readonly allowedModuleRoles: internal.IList<security.IModuleRole>;
        readonly allowedModuleRolesQualifiedNames: string[];
        asLoaded(): UserTask;
        load(callback: (element: UserTask) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<UserTask>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.2: introduced
     */
    class UserTask extends WorkflowActivity implements IUserTask {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        get page(): pages.IPage | null;
        set page(newValue: pages.IPage | null);
        get pageQualifiedName(): string | null;
        get taskName(): microflows.StringTemplate;
        set taskName(newValue: microflows.StringTemplate);
        get taskDescription(): microflows.StringTemplate;
        set taskDescription(newValue: microflows.StringTemplate);
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
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get outcomes(): internal.IList<UserTaskOutcome>;
        /**
         * In version 9.0.3: introduced
         */
        get allowedModuleRoles(): internal.IList<security.IModuleRole>;
        get allowedModuleRolesQualifiedNames(): string[];
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new UserTask instance in the SDK and on the server.
         * The new UserTask will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
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
     * In version 9.0.2: introduced
     */
    interface IUserTaskOutcome extends IOutcome, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsUserTask: IUserTask;
        readonly name: string;
        readonly caption: string;
        asLoaded(): UserTaskOutcome;
        load(callback: (element: UserTaskOutcome) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<UserTaskOutcome>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.2: introduced
     */
    class UserTaskOutcome extends Outcome implements IUserTaskOutcome {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsUserTask(): UserTask;
        get name(): string;
        set name(newValue: string);
        get caption(): string;
        set caption(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new UserTaskOutcome instance in the SDK and on the server.
         * The new UserTaskOutcome will be automatically stored in the 'outcomes' property
         * of the parent UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container: UserTask): UserTaskOutcome;
        /**
         * Creates and returns a new UserTaskOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): UserTaskOutcome;
        get qualifiedName(): string | null;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.2: introduced
     */
    interface IVoidConditionOutcome extends IConditionOutcome {
        readonly model: IModel;
        readonly containerAsConditionOutcomeActivity: IConditionOutcomeActivity;
        asLoaded(): VoidConditionOutcome;
        load(callback: (element: VoidConditionOutcome) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<VoidConditionOutcome>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.2: introduced
     */
    class VoidConditionOutcome extends ConditionOutcome implements IVoidConditionOutcome {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConditionOutcomeActivity(): ConditionOutcomeActivity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new VoidConditionOutcome instance in the SDK and on the server.
         * The new VoidConditionOutcome will be automatically stored in the 'outcomes' property
         * of the parent ConditionOutcomeActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 and higher
         */
        static createIn(container: ConditionOutcomeActivity): VoidConditionOutcome;
        /**
         * Creates and returns a new VoidConditionOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): VoidConditionOutcome;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.2: introduced
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
        readonly allowedModuleRoles: internal.IList<security.IModuleRole>;
        readonly allowedModuleRolesQualifiedNames: string[];
        asLoaded(): Workflow;
        load(callback: (element: Workflow) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Workflow>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.2: introduced
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
        get workflowName(): microflows.StringTemplate;
        set workflowName(newValue: microflows.StringTemplate);
        get workflowDescription(): microflows.StringTemplate;
        set workflowDescription(newValue: microflows.StringTemplate);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get dueDate(): string;
        set dueDate(newValue: string);
        get allowedModuleRoles(): internal.IList<security.IModuleRole>;
        get allowedModuleRolesQualifiedNames(): string[];
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
     * In version 9.0.2: introduced
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
         *  9.0.2 and higher
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
