"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
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
     * In version 8.9.0: added public
     * In version 8.8.0: introduced
     */
    class WorkflowActivity extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(WorkflowActivity, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(WorkflowActivity, this, "caption", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__possibleOutcomes = new internal.PartListProperty(WorkflowActivity, this, "possibleOutcomes", []);
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
         * In version 8.9.0: introduced
         */
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
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.9.0: added public
         */
        get possibleOutcomes() {
            return this.__possibleOutcomes.get();
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
        get qualifiedName() {
            return this._getQualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.size = { width: 100, height: 100 };
        }
    }
    WorkflowActivity.structureTypeName = "Workflows$WorkflowActivity";
    WorkflowActivity.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.8.0",
        properties: {
            name: {
                introduced: "8.9.0",
                public: {
                    currentValue: true
                }
            },
            possibleOutcomes: {
                public: {
                    currentValue: true,
                    changedIn: ["8.9.0"]
                }
            }
        },
        public: {
            currentValue: true,
            changedIn: ["8.9.0"]
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.WorkflowActivity = WorkflowActivity;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.9.0: added public
     * In version 8.8.0: introduced
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
         *  8.8.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, EndWorkflowActivity.structureTypeName, { start: "8.8.0" });
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
        introduced: "8.8.0",
        public: {
            currentValue: true,
            changedIn: ["8.9.0"]
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.EndWorkflowActivity = EndWorkflowActivity;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.8.0: introduced
     */
    class Flow extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__from = new internal.ByIdReferenceProperty(Flow, this, "from", null);
            /** @internal */
            this.__to = new internal.ByIdReferenceProperty(Flow, this, "to", null);
            /** @internal */
            this.__value = new internal.ByIdReferenceProperty(Flow, this, "value", null);
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
         *  8.8.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, Flow.structureTypeName, { start: "8.8.0" });
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
        }
    }
    Flow.structureTypeName = "Workflows$Flow";
    Flow.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.8.0",
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
     * In version 8.9.0: added public
     * In version 8.8.0: introduced
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
         *  8.8.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, StartWorkflowActivity.structureTypeName, { start: "8.8.0" });
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
        introduced: "8.8.0",
        public: {
            currentValue: true,
            changedIn: ["8.9.0"]
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.StartWorkflowActivity = StartWorkflowActivity;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.9.0: added public
     * In version 8.8.0: introduced
     */
    class UserTask extends WorkflowActivity {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__page = new internal.PartProperty(UserTask, this, "page", null, false);
            /** @internal */
            this.__taskCaption = new internal.PrimitiveProperty(UserTask, this, "taskCaption", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__subject = new internal.PartProperty(UserTask, this, "subject", null, true);
            /** @internal */
            this.__taskDescription = new internal.PrimitiveProperty(UserTask, this, "taskDescription", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PartProperty(UserTask, this, "description", null, true);
            /** @internal */
            this.__userRole = new internal.ByNameReferenceProperty(UserTask, this, "userRole", null, "Security$UserRole");
            if (arguments.length < 4) {
                throw new Error("new UserTask() cannot be invoked directly, please use 'model.workflows.createUserTask()'");
            }
        }
        get containerAsWorkflow() {
            return super.getContainerAs(Workflow);
        }
        get page() {
            return this.__page.get();
        }
        set page(newValue) {
            this.__page.set(newValue);
        }
        /**
         * In version 8.9.0: deleted
         */
        get taskCaption() {
            return this.__taskCaption.get();
        }
        set taskCaption(newValue) {
            this.__taskCaption.set(newValue);
        }
        /**
         * In version 8.9.0: introduced
         */
        get subject() {
            return this.__subject.get();
        }
        set subject(newValue) {
            this.__subject.set(newValue);
        }
        /**
         * In version 8.9.0: deleted
         */
        get taskDescription() {
            return this.__taskDescription.get();
        }
        set taskDescription(newValue) {
            this.__taskDescription.set(newValue);
        }
        /**
         * In version 8.9.0: introduced
         */
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * In version 8.9.0: introduced
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
         * Creates and returns a new UserTask instance in the SDK and on the server.
         * The new UserTask will be automatically stored in the 'activities' property
         * of the parent Workflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.8.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, UserTask.structureTypeName, { start: "8.8.0" });
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
            if (this.__description.isAvailable) {
                this.description = microflows_1.microflows.StringTemplate.create(this.model);
            }
            if (this.__subject.isAvailable) {
                this.subject = microflows_1.microflows.StringTemplate.create(this.model);
            }
        }
    }
    UserTask.structureTypeName = "Workflows$UserTask";
    UserTask.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.8.0",
        properties: {
            taskCaption: {
                deleted: "8.9.0",
                deletionMessage: null
            },
            subject: {
                introduced: "8.9.0",
                required: {
                    currentValue: true
                }
            },
            taskDescription: {
                deleted: "8.9.0",
                deletionMessage: null
            },
            description: {
                introduced: "8.9.0",
                required: {
                    currentValue: true
                }
            },
            userRole: {
                introduced: "8.9.0"
            }
        },
        public: {
            currentValue: true,
            changedIn: ["8.9.0"]
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.UserTask = UserTask;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.8.0: introduced
     */
    class Workflow extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__context = new internal.ByNameReferenceProperty(Workflow, this, "context", null, "DomainModels$Entity");
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
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * In version 8.9.0: deleted
         */
        get context() {
            return this.__context.get();
        }
        set context(newValue) {
            this.__context.set(newValue);
        }
        get contextQualifiedName() {
            return this.__context.qualifiedName();
        }
        /**
         * In version 8.9.0: introduced
         */
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
         *
         * In version 8.9.0: added public
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
        /**
         * In version 8.9.0: introduced
         */
        get title() {
            return this.__title.get();
        }
        set title(newValue) {
            this.__title.set(newValue);
        }
        /**
         * In version 8.9.0: introduced
         */
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
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
        }
    }
    Workflow.structureTypeName = "Workflows$Workflow";
    Workflow.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.8.0",
        properties: {
            context: {
                deleted: "8.9.0",
                deletionMessage: null,
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            contextEntity: {
                introduced: "8.9.0",
                public: {
                    currentValue: true
                }
            },
            activities: {
                public: {
                    currentValue: true,
                    changedIn: ["8.9.0"]
                }
            },
            title: {
                introduced: "8.9.0"
            },
            description: {
                introduced: "8.9.0"
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
     * In version 8.9.0: added public
     * In version 8.8.0: introduced
     */
    class WorkflowActivityOutcome extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(WorkflowActivityOutcome, this, "name", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new WorkflowActivityOutcome() cannot be invoked directly, please use 'model.workflows.createWorkflowActivityOutcome()'");
            }
        }
        get containerAsWorkflowActivity() {
            return super.getContainerAs(WorkflowActivity);
        }
        /**
         * In version 8.9.0: added public
         */
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        /**
         * Creates and returns a new WorkflowActivityOutcome instance in the SDK and on the server.
         * The new WorkflowActivityOutcome will be automatically stored in the 'possibleOutcomes' property
         * of the parent WorkflowActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.8.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, WorkflowActivityOutcome.structureTypeName, { start: "8.8.0" });
            return internal.instancehelpers.createElement(container, WorkflowActivityOutcome, "possibleOutcomes", true);
        }
        /**
         * Creates and returns a new WorkflowActivityOutcome instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, WorkflowActivityOutcome);
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
    WorkflowActivityOutcome.structureTypeName = "Workflows$WorkflowActivityOutcome";
    WorkflowActivityOutcome.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.8.0",
        properties: {
            name: {
                public: {
                    currentValue: true,
                    changedIn: ["8.9.0"]
                }
            }
        },
        public: {
            currentValue: true,
            changedIn: ["8.9.0"]
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    workflows.WorkflowActivityOutcome = WorkflowActivityOutcome;
})(workflows = exports.workflows || (exports.workflows = {}));
const microflows_1 = require("./microflows");
//# sourceMappingURL=workflows.js.map