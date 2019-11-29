"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var scheduledevents;
(function (scheduledevents) {
    class IntervalType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "scheduledevents.IntervalType";
        }
    }
    IntervalType.Second = new IntervalType("Second", {});
    IntervalType.Minute = new IntervalType("Minute", {});
    IntervalType.Hour = new IntervalType("Hour", {});
    IntervalType.Day = new IntervalType("Day", {});
    IntervalType.Week = new IntervalType("Week", {});
    IntervalType.Month = new IntervalType("Month", {});
    IntervalType.Year = new IntervalType("Year", {});
    scheduledevents.IntervalType = IntervalType;
    class TimeZoneEnum extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "scheduledevents.TimeZoneEnum";
        }
    }
    TimeZoneEnum.UTC = new TimeZoneEnum("UTC", {});
    TimeZoneEnum.Server = new TimeZoneEnum("Server", {});
    scheduledevents.TimeZoneEnum = TimeZoneEnum;
    /**
     * See: {@link https://docs.mendix.com/refguide7/scheduled-events relevant section in reference guide}
     */
    class ScheduledEvent extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__startDateTime = new internal.PrimitiveProperty(ScheduledEvent, this, "startDateTime", "", internal.PrimitiveTypeEnum.DateTime);
            /** @internal */
            this.__timeZone = new internal.EnumProperty(ScheduledEvent, this, "timeZone", TimeZoneEnum.UTC, TimeZoneEnum);
            /** @internal */
            this.__interval = new internal.PrimitiveProperty(ScheduledEvent, this, "interval", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__intervalType = new internal.EnumProperty(ScheduledEvent, this, "intervalType", IntervalType.Minute, IntervalType);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(ScheduledEvent, this, "microflow", null, "Microflows$Microflow");
            /** @internal */
            this.__enabled = new internal.PrimitiveProperty(ScheduledEvent, this, "enabled", false, internal.PrimitiveTypeEnum.Boolean);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get startDateTime() {
            return this.__startDateTime.get();
        }
        set startDateTime(newValue) {
            this.__startDateTime.set(newValue);
        }
        get timeZone() {
            return this.__timeZone.get();
        }
        set timeZone(newValue) {
            this.__timeZone.set(newValue);
        }
        get interval() {
            return this.__interval.get();
        }
        set interval(newValue) {
            this.__interval.set(newValue);
        }
        get intervalType() {
            return this.__intervalType.get();
        }
        set intervalType(newValue) {
            this.__intervalType.set(newValue);
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
        get enabled() {
            return this.__enabled.get();
        }
        set enabled(newValue) {
            this.__enabled.set(newValue);
        }
        /**
         * Creates a new ScheduledEvent unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ScheduledEvent);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.intervalType = IntervalType.Minute;
            this.startDateTime = "" + Date.now();
            this.timeZone = TimeZoneEnum.UTC;
        }
    }
    ScheduledEvent.structureTypeName = "ScheduledEvents$ScheduledEvent";
    ScheduledEvent.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.ModelUnit);
    scheduledevents.ScheduledEvent = ScheduledEvent;
})(scheduledevents = exports.scheduledevents || (exports.scheduledevents = {}));
//# sourceMappingURL=scheduledevents.js.map