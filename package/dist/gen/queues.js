"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.queues = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
/**
 * @ignore
 */
var queues;
(function (queues) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Queues`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.16.0: introduced
     */
    class QueueConfig extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new QueueConfig() cannot be invoked directly, please use 'model.queues.createQueueConfig()'");
            }
        }
        get containerAsQueue() {
            return super.getContainerAs(Queue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    QueueConfig.structureTypeName = "Queues$QueueConfig";
    QueueConfig.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.16.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    queues.QueueConfig = QueueConfig;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.16.0: introduced
     */
    class BasicQueueConfig extends QueueConfig {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parallelism = new internal.PrimitiveProperty(BasicQueueConfig, this, "parallelism", 0, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new BasicQueueConfig() cannot be invoked directly, please use 'model.queues.createBasicQueueConfig()'");
            }
        }
        get containerAsQueue() {
            return super.getContainerAs(Queue);
        }
        get parallelism() {
            return this.__parallelism.get();
        }
        set parallelism(newValue) {
            this.__parallelism.set(newValue);
        }
        /**
         * Creates and returns a new BasicQueueConfig instance in the SDK and on the server.
         * The new BasicQueueConfig will be automatically stored in the 'config' property
         * of the parent Queue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.16.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, BasicQueueConfig.structureTypeName, { start: "8.16.0" });
            return internal.instancehelpers.createElement(container, BasicQueueConfig, "config", false);
        }
        /**
         * Creates and returns a new BasicQueueConfig instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BasicQueueConfig);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.parallelism = 1;
        }
    }
    BasicQueueConfig.structureTypeName = "Queues$BasicQueueConfig";
    BasicQueueConfig.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.16.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    queues.BasicQueueConfig = BasicQueueConfig;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.16.0: introduced
     */
    class Queue extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__config = new internal.PartProperty(Queue, this, "config", null, true);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get config() {
            return this.__config.get();
        }
        set config(newValue) {
            this.__config.set(newValue);
        }
        /**
         * Creates a new Queue unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, Queue);
        }
        /** @internal */
        _isByNameReferrable() {
            return true;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.config = BasicQueueConfig.create(this.model);
        }
    }
    Queue.structureTypeName = "Queues$Queue";
    Queue.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.16.0",
        properties: {
            config: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.ModelUnit);
    queues.Queue = Queue;
})(queues = exports.queues || (exports.queues = {}));
//# sourceMappingURL=queues.js.map