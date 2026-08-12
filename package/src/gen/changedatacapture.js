"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.changedatacapture = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const utils_1 = require("../sdk/utils");
const projects_1 = require("./projects");
/**
 * @ignore
 */
var changedatacapture;
(function (changedatacapture) {
    class PropertyType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "changedatacapture.PropertyType";
        }
    }
    PropertyType.ArrayOfInt64 = new PropertyType("ArrayOfInt64", {});
    PropertyType.Binary = new PropertyType("Binary", {});
    PropertyType.Boolean = new PropertyType("Boolean", {});
    PropertyType.DateTime = new PropertyType("DateTime", {});
    PropertyType.Decimal = new PropertyType("Decimal", {});
    PropertyType.Enumeration = new PropertyType("Enumeration", {});
    PropertyType.Int32 = new PropertyType("Int32", {});
    PropertyType.Int64 = new PropertyType("Int64", {});
    PropertyType.String = new PropertyType("String", {});
    changedatacapture.PropertyType = PropertyType;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ChangeDataCapture`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.9.0: introduced
     */
    class EntityChangeProperty extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(EntityChangeProperty, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__versionedProperty = new internal.ByIdReferenceProperty(EntityChangeProperty, this, "versionedProperty", null);
            if (arguments.length < 4) {
                throw new Error("new EntityChangeProperty() cannot be invoked directly, please use 'model.changedatacapture.createEntityChangeProperty()'");
            }
        }
        get containerAsEntityChangeSource() {
            return super.getContainerAs(EntityChangeSource);
        }
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 11.12.0: introduced
         */
        get versionedProperty() {
            return this.__versionedProperty.get();
        }
        set versionedProperty(newValue) {
            this.__versionedProperty.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EntityChangeProperty.structureTypeName = "ChangeDataCapture$EntityChangeProperty";
    EntityChangeProperty.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.9.0",
        properties: {
            versionedProperty: {
                introduced: "11.12.0"
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    changedatacapture.EntityChangeProperty = EntityChangeProperty;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.9.0: introduced
     */
    class AssociationProperty extends EntityChangeProperty {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__association = new internal.ByNameReferenceProperty(AssociationProperty, this, "association", null, "DomainModels$AssociationBase");
            if (arguments.length < 4) {
                throw new Error("new AssociationProperty() cannot be invoked directly, please use 'model.changedatacapture.createAssociationProperty()'");
            }
        }
        get containerAsEntityChangeSource() {
            return super.getContainerAs(EntityChangeSource);
        }
        get association() {
            return this.__association.get();
        }
        set association(newValue) {
            this.__association.set(newValue);
        }
        get associationQualifiedName() {
            return this.__association.qualifiedName();
        }
        /**
         * Creates and returns a new AssociationProperty instance in the SDK and on the server.
         * The new AssociationProperty will be automatically stored in the 'properties' property
         * of the parent EntityChangeSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.9.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, AssociationProperty.structureTypeName, { start: "11.9.0" });
            return internal.instancehelpers.createElement(container, AssociationProperty, "properties", true);
        }
        /**
         * Creates and returns a new AssociationProperty instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AssociationProperty);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AssociationProperty.structureTypeName = "ChangeDataCapture$AssociationProperty";
    AssociationProperty.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.9.0",
        properties: {
            association: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    changedatacapture.AssociationProperty = AssociationProperty;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.9.0: introduced
     */
    class AttributeProperty extends EntityChangeProperty {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(AttributeProperty, this, "attribute", null, "DomainModels$Attribute");
            if (arguments.length < 4) {
                throw new Error("new AttributeProperty() cannot be invoked directly, please use 'model.changedatacapture.createAttributeProperty()'");
            }
        }
        get containerAsEntityChangeSource() {
            return super.getContainerAs(EntityChangeSource);
        }
        get attribute() {
            return this.__attribute.get();
        }
        set attribute(newValue) {
            this.__attribute.set(newValue);
        }
        get attributeQualifiedName() {
            return this.__attribute.qualifiedName();
        }
        /**
         * Creates and returns a new AttributeProperty instance in the SDK and on the server.
         * The new AttributeProperty will be automatically stored in the 'properties' property
         * of the parent EntityChangeSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.9.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, AttributeProperty.structureTypeName, { start: "11.9.0" });
            return internal.instancehelpers.createElement(container, AttributeProperty, "properties", true);
        }
        /**
         * Creates and returns a new AttributeProperty instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AttributeProperty);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AttributeProperty.structureTypeName = "ChangeDataCapture$AttributeProperty";
    AttributeProperty.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.9.0",
        properties: {
            attribute: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    changedatacapture.AttributeProperty = AttributeProperty;
    /**
     * See: {@link https://docs.mendix.com/refguide/change-data-capture relevant section in reference guide}
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
            /** @internal */
            this.__serviceName = new internal.PrimitiveProperty(EntityChangeDataCaptureService, this, "serviceName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__appName = new internal.PrimitiveProperty(EntityChangeDataCaptureService, this, "appName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__baseline = new internal.PartProperty(EntityChangeDataCaptureService, this, "baseline", null, false);
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
         * In version 11.8.0: introduced
         */
        get serviceName() {
            return this.__serviceName.get();
        }
        set serviceName(newValue) {
            this.__serviceName.set(newValue);
        }
        /**
         * In version 11.12.0: introduced
         */
        get appName() {
            return this.__appName.get();
        }
        set appName(newValue) {
            this.__appName.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 11.10.0: introduced
         */
        get baseline() {
            return this.__baseline.get();
        }
        set baseline(newValue) {
            this.__baseline.set(newValue);
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
        properties: {
            serviceName: {
                introduced: "11.8.0"
            },
            appName: {
                introduced: "11.12.0"
            },
            baseline: {
                introduced: "11.10.0"
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.ModelUnit);
    changedatacapture.EntityChangeDataCaptureService = EntityChangeDataCaptureService;
    /**
     * See: {@link https://docs.mendix.com/refguide/change-data-capture relevant section in reference guide}
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
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(EntityChangeSource, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__properties = new internal.PartListProperty(EntityChangeSource, this, "properties", []);
            /** @internal */
            this.__versionedSource = new internal.ByIdReferenceProperty(EntityChangeSource, this, "versionedSource", null);
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
         * In version 11.9.0: introduced
         */
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 11.9.0: introduced
         */
        get properties() {
            return this.__properties.get();
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 11.12.0: introduced
         */
        get versionedSource() {
            return this.__versionedSource.get();
        }
        set versionedSource(newValue) {
            this.__versionedSource.set(newValue);
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
            },
            exposedName: {
                introduced: "11.9.0"
            },
            properties: {
                introduced: "11.9.0"
            },
            versionedSource: {
                introduced: "11.12.0"
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    changedatacapture.EntityChangeSource = EntityChangeSource;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.10.0: introduced
     */
    class Version extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__major = new internal.PrimitiveProperty(Version, this, "major", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__minor = new internal.PrimitiveProperty(Version, this, "minor", 0, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new Version() cannot be invoked directly, please use 'model.changedatacapture.createVersion()'");
            }
        }
        get containerAsVersionedEntityChangeDataCaptureService() {
            return super.getContainerAs(VersionedEntityChangeDataCaptureService);
        }
        get containerAsVersionedEntityChangeSource() {
            return super.getContainerAs(VersionedEntityChangeSource);
        }
        get major() {
            return this.__major.get();
        }
        set major(newValue) {
            this.__major.set(newValue);
        }
        get minor() {
            return this.__minor.get();
        }
        set minor(newValue) {
            this.__minor.set(newValue);
        }
        /**
         * Creates and returns a new Version instance in the SDK and on the server.
         * The new Version will be automatically stored in the 'version' property
         * of the parent VersionedEntityChangeDataCaptureService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.10.0 and higher
         */
        static createInVersionedEntityChangeDataCaptureServiceUnderVersion(container) {
            internal.createInVersionCheck(container.model, Version.structureTypeName, { start: "11.10.0" });
            return internal.instancehelpers.createElement(container, Version, "version", false);
        }
        /**
         * Creates and returns a new Version instance in the SDK and on the server.
         * The new Version will be automatically stored in the 'version' property
         * of the parent VersionedEntityChangeSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.10.0 and higher
         */
        static createInVersionedEntityChangeSourceUnderVersion(container) {
            internal.createInVersionCheck(container.model, Version.structureTypeName, { start: "11.10.0" });
            return internal.instancehelpers.createElement(container, Version, "version", false);
        }
        /**
         * Creates and returns a new Version instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Version);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.major = 1;
            this.minor = 0;
        }
    }
    Version.structureTypeName = "ChangeDataCapture$Version";
    Version.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.10.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    changedatacapture.Version = Version;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.10.0: introduced
     */
    class VersionedEntityChangeDataCaptureService extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__version = new internal.PartProperty(VersionedEntityChangeDataCaptureService, this, "version", null, true);
            /** @internal */
            this.__sources = new internal.PartListProperty(VersionedEntityChangeDataCaptureService, this, "sources", []);
            if (arguments.length < 4) {
                throw new Error("new VersionedEntityChangeDataCaptureService() cannot be invoked directly, please use 'model.changedatacapture.createVersionedEntityChangeDataCaptureService()'");
            }
        }
        get containerAsEntityChangeDataCaptureService() {
            return super.getContainerAs(EntityChangeDataCaptureService);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
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
         * Creates and returns a new VersionedEntityChangeDataCaptureService instance in the SDK and on the server.
         * The new VersionedEntityChangeDataCaptureService will be automatically stored in the 'baseline' property
         * of the parent EntityChangeDataCaptureService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, VersionedEntityChangeDataCaptureService.structureTypeName, { start: "11.10.0" });
            return internal.instancehelpers.createElement(container, VersionedEntityChangeDataCaptureService, "baseline", false);
        }
        /**
         * Creates and returns a new VersionedEntityChangeDataCaptureService instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, VersionedEntityChangeDataCaptureService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.version = Version.create(this.model);
        }
    }
    VersionedEntityChangeDataCaptureService.structureTypeName = "ChangeDataCapture$VersionedEntityChangeDataCaptureService";
    VersionedEntityChangeDataCaptureService.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.10.0",
        properties: {
            version: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    changedatacapture.VersionedEntityChangeDataCaptureService = VersionedEntityChangeDataCaptureService;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.10.0: introduced
     */
    class VersionedEntityChangeSource extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__version = new internal.PartProperty(VersionedEntityChangeSource, this, "version", null, true);
            /** @internal */
            this.__entityGuid = new internal.PrimitiveProperty(VersionedEntityChangeSource, this, "entityGuid", "", internal.PrimitiveTypeEnum.Guid);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(VersionedEntityChangeSource, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__properties = new internal.PartListProperty(VersionedEntityChangeSource, this, "properties", []);
            if (arguments.length < 4) {
                throw new Error("new VersionedEntityChangeSource() cannot be invoked directly, please use 'model.changedatacapture.createVersionedEntityChangeSource()'");
            }
        }
        get containerAsVersionedEntityChangeDataCaptureService() {
            return super.getContainerAs(VersionedEntityChangeDataCaptureService);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
        }
        get entityGuid() {
            return this.__entityGuid.get();
        }
        set entityGuid(newValue) {
            this.__entityGuid.set(newValue);
        }
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get properties() {
            return this.__properties.get();
        }
        /**
         * Creates and returns a new VersionedEntityChangeSource instance in the SDK and on the server.
         * The new VersionedEntityChangeSource will be automatically stored in the 'sources' property
         * of the parent VersionedEntityChangeDataCaptureService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, VersionedEntityChangeSource.structureTypeName, { start: "11.10.0" });
            return internal.instancehelpers.createElement(container, VersionedEntityChangeSource, "sources", true);
        }
        /**
         * Creates and returns a new VersionedEntityChangeSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, VersionedEntityChangeSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.entityGuid = utils_1.utils.randomUuid();
            this.version = Version.create(this.model);
        }
    }
    VersionedEntityChangeSource.structureTypeName = "ChangeDataCapture$VersionedEntityChangeSource";
    VersionedEntityChangeSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.10.0",
        properties: {
            version: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    changedatacapture.VersionedEntityChangeSource = VersionedEntityChangeSource;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.10.0: introduced
     */
    class VersionedProperty extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__propertyGuid = new internal.PrimitiveProperty(VersionedProperty, this, "propertyGuid", "", internal.PrimitiveTypeEnum.Guid);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(VersionedProperty, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__type = new internal.EnumProperty(VersionedProperty, this, "type", PropertyType.String, PropertyType);
            /** @internal */
            this.__associatedEntityGuid = new internal.PrimitiveProperty(VersionedProperty, this, "associatedEntityGuid", "", internal.PrimitiveTypeEnum.Guid);
            if (arguments.length < 4) {
                throw new Error("new VersionedProperty() cannot be invoked directly, please use 'model.changedatacapture.createVersionedProperty()'");
            }
        }
        get containerAsVersionedEntityChangeSource() {
            return super.getContainerAs(VersionedEntityChangeSource);
        }
        get propertyGuid() {
            return this.__propertyGuid.get();
        }
        set propertyGuid(newValue) {
            this.__propertyGuid.set(newValue);
        }
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        /**
         * In version 11.12.0: introduced
         */
        get associatedEntityGuid() {
            return this.__associatedEntityGuid.get();
        }
        set associatedEntityGuid(newValue) {
            this.__associatedEntityGuid.set(newValue);
        }
        /**
         * Creates and returns a new VersionedProperty instance in the SDK and on the server.
         * The new VersionedProperty will be automatically stored in the 'properties' property
         * of the parent VersionedEntityChangeSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, VersionedProperty.structureTypeName, { start: "11.10.0" });
            return internal.instancehelpers.createElement(container, VersionedProperty, "properties", true);
        }
        /**
         * Creates and returns a new VersionedProperty instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, VersionedProperty);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__associatedEntityGuid.isAvailable) {
                this.associatedEntityGuid = utils_1.utils.randomUuid();
            }
            this.propertyGuid = utils_1.utils.randomUuid();
            this.type = PropertyType.String;
        }
    }
    VersionedProperty.structureTypeName = "ChangeDataCapture$VersionedProperty";
    VersionedProperty.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.10.0",
        properties: {
            associatedEntityGuid: {
                introduced: "11.12.0"
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    changedatacapture.VersionedProperty = VersionedProperty;
})(changedatacapture = exports.changedatacapture || (exports.changedatacapture = {}));
//# sourceMappingURL=changedatacapture.js.map