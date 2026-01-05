"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.changedatacapture = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
/**
 * @ignore
 */
var changedatacapture;
(function (changedatacapture) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ChangeDataCapture`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide/event-streams/#change-data-capture relevant section in reference guide}
     *
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.5.0: introduced
     */
    class EntityChangeDataCaptureService extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__sources = new internal.PartListProperty(EntityChangeDataCaptureService, this, "sources", []);
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
        get sources() {
            return this.__sources.get();
        }
        /**
         * Creates a new EntityChangeDataCaptureService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, EntityChangeDataCaptureService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EntityChangeDataCaptureService.structureTypeName = "ChangeDataCapture$EntityChangeDataCaptureService";
    EntityChangeDataCaptureService.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.5.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.ModelUnit);
    changedatacapture.EntityChangeDataCaptureService = EntityChangeDataCaptureService;
    /**
     * See: {@link https://docs.mendix.com/refguide/event-streams/#change-data-capture relevant section in reference guide}
     *
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.5.0: introduced
     */
    class EntityChangeSource extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(EntityChangeSource, this, "entity", null, "DomainModels$Entity");
            if (arguments.length < 4) {
                throw new Error("new EntityChangeSource() cannot be invoked directly, please use 'model.changedatacapture.createEntityChangeSource()'");
            }
        }
        get containerAsEntityChangeDataCaptureService() {
            return super.getContainerAs(EntityChangeDataCaptureService);
        }
        get entity() {
            return this.__entity.get();
        }
        set entity(newValue) {
            this.__entity.set(newValue);
        }
        get entityQualifiedName() {
            return this.__entity.qualifiedName();
        }
        /**
         * Creates and returns a new EntityChangeSource instance in the SDK and on the server.
         * The new EntityChangeSource will be automatically stored in the 'sources' property
         * of the parent EntityChangeDataCaptureService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.5.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, EntityChangeSource.structureTypeName, { start: "11.5.0" });
            return internal.instancehelpers.createElement(container, EntityChangeSource, "sources", true);
        }
        /**
         * Creates and returns a new EntityChangeSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EntityChangeSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EntityChangeSource.structureTypeName = "ChangeDataCapture$EntityChangeSource";
    EntityChangeSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.5.0",
        properties: {
            entity: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    changedatacapture.EntityChangeSource = EntityChangeSource;
})(changedatacapture = exports.changedatacapture || (exports.changedatacapture = {}));
//# sourceMappingURL=changedatacapture.js.map