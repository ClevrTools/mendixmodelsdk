"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessevents = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
/**
 * @ignore
 */
var businessevents;
(function (businessevents) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `BusinessEvents`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.8.0: introduced
     */
    class ConsumedBusinessEventService extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * Creates a new ConsumedBusinessEventService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ConsumedBusinessEventService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConsumedBusinessEventService.structureTypeName = "BusinessEvents$ConsumedBusinessEventService";
    ConsumedBusinessEventService.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.8.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.ModelUnit);
    businessevents.ConsumedBusinessEventService = ConsumedBusinessEventService;
})(businessevents = exports.businessevents || (exports.businessevents = {}));
//# sourceMappingURL=businessevents.js.map