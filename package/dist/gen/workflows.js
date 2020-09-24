"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.workflows = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var workflows;
(function (workflows) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Workflows`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.10.0: introduced
     */
    class FlowValue extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new FlowValue() cannot be invoked directly, please use 'model.workflows.createFlowValue()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    FlowValue.structureTypeName = "Workflows$FlowValue";
    FlowValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.FlowValue = FlowValue;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.13.0: introduced
     */
    class BooleanOutcomeValue extends FlowValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__outcome = new internal.PrimitiveProperty(BooleanOutcomeValue, this, "outcome", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new BooleanOutcomeValue() cannot be invoked directly, please use 'model.workflows.createBooleanOutcomeValue()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        get outcome() {
            return this.__outcome.get();
        }
        set outcome(newValue) {
            this.__outcome.set(newValue);
        }
        /**
         * Creates and returns a new BooleanOutcomeValue instance in the SDK and on the server.
         * The new BooleanOutcomeValue will be automatically stored in the 'value' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.13.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, BooleanOutcomeValue.structureTypeName, { start: "8.13.0" });
            return internal.instancehelpers.createElement(container, BooleanOutcomeValue, "value", false);
        }
        /**
         * Creates and returns a new BooleanOutcomeValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BooleanOutcomeValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    BooleanOutcomeValue.structureTypeName = "Workflows$BooleanOutcomeValue";
    BooleanOutcomeValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.13.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.BooleanOutcomeValue = BooleanOutcomeValue;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.10.0: introduced
     */
    class WorkflowActivity extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(WorkflowActivity, this, "caption", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__size = new internal.PrimitiveProperty(WorkflowActivity, this, "size", { width: 0, height: 0 }, internal.PrimitiveTypeEnum.Size);
            /** @internal */
            this.__location = new internal.PrimitiveProperty(WorkflowActivity, this, "location", { x: 0, y: 0 }, internal.PrimitiveTypeEnum.Point);
            if (arguments.length < 4) {
                throw new Error("new WorkflowActivity() cannot be invoked directly, please use 'model.workflows.createWorkflowActivity()'");
            }
        }
        get containerAsWorkflow() {
            return super.getContainerAs(Workflow);
        }
        /**
         * In version 8.12.0: added public
         */
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get size() {
            return this.__size.get();
        }
        set size(newValue) {
            this.__size.set(newValue);
        }
        get location() {
            return this.__location.get();
        }
        set location(newValue) {
            this.__location.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.size = { width: 100, height: 100 };
        }
    }
    WorkflowActivity.structureTypeName = "Workflows$WorkflowActivity";
    WorkflowActivity.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        properties: {
            caption: {
                public: {
                    currentValue: true,
                    changedIn: ["8.12.0"]
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
     * In version 8.10.0: introduced
     */
    class WorkflowTask extends WorkflowActivity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(WorkflowTask, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__possibleOutcomes = new internal.PartListProperty(WorkflowTask, this, "possibleOutcomes", []);
            if (arguments.length < 4) {
                throw new Error("new WorkflowTask() cannot be invoked directly, please use 'model.workflows.createWorkflowTask()'");
            }
            this._declaredAsNamespace = true;
        }
        get containerAsWorkflow() {
            return super.getContainerAs(Workflow);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get possibleOutcomes() {
            return this.__possibleOutcomes.get();
        }
        get qualifiedName() {
            return this._getQualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    WorkflowTask.structureTypeName = "Workflows$WorkflowTask";
    WorkflowTask.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            possibleOutcomes: {
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
     * In version 8.11.0: introduced
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
        get containerAsWorkflow() {
            return super.getContainerAs(Workflow);
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
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, CallMicroflowTask.structureTypeName, { start: "8.11.0" });
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
        introduced: "8.11.0",
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
     * In version 8.13.0: introduced
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
        get containerAsWorkflow() {
            return super.getContainerAs(Workflow);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
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
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.13.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, CallWorkflowActivity.structureTypeName, { start: "8.13.0" });
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
        introduced: "8.13.0",
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
     * In version 8.10.0: introduced
     */
    class EndWorkflowActivity extends WorkflowActivity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new EndWorkflowActivity() cannot be invoked directly, please use 'model.workflows.createEndWorkflowActivity()'");
            }
        }
        get containerAsWorkflow() {
            return super.getContainerAs(Workflow);
        }
        /**
         * Creates and returns a new EndWorkflowActivity instance in the SDK and on the server.
         * The new EndWorkflowActivity will be automatically stored in the 'activities' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, EndWorkflowActivity.structureTypeName, { start: "8.10.0" });
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
        introduced: "8.10.0",
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
     * In version 8.13.0: introduced
     */
    class EnumerationValueOutcomeValue extends FlowValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__outcome = new internal.ByNameReferenceProperty(EnumerationValueOutcomeValue, this, "outcome", null, "Enumerations$EnumerationValue");
            if (arguments.length < 4) {
                throw new Error("new EnumerationValueOutcomeValue() cannot be invoked directly, please use 'model.workflows.createEnumerationValueOutcomeValue()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        get outcome() {
            return this.__outcome.get();
        }
        set outcome(newValue) {
            this.__outcome.set(newValue);
        }
        get outcomeQualifiedName() {
            return this.__outcome.qualifiedName();
        }
        /**
         * Creates and returns a new EnumerationValueOutcomeValue instance in the SDK and on the server.
         * The new EnumerationValueOutcomeValue will be automatically stored in the 'value' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.13.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, EnumerationValueOutcomeValue.structureTypeName, { start: "8.13.0" });
            return internal.instancehelpers.createElement(container, EnumerationValueOutcomeValue, "value", false);
        }
        /**
         * Creates and returns a new EnumerationValueOutcomeValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EnumerationValueOutcomeValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EnumerationValueOutcomeValue.structureTypeName = "Workflows$EnumerationValueOutcomeValue";
    EnumerationValueOutcomeValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.13.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.EnumerationValueOutcomeValue = EnumerationValueOutcomeValue;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.13.0: introduced
     */
    class ExclusiveSplitActivity extends WorkflowActivity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__expression = new internal.PrimitiveProperty(ExclusiveSplitActivity, this, "expression", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ExclusiveSplitActivity() cannot be invoked directly, please use 'model.workflows.createExclusiveSplitActivity()'");
            }
        }
        get containerAsWorkflow() {
            return super.getContainerAs(Workflow);
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
         * Creates and returns a new ExclusiveSplitActivity instance in the SDK and on the server.
         * The new ExclusiveSplitActivity will be automatically stored in the 'activities' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.13.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ExclusiveSplitActivity.structureTypeName, { start: "8.13.0" });
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
        introduced: "8.13.0",
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
     * In version 8.10.0: introduced
     */
    class Flow extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__from = new internal.ByIdReferenceProperty(Flow, this, "from", null);
            /** @internal */
            this.__to = new internal.ByIdReferenceProperty(Flow, this, "to", null);
            /** @internal */
            this.__value = new internal.PartProperty(Flow, this, "value", null, true);
            if (arguments.length < 4) {
                throw new Error("new Flow() cannot be invoked directly, please use 'model.workflows.createFlow()'");
            }
        }
        get containerAsWorkflow() {
            return super.getContainerAs(Workflow);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get from() {
            return this.__from.get();
        }
        set from(newValue) {
            this.__from.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get to() {
            return this.__to.get();
        }
        set to(newValue) {
            this.__to.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new Flow instance in the SDK and on the server.
         * The new Flow will be automatically stored in the 'flows' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, Flow.structureTypeName, { start: "8.10.0" });
            return internal.instancehelpers.createElement(container, Flow, "flows", true);
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
            this.value = NoValue.create(this.model);
        }
    }
    Flow.structureTypeName = "Workflows$Flow";
    Flow.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        properties: {
            from: {
                required: {
                    currentValue: true
                }
            },
            to: {
                required: {
                    currentValue: true
                }
            },
            value: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.Flow = Flow;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.10.0: introduced
     */
    class NoValue extends FlowValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new NoValue() cannot be invoked directly, please use 'model.workflows.createNoValue()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        /**
         * Creates and returns a new NoValue instance in the SDK and on the server.
         * The new NoValue will be automatically stored in the 'value' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, NoValue.structureTypeName, { start: "8.10.0" });
            return internal.instancehelpers.createElement(container, NoValue, "value", false);
        }
        /**
         * Creates and returns a new NoValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NoValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NoValue.structureTypeName = "Workflows$NoValue";
    NoValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.NoValue = NoValue;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.10.0: introduced
     */
    class StartWorkflowActivity extends WorkflowActivity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new StartWorkflowActivity() cannot be invoked directly, please use 'model.workflows.createStartWorkflowActivity()'");
            }
        }
        get containerAsWorkflow() {
            return super.getContainerAs(Workflow);
        }
        /**
         * Creates and returns a new StartWorkflowActivity instance in the SDK and on the server.
         * The new StartWorkflowActivity will be automatically stored in the 'activities' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, StartWorkflowActivity.structureTypeName, { start: "8.10.0" });
            return internal.instancehelpers.createElement(container, StartWorkflowActivity, "activities", true);
        }
        /**
         * Creates and returns a new StartWorkflowActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, StartWorkflowActivity);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    StartWorkflowActivity.structureTypeName = "Workflows$StartWorkflowActivity";
    StartWorkflowActivity.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.StartWorkflowActivity = StartWorkflowActivity;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.10.0: introduced
     */
    class TaskOutcomeValue extends FlowValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__outcome = new internal.ByIdReferenceProperty(TaskOutcomeValue, this, "outcome", null);
            if (arguments.length < 4) {
                throw new Error("new TaskOutcomeValue() cannot be invoked directly, please use 'model.workflows.createTaskOutcomeValue()'");
            }
        }
        get containerAsFlow() {
            return super.getContainerAs(Flow);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get outcome() {
            return this.__outcome.get();
        }
        set outcome(newValue) {
            this.__outcome.set(newValue);
        }
        /**
         * Creates and returns a new TaskOutcomeValue instance in the SDK and on the server.
         * The new TaskOutcomeValue will be automatically stored in the 'value' property
         * of the parent Flow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, TaskOutcomeValue.structureTypeName, { start: "8.10.0" });
            return internal.instancehelpers.createElement(container, TaskOutcomeValue, "value", false);
        }
        /**
         * Creates and returns a new TaskOutcomeValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, TaskOutcomeValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    TaskOutcomeValue.structureTypeName = "Workflows$TaskOutcomeValue";
    TaskOutcomeValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        properties: {
            outcome: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.TaskOutcomeValue = TaskOutcomeValue;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.11.0: introduced
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
        introduced: "8.11.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.UserSource = UserSource;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.10.0: introduced
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
            this.__userRole = new internal.ByNameReferenceProperty(UserTask, this, "userRole", null, "Security$UserRole");
            /** @internal */
            this.__userSource = new internal.PartProperty(UserTask, this, "userSource", null, true);
            if (arguments.length < 4) {
                throw new Error("new UserTask() cannot be invoked directly, please use 'model.workflows.createUserTask()'");
            }
        }
        get containerAsWorkflow() {
            return super.getContainerAs(Workflow);
        }
        /**
         * In version 8.13.0: added public
         */
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
         *
         * In version 8.13.0: introduced
         */
        get dueDate() {
            return this.__dueDate.get();
        }
        set dueDate(newValue) {
            this.__dueDate.set(newValue);
        }
        /**
         * In version 8.11.0: deleted
         */
        get userRole() {
            return this.__userRole.get();
        }
        set userRole(newValue) {
            this.__userRole.set(newValue);
        }
        get userRoleQualifiedName() {
            return this.__userRole.qualifiedName();
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.11.0: introduced
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
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, UserTask.structureTypeName, { start: "8.10.0" });
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
            if (this.__userSource.isAvailable) {
                this.userSource = XPathBasedUserSource.create(this.model);
            }
        }
    }
    UserTask.structureTypeName = "Workflows$UserTask";
    UserTask.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        properties: {
            page: {
                public: {
                    currentValue: true,
                    changedIn: ["8.13.0"]
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
            dueDate: {
                introduced: "8.13.0"
            },
            userRole: {
                deleted: "8.11.0",
                deletionMessage: null
            },
            userSource: {
                introduced: "8.11.0",
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
     * In version 8.10.0: introduced
     */
    class Workflow extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__contextEntity = new internal.ByNameReferenceProperty(Workflow, this, "contextEntity", null, "DomainModels$Entity");
            /** @internal */
            this.__activities = new internal.PartListProperty(Workflow, this, "activities", []);
            /** @internal */
            this.__flows = new internal.PartListProperty(Workflow, this, "flows", []);
            /** @internal */
            this.__title = new internal.PrimitiveProperty(Workflow, this, "title", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(Workflow, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__subject = new internal.PartProperty(Workflow, this, "subject", null, true);
            /** @internal */
            this.__dueDate = new internal.PrimitiveProperty(Workflow, this, "dueDate", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__overviewPage = new internal.ByNameReferenceProperty(Workflow, this, "overviewPage", null, "Pages$Page");
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
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
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get activities() {
            return this.__activities.get();
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get flows() {
            return this.__flows.get();
        }
        get title() {
            return this.__title.get();
        }
        set title(newValue) {
            this.__title.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * In version 8.11.0: introduced
         */
        get subject() {
            return this.__subject.get();
        }
        set subject(newValue) {
            this.__subject.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 8.13.0: introduced
         */
        get dueDate() {
            return this.__dueDate.get();
        }
        set dueDate(newValue) {
            this.__dueDate.set(newValue);
        }
        /**
         * In version 8.11.0: introduced
         */
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
            if (this.__subject.isAvailable) {
                this.subject = microflows_1.microflows.StringTemplate.create(this.model);
            }
        }
    }
    Workflow.structureTypeName = "Workflows$Workflow";
    Workflow.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        properties: {
            contextEntity: {
                public: {
                    currentValue: true
                }
            },
            activities: {
                public: {
                    currentValue: true
                }
            },
            subject: {
                introduced: "8.11.0",
                required: {
                    currentValue: true
                }
            },
            dueDate: {
                introduced: "8.13.0"
            },
            overviewPage: {
                introduced: "8.11.0"
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
     * In version 8.10.0: introduced
     */
    class WorkflowTaskOutcome extends internal.Element {
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
        /**
         * In version 8.11.0: introduced
         */
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        /**
         * Creates and returns a new WorkflowTaskOutcome instance in the SDK and on the server.
         * The new WorkflowTaskOutcome will be automatically stored in the 'possibleOutcomes' property
         * of the parent WorkflowTask element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, WorkflowTaskOutcome.structureTypeName, { start: "8.10.0" });
            return internal.instancehelpers.createElement(container, WorkflowTaskOutcome, "possibleOutcomes", true);
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
        introduced: "8.10.0",
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            caption: {
                introduced: "8.11.0",
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
     * In version 8.11.0: introduced
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
         *  8.11.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, XPathBasedUserSource.structureTypeName, { start: "8.11.0" });
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
        introduced: "8.11.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.XPathBasedUserSource = XPathBasedUserSource;
})(workflows = exports.workflows || (exports.workflows = {}));
const microflows_1 = require("./microflows");
//# sourceMappingURL=workflows.js.map