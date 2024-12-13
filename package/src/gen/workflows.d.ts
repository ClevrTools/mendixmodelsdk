import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace workflows {
    class CompletionType extends internal.AbstractEnum {
        static Relative: CompletionType;
        static Absolute: CompletionType;
        protected qualifiedTsTypeName: string;
    }
    class WorkflowEventType extends internal.AbstractEnum {
        static WorkflowCompleted: WorkflowEventType;
        static WorkflowInitiated: WorkflowEventType;
        static WorkflowRestarted: WorkflowEventType;
        static WorkflowFailed: WorkflowEventType;
        static WorkflowAborted: WorkflowEventType;
        static WorkflowPaused: WorkflowEventType;
        static WorkflowUnpaused: WorkflowEventType;
        static WorkflowRetried: WorkflowEventType;
        static WorkflowUpdated: WorkflowEventType;
        static WorkflowUpgraded: WorkflowEventType;
        static WorkflowConflicted: WorkflowEventType;
        static WorkflowResolved: WorkflowEventType;
        static WorkflowJumpToOptionApplied: WorkflowEventType;
        static StartEventExecuted: WorkflowEventType;
        static EndEventExecuted: WorkflowEventType;
        static DecisionExecuted: WorkflowEventType;
        static JumpExecuted: WorkflowEventType;
        static ParallelSplitExecuted: WorkflowEventType;
        static ParallelMergeExecuted: WorkflowEventType;
        static CallWorkflowStarted: WorkflowEventType;
        static CallWorkflowEnded: WorkflowEventType;
        static CallMicroflowStarted: WorkflowEventType;
        static CallMicroflowEnded: WorkflowEventType;
        static WaitForNotificationStarted: WorkflowEventType;
        static WaitForNotificationEnded: WorkflowEventType;
        static WaitForTimerStarted: WorkflowEventType;
        static WaitForTimerEnded: WorkflowEventType;
        static UserTaskStarted: WorkflowEventType;
        static MultiUserTaskOutcomeSelected: WorkflowEventType;
        static UserTaskEnded: WorkflowEventType;
        static NonInterruptingTimerEventExecuted: WorkflowEventType;
        static InterruptingTimerEventExecuted: WorkflowEventType;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Workflows`.
     */
    /**
     * In version 9.22.0: introduced
     */
    abstract class TargetUserInput extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMultiInputCompletion(): MultiInputCompletion;
        get containerAsMultiUserTaskActivity(): MultiUserTaskActivity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.22.0: introduced
     */
    class AbsoluteAmountUserInput extends TargetUserInput {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMultiInputCompletion(): MultiInputCompletion;
        get containerAsMultiUserTaskActivity(): MultiUserTaskActivity;
        get amount(): number;
        set amount(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AbsoluteAmountUserInput instance in the SDK and on the server.
         * The new AbsoluteAmountUserInput will be automatically stored in the 'targetUserInput' property
         * of the parent MultiInputCompletion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 to 10.11.0
         */
        static createInMultiInputCompletionUnderTargetUserInput(container: MultiInputCompletion): AbsoluteAmountUserInput;
        /**
         * Creates and returns a new AbsoluteAmountUserInput instance in the SDK and on the server.
         * The new AbsoluteAmountUserInput will be automatically stored in the 'targetUserInput' property
         * of the parent MultiUserTaskActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createInMultiUserTaskActivityUnderTargetUserInput(container: MultiUserTaskActivity): AbsoluteAmountUserInput;
        /**
         * Creates and returns a new AbsoluteAmountUserInput instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AbsoluteAmountUserInput;
    }
    /**
     * In version 9.22.0: introduced
     */
    class AllUserInput extends TargetUserInput {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMultiInputCompletion(): MultiInputCompletion;
        get containerAsMultiUserTaskActivity(): MultiUserTaskActivity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AllUserInput instance in the SDK and on the server.
         * The new AllUserInput will be automatically stored in the 'targetUserInput' property
         * of the parent MultiInputCompletion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 to 10.11.0
         */
        static createInMultiInputCompletionUnderTargetUserInput(container: MultiInputCompletion): AllUserInput;
        /**
         * Creates and returns a new AllUserInput instance in the SDK and on the server.
         * The new AllUserInput will be automatically stored in the 'targetUserInput' property
         * of the parent MultiUserTaskActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createInMultiUserTaskActivityUnderTargetUserInput(container: MultiUserTaskActivity): AllUserInput;
        /**
         * Creates and returns a new AllUserInput instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AllUserInput;
    }
    /**
     * In version 9.15.0: introduced
     */
    class Annotation extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBoundaryEvent(): BoundaryEvent;
        get containerAsWorkflow(): Workflow;
        get containerAsWorkflowActivity(): WorkflowActivity;
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * The new Annotation will be automatically stored in the 'annotation' property
         * of the parent BoundaryEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.16.0 and higher
         */
        static createInBoundaryEventUnderAnnotation(container: BoundaryEvent): Annotation;
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * The new Annotation will be automatically stored in the 'annotation' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.15.0 and higher
         */
        static createInWorkflowUnderAnnotation(container: Workflow): Annotation;
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * The new Annotation will be automatically stored in the 'annotation' property
         * of the parent WorkflowActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.15.0 and higher
         */
        static createInWorkflowActivityUnderAnnotation(container: WorkflowActivity): Annotation;
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Annotation;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/workflows relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    interface IOutcome extends internal.IElement {
        readonly model: IModel;
        readonly containerAsConditionOutcomeActivity: IConditionOutcomeActivity;
        readonly containerAsParallelSplitActivity: IParallelSplitActivity;
        readonly containerAsUserTask: IUserTask;
        readonly containerAsUserTaskActivity: IUserTaskActivity;
        /**
         * This property is required and cannot be set to null.
         */
        readonly flow: IFlow;
        asLoaded(): Outcome;
        load(callback: (element: Outcome) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Outcome>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/workflows relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    abstract class Outcome extends internal.Element<IModel> implements IOutcome {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConditionOutcomeActivity(): ConditionOutcomeActivity;
        get containerAsParallelSplitActivity(): ParallelSplitActivity;
        get containerAsUserTask(): UserTask;
        get containerAsUserTaskActivity(): UserTaskActivity;
        get flow(): Flow;
        set flow(newValue: Flow);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.0.5: removed experimental
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
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    abstract class ConditionOutcome extends Outcome implements IConditionOutcome {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConditionOutcomeActivity(): ConditionOutcomeActivity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.0.5: removed experimental
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
     * In version 9.0.5: removed experimental
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
     * See: {@link https://docs.mendix.com/refguide/workflow-boundary-events relevant section in reference guide}
     *
     * In version 10.14.0: introduced
     */
    interface IBoundaryEvent extends internal.IElement {
        readonly model: IModel;
        readonly containerAsCallMicroflowTask: ICallMicroflowTask;
        readonly containerAsCallWorkflowActivity: ICallWorkflowActivity;
        readonly containerAsUserTaskActivity: IUserTaskActivity;
        readonly containerAsWaitForNotificationActivity: IWaitForNotificationActivity;
        /**
         * This property is required and cannot be set to null.
         */
        readonly flow: IFlow;
        readonly caption: string;
        /**
         * In version 10.17.0: introduced
         */
        readonly isInterrupting: boolean;
        asLoaded(): BoundaryEvent;
        load(callback: (element: BoundaryEvent) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<BoundaryEvent>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/workflow-boundary-events relevant section in reference guide}
     *
     * In version 10.14.0: introduced
     */
    abstract class BoundaryEvent extends internal.Element<IModel> implements IBoundaryEvent {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCallMicroflowTask(): CallMicroflowTask;
        get containerAsCallWorkflowActivity(): CallWorkflowActivity;
        get containerAsUserTaskActivity(): UserTaskActivity;
        get containerAsWaitForNotificationActivity(): WaitForNotificationActivity;
        get flow(): Flow;
        set flow(newValue: Flow);
        get caption(): string;
        set caption(newValue: string);
        /**
         * In version 10.16.0: introduced
         */
        get annotation(): Annotation | null;
        set annotation(newValue: Annotation | null);
        /**
         * In version 10.17.0: introduced
         */
        get isInterrupting(): boolean;
        set isInterrupting(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/workflows relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    interface IWorkflowActivity extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        /**
         * In version 9.0.5: introduced
         */
        readonly name: string;
        readonly caption: string;
        asLoaded(): WorkflowActivity;
        load(callback: (element: WorkflowActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<WorkflowActivity>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/workflows relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    abstract class WorkflowActivity extends internal.Element<IModel> implements IWorkflowActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        /**
         * In version 9.0.5: introduced
         */
        get name(): string;
        set name(newValue: string);
        get caption(): string;
        set caption(newValue: string);
        /**
         * In version 9.15.0: introduced
         */
        get annotation(): Annotation | null;
        set annotation(newValue: Annotation | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        get qualifiedName(): string | null;
    }
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    interface IConditionOutcomeActivity extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        readonly outcomes: internal.IList<IConditionOutcome>;
        asLoaded(): ConditionOutcomeActivity;
        load(callback: (element: ConditionOutcomeActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConditionOutcomeActivity>;
    }
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    abstract class ConditionOutcomeActivity extends WorkflowActivity implements IConditionOutcomeActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        get outcomes(): internal.IList<ConditionOutcome>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/call-microflow relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    interface ICallMicroflowTask extends IConditionOutcomeActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        readonly microflow: microflows.IMicroflow | null;
        readonly microflowQualifiedName: string | null;
        /**
         * In version 10.14.0: introduced
         */
        readonly boundaryEvents: internal.IList<IBoundaryEvent>;
        asLoaded(): CallMicroflowTask;
        load(callback: (element: CallMicroflowTask) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CallMicroflowTask>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/call-microflow relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class CallMicroflowTask extends ConditionOutcomeActivity implements ICallMicroflowTask {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        get parameterMappings(): internal.IList<MicroflowCallParameterMapping>;
        /**
         * In version 10.14.0: introduced
         */
        get boundaryEvents(): internal.IList<BoundaryEvent>;
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
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    interface ICallWorkflowActivity extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        readonly workflow: IWorkflow | null;
        readonly workflowQualifiedName: string | null;
        /**
         * In version 10.14.0: introduced
         */
        readonly boundaryEvents: internal.IList<IBoundaryEvent>;
        asLoaded(): CallWorkflowActivity;
        load(callback: (element: CallWorkflowActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CallWorkflowActivity>;
    }
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class CallWorkflowActivity extends WorkflowActivity implements ICallWorkflowActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        get workflow(): IWorkflow | null;
        set workflow(newValue: IWorkflow | null);
        get workflowQualifiedName(): string | null;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 9.18.0: deleted
         * In version 9.6.0: introduced
         */
        get parameterExpression(): string;
        set parameterExpression(newValue: string);
        /**
         * In version 9.18.0: introduced
         */
        get parameterMappings(): internal.IList<WorkflowCallParameterMapping>;
        /**
         * In version 10.14.0: introduced
         */
        get boundaryEvents(): internal.IList<BoundaryEvent>;
        /**
         * In version 9.18.0: introduced
         */
        get executeAsync(): boolean;
        set executeAsync(newValue: boolean);
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
     * In version 9.22.0: introduced
     */
    abstract class UserTaskCompletionCriteria extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMultiInputCompletion(): MultiInputCompletion;
        get containerAsMultiUserTaskActivity(): MultiUserTaskActivity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.22.0: introduced
     */
    class ConsensusCompletionCriteria extends UserTaskCompletionCriteria {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMultiInputCompletion(): MultiInputCompletion;
        get containerAsMultiUserTaskActivity(): MultiUserTaskActivity;
        get fallbackOutcome(): UserTaskOutcome | null;
        set fallbackOutcome(newValue: UserTaskOutcome | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConsensusCompletionCriteria instance in the SDK and on the server.
         * The new ConsensusCompletionCriteria will be automatically stored in the 'completionCriteria' property
         * of the parent MultiInputCompletion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 to 10.11.0
         */
        static createInMultiInputCompletionUnderCompletionCriteria(container: MultiInputCompletion): ConsensusCompletionCriteria;
        /**
         * Creates and returns a new ConsensusCompletionCriteria instance in the SDK and on the server.
         * The new ConsensusCompletionCriteria will be automatically stored in the 'completionCriteria' property
         * of the parent MultiUserTaskActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createInMultiUserTaskActivityUnderCompletionCriteria(container: MultiUserTaskActivity): ConsensusCompletionCriteria;
        /**
         * Creates and returns a new ConsensusCompletionCriteria instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConsensusCompletionCriteria;
    }
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    abstract class UserSource extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsUserTask(): UserTask;
        get containerAsUserTaskActivity(): UserTaskActivity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.10.0: introduced
     */
    class EmptyUserSource extends UserSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsUserTask(): UserTask;
        get containerAsUserTaskActivity(): UserTaskActivity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EmptyUserSource instance in the SDK and on the server.
         * The new EmptyUserSource will be automatically stored in the 'userSource' property
         * of the parent UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.10.0 to 10.11.0
         */
        static createInUserTaskUnderUserSource(container: UserTask): EmptyUserSource;
        /**
         * Creates and returns a new EmptyUserSource instance in the SDK and on the server.
         * The new EmptyUserSource will be automatically stored in the 'userSource' property
         * of the parent UserTaskActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createInUserTaskActivityUnderUserSource(container: UserTaskActivity): EmptyUserSource;
        /**
         * Creates and returns a new EmptyUserSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EmptyUserSource;
    }
    /**
     * In version 10.14.0: introduced
     */
    interface IEndOfBoundaryEventPathActivity extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        asLoaded(): EndOfBoundaryEventPathActivity;
        load(callback: (element: EndOfBoundaryEventPathActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EndOfBoundaryEventPathActivity>;
    }
    /**
     * In version 10.14.0: introduced
     */
    class EndOfBoundaryEventPathActivity extends WorkflowActivity implements IEndOfBoundaryEventPathActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EndOfBoundaryEventPathActivity instance in the SDK and on the server.
         * The new EndOfBoundaryEventPathActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.14.0 and higher
         */
        static createIn(container: Flow): EndOfBoundaryEventPathActivity;
        /**
         * Creates and returns a new EndOfBoundaryEventPathActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EndOfBoundaryEventPathActivity;
    }
    /**
     * In version 9.0.5: removed experimental
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
     * In version 9.0.5: removed experimental
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
     * In version 9.0.5: removed experimental
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
     * In version 9.0.5: removed experimental
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
     * See: {@link https://docs.mendix.com/refguide/decision-in-workflows relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
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
     * See: {@link https://docs.mendix.com/refguide/decision-in-workflows relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
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
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    interface IFlow extends internal.IElement {
        readonly model: IModel;
        readonly containerAsBoundaryEvent: IBoundaryEvent;
        readonly containerAsOutcome: IOutcome;
        readonly containerAsWorkflow: IWorkflow;
        readonly activities: internal.IList<IWorkflowActivity>;
        asLoaded(): Flow;
        load(callback: (element: Flow) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Flow>;
    }
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class Flow extends internal.Element<IModel> implements IFlow {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBoundaryEvent(): BoundaryEvent;
        get containerAsOutcome(): Outcome;
        get containerAsWorkflow(): Workflow;
        get activities(): internal.IList<WorkflowActivity>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Flow instance in the SDK and on the server.
         * The new Flow will be automatically stored in the 'flow' property
         * of the parent BoundaryEvent element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.14.0 and higher
         */
        static createInBoundaryEventUnderFlow(container: BoundaryEvent): Flow;
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
     * See: {@link https://docs.mendix.com/refguide/jump-activity relevant section in reference guide}
     *
     * In version 9.0.5: introduced
     */
    interface IJumpToActivity extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        asLoaded(): JumpToActivity;
        load(callback: (element: JumpToActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<JumpToActivity>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/jump-activity relevant section in reference guide}
     *
     * In version 9.0.5: introduced
     */
    class JumpToActivity extends WorkflowActivity implements IJumpToActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        get targetActivity(): WorkflowActivity | null;
        set targetActivity(newValue: WorkflowActivity | null);
        get targetActivityLocalName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JumpToActivity instance in the SDK and on the server.
         * The new JumpToActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.5 and higher
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
     * In version 10.0.0: introduced
     */
    class MajorityCompletionCriteria extends UserTaskCompletionCriteria {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMultiInputCompletion(): MultiInputCompletion;
        get containerAsMultiUserTaskActivity(): MultiUserTaskActivity;
        get completionType(): CompletionType;
        set completionType(newValue: CompletionType);
        get fallbackOutcome(): UserTaskOutcome | null;
        set fallbackOutcome(newValue: UserTaskOutcome | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MajorityCompletionCriteria instance in the SDK and on the server.
         * The new MajorityCompletionCriteria will be automatically stored in the 'completionCriteria' property
         * of the parent MultiInputCompletion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 to 10.11.0
         */
        static createInMultiInputCompletionUnderCompletionCriteria(container: MultiInputCompletion): MajorityCompletionCriteria;
        /**
         * Creates and returns a new MajorityCompletionCriteria instance in the SDK and on the server.
         * The new MajorityCompletionCriteria will be automatically stored in the 'completionCriteria' property
         * of the parent MultiUserTaskActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createInMultiUserTaskActivityUnderCompletionCriteria(container: MultiUserTaskActivity): MajorityCompletionCriteria;
        /**
         * Creates and returns a new MajorityCompletionCriteria instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MajorityCompletionCriteria;
    }
    /**
     * In version 9.0.5: introduced
     */
    abstract class UserTaskEvent extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsUserTask(): UserTask;
        get containerAsUserTaskActivity(): UserTaskActivity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 9.0.5: introduced
     */
    class MicroflowBasedEvent extends UserTaskEvent {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsUserTask(): UserTask;
        get containerAsUserTaskActivity(): UserTaskActivity;
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowBasedEvent instance in the SDK and on the server.
         * The new MicroflowBasedEvent will be automatically stored in the 'onCreatedEvent' property
         * of the parent UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.5 to 10.11.0
         */
        static createInUserTaskUnderOnCreatedEvent(container: UserTask): MicroflowBasedEvent;
        /**
         * Creates and returns a new MicroflowBasedEvent instance in the SDK and on the server.
         * The new MicroflowBasedEvent will be automatically stored in the 'onCreatedEvent' property
         * of the parent UserTaskActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createInUserTaskActivityUnderOnCreatedEvent(container: UserTaskActivity): MicroflowBasedEvent;
        /**
         * Creates and returns a new MicroflowBasedEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowBasedEvent;
    }
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class MicroflowBasedUserSource extends UserSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsUserTask(): UserTask;
        get containerAsUserTaskActivity(): UserTaskActivity;
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
         *  9.0.2 to 10.11.0
         */
        static createInUserTaskUnderUserSource(container: UserTask): MicroflowBasedUserSource;
        /**
         * Creates and returns a new MicroflowBasedUserSource instance in the SDK and on the server.
         * The new MicroflowBasedUserSource will be automatically stored in the 'userSource' property
         * of the parent UserTaskActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createInUserTaskActivityUnderUserSource(container: UserTaskActivity): MicroflowBasedUserSource;
        /**
         * Creates and returns a new MicroflowBasedUserSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowBasedUserSource;
    }
    /**
     * In version 9.0.5: removed experimental
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
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowCallParameterMapping;
    }
    /**
     * In version 10.3.0: introduced
     */
    class MicroflowCompletionCriteria extends UserTaskCompletionCriteria {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMultiInputCompletion(): MultiInputCompletion;
        get containerAsMultiUserTaskActivity(): MultiUserTaskActivity;
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowCompletionCriteria instance in the SDK and on the server.
         * The new MicroflowCompletionCriteria will be automatically stored in the 'completionCriteria' property
         * of the parent MultiInputCompletion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.3.0 to 10.11.0
         */
        static createInMultiInputCompletionUnderCompletionCriteria(container: MultiInputCompletion): MicroflowCompletionCriteria;
        /**
         * Creates and returns a new MicroflowCompletionCriteria instance in the SDK and on the server.
         * The new MicroflowCompletionCriteria will be automatically stored in the 'completionCriteria' property
         * of the parent MultiUserTaskActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createInMultiUserTaskActivityUnderCompletionCriteria(container: MultiUserTaskActivity): MicroflowCompletionCriteria;
        /**
         * Creates and returns a new MicroflowCompletionCriteria instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowCompletionCriteria;
    }
    /**
     * In version 9.12.0: introduced
     */
    class MicroflowEventHandler extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflowsProjectSettingsPart(): settings.WorkflowsProjectSettingsPart;
        get containerAsWorkflow(): Workflow;
        get containerAsWorkflowEventHandler(): WorkflowEventHandler;
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowEventHandler instance in the SDK and on the server.
         * The new MicroflowEventHandler will be automatically stored in the 'usertaskOnStateChangeEvent' property
         * of the parent settings.WorkflowsProjectSettingsPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createInWorkflowsProjectSettingsPartUnderUsertaskOnStateChangeEvent(container: settings.WorkflowsProjectSettingsPart): MicroflowEventHandler;
        /**
         * Creates and returns a new MicroflowEventHandler instance in the SDK and on the server.
         * The new MicroflowEventHandler will be automatically stored in the 'workflowOnStateChangeEvent' property
         * of the parent settings.WorkflowsProjectSettingsPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createInWorkflowsProjectSettingsPartUnderWorkflowOnStateChangeEvent(container: settings.WorkflowsProjectSettingsPart): MicroflowEventHandler;
        /**
         * Creates and returns a new MicroflowEventHandler instance in the SDK and on the server.
         * The new MicroflowEventHandler will be automatically stored in the 'usertaskOnStateChangeEvent' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createInWorkflowUnderUsertaskOnStateChangeEvent(container: Workflow): MicroflowEventHandler;
        /**
         * Creates and returns a new MicroflowEventHandler instance in the SDK and on the server.
         * The new MicroflowEventHandler will be automatically stored in the 'workflowOnStateChangeEvent' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.12.0 and higher
         */
        static createInWorkflowUnderWorkflowOnStateChangeEvent(container: Workflow): MicroflowEventHandler;
        /**
         * Creates and returns a new MicroflowEventHandler instance in the SDK and on the server.
         * The new MicroflowEventHandler will be automatically stored in the 'microflowEventHandler' property
         * of the parent WorkflowEventHandler element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.7.0 and higher
         */
        static createInWorkflowEventHandlerUnderMicroflowEventHandler(container: WorkflowEventHandler): MicroflowEventHandler;
        /**
         * Creates and returns a new MicroflowEventHandler instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowEventHandler;
    }
    /**
     * In version 10.12.0: deleted
     * In version 9.22.0: introduced
     */
    abstract class UserTaskCompletion extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsUserTask(): UserTask;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 10.12.0: deleted
     * In version 9.22.0: introduced
     */
    class MultiInputCompletion extends UserTaskCompletion {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsUserTask(): UserTask;
        get targetUserInput(): TargetUserInput;
        set targetUserInput(newValue: TargetUserInput);
        get completionCriteria(): UserTaskCompletionCriteria;
        set completionCriteria(newValue: UserTaskCompletionCriteria);
        /**
         * In version 10.2.0: introduced
         */
        get awaitAllUsers(): boolean;
        set awaitAllUsers(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MultiInputCompletion instance in the SDK and on the server.
         * The new MultiInputCompletion will be automatically stored in the 'userTaskCompletion' property
         * of the parent UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 to 10.11.0
         */
        static createIn(container: UserTask): MultiInputCompletion;
        /**
         * Creates and returns a new MultiInputCompletion instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MultiInputCompletion;
    }
    /**
     * In version 10.12.0: introduced
     */
    interface IUserTaskActivity extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        /**
         * This property is required and cannot be set to null.
         */
        readonly taskPage: IPageReference;
        readonly outcomes: internal.IList<IUserTaskOutcome>;
        /**
         * In version 10.14.0: introduced
         */
        readonly boundaryEvents: internal.IList<IBoundaryEvent>;
        asLoaded(): UserTaskActivity;
        load(callback: (element: UserTaskActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<UserTaskActivity>;
    }
    /**
     * In version 10.12.0: introduced
     */
    abstract class UserTaskActivity extends WorkflowActivity implements IUserTaskActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        get taskPage(): PageReference;
        set taskPage(newValue: PageReference);
        get taskName(): microflows.StringTemplate;
        set taskName(newValue: microflows.StringTemplate);
        get taskDescription(): microflows.StringTemplate;
        set taskDescription(newValue: microflows.StringTemplate);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get dueDate(): string;
        set dueDate(newValue: string);
        get userSource(): UserSource;
        set userSource(newValue: UserSource);
        get outcomes(): internal.IList<UserTaskOutcome>;
        /**
         * In version 10.14.0: introduced
         */
        get boundaryEvents(): internal.IList<BoundaryEvent>;
        get onCreatedEvent(): UserTaskEvent;
        set onCreatedEvent(newValue: UserTaskEvent);
        get autoAssignSingleTargetUser(): boolean;
        set autoAssignSingleTargetUser(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 10.12.0: introduced
     */
    interface IMultiUserTaskActivity extends IUserTaskActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        asLoaded(): MultiUserTaskActivity;
        load(callback: (element: MultiUserTaskActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MultiUserTaskActivity>;
    }
    /**
     * In version 10.12.0: introduced
     */
    class MultiUserTaskActivity extends UserTaskActivity implements IMultiUserTaskActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        get targetUserInput(): TargetUserInput;
        set targetUserInput(newValue: TargetUserInput);
        get completionCriteria(): UserTaskCompletionCriteria;
        set completionCriteria(newValue: UserTaskCompletionCriteria);
        get awaitAllUsers(): boolean;
        set awaitAllUsers(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MultiUserTaskActivity instance in the SDK and on the server.
         * The new MultiUserTaskActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createIn(container: Flow): MultiUserTaskActivity;
        /**
         * Creates and returns a new MultiUserTaskActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MultiUserTaskActivity;
    }
    /**
     * In version 9.0.5: introduced
     */
    class NoEvent extends UserTaskEvent {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsUserTask(): UserTask;
        get containerAsUserTaskActivity(): UserTaskActivity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NoEvent instance in the SDK and on the server.
         * The new NoEvent will be automatically stored in the 'onCreatedEvent' property
         * of the parent UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.5 to 10.11.0
         */
        static createInUserTaskUnderOnCreatedEvent(container: UserTask): NoEvent;
        /**
         * Creates and returns a new NoEvent instance in the SDK and on the server.
         * The new NoEvent will be automatically stored in the 'onCreatedEvent' property
         * of the parent UserTaskActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createInUserTaskActivityUnderOnCreatedEvent(container: UserTaskActivity): NoEvent;
        /**
         * Creates and returns a new NoEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NoEvent;
    }
    /**
     * In version 9.11.0: introduced
     */
    class PageParameterMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get parameter(): pages.IPageParameter;
        set parameter(newValue: pages.IPageParameter);
        get parameterQualifiedName(): string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression(): string;
        set expression(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PageParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PageParameterMapping;
    }
    /**
     * In version 9.12.0: added public
     * In version 9.11.0: introduced
     */
    interface IPageReference extends internal.IElement {
        readonly model: IModel;
        readonly containerAsUserTask: IUserTask;
        readonly containerAsUserTaskActivity: IUserTaskActivity;
        readonly containerAsWorkflow: IWorkflow;
        /**
         * In version 9.12.0: added public
         */
        readonly page: pages.IPage | null;
        readonly pageQualifiedName: string | null;
        asLoaded(): PageReference;
        load(callback: (element: PageReference) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<PageReference>;
    }
    /**
     * In version 9.12.0: added public
     * In version 9.11.0: introduced
     */
    class PageReference extends internal.Element<IModel> implements IPageReference {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsUserTask(): UserTask;
        get containerAsUserTaskActivity(): UserTaskActivity;
        get containerAsWorkflow(): Workflow;
        /**
         * In version 9.12.0: added public
         */
        get page(): pages.IPage | null;
        set page(newValue: pages.IPage | null);
        get pageQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PageReference instance in the SDK and on the server.
         * The new PageReference will be automatically stored in the 'taskPage' property
         * of the parent UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.11.0
         */
        static createInUserTaskUnderTaskPage(container: UserTask): PageReference;
        /**
         * Creates and returns a new PageReference instance in the SDK and on the server.
         * The new PageReference will be automatically stored in the 'taskPage' property
         * of the parent UserTaskActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createInUserTaskActivityUnderTaskPage(container: UserTaskActivity): PageReference;
        /**
         * Creates and returns a new PageReference instance in the SDK and on the server.
         * The new PageReference will be automatically stored in the 'adminPage' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 and higher
         */
        static createInWorkflowUnderAdminPage(container: Workflow): PageReference;
        /**
         * Creates and returns a new PageReference instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PageReference;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/parallel-split relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    interface IParallelSplitActivity extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        readonly outcomes: internal.IList<IParallelSplitOutcome>;
        asLoaded(): ParallelSplitActivity;
        load(callback: (element: ParallelSplitActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ParallelSplitActivity>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/parallel-split relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class ParallelSplitActivity extends WorkflowActivity implements IParallelSplitActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
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
     * In version 9.0.5: removed experimental
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
     * In version 9.0.5: removed experimental
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
     * In version 9.6.0: introduced
     */
    interface IParameter extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsWorkflow: IWorkflow;
        /**
         * In version 9.10.0: deleted
         */
        readonly entityRef: domainmodels.IIndirectEntityRef | null;
        /**
         * In version 9.10.0: introduced
         */
        readonly entity: domainmodels.IEntity | null;
        readonly entityQualifiedName: string | null;
        /**
         * In version 9.18.0: introduced
         */
        readonly name: string;
        asLoaded(): Parameter;
        load(callback: (element: Parameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Parameter>;
    }
    /**
     * In version 9.6.0: introduced
     */
    class Parameter extends internal.Element<IModel> implements IParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflow(): Workflow;
        /**
         * In version 9.10.0: deleted
         */
        get entityRef(): domainmodels.IndirectEntityRef | null;
        set entityRef(newValue: domainmodels.IndirectEntityRef | null);
        /**
         * In version 9.10.0: introduced
         */
        get entity(): domainmodels.IEntity | null;
        set entity(newValue: domainmodels.IEntity | null);
        get entityQualifiedName(): string | null;
        /**
         * In version 9.18.0: introduced
         */
        get name(): string;
        set name(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Parameter instance in the SDK and on the server.
         * The new Parameter will be automatically stored in the 'parameter' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.6.0 and higher
         */
        static createIn(container: Workflow): Parameter;
        /**
         * Creates and returns a new Parameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Parameter;
        get qualifiedName(): string | null;
    }
    /**
     * In version 9.22.0: introduced
     */
    class PercentageAmountUserInput extends TargetUserInput {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMultiInputCompletion(): MultiInputCompletion;
        get containerAsMultiUserTaskActivity(): MultiUserTaskActivity;
        get percentage(): number;
        set percentage(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PercentageAmountUserInput instance in the SDK and on the server.
         * The new PercentageAmountUserInput will be automatically stored in the 'targetUserInput' property
         * of the parent MultiInputCompletion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 to 10.11.0
         */
        static createInMultiInputCompletionUnderTargetUserInput(container: MultiInputCompletion): PercentageAmountUserInput;
        /**
         * Creates and returns a new PercentageAmountUserInput instance in the SDK and on the server.
         * The new PercentageAmountUserInput will be automatically stored in the 'targetUserInput' property
         * of the parent MultiUserTaskActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createInMultiUserTaskActivityUnderTargetUserInput(container: MultiUserTaskActivity): PercentageAmountUserInput;
        /**
         * Creates and returns a new PercentageAmountUserInput instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PercentageAmountUserInput;
    }
    /**
     * In version 10.12.0: deleted
     * In version 9.22.0: introduced
     */
    class SingleInputCompletion extends UserTaskCompletion {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsUserTask(): UserTask;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SingleInputCompletion instance in the SDK and on the server.
         * The new SingleInputCompletion will be automatically stored in the 'userTaskCompletion' property
         * of the parent UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 to 10.11.0
         */
        static createIn(container: UserTask): SingleInputCompletion;
        /**
         * Creates and returns a new SingleInputCompletion instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SingleInputCompletion;
    }
    /**
     * In version 10.12.0: introduced
     */
    interface ISingleUserTaskActivity extends IUserTaskActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        asLoaded(): SingleUserTaskActivity;
        load(callback: (element: SingleUserTaskActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<SingleUserTaskActivity>;
    }
    /**
     * In version 10.12.0: introduced
     */
    class SingleUserTaskActivity extends UserTaskActivity implements ISingleUserTaskActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SingleUserTaskActivity instance in the SDK and on the server.
         * The new SingleUserTaskActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createIn(container: Flow): SingleUserTaskActivity;
        /**
         * Creates and returns a new SingleUserTaskActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SingleUserTaskActivity;
    }
    /**
     * In version 10.0.0: introduced
     */
    class ThresholdCompletionCriteria extends UserTaskCompletionCriteria {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMultiInputCompletion(): MultiInputCompletion;
        get containerAsMultiUserTaskActivity(): MultiUserTaskActivity;
        get completionType(): CompletionType;
        set completionType(newValue: CompletionType);
        get threshold(): number;
        set threshold(newValue: number);
        get fallbackOutcome(): UserTaskOutcome | null;
        set fallbackOutcome(newValue: UserTaskOutcome | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ThresholdCompletionCriteria instance in the SDK and on the server.
         * The new ThresholdCompletionCriteria will be automatically stored in the 'completionCriteria' property
         * of the parent MultiInputCompletion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 to 10.11.0
         */
        static createInMultiInputCompletionUnderCompletionCriteria(container: MultiInputCompletion): ThresholdCompletionCriteria;
        /**
         * Creates and returns a new ThresholdCompletionCriteria instance in the SDK and on the server.
         * The new ThresholdCompletionCriteria will be automatically stored in the 'completionCriteria' property
         * of the parent MultiUserTaskActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createInMultiUserTaskActivityUnderCompletionCriteria(container: MultiUserTaskActivity): ThresholdCompletionCriteria;
        /**
         * Creates and returns a new ThresholdCompletionCriteria instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ThresholdCompletionCriteria;
    }
    /**
     * In version 10.14.0: introduced
     */
    interface ITimerBoundaryEvent extends IBoundaryEvent {
        readonly model: IModel;
        readonly containerAsCallMicroflowTask: ICallMicroflowTask;
        readonly containerAsCallWorkflowActivity: ICallWorkflowActivity;
        readonly containerAsUserTaskActivity: IUserTaskActivity;
        readonly containerAsWaitForNotificationActivity: IWaitForNotificationActivity;
        asLoaded(): TimerBoundaryEvent;
        load(callback: (element: TimerBoundaryEvent) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<TimerBoundaryEvent>;
    }
    /**
     * In version 10.14.0: introduced
     */
    class TimerBoundaryEvent extends BoundaryEvent implements ITimerBoundaryEvent {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCallMicroflowTask(): CallMicroflowTask;
        get containerAsCallWorkflowActivity(): CallWorkflowActivity;
        get containerAsUserTaskActivity(): UserTaskActivity;
        get containerAsWaitForNotificationActivity(): WaitForNotificationActivity;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get delay(): string;
        set delay(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TimerBoundaryEvent instance in the SDK and on the server.
         * The new TimerBoundaryEvent will be automatically stored in the 'boundaryEvents' property
         * of the parent CallMicroflowTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.14.0 and higher
         */
        static createInCallMicroflowTaskUnderBoundaryEvents(container: CallMicroflowTask): TimerBoundaryEvent;
        /**
         * Creates and returns a new TimerBoundaryEvent instance in the SDK and on the server.
         * The new TimerBoundaryEvent will be automatically stored in the 'boundaryEvents' property
         * of the parent CallWorkflowActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.14.0 and higher
         */
        static createInCallWorkflowActivityUnderBoundaryEvents(container: CallWorkflowActivity): TimerBoundaryEvent;
        /**
         * Creates and returns a new TimerBoundaryEvent instance in the SDK and on the server.
         * The new TimerBoundaryEvent will be automatically stored in the 'boundaryEvents' property
         * of the parent UserTaskActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.14.0 and higher
         */
        static createInUserTaskActivityUnderBoundaryEvents(container: UserTaskActivity): TimerBoundaryEvent;
        /**
         * Creates and returns a new TimerBoundaryEvent instance in the SDK and on the server.
         * The new TimerBoundaryEvent will be automatically stored in the 'boundaryEvents' property
         * of the parent WaitForNotificationActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.14.0 and higher
         */
        static createInWaitForNotificationActivityUnderBoundaryEvents(container: WaitForNotificationActivity): TimerBoundaryEvent;
        /**
         * Creates and returns a new TimerBoundaryEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TimerBoundaryEvent;
    }
    /**
     * In version 10.12.0: deleted
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    interface IUserTask extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        /**
         * In version 9.10.0: deleted
         * In version 9.6.0: introduced
         */
        readonly userTaskEntity: domainmodels.IEntity | null;
        readonly userTaskEntityQualifiedName: string | null;
        /**
         * In version 9.11.0: deleted
         */
        readonly page: pages.IPage | null;
        readonly pageQualifiedName: string | null;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 9.12.0: added public
         * In version 9.11.0: introduced
         */
        readonly taskPage: IPageReference;
        readonly outcomes: internal.IList<IUserTaskOutcome>;
        /**
         * In version 9.6.0: deleted
         * In version 9.0.3: introduced
         */
        readonly allowedModuleRoles: internal.IList<security.IModuleRole>;
        readonly allowedModuleRolesQualifiedNames: string[];
        asLoaded(): UserTask;
        load(callback: (element: UserTask) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<UserTask>;
    }
    /**
     * In version 10.12.0: deleted
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class UserTask extends WorkflowActivity implements IUserTask {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        /**
         * In version 9.10.0: deleted
         * In version 9.6.0: introduced
         */
        get userTaskEntity(): domainmodels.IEntity | null;
        set userTaskEntity(newValue: domainmodels.IEntity | null);
        get userTaskEntityQualifiedName(): string | null;
        /**
         * In version 9.11.0: deleted
         */
        get page(): pages.IPage | null;
        set page(newValue: pages.IPage | null);
        get pageQualifiedName(): string | null;
        /**
         * In version 9.12.0: added public
         * In version 9.11.0: introduced
         */
        get taskPage(): PageReference;
        set taskPage(newValue: PageReference);
        get taskName(): microflows.StringTemplate;
        set taskName(newValue: microflows.StringTemplate);
        get taskDescription(): microflows.StringTemplate;
        set taskDescription(newValue: microflows.StringTemplate);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get dueDate(): string;
        set dueDate(newValue: string);
        get userSource(): UserSource;
        set userSource(newValue: UserSource);
        get outcomes(): internal.IList<UserTaskOutcome>;
        /**
         * In version 9.6.0: deleted
         * In version 9.0.3: introduced
         */
        get allowedModuleRoles(): internal.IList<security.IModuleRole>;
        get allowedModuleRolesQualifiedNames(): string[];
        /**
         * In version 9.0.5: introduced
         */
        get onCreatedEvent(): UserTaskEvent;
        set onCreatedEvent(newValue: UserTaskEvent);
        /**
         * In version 9.11.0: introduced
         */
        get autoAssignSingleTargetUser(): boolean;
        set autoAssignSingleTargetUser(newValue: boolean);
        /**
         * In version 9.22.0: introduced
         */
        get userTaskCompletion(): UserTaskCompletion;
        set userTaskCompletion(newValue: UserTaskCompletion);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new UserTask instance in the SDK and on the server.
         * The new UserTask will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 to 10.11.0
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
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    interface IUserTaskOutcome extends IOutcome, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsUserTask: IUserTask;
        readonly containerAsUserTaskActivity: IUserTaskActivity;
        /**
         * In version 9.19.0: deleted
         */
        readonly name: string;
        /**
         * In version 9.19.0: deleted
         */
        readonly caption: string;
        /**
         * In version 9.19.0: introduced
         */
        readonly value: string;
        asLoaded(): UserTaskOutcome;
        load(callback: (element: UserTaskOutcome) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<UserTaskOutcome>;
    }
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class UserTaskOutcome extends Outcome implements IUserTaskOutcome {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsUserTask(): UserTask;
        get containerAsUserTaskActivity(): UserTaskActivity;
        /**
         * In version 9.19.0: deleted
         */
        get name(): string;
        set name(newValue: string);
        /**
         * In version 9.19.0: deleted
         */
        get caption(): string;
        set caption(newValue: string);
        /**
         * In version 9.19.0: introduced
         */
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new UserTaskOutcome instance in the SDK and on the server.
         * The new UserTaskOutcome will be automatically stored in the 'outcomes' property
         * of the parent UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.2 to 10.11.0
         */
        static createInUserTaskUnderOutcomes(container: UserTask): UserTaskOutcome;
        /**
         * Creates and returns a new UserTaskOutcome instance in the SDK and on the server.
         * The new UserTaskOutcome will be automatically stored in the 'outcomes' property
         * of the parent UserTaskActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createInUserTaskActivityUnderOutcomes(container: UserTaskActivity): UserTaskOutcome;
        /**
         * Creates and returns a new UserTaskOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): UserTaskOutcome;
        get qualifiedName(): string | null;
    }
    /**
     * In version 9.22.0: introduced
     */
    class VetoCompletionCriteria extends UserTaskCompletionCriteria {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMultiInputCompletion(): MultiInputCompletion;
        get containerAsMultiUserTaskActivity(): MultiUserTaskActivity;
        get vetoOutcome(): UserTaskOutcome | null;
        set vetoOutcome(newValue: UserTaskOutcome | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new VetoCompletionCriteria instance in the SDK and on the server.
         * The new VetoCompletionCriteria will be automatically stored in the 'completionCriteria' property
         * of the parent MultiInputCompletion element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 to 10.11.0
         */
        static createInMultiInputCompletionUnderCompletionCriteria(container: MultiInputCompletion): VetoCompletionCriteria;
        /**
         * Creates and returns a new VetoCompletionCriteria instance in the SDK and on the server.
         * The new VetoCompletionCriteria will be automatically stored in the 'completionCriteria' property
         * of the parent MultiUserTaskActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createInMultiUserTaskActivityUnderCompletionCriteria(container: MultiUserTaskActivity): VetoCompletionCriteria;
        /**
         * Creates and returns a new VetoCompletionCriteria instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): VetoCompletionCriteria;
    }
    /**
     * In version 9.0.5: removed experimental
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
     * In version 9.0.5: removed experimental
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
     * See: {@link https://docs.mendix.com/refguide/wait-for-notification relevant section in reference guide}
     *
     * In version 10.0.0: introduced
     */
    interface IWaitForNotificationActivity extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        /**
         * In version 10.14.0: introduced
         */
        readonly boundaryEvents: internal.IList<IBoundaryEvent>;
        asLoaded(): WaitForNotificationActivity;
        load(callback: (element: WaitForNotificationActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<WaitForNotificationActivity>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/wait-for-notification relevant section in reference guide}
     *
     * In version 10.0.0: introduced
     */
    class WaitForNotificationActivity extends WorkflowActivity implements IWaitForNotificationActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        /**
         * In version 10.14.0: introduced
         */
        get boundaryEvents(): internal.IList<BoundaryEvent>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WaitForNotificationActivity instance in the SDK and on the server.
         * The new WaitForNotificationActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createIn(container: Flow): WaitForNotificationActivity;
        /**
         * Creates and returns a new WaitForNotificationActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WaitForNotificationActivity;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/timer relevant section in reference guide}
     *
     * In version 10.6.0: introduced
     */
    interface IWaitForTimerActivity extends IWorkflowActivity {
        readonly model: IModel;
        readonly containerAsFlow: IFlow;
        asLoaded(): WaitForTimerActivity;
        load(callback: (element: WaitForTimerActivity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<WaitForTimerActivity>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/timer relevant section in reference guide}
     *
     * In version 10.6.0: introduced
     */
    class WaitForTimerActivity extends WorkflowActivity implements IWaitForTimerActivity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFlow(): Flow;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get delay(): string;
        set delay(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WaitForTimerActivity instance in the SDK and on the server.
         * The new WaitForTimerActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createIn(container: Flow): WaitForTimerActivity;
        /**
         * Creates and returns a new WaitForTimerActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WaitForTimerActivity;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/workflows relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    interface IWorkflow extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        readonly title: string;
        /**
         * In version 9.6.0: deleted
         */
        readonly contextEntity: domainmodels.IEntity | null;
        readonly contextEntityQualifiedName: string | null;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 9.6.0: introduced
         */
        readonly parameter: IParameter;
        /**
         * In version 9.7.0: deleted
         * In version 9.6.0: introduced
         */
        readonly workflowEntity: domainmodels.IEntity | null;
        readonly workflowEntityQualifiedName: string | null;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 9.10.0: deleted
         * In version 9.7.0: introduced
         */
        readonly workflowType: IWorkflowType;
        /**
         * In version 9.11.0: deleted
         */
        readonly overviewPage: pages.IPage | null;
        readonly overviewPageQualifiedName: string | null;
        /**
         * This property is required and cannot be set to null.
         */
        readonly flow: IFlow;
        /**
         * In version 9.6.0: deleted
         */
        readonly allowedModuleRoles: internal.IList<security.IModuleRole>;
        readonly allowedModuleRolesQualifiedNames: string[];
        asLoaded(): Workflow;
        load(callback: (element: Workflow) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Workflow>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/workflows relevant section in reference guide}
     *
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class Workflow extends projects.Document implements IWorkflow {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get title(): string;
        set title(newValue: string);
        /**
         * In version 9.6.0: deleted
         */
        get contextEntity(): domainmodels.IEntity | null;
        set contextEntity(newValue: domainmodels.IEntity | null);
        get contextEntityQualifiedName(): string | null;
        /**
         * In version 9.6.0: introduced
         */
        get parameter(): Parameter;
        set parameter(newValue: Parameter);
        /**
         * In version 9.7.0: deleted
         * In version 9.6.0: introduced
         */
        get workflowEntity(): domainmodels.IEntity | null;
        set workflowEntity(newValue: domainmodels.IEntity | null);
        get workflowEntityQualifiedName(): string | null;
        /**
         * In version 9.10.0: deleted
         * In version 9.7.0: introduced
         */
        get workflowType(): WorkflowType;
        set workflowType(newValue: WorkflowType);
        /**
         * In version 9.11.0: deleted
         */
        get overviewPage(): pages.IPage | null;
        set overviewPage(newValue: pages.IPage | null);
        get overviewPageQualifiedName(): string | null;
        /**
         * In version 9.11.0: introduced
         */
        get adminPage(): PageReference | null;
        set adminPage(newValue: PageReference | null);
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
        /**
         * In version 9.6.0: deleted
         */
        get allowedModuleRoles(): internal.IList<security.IModuleRole>;
        get allowedModuleRolesQualifiedNames(): string[];
        /**
         * In version 9.12.0: introduced
         */
        get workflowOnStateChangeEvent(): MicroflowEventHandler | null;
        set workflowOnStateChangeEvent(newValue: MicroflowEventHandler | null);
        /**
         * In version 9.12.0: introduced
         */
        get usertaskOnStateChangeEvent(): MicroflowEventHandler | null;
        set usertaskOnStateChangeEvent(newValue: MicroflowEventHandler | null);
        /**
         * In version 10.7.0: introduced
         */
        get onWorkflowEvent(): internal.IList<WorkflowEventHandler> | null;
        /**
         * In version 9.15.0: introduced
         */
        get annotation(): Annotation | null;
        set annotation(newValue: Annotation | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new Workflow unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): Workflow;
    }
    /**
     * In version 9.18.0: introduced
     */
    class WorkflowCallParameterMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCallWorkflowActivity(): CallWorkflowActivity;
        get parameter(): IParameter;
        set parameter(newValue: IParameter);
        get parameterQualifiedName(): string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression(): string;
        set expression(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WorkflowCallParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WorkflowCallParameterMapping;
    }
    /**
     * In version 10.0.0: introduced
     */
    abstract class WorkflowDefinitionSelection extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsLockWorkflowAction(): microflows.LockWorkflowAction;
        get containerAsUnlockWorkflowAction(): microflows.UnlockWorkflowAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 10.0.0: introduced
     */
    class WorkflowDefinitionNameSelection extends WorkflowDefinitionSelection {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsLockWorkflowAction(): microflows.LockWorkflowAction;
        get containerAsUnlockWorkflowAction(): microflows.UnlockWorkflowAction;
        get workflow(): IWorkflow;
        set workflow(newValue: IWorkflow);
        get workflowQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WorkflowDefinitionNameSelection instance in the SDK and on the server.
         * The new WorkflowDefinitionNameSelection will be automatically stored in the 'workflowSelection' property
         * of the parent microflows.LockWorkflowAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createInLockWorkflowActionUnderWorkflowSelection(container: microflows.LockWorkflowAction): WorkflowDefinitionNameSelection;
        /**
         * Creates and returns a new WorkflowDefinitionNameSelection instance in the SDK and on the server.
         * The new WorkflowDefinitionNameSelection will be automatically stored in the 'workflowSelection' property
         * of the parent microflows.UnlockWorkflowAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createInUnlockWorkflowActionUnderWorkflowSelection(container: microflows.UnlockWorkflowAction): WorkflowDefinitionNameSelection;
        /**
         * Creates and returns a new WorkflowDefinitionNameSelection instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WorkflowDefinitionNameSelection;
    }
    /**
     * In version 10.0.0: introduced
     */
    class WorkflowDefinitionObjectSelection extends WorkflowDefinitionSelection {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsLockWorkflowAction(): microflows.LockWorkflowAction;
        get containerAsUnlockWorkflowAction(): microflows.UnlockWorkflowAction;
        get workflowDefinitionVariable(): string;
        set workflowDefinitionVariable(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WorkflowDefinitionObjectSelection instance in the SDK and on the server.
         * The new WorkflowDefinitionObjectSelection will be automatically stored in the 'workflowSelection' property
         * of the parent microflows.LockWorkflowAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createInLockWorkflowActionUnderWorkflowSelection(container: microflows.LockWorkflowAction): WorkflowDefinitionObjectSelection;
        /**
         * Creates and returns a new WorkflowDefinitionObjectSelection instance in the SDK and on the server.
         * The new WorkflowDefinitionObjectSelection will be automatically stored in the 'workflowSelection' property
         * of the parent microflows.UnlockWorkflowAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createInUnlockWorkflowActionUnderWorkflowSelection(container: microflows.UnlockWorkflowAction): WorkflowDefinitionObjectSelection;
        /**
         * Creates and returns a new WorkflowDefinitionObjectSelection instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WorkflowDefinitionObjectSelection;
    }
    /**
     * In version 10.7.0: introduced
     */
    class WorkflowEventHandler extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflowsProjectSettingsPart(): settings.WorkflowsProjectSettingsPart;
        get containerAsWorkflow(): Workflow;
        get description(): string;
        set description(newValue: string);
        get microflowEventHandler(): MicroflowEventHandler | null;
        set microflowEventHandler(newValue: MicroflowEventHandler | null);
        get eventTypes(): internal.IList<WorkflowEventType>;
        get documentation(): string;
        set documentation(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WorkflowEventHandler instance in the SDK and on the server.
         * The new WorkflowEventHandler will be automatically stored in the 'onWorkflowEvent' property
         * of the parent settings.WorkflowsProjectSettingsPart element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.7.0 and higher
         */
        static createInWorkflowsProjectSettingsPartUnderOnWorkflowEvent(container: settings.WorkflowsProjectSettingsPart): WorkflowEventHandler;
        /**
         * Creates and returns a new WorkflowEventHandler instance in the SDK and on the server.
         * The new WorkflowEventHandler will be automatically stored in the 'onWorkflowEvent' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.7.0 and higher
         */
        static createInWorkflowUnderOnWorkflowEvent(container: Workflow): WorkflowEventHandler;
        /**
         * Creates and returns a new WorkflowEventHandler instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WorkflowEventHandler;
    }
    /**
     * In version 9.10.0: deleted
     * In version 9.7.0: introduced
     */
    interface IWorkflowType extends internal.IElement {
        readonly model: IModel;
        readonly containerAsWorkflow: IWorkflow;
        readonly entity: domainmodels.IEntity | null;
        readonly entityQualifiedName: string | null;
        asLoaded(): WorkflowType;
        load(callback: (element: WorkflowType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<WorkflowType>;
    }
    /**
     * In version 9.10.0: deleted
     * In version 9.7.0: introduced
     */
    class WorkflowType extends internal.Element<IModel> implements IWorkflowType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsWorkflow(): Workflow;
        get entity(): domainmodels.IEntity | null;
        set entity(newValue: domainmodels.IEntity | null);
        get entityQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WorkflowType instance in the SDK and on the server.
         * The new WorkflowType will be automatically stored in the 'workflowType' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.7.0 to 9.9.0
         */
        static createIn(container: Workflow): WorkflowType;
        /**
         * Creates and returns a new WorkflowType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WorkflowType;
    }
    /**
     * In version 9.0.5: removed experimental
     * In version 9.0.2: introduced
     */
    class XPathBasedUserSource extends UserSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsUserTask(): UserTask;
        get containerAsUserTaskActivity(): UserTaskActivity;
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
         *  9.0.2 to 10.11.0
         */
        static createInUserTaskUnderUserSource(container: UserTask): XPathBasedUserSource;
        /**
         * Creates and returns a new XPathBasedUserSource instance in the SDK and on the server.
         * The new XPathBasedUserSource will be automatically stored in the 'userSource' property
         * of the parent UserTaskActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createInUserTaskActivityUnderUserSource(container: UserTaskActivity): XPathBasedUserSource;
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
import { settings } from "./settings";
import { IModel } from "./base-model";
