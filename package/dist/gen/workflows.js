"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.workflows = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
/**
 * @ignore
 */
var workflows;
(function (workflows) {
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
    class Outcome extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__flow = new internal.PartProperty(Outcome, this, "flow", null, true);
            if (arguments.length < 4) {
                throw new Error("new Outcome() cannot be invoked directly, please use 'model.workflows.createOutcome()'");
            }
        }
        get containerAsExclusiveSplitActivity() {
            return super.getContainerAs(ExclusiveSplitActivity);
        }
        get containerAsParallelSplitActivity() {
            return super.getContainerAs(ParallelSplitActivity);
        }
        get containerAsWorkflowTask() {
            return super.getContainerAs(WorkflowTask);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get flow() {
            return this.__flow.get();
        }
        set flow(newValue) {
            this.__flow.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.flow = Flow.create(this.model);
        }
    }
    Outcome.structureTypeName = "Workflows$Outcome";
    Outcome.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.15.0",
        properties: {
            flow: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.Outcome = Outcome;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class ExclusiveSplitOutcome extends Outcome {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ExclusiveSplitOutcome() cannot be invoked directly, please use 'model.workflows.createExclusiveSplitOutcome()'");
            }
        }
        get containerAsExclusiveSplitActivity() {
            return super.getContainerAs(ExclusiveSplitActivity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ExclusiveSplitOutcome.structureTypeName = "Workflows$ExclusiveSplitOutcome";
    ExclusiveSplitOutcome.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.15.0",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.ExclusiveSplitOutcome = ExclusiveSplitOutcome;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class BooleanSplitOutcome extends ExclusiveSplitOutcome {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(BooleanSplitOutcome, this, "value", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new BooleanSplitOutcome() cannot be invoked directly, please use 'model.workflows.createBooleanSplitOutcome()'");
            }
        }
        get containerAsExclusiveSplitActivity() {
            return super.getContainerAs(ExclusiveSplitActivity);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new BooleanSplitOutcome instance in the SDK and on the server.
         * The new BooleanSplitOutcome will be automatically stored in the 'outcomes' property
         * of the parent ExclusiveSplitActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, BooleanSplitOutcome.structureTypeName, { start: "8.15.0" });
            return internal.instancehelpers.createElement(container, BooleanSplitOutcome, "outcomes", true);
        }
        /**
         * Creates and returns a new BooleanSplitOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BooleanSplitOutcome);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    BooleanSplitOutcome.structureTypeName = "Workflows$BooleanSplitOutcome";
    BooleanSplitOutcome.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.15.0",
        properties: {
            value: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.BooleanSplitOutcome = BooleanSplitOutcome;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class WorkflowActivity extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(WorkflowActivity, this, "caption", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new WorkflowActivity() cannot be invoked directly, please use 'model.workflows.createWorkflowActivity()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    WorkflowActivity.structureTypeName = "Workflows$WorkflowActivity";
    WorkflowActivity.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.15.0",
        properties: {
            caption: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.WorkflowActivity = WorkflowActivity;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class WorkflowTask extends WorkflowActivity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__outcomes = new internal.PartListProperty(WorkflowTask, this, "outcomes", []);
            if (arguments.length < 4) {
                throw new Error("new WorkflowTask() cannot be invoked directly, please use 'model.workflows.createWorkflowTask()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get outcomes() {
            return this.__outcomes.get();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    WorkflowTask.structureTypeName = "Workflows$WorkflowTask";
    WorkflowTask.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.15.0",
        properties: {
            outcomes: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.WorkflowTask = WorkflowTask;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class CallMicroflowTask extends WorkflowTask {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(CallMicroflowTask, this, "microflow", null, "Microflows$Microflow");
            if (arguments.length < 4) {
                throw new Error("new CallMicroflowTask() cannot be invoked directly, please use 'model.workflows.createCallMicroflowTask()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        get microflow() {
            return this.__microflow.get();
        }
        set microflow(newValue) {
            this.__microflow.set(newValue);
        }
        get microflowQualifiedName() {
            return this.__microflow.qualifiedName();
        }
        /**
         * Creates and returns a new CallMicroflowTask instance in the SDK and on the server.
         * The new CallMicroflowTask will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, CallMicroflowTask.structureTypeName, { start: "8.15.0" });
            return internal.instancehelpers.createElement(container, CallMicroflowTask, "activities", true);
        }
        /**
         * Creates and returns a new CallMicroflowTask instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CallMicroflowTask);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CallMicroflowTask.structureTypeName = "Workflows$CallMicroflowTask";
    CallMicroflowTask.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.15.0",
        properties: {
            microflow: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.CallMicroflowTask = CallMicroflowTask;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class CallWorkflowActivity extends WorkflowActivity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__workflow = new internal.ByNameReferenceProperty(CallWorkflowActivity, this, "workflow", null, "Workflows$Workflow");
            if (arguments.length < 4) {
                throw new Error("new CallWorkflowActivity() cannot be invoked directly, please use 'model.workflows.createCallWorkflowActivity()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get workflow() {
            return this.__workflow.get();
        }
        set workflow(newValue) {
            this.__workflow.set(newValue);
        }
        get workflowQualifiedName() {
            return this.__workflow.qualifiedName();
        }
        /**
         * Creates and returns a new CallWorkflowActivity instance in the SDK and on the server.
         * The new CallWorkflowActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, CallWorkflowActivity.structureTypeName, { start: "8.15.0" });
            return internal.instancehelpers.createElement(container, CallWorkflowActivity, "activities", true);
        }
        /**
         * Creates and returns a new CallWorkflowActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CallWorkflowActivity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CallWorkflowActivity.structureTypeName = "Workflows$CallWorkflowActivity";
    CallWorkflowActivity.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.15.0",
        properties: {
            workflow: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.CallWorkflowActivity = CallWorkflowActivity;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class EndWorkflowActivity extends WorkflowActivity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new EndWorkflowActivity() cannot be invoked directly, please use 'model.workflows.createEndWorkflowActivity()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        /**
         * Creates and returns a new EndWorkflowActivity instance in the SDK and on the server.
         * The new EndWorkflowActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, EndWorkflowActivity.structureTypeName, { start: "8.15.0" });
            return internal.instancehelpers.createElement(container, EndWorkflowActivity, "activities", true);
        }
        /**
         * Creates and returns a new EndWorkflowActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EndWorkflowActivity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EndWorkflowActivity.structureTypeName = "Workflows$EndWorkflowActivity";
    EndWorkflowActivity.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.15.0",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.EndWorkflowActivity = EndWorkflowActivity;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class EnumerationValueSplitOutcome extends ExclusiveSplitOutcome {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.ByNameReferenceProperty(EnumerationValueSplitOutcome, this, "value", null, "Enumerations$EnumerationValue");
            if (arguments.length < 4) {
                throw new Error("new EnumerationValueSplitOutcome() cannot be invoked directly, please use 'model.workflows.createEnumerationValueSplitOutcome()'");
            }
        }
        get containerAsExclusiveSplitActivity() {
            return super.getContainerAs(ExclusiveSplitActivity);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        get valueQualifiedName() {
            return this.__value.qualifiedName();
        }
        /**
         * Creates and returns a new EnumerationValueSplitOutcome instance in the SDK and on the server.
         * The new EnumerationValueSplitOutcome will be automatically stored in the 'outcomes' property
         * of the parent ExclusiveSplitActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, EnumerationValueSplitOutcome.structureTypeName, { start: "8.15.0" });
            return internal.instancehelpers.createElement(container, EnumerationValueSplitOutcome, "outcomes", true);
        }
        /**
         * Creates and returns a new EnumerationValueSplitOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EnumerationValueSplitOutcome);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EnumerationValueSplitOutcome.structureTypeName = "Workflows$EnumerationValueSplitOutcome";
    EnumerationValueSplitOutcome.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.15.0",
        properties: {
            value: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.EnumerationValueSplitOutcome = EnumerationValueSplitOutcome;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class ExclusiveSplitActivity extends WorkflowActivity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__expression = new internal.PrimitiveProperty(ExclusiveSplitActivity, this, "expression", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__outcomes = new internal.PartListProperty(ExclusiveSplitActivity, this, "outcomes", []);
            if (arguments.length < 4) {
                throw new Error("new ExclusiveSplitActivity() cannot be invoked directly, please use 'model.workflows.createExclusiveSplitActivity()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get expression() {
            return this.__expression.get();
        }
        set expression(newValue) {
            this.__expression.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get outcomes() {
            return this.__outcomes.get();
        }
        /**
         * Creates and returns a new ExclusiveSplitActivity instance in the SDK and on the server.
         * The new ExclusiveSplitActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ExclusiveSplitActivity.structureTypeName, { start: "8.15.0" });
            return internal.instancehelpers.createElement(container, ExclusiveSplitActivity, "activities", true);
        }
        /**
         * Creates and returns a new ExclusiveSplitActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExclusiveSplitActivity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ExclusiveSplitActivity.structureTypeName = "Workflows$ExclusiveSplitActivity";
    ExclusiveSplitActivity.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.15.0",
        properties: {
            outcomes: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.ExclusiveSplitActivity = ExclusiveSplitActivity;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class Flow extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__activities = new internal.PartListProperty(Flow, this, "activities", []);
            if (arguments.length < 4) {
                throw new Error("new Flow() cannot be invoked directly, please use 'model.workflows.createFlow()'");
            }
        }
        get containerAsOutcome() {
            return super.getContainerAs(Outcome);
        }
        get containerAsWorkflow() {
            return super.getContainerAs(Workflow);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get activities() {
            return this.__activities.get();
        }
        /**
         * Creates and returns a new Flow instance in the SDK and on the server.
         * The new Flow will be automatically stored in the 'flow' property
         * of the parent Outcome element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createInOutcomeUnderFlow(container) {
            internal.createInVersionCheck(container.model, Flow.structureTypeName, { start: "8.15.0" });
            return internal.instancehelpers.createElement(container, Flow, "flow", false);
        }
        /**
         * Creates and returns a new Flow instance in the SDK and on the server.
         * The new Flow will be automatically stored in the 'flow' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createInWorkflowUnderFlow(container) {
            internal.createInVersionCheck(container.model, Flow.structureTypeName, { start: "8.15.0" });
            return internal.instancehelpers.createElement(container, Flow, "flow", false);
        }
        /**
         * Creates and returns a new Flow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Flow);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Flow.structureTypeName = "Workflows$Flow";
    Flow.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.15.0",
        properties: {
            activities: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.Flow = Flow;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.0: introduced
     */
    class ParallelSplitActivity extends WorkflowActivity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__outcomes = new internal.PartListProperty(ParallelSplitActivity, this, "outcomes", []);
            if (arguments.length < 4) {
                throw new Error("new ParallelSplitActivity() cannot be invoked directly, please use 'model.workflows.createParallelSplitActivity()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get outcomes() {
            return this.__outcomes.get();
        }
        /**
         * Creates and returns a new ParallelSplitActivity instance in the SDK and on the server.
         * The new ParallelSplitActivity will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ParallelSplitActivity.structureTypeName, { start: "9.0.0" });
            return internal.instancehelpers.createElement(container, ParallelSplitActivity, "activities", true);
        }
        /**
         * Creates and returns a new ParallelSplitActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ParallelSplitActivity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ParallelSplitActivity.structureTypeName = "Workflows$ParallelSplitActivity";
    ParallelSplitActivity.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.0",
        properties: {
            outcomes: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.ParallelSplitActivity = ParallelSplitActivity;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.0.0: introduced
     */
    class ParallelSplitOutcome extends Outcome {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ParallelSplitOutcome() cannot be invoked directly, please use 'model.workflows.createParallelSplitOutcome()'");
            }
        }
        get containerAsParallelSplitActivity() {
            return super.getContainerAs(ParallelSplitActivity);
        }
        /**
         * Creates and returns a new ParallelSplitOutcome instance in the SDK and on the server.
         * The new ParallelSplitOutcome will be automatically stored in the 'outcomes' property
         * of the parent ParallelSplitActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ParallelSplitOutcome.structureTypeName, { start: "9.0.0" });
            return internal.instancehelpers.createElement(container, ParallelSplitOutcome, "outcomes", true);
        }
        /**
         * Creates and returns a new ParallelSplitOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ParallelSplitOutcome);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ParallelSplitOutcome.structureTypeName = "Workflows$ParallelSplitOutcome";
    ParallelSplitOutcome.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.0.0",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.ParallelSplitOutcome = ParallelSplitOutcome;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class UserSource extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new UserSource() cannot be invoked directly, please use 'model.workflows.createUserSource()'");
            }
        }
        get containerAsUserTask() {
            return super.getContainerAs(UserTask);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    UserSource.structureTypeName = "Workflows$UserSource";
    UserSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.15.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.UserSource = UserSource;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class UserTask extends WorkflowTask {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__page = new internal.ByNameReferenceProperty(UserTask, this, "page", null, "Pages$Page");
            /** @internal */
            this.__subject = new internal.PartProperty(UserTask, this, "subject", null, true);
            /** @internal */
            this.__description = new internal.PartProperty(UserTask, this, "description", null, true);
            /** @internal */
            this.__dueDate = new internal.PrimitiveProperty(UserTask, this, "dueDate", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__userSource = new internal.PartProperty(UserTask, this, "userSource", null, true);
            if (arguments.length < 4) {
                throw new Error("new UserTask() cannot be invoked directly, please use 'model.workflows.createUserTask()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        get page() {
            return this.__page.get();
        }
        set page(newValue) {
            this.__page.set(newValue);
        }
        get pageQualifiedName() {
            return this.__page.qualifiedName();
        }
        get subject() {
            return this.__subject.get();
        }
        set subject(newValue) {
            this.__subject.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get dueDate() {
            return this.__dueDate.get();
        }
        set dueDate(newValue) {
            this.__dueDate.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get userSource() {
            return this.__userSource.get();
        }
        set userSource(newValue) {
            this.__userSource.set(newValue);
        }
        /**
         * Creates and returns a new UserTask instance in the SDK and on the server.
         * The new UserTask will be automatically stored in the 'activities' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, UserTask.structureTypeName, { start: "8.15.0" });
            return internal.instancehelpers.createElement(container, UserTask, "activities", true);
        }
        /**
         * Creates and returns a new UserTask instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, UserTask);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.description = microflows_1.microflows.StringTemplate.create(this.model);
            this.subject = microflows_1.microflows.StringTemplate.create(this.model);
            this.userSource = XPathBasedUserSource.create(this.model);
        }
    }
    UserTask.structureTypeName = "Workflows$UserTask";
    UserTask.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.15.0",
        properties: {
            page: {
                public: {
                    currentValue: true
                }
            },
            subject: {
                required: {
                    currentValue: true
                }
            },
            description: {
                required: {
                    currentValue: true
                }
            },
            userSource: {
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.UserTask = UserTask;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class Workflow extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__title = new internal.PrimitiveProperty(Workflow, this, "title", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__contextEntity = new internal.ByNameReferenceProperty(Workflow, this, "contextEntity", null, "DomainModels$Entity");
            /** @internal */
            this.__overviewPage = new internal.ByNameReferenceProperty(Workflow, this, "overviewPage", null, "Pages$Page");
            /** @internal */
            this.__flow = new internal.PartProperty(Workflow, this, "flow", null, true);
            /** @internal */
            this.__subject = new internal.PartProperty(Workflow, this, "subject", null, true);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(Workflow, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__dueDate = new internal.PrimitiveProperty(Workflow, this, "dueDate", "", internal.PrimitiveTypeEnum.String);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get title() {
            return this.__title.get();
        }
        set title(newValue) {
            this.__title.set(newValue);
        }
        get contextEntity() {
            return this.__contextEntity.get();
        }
        set contextEntity(newValue) {
            this.__contextEntity.set(newValue);
        }
        get contextEntityQualifiedName() {
            return this.__contextEntity.qualifiedName();
        }
        get overviewPage() {
            return this.__overviewPage.get();
        }
        set overviewPage(newValue) {
            this.__overviewPage.set(newValue);
        }
        get overviewPageQualifiedName() {
            return this.__overviewPage.qualifiedName();
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get flow() {
            return this.__flow.get();
        }
        set flow(newValue) {
            this.__flow.set(newValue);
        }
        get subject() {
            return this.__subject.get();
        }
        set subject(newValue) {
            this.__subject.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get dueDate() {
            return this.__dueDate.get();
        }
        set dueDate(newValue) {
            this.__dueDate.set(newValue);
        }
        /**
         * Creates a new Workflow unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, Workflow);
        }
        /** @internal */
        _isByNameReferrable() {
            return true;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.flow = Flow.create(this.model);
            this.subject = microflows_1.microflows.StringTemplate.create(this.model);
        }
    }
    Workflow.structureTypeName = "Workflows$Workflow";
    Workflow.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.15.0",
        properties: {
            title: {
                public: {
                    currentValue: true
                }
            },
            contextEntity: {
                public: {
                    currentValue: true
                }
            },
            overviewPage: {
                public: {
                    currentValue: true
                }
            },
            flow: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            subject: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.ModelUnit);
    workflows.Workflow = Workflow;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class WorkflowTaskOutcome extends Outcome {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(WorkflowTaskOutcome, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(WorkflowTaskOutcome, this, "caption", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new WorkflowTaskOutcome() cannot be invoked directly, please use 'model.workflows.createWorkflowTaskOutcome()'");
            }
        }
        get containerAsWorkflowTask() {
            return super.getContainerAs(WorkflowTask);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        /**
         * Creates and returns a new WorkflowTaskOutcome instance in the SDK and on the server.
         * The new WorkflowTaskOutcome will be automatically stored in the 'outcomes' property
         * of the parent WorkflowTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, WorkflowTaskOutcome.structureTypeName, { start: "8.15.0" });
            return internal.instancehelpers.createElement(container, WorkflowTaskOutcome, "outcomes", true);
        }
        /**
         * Creates and returns a new WorkflowTaskOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WorkflowTaskOutcome);
        }
        /** @internal */
        _isByNameReferrable() {
            return true;
        }
        get qualifiedName() {
            return this._getQualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    WorkflowTaskOutcome.structureTypeName = "Workflows$WorkflowTaskOutcome";
    WorkflowTaskOutcome.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.15.0",
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            caption: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.WorkflowTaskOutcome = WorkflowTaskOutcome;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.15.0: introduced
     */
    class XPathBasedUserSource extends UserSource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__xPathConstraint = new internal.PrimitiveProperty(XPathBasedUserSource, this, "xPathConstraint", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new XPathBasedUserSource() cannot be invoked directly, please use 'model.workflows.createXPathBasedUserSource()'");
            }
        }
        get containerAsUserTask() {
            return super.getContainerAs(UserTask);
        }
        /**
         * The value of this property is conceptually of type xPathConstraints.XPathConstraint.
         */
        get xPathConstraint() {
            return this.__xPathConstraint.get();
        }
        set xPathConstraint(newValue) {
            this.__xPathConstraint.set(newValue);
        }
        /**
         * Creates and returns a new XPathBasedUserSource instance in the SDK and on the server.
         * The new XPathBasedUserSource will be automatically stored in the 'userSource' property
         * of the parent UserTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.15.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, XPathBasedUserSource.structureTypeName, { start: "8.15.0" });
            return internal.instancehelpers.createElement(container, XPathBasedUserSource, "userSource", false);
        }
        /**
         * Creates and returns a new XPathBasedUserSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, XPathBasedUserSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    XPathBasedUserSource.structureTypeName = "Workflows$XPathBasedUserSource";
    XPathBasedUserSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.15.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.XPathBasedUserSource = XPathBasedUserSource;
})(workflows = exports.workflows || (exports.workflows = {}));
const microflows_1 = require("./microflows");
//# sourceMappingURL=workflows.js.map