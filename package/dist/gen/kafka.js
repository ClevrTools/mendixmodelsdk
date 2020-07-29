"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.kafka = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const domainmodels_1 = require("./domainmodels");
var kafka;
(function (kafka) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Kafka`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.11.0: introduced
     */
    let ConsumedKafkaService = /** @class */ (() => {
        class ConsumedKafkaService extends domainmodels_1.domainmodels.RemoteEntitySourceDocument {
            constructor(model, structureTypeName, id, isPartial, container) {
                super(model, structureTypeName, id, isPartial, container);
                /** @internal */
                this.__metadataUrl = new internal.PrimitiveProperty(ConsumedKafkaService, this, "metadataUrl", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__metadataReferences = new internal.PartListProperty(ConsumedKafkaService, this, "metadataReferences", []);
                /** @internal */
                this.__serviceName = new internal.PrimitiveProperty(ConsumedKafkaService, this, "serviceName", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__version = new internal.PrimitiveProperty(ConsumedKafkaService, this, "version", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__serviceId = new internal.PrimitiveProperty(ConsumedKafkaService, this, "serviceId", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__serviceFeed = new internal.PrimitiveProperty(ConsumedKafkaService, this, "serviceFeed", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__metadata = new internal.PrimitiveProperty(ConsumedKafkaService, this, "metadata", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__brokerUrl = new internal.ByNameReferenceProperty(ConsumedKafkaService, this, "brokerUrl", null, "Constants$Constant");
                /** @internal */
                this.__brokerUsername = new internal.ByNameReferenceProperty(ConsumedKafkaService, this, "brokerUsername", null, "Constants$Constant");
                /** @internal */
                this.__brokerPassword = new internal.ByNameReferenceProperty(ConsumedKafkaService, this, "brokerPassword", null, "Constants$Constant");
                /** @internal */
                this.__entities = new internal.PartListProperty(ConsumedKafkaService, this, "entities", []);
                this._containmentName = "documents";
            }
            get containerAsFolderBase() {
                return super.getContainerAs(projects_1.projects.FolderBase);
            }
            get metadataUrl() {
                return this.__metadataUrl.get();
            }
            set metadataUrl(newValue) {
                this.__metadataUrl.set(newValue);
            }
            get metadataReferences() {
                return this.__metadataReferences.get();
            }
            get serviceName() {
                return this.__serviceName.get();
            }
            set serviceName(newValue) {
                this.__serviceName.set(newValue);
            }
            get version() {
                return this.__version.get();
            }
            set version(newValue) {
                this.__version.set(newValue);
            }
            get serviceId() {
                return this.__serviceId.get();
            }
            set serviceId(newValue) {
                this.__serviceId.set(newValue);
            }
            /**
             * In version 8.12.0: introduced
             */
            get serviceFeed() {
                return this.__serviceFeed.get();
            }
            set serviceFeed(newValue) {
                this.__serviceFeed.set(newValue);
            }
            get metadata() {
                return this.__metadata.get();
            }
            set metadata(newValue) {
                this.__metadata.set(newValue);
            }
            get brokerUrl() {
                return this.__brokerUrl.get();
            }
            set brokerUrl(newValue) {
                this.__brokerUrl.set(newValue);
            }
            get brokerUrlQualifiedName() {
                return this.__brokerUrl.qualifiedName();
            }
            get brokerUsername() {
                return this.__brokerUsername.get();
            }
            set brokerUsername(newValue) {
                this.__brokerUsername.set(newValue);
            }
            get brokerUsernameQualifiedName() {
                return this.__brokerUsername.qualifiedName();
            }
            get brokerPassword() {
                return this.__brokerPassword.get();
            }
            set brokerPassword(newValue) {
                this.__brokerPassword.set(newValue);
            }
            get brokerPasswordQualifiedName() {
                return this.__brokerPassword.qualifiedName();
            }
            /**
             * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
             *
             * In version 8.12.0: deleted
             */
            get entities() {
                return this.__entities.get();
            }
            /**
             * Creates a new ConsumedKafkaService unit in the SDK and on the server.
             * Expects one argument, the projects.IFolderBase in which this unit is contained.
             */
            static createIn(container) {
                return internal.instancehelpers.createUnit(container, ConsumedKafkaService);
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
        ConsumedKafkaService.structureTypeName = "Kafka$ConsumedKafkaService";
        ConsumedKafkaService.versionInfo = new exports.StructureVersionInfo({
            introduced: "8.11.0",
            properties: {
                serviceFeed: {
                    introduced: "8.12.0"
                },
                entities: {
                    deleted: "8.12.0",
                    deletionMessage: null
                }
            },
            experimental: {
                currentValue: true
            }
        }, internal.StructureType.ModelUnit);
        return ConsumedKafkaService;
    })();
    kafka.ConsumedKafkaService = ConsumedKafkaService;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.12.0: deleted
     */
    let KafkaAttribute = /** @class */ (() => {
        class KafkaAttribute extends internal.Element {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__name = new internal.PrimitiveProperty(KafkaAttribute, this, "name", "", internal.PrimitiveTypeEnum.String);
                if (arguments.length < 4) {
                    throw new Error("new KafkaAttribute() cannot be invoked directly, please use 'model.kafka.createKafkaAttribute()'");
                }
            }
            get containerAsKafkaEntity() {
                return super.getContainerAs(KafkaEntity);
            }
            get name() {
                return this.__name.get();
            }
            set name(newValue) {
                this.__name.set(newValue);
            }
            /**
             * Creates and returns a new KafkaAttribute instance in the SDK and on the server.
             * The new KafkaAttribute will be automatically stored in the 'attributes' property
             * of the parent KafkaEntity element passed as argument.
             *
             * Warning! Can only be used on models with the following Mendix meta model versions:
             *  6.0.0 to 8.11.0
             */
            static createIn(container) {
                internal.createInVersionCheck(container.model, KafkaAttribute.structureTypeName, { end: "8.11.0" });
                return internal.instancehelpers.createElement(container, KafkaAttribute, "attributes", true);
            }
            /**
             * Creates and returns a new KafkaAttribute instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, KafkaAttribute);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
            }
        }
        KafkaAttribute.structureTypeName = "Kafka$KafkaAttribute";
        KafkaAttribute.versionInfo = new exports.StructureVersionInfo({
            deleted: "8.12.0",
            deletionMessage: null,
            experimental: {
                currentValue: true
            }
        }, internal.StructureType.Element);
        return KafkaAttribute;
    })();
    kafka.KafkaAttribute = KafkaAttribute;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.12.0: deleted
     */
    let KafkaEntity = /** @class */ (() => {
        class KafkaEntity extends internal.Element {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__name = new internal.PrimitiveProperty(KafkaEntity, this, "name", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__entitySet = new internal.PrimitiveProperty(KafkaEntity, this, "entitySet", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__navigationProperties = new internal.PartListProperty(KafkaEntity, this, "navigationProperties", []);
                /** @internal */
                this.__attributes = new internal.PartListProperty(KafkaEntity, this, "attributes", []);
                /** @internal */
                this.__topicName = new internal.ByNameReferenceProperty(KafkaEntity, this, "topicName", null, "Constants$Constant");
                if (arguments.length < 4) {
                    throw new Error("new KafkaEntity() cannot be invoked directly, please use 'model.kafka.createKafkaEntity()'");
                }
            }
            get containerAsConsumedKafkaService() {
                return super.getContainerAs(ConsumedKafkaService);
            }
            get name() {
                return this.__name.get();
            }
            set name(newValue) {
                this.__name.set(newValue);
            }
            get entitySet() {
                return this.__entitySet.get();
            }
            set entitySet(newValue) {
                this.__entitySet.set(newValue);
            }
            /**
             * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
             */
            get navigationProperties() {
                return this.__navigationProperties.get();
            }
            /**
             * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
             */
            get attributes() {
                return this.__attributes.get();
            }
            get topicName() {
                return this.__topicName.get();
            }
            set topicName(newValue) {
                this.__topicName.set(newValue);
            }
            get topicNameQualifiedName() {
                return this.__topicName.qualifiedName();
            }
            /**
             * Creates and returns a new KafkaEntity instance in the SDK and on the server.
             * The new KafkaEntity will be automatically stored in the 'entities' property
             * of the parent ConsumedKafkaService element passed as argument.
             *
             * Warning! Can only be used on models with the following Mendix meta model versions:
             *  8.11.0 to 8.11.0
             */
            static createIn(container) {
                internal.createInVersionCheck(container.model, KafkaEntity.structureTypeName, { start: "8.11.0", end: "8.11.0" });
                return internal.instancehelpers.createElement(container, KafkaEntity, "entities", true);
            }
            /**
             * Creates and returns a new KafkaEntity instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, KafkaEntity);
            }
            get qualifiedName() {
                return this._getQualifiedName();
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
            }
        }
        KafkaEntity.structureTypeName = "Kafka$KafkaEntity";
        KafkaEntity.versionInfo = new exports.StructureVersionInfo({
            deleted: "8.12.0",
            deletionMessage: null,
            properties: {
                name: {
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
        return KafkaEntity;
    })();
    kafka.KafkaEntity = KafkaEntity;
    /**
     * In version 8.11.0: introduced
     */
    let KafkaMappedValue = /** @class */ (() => {
        class KafkaMappedValue extends domainmodels_1.domainmodels.MappedValue {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__remoteName = new internal.PrimitiveProperty(KafkaMappedValue, this, "remoteName", "", internal.PrimitiveTypeEnum.String);
                if (arguments.length < 4) {
                    throw new Error("new KafkaMappedValue() cannot be invoked directly, please use 'model.kafka.createKafkaMappedValue()'");
                }
            }
            get containerAsAttribute() {
                return super.getContainerAs(domainmodels_1.domainmodels.Attribute);
            }
            get remoteName() {
                return this.__remoteName.get();
            }
            set remoteName(newValue) {
                this.__remoteName.set(newValue);
            }
            /**
             * Creates and returns a new KafkaMappedValue instance in the SDK and on the server.
             * The new KafkaMappedValue will be automatically stored in the 'value' property
             * of the parent domainmodels.Attribute element passed as argument.
             *
             * Warning! Can only be used on models with the following Mendix meta model versions:
             *  8.11.0 and higher
             */
            static createIn(container) {
                internal.createInVersionCheck(container.model, KafkaMappedValue.structureTypeName, { start: "8.11.0" });
                return internal.instancehelpers.createElement(container, KafkaMappedValue, "value", false);
            }
            /**
             * Creates and returns a new KafkaMappedValue instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, KafkaMappedValue);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
            }
        }
        KafkaMappedValue.structureTypeName = "Kafka$KafkaMappedValue";
        KafkaMappedValue.versionInfo = new exports.StructureVersionInfo({
            introduced: "8.11.0",
            public: {
                currentValue: true
            }
        }, internal.StructureType.Element);
        return KafkaMappedValue;
    })();
    kafka.KafkaMappedValue = KafkaMappedValue;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.12.0: deleted
     */
    let KafkaNavigationProperty = /** @class */ (() => {
        class KafkaNavigationProperty extends internal.Element {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__name = new internal.PrimitiveProperty(KafkaNavigationProperty, this, "name", "", internal.PrimitiveTypeEnum.String);
                if (arguments.length < 4) {
                    throw new Error("new KafkaNavigationProperty() cannot be invoked directly, please use 'model.kafka.createKafkaNavigationProperty()'");
                }
            }
            get containerAsKafkaEntity() {
                return super.getContainerAs(KafkaEntity);
            }
            get name() {
                return this.__name.get();
            }
            set name(newValue) {
                this.__name.set(newValue);
            }
            /**
             * Creates and returns a new KafkaNavigationProperty instance in the SDK and on the server.
             * The new KafkaNavigationProperty will be automatically stored in the 'navigationProperties' property
             * of the parent KafkaEntity element passed as argument.
             *
             * Warning! Can only be used on models with the following Mendix meta model versions:
             *  6.0.0 to 8.11.0
             */
            static createIn(container) {
                internal.createInVersionCheck(container.model, KafkaNavigationProperty.structureTypeName, { end: "8.11.0" });
                return internal.instancehelpers.createElement(container, KafkaNavigationProperty, "navigationProperties", true);
            }
            /**
             * Creates and returns a new KafkaNavigationProperty instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, KafkaNavigationProperty);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
            }
        }
        KafkaNavigationProperty.structureTypeName = "Kafka$KafkaNavigationProperty";
        KafkaNavigationProperty.versionInfo = new exports.StructureVersionInfo({
            deleted: "8.12.0",
            deletionMessage: null,
            experimental: {
                currentValue: true
            }
        }, internal.StructureType.Element);
        return KafkaNavigationProperty;
    })();
    kafka.KafkaNavigationProperty = KafkaNavigationProperty;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.11.0: introduced
     */
    let KafkaRemoteEntitySource = /** @class */ (() => {
        class KafkaRemoteEntitySource extends domainmodels_1.domainmodels.MaterializedRemoteEntitySource {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__sourceDocument = new internal.ByNameReferenceProperty(KafkaRemoteEntitySource, this, "sourceDocument", null, "Kafka$ConsumedKafkaService");
                /** @internal */
                this.__remoteName = new internal.PrimitiveProperty(KafkaRemoteEntitySource, this, "remoteName", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__topicName = new internal.PrimitiveProperty(KafkaRemoteEntitySource, this, "topicName", "", internal.PrimitiveTypeEnum.String);
                if (arguments.length < 4) {
                    throw new Error("new KafkaRemoteEntitySource() cannot be invoked directly, please use 'model.kafka.createKafkaRemoteEntitySource()'");
                }
            }
            get containerAsEntity() {
                return super.getContainerAs(domainmodels_1.domainmodels.Entity);
            }
            /**
             * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
             */
            get sourceDocument() {
                return this.__sourceDocument.get();
            }
            set sourceDocument(newValue) {
                this.__sourceDocument.set(newValue);
            }
            get sourceDocumentQualifiedName() {
                return this.__sourceDocument.qualifiedName();
            }
            get remoteName() {
                return this.__remoteName.get();
            }
            set remoteName(newValue) {
                this.__remoteName.set(newValue);
            }
            /**
             * In version 8.12.0: introduced
             */
            get topicName() {
                return this.__topicName.get();
            }
            set topicName(newValue) {
                this.__topicName.set(newValue);
            }
            /**
             * Creates and returns a new KafkaRemoteEntitySource instance in the SDK and on the server.
             * The new KafkaRemoteEntitySource will be automatically stored in the 'source' property
             * of the parent domainmodels.Entity element passed as argument.
             *
             * Warning! Can only be used on models with the following Mendix meta model versions:
             *  8.11.0 and higher
             */
            static createIn(container) {
                internal.createInVersionCheck(container.model, KafkaRemoteEntitySource.structureTypeName, { start: "8.11.0" });
                return internal.instancehelpers.createElement(container, KafkaRemoteEntitySource, "source", false);
            }
            /**
             * Creates and returns a new KafkaRemoteEntitySource instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, KafkaRemoteEntitySource);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
            }
        }
        KafkaRemoteEntitySource.structureTypeName = "Kafka$KafkaRemoteEntitySource";
        KafkaRemoteEntitySource.versionInfo = new exports.StructureVersionInfo({
            introduced: "8.11.0",
            properties: {
                topicName: {
                    introduced: "8.12.0"
                }
            },
            public: {
                currentValue: true
            },
            experimental: {
                currentValue: true
            }
        }, internal.StructureType.Element);
        return KafkaRemoteEntitySource;
    })();
    kafka.KafkaRemoteEntitySource = KafkaRemoteEntitySource;
})(kafka = exports.kafka || (exports.kafka = {}));
const projects_1 = require("./projects");
//# sourceMappingURL=kafka.js.map