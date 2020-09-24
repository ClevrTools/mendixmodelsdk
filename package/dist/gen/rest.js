"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.rest = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const domainmodels_1 = require("./domainmodels");
const projects_1 = require("./projects");
const webservices_1 = require("./webservices");
var rest;
(function (rest) {
    class ODataVersion extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "rest.ODataVersion";
        }
    }
    ODataVersion.OData3 = new ODataVersion("OData3", {});
    ODataVersion.OData4 = new ODataVersion("OData4", {});
    rest.ODataVersion = ODataVersion;
    class RestAuthenticationType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "rest.RestAuthenticationType";
        }
    }
    RestAuthenticationType.Basic = new RestAuthenticationType("Basic", {});
    RestAuthenticationType.None = new RestAuthenticationType("None", {
        deleted: "7.13.0",
        deletionMessage: null
    });
    RestAuthenticationType.Session = new RestAuthenticationType("Session", {
        introduced: "7.13.0"
    });
    RestAuthenticationType.Microflow = new RestAuthenticationType("Microflow", {
        introduced: "7.17.0"
    });
    RestAuthenticationType.Guest = new RestAuthenticationType("Guest", {
        introduced: "8.3.0"
    });
    rest.RestAuthenticationType = RestAuthenticationType;
    class RestOperationParameterType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "rest.RestOperationParameterType";
        }
    }
    RestOperationParameterType.Path = new RestOperationParameterType("Path", {});
    RestOperationParameterType.Query = new RestOperationParameterType("Query", {});
    RestOperationParameterType.Body = new RestOperationParameterType("Body", {
        introduced: "7.13.0"
    });
    RestOperationParameterType.Header = new RestOperationParameterType("Header", {
        introduced: "7.17.0"
    });
    RestOperationParameterType.Form = new RestOperationParameterType("Form", {
        introduced: "8.2.0"
    });
    rest.RestOperationParameterType = RestOperationParameterType;
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-odata-service-properties relevant section in reference guide}
     *
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 7.18.0: introduced
     */
    class ConsumedODataService extends domainmodels_1.domainmodels.RemoteEntitySourceDocument {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__metadataReferences = new internal.PartListProperty(ConsumedODataService, this, "metadataReferences", []);
            /** @internal */
            this.__proxyType = new internal.EnumProperty(ConsumedODataService, this, "proxyType", microflows_1.microflows.RequestProxyType.DefaultProxy, microflows_1.microflows.RequestProxyType);
            /** @internal */
            this.__proxyHost = new internal.ByNameReferenceProperty(ConsumedODataService, this, "proxyHost", null, "Constants$Constant");
            /** @internal */
            this.__proxyPort = new internal.ByNameReferenceProperty(ConsumedODataService, this, "proxyPort", null, "Constants$Constant");
            /** @internal */
            this.__proxyUsername = new internal.ByNameReferenceProperty(ConsumedODataService, this, "proxyUsername", null, "Constants$Constant");
            /** @internal */
            this.__proxyPassword = new internal.ByNameReferenceProperty(ConsumedODataService, this, "proxyPassword", null, "Constants$Constant");
            /** @internal */
            this.__httpConfiguration = new internal.PartProperty(ConsumedODataService, this, "httpConfiguration", null, true);
            /** @internal */
            this.__headersMicroflow = new internal.ByNameReferenceProperty(ConsumedODataService, this, "headersMicroflow", null, "Microflows$Microflow");
            /** @internal */
            this.__timeoutModel = new internal.PartProperty(ConsumedODataService, this, "timeoutModel", null, true);
            /** @internal */
            this.__timeoutExpression = new internal.PrimitiveProperty(ConsumedODataService, this, "timeoutExpression", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__oDataVersion = new internal.EnumProperty(ConsumedODataService, this, "oDataVersion", ODataVersion.OData3, ODataVersion);
            /** @internal */
            this.__versionApiMockResults = new internal.PrimitiveProperty(ConsumedODataService, this, "versionApiMockResults", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__serviceId = new internal.PrimitiveProperty(ConsumedODataService, this, "serviceId", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__lastUpdated = new internal.PrimitiveProperty(ConsumedODataService, this, "lastUpdated", "", internal.PrimitiveTypeEnum.String);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * In version 8.6.0: introduced
         */
        get metadataReferences() {
            return this.__metadataReferences.get();
        }
        get proxyType() {
            return this.__proxyType.get();
        }
        set proxyType(newValue) {
            this.__proxyType.set(newValue);
        }
        get proxyHost() {
            return this.__proxyHost.get();
        }
        set proxyHost(newValue) {
            this.__proxyHost.set(newValue);
        }
        get proxyHostQualifiedName() {
            return this.__proxyHost.qualifiedName();
        }
        get proxyPort() {
            return this.__proxyPort.get();
        }
        set proxyPort(newValue) {
            this.__proxyPort.set(newValue);
        }
        get proxyPortQualifiedName() {
            return this.__proxyPort.qualifiedName();
        }
        get proxyUsername() {
            return this.__proxyUsername.get();
        }
        set proxyUsername(newValue) {
            this.__proxyUsername.set(newValue);
        }
        get proxyUsernameQualifiedName() {
            return this.__proxyUsername.qualifiedName();
        }
        get proxyPassword() {
            return this.__proxyPassword.get();
        }
        set proxyPassword(newValue) {
            this.__proxyPassword.set(newValue);
        }
        get proxyPasswordQualifiedName() {
            return this.__proxyPassword.qualifiedName();
        }
        /**
         * In version 8.0.0: introduced
         */
        get httpConfiguration() {
            return this.__httpConfiguration.get();
        }
        set httpConfiguration(newValue) {
            this.__httpConfiguration.set(newValue);
        }
        /**
         * In version 8.4.0: introduced
         */
        get headersMicroflow() {
            return this.__headersMicroflow.get();
        }
        set headersMicroflow(newValue) {
            this.__headersMicroflow.set(newValue);
        }
        get headersMicroflowQualifiedName() {
            return this.__headersMicroflow.qualifiedName();
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.5.0: introduced
         */
        get timeoutModel() {
            return this.__timeoutModel.get();
        }
        set timeoutModel(newValue) {
            this.__timeoutModel.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 8.5.0: introduced
         */
        get timeoutExpression() {
            return this.__timeoutExpression.get();
        }
        set timeoutExpression(newValue) {
            this.__timeoutExpression.set(newValue);
        }
        /**
         * In version 8.6.0: introduced
         */
        get oDataVersion() {
            return this.__oDataVersion.get();
        }
        set oDataVersion(newValue) {
            this.__oDataVersion.set(newValue);
        }
        /**
         * In version 8.14.0: deleted
         * In version 8.13.0: introduced
         */
        get versionApiMockResults() {
            return this.__versionApiMockResults.get();
        }
        set versionApiMockResults(newValue) {
            this.__versionApiMockResults.set(newValue);
        }
        /**
         * In version 8.14.0: deleted
         * In version 8.0.0: introduced
         */
        get serviceId() {
            return this.__serviceId.get();
        }
        set serviceId(newValue) {
            this.__serviceId.set(newValue);
        }
        /**
         * In version 8.14.0: introduced
         */
        get lastUpdated() {
            return this.__lastUpdated.get();
        }
        set lastUpdated(newValue) {
            this.__lastUpdated.set(newValue);
        }
        /**
         * Creates a new ConsumedODataService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ConsumedODataService);
        }
        /** @internal */
        _isByNameReferrable() {
            return true;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__httpConfiguration.isAvailable) {
                this.httpConfiguration = microflows_1.microflows.HttpConfiguration.create(this.model);
            }
            if (this.__oDataVersion.isAvailable) {
                this.oDataVersion = ODataVersion.OData3;
            }
            this.proxyType = microflows_1.microflows.RequestProxyType.DefaultProxy;
            if (this.__timeoutExpression.isAvailable) {
                this.timeoutExpression = "300";
            }
            if (this.__timeoutModel.isAvailable) {
                this.timeoutModel = ((integerLiteral) => {
                    integerLiteral.value = 300;
                    return integerLiteral;
                })(expressions_1.expressions.IntegerLiteral.create(this.model));
            }
        }
    }
    ConsumedODataService.structureTypeName = "Rest$ConsumedODataService";
    ConsumedODataService.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.18.0",
        properties: {
            metadataReferences: {
                introduced: "8.6.0"
            },
            httpConfiguration: {
                introduced: "8.0.0",
                required: {
                    currentValue: true
                }
            },
            headersMicroflow: {
                introduced: "8.4.0"
            },
            timeoutModel: {
                introduced: "8.5.0",
                required: {
                    currentValue: true
                }
            },
            timeoutExpression: {
                introduced: "8.5.0"
            },
            oDataVersion: {
                introduced: "8.6.0"
            },
            versionApiMockResults: {
                introduced: "8.13.0",
                deleted: "8.14.0",
                deletionMessage: "Use real payload from the Version API"
            },
            serviceId: {
                introduced: "8.0.0",
                deleted: "8.14.0",
                deletionMessage: null
            },
            lastUpdated: {
                introduced: "8.14.0",
                public: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.ModelUnit);
    rest.ConsumedODataService = ConsumedODataService;
    /**
     * See: {@link https://docs.mendix.com/refguide/cors-settings relevant section in reference guide}
     *
     * In version 7.18.0: introduced
     */
    class CorsConfiguration extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__allowedOrigins = new internal.ByNameReferenceProperty(CorsConfiguration, this, "allowedOrigins", null, "Constants$Constant");
            /** @internal */
            this.__allowAuthentication = new internal.PrimitiveProperty(CorsConfiguration, this, "allowAuthentication", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__maxAge = new internal.ByNameReferenceProperty(CorsConfiguration, this, "maxAge", null, "Constants$Constant");
            if (arguments.length < 4) {
                throw new Error("new CorsConfiguration() cannot be invoked directly, please use 'model.rest.createCorsConfiguration()'");
            }
        }
        get containerAsPublishedRestService() {
            return super.getContainerAs(PublishedRestService);
        }
        get allowedOrigins() {
            return this.__allowedOrigins.get();
        }
        set allowedOrigins(newValue) {
            this.__allowedOrigins.set(newValue);
        }
        get allowedOriginsQualifiedName() {
            return this.__allowedOrigins.qualifiedName();
        }
        get allowAuthentication() {
            return this.__allowAuthentication.get();
        }
        set allowAuthentication(newValue) {
            this.__allowAuthentication.set(newValue);
        }
        get maxAge() {
            return this.__maxAge.get();
        }
        set maxAge(newValue) {
            this.__maxAge.set(newValue);
        }
        get maxAgeQualifiedName() {
            return this.__maxAge.qualifiedName();
        }
        /**
         * Creates and returns a new CorsConfiguration instance in the SDK and on the server.
         * The new CorsConfiguration will be automatically stored in the 'corsConfiguration' property
         * of the parent PublishedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.18.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, CorsConfiguration.structureTypeName, { start: "7.18.0" });
            return internal.instancehelpers.createElement(container, CorsConfiguration, "corsConfiguration", false);
        }
        /**
         * Creates and returns a new CorsConfiguration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CorsConfiguration);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.allowAuthentication = true;
        }
    }
    CorsConfiguration.structureTypeName = "Rest$CorsConfiguration";
    CorsConfiguration.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.18.0"
    }, internal.StructureType.Element);
    rest.CorsConfiguration = CorsConfiguration;
    /**
     * In version 8.6.0: introduced
     */
    class MetadataReference extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__uri = new internal.PrimitiveProperty(MetadataReference, this, "uri", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__metadata = new internal.PrimitiveProperty(MetadataReference, this, "metadata", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__metadataReferences = new internal.PartListProperty(MetadataReference, this, "metadataReferences", []);
            if (arguments.length < 4) {
                throw new Error("new MetadataReference() cannot be invoked directly, please use 'model.rest.createMetadataReference()'");
            }
        }
        get containerAsConsumedKafkaService() {
            return super.getContainerAs(kafka_1.kafka.ConsumedKafkaService);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(ConsumedODataService);
        }
        get containerAsMetadataReference() {
            return super.getContainerAs(MetadataReference);
        }
        get uri() {
            return this.__uri.get();
        }
        set uri(newValue) {
            this.__uri.set(newValue);
        }
        get metadata() {
            return this.__metadata.get();
        }
        set metadata(newValue) {
            this.__metadata.set(newValue);
        }
        /**
         * In version 8.8.0: introduced
         */
        get metadataReferences() {
            return this.__metadataReferences.get();
        }
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * The new MetadataReference will be automatically stored in the 'metadataReferences' property
         * of the parent ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.6.0 to 8.7.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MetadataReference.structureTypeName, { start: "8.6.0", end: "8.7.0" });
            return internal.instancehelpers.createElement(container, MetadataReference, "metadataReferences", true);
        }
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * The new MetadataReference will be automatically stored in the 'metadataReferences' property
         * of the parent kafka.ConsumedKafkaService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 and higher
         */
        static createInConsumedKafkaServiceUnderMetadataReferences(container) {
            internal.createInVersionCheck(container.model, MetadataReference.structureTypeName, { start: "8.11.0" });
            return internal.instancehelpers.createElement(container, MetadataReference, "metadataReferences", true);
        }
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * The new MetadataReference will be automatically stored in the 'metadataReferences' property
         * of the parent ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.6.0 and higher
         */
        static createInConsumedODataServiceUnderMetadataReferences(container) {
            internal.createInVersionCheck(container.model, MetadataReference.structureTypeName, { start: "8.6.0" });
            return internal.instancehelpers.createElement(container, MetadataReference, "metadataReferences", true);
        }
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * The new MetadataReference will be automatically stored in the 'metadataReferences' property
         * of the parent MetadataReference element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.8.0 and higher
         */
        static createInMetadataReferenceUnderMetadataReferences(container) {
            internal.createInVersionCheck(container.model, MetadataReference.structureTypeName, { start: "8.8.0" });
            return internal.instancehelpers.createElement(container, MetadataReference, "metadataReferences", true);
        }
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MetadataReference);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MetadataReference.structureTypeName = "Rest$MetadataReference";
    MetadataReference.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.6.0",
        properties: {
            metadataReferences: {
                introduced: "8.8.0"
            }
        }
    }, internal.StructureType.Element);
    rest.MetadataReference = MetadataReference;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.9.0: introduced
     */
    class ODataKey extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parts = new internal.PartListProperty(ODataKey, this, "parts", []);
            if (arguments.length < 4) {
                throw new Error("new ODataKey() cannot be invoked directly, please use 'model.rest.createODataKey()'");
            }
        }
        get containerAsODataRemoteEntitySource() {
            return super.getContainerAs(ODataRemoteEntitySource);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        get parts() {
            return this.__parts.get();
        }
        /**
         * Creates and returns a new ODataKey instance in the SDK and on the server.
         * The new ODataKey will be automatically stored in the 'key' property
         * of the parent ODataRemoteEntitySource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ODataKey.structureTypeName, { start: "8.11.0" });
            return internal.instancehelpers.createElement(container, ODataKey, "key", false);
        }
        /**
         * Creates and returns a new ODataKey instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ODataKey);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ODataKey.structureTypeName = "Rest$ODataKey";
    ODataKey.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.9.0",
        properties: {
            parts: {
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
    rest.ODataKey = ODataKey;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.9.0: introduced
     */
    class ODataKeyPart extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(ODataKeyPart, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entityKeyPartName = new internal.PrimitiveProperty(ODataKeyPart, this, "entityKeyPartName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__type = new internal.PartProperty(ODataKeyPart, this, "type", null, true);
            if (arguments.length < 4) {
                throw new Error("new ODataKeyPart() cannot be invoked directly, please use 'model.rest.createODataKeyPart()'");
            }
        }
        get containerAsODataKey() {
            return super.getContainerAs(ODataKey);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get entityKeyPartName() {
            return this.__entityKeyPartName.get();
        }
        set entityKeyPartName(newValue) {
            this.__entityKeyPartName.set(newValue);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        /**
         * Creates and returns a new ODataKeyPart instance in the SDK and on the server.
         * The new ODataKeyPart will be automatically stored in the 'parts' property
         * of the parent ODataKey element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ODataKeyPart.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, ODataKeyPart, "parts", true);
        }
        /**
         * Creates and returns a new ODataKeyPart instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ODataKeyPart);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.type = domainmodels_1.domainmodels.LongAttributeType.create(this.model);
        }
    }
    ODataKeyPart.structureTypeName = "Rest$ODataKeyPart";
    ODataKeyPart.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.9.0",
        properties: {
            type: {
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
    rest.ODataKeyPart = ODataKeyPart;
    /**
     * In version 8.10.0: introduced
     */
    class ODataMappedValue extends domainmodels_1.domainmodels.MappedValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__remoteName = new internal.PrimitiveProperty(ODataMappedValue, this, "remoteName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ODataMappedValue() cannot be invoked directly, please use 'model.rest.createODataMappedValue()'");
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
         * Creates and returns a new ODataMappedValue instance in the SDK and on the server.
         * The new ODataMappedValue will be automatically stored in the 'value' property
         * of the parent domainmodels.Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ODataMappedValue.structureTypeName, { start: "8.10.0" });
            return internal.instancehelpers.createElement(container, ODataMappedValue, "value", false);
        }
        /**
         * Creates and returns a new ODataMappedValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ODataMappedValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ODataMappedValue.structureTypeName = "Rest$ODataMappedValue";
    ODataMappedValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    rest.ODataMappedValue = ODataMappedValue;
    /**
     * In version 8.10.0: introduced
     */
    class ODataRemoteAssociationSource extends domainmodels_1.domainmodels.RemoteAssociationSource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__remoteParentNavigationProperty = new internal.PrimitiveProperty(ODataRemoteAssociationSource, this, "remoteParentNavigationProperty", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__remoteChildNavigationProperty = new internal.PrimitiveProperty(ODataRemoteAssociationSource, this, "remoteChildNavigationProperty", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ODataRemoteAssociationSource() cannot be invoked directly, please use 'model.rest.createODataRemoteAssociationSource()'");
            }
        }
        get containerAsAssociationBase() {
            return super.getContainerAs(domainmodels_1.domainmodels.AssociationBase);
        }
        get remoteParentNavigationProperty() {
            return this.__remoteParentNavigationProperty.get();
        }
        set remoteParentNavigationProperty(newValue) {
            this.__remoteParentNavigationProperty.set(newValue);
        }
        get remoteChildNavigationProperty() {
            return this.__remoteChildNavigationProperty.get();
        }
        set remoteChildNavigationProperty(newValue) {
            this.__remoteChildNavigationProperty.set(newValue);
        }
        /**
         * Creates and returns a new ODataRemoteAssociationSource instance in the SDK and on the server.
         * The new ODataRemoteAssociationSource will be automatically stored in the 'source' property
         * of the parent domainmodels.AssociationBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ODataRemoteAssociationSource.structureTypeName, { start: "8.10.0" });
            return internal.instancehelpers.createElement(container, ODataRemoteAssociationSource, "source", false);
        }
        /**
         * Creates and returns a new ODataRemoteAssociationSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ODataRemoteAssociationSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ODataRemoteAssociationSource.structureTypeName = "Rest$ODataRemoteAssociationSource";
    ODataRemoteAssociationSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    rest.ODataRemoteAssociationSource = ODataRemoteAssociationSource;
    /**
     * In version 8.10.0: introduced
     */
    class ODataRemoteEntitySource extends domainmodels_1.domainmodels.QueryBasedRemoteEntitySource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__sourceDocument = new internal.ByNameReferenceProperty(ODataRemoteEntitySource, this, "sourceDocument", null, "Rest$ConsumedODataService");
            /** @internal */
            this.__remoteName = new internal.PrimitiveProperty(ODataRemoteEntitySource, this, "remoteName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entitySet = new internal.PrimitiveProperty(ODataRemoteEntitySource, this, "entitySet", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__key = new internal.PartProperty(ODataRemoteEntitySource, this, "key", null, false);
            if (arguments.length < 4) {
                throw new Error("new ODataRemoteEntitySource() cannot be invoked directly, please use 'model.rest.createODataRemoteEntitySource()'");
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
         * In version 8.11.0: introduced
         */
        get entitySet() {
            return this.__entitySet.get();
        }
        set entitySet(newValue) {
            this.__entitySet.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.11.0: introduced
         */
        get key() {
            return this.__key.get();
        }
        set key(newValue) {
            this.__key.set(newValue);
        }
        /**
         * Creates and returns a new ODataRemoteEntitySource instance in the SDK and on the server.
         * The new ODataRemoteEntitySource will be automatically stored in the 'source' property
         * of the parent domainmodels.Entity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ODataRemoteEntitySource.structureTypeName, { start: "8.10.0" });
            return internal.instancehelpers.createElement(container, ODataRemoteEntitySource, "source", false);
        }
        /**
         * Creates and returns a new ODataRemoteEntitySource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ODataRemoteEntitySource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ODataRemoteEntitySource.structureTypeName = "Rest$ODataRemoteEntitySource";
    ODataRemoteEntitySource.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        properties: {
            entitySet: {
                introduced: "8.11.0"
            },
            key: {
                introduced: "8.11.0",
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    rest.ODataRemoteEntitySource = ODataRemoteEntitySource;
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-services relevant section in reference guide}
     */
    class PublishedODataService extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__namespace = new internal.PrimitiveProperty(PublishedODataService, this, "namespace", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__path = new internal.PrimitiveProperty(PublishedODataService, this, "path", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__allowedModuleRoles = new internal.ByNameReferenceListProperty(PublishedODataService, this, "allowedModuleRoles", [], "Security$ModuleRole");
            /** @internal */
            this.__serviceName = new internal.PrimitiveProperty(PublishedODataService, this, "serviceName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__resources = new internal.PartListProperty(PublishedODataService, this, "resources", []);
            /** @internal */
            this.__publishAssociations = new internal.PrimitiveProperty(PublishedODataService, this, "publishAssociations", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__version = new internal.PrimitiveProperty(PublishedODataService, this, "version", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__authenticationMicroflow = new internal.ByNameReferenceProperty(PublishedODataService, this, "authenticationMicroflow", null, "Microflows$Microflow");
            /** @internal */
            this.__authenticationTypes = new internal.EnumListProperty(PublishedODataService, this, "authenticationTypes", [], RestAuthenticationType);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedODataService, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedODataService, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__replaceIllegalChars = new internal.PrimitiveProperty(PublishedODataService, this, "replaceIllegalChars", false, internal.PrimitiveTypeEnum.Boolean);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get namespace() {
            return this.__namespace.get();
        }
        set namespace(newValue) {
            this.__namespace.set(newValue);
        }
        get path() {
            return this.__path.get();
        }
        set path(newValue) {
            this.__path.set(newValue);
        }
        get allowedModuleRoles() {
            return this.__allowedModuleRoles.get();
        }
        get allowedModuleRolesQualifiedNames() {
            return this.__allowedModuleRoles.qualifiedNames();
        }
        /**
         * In version 8.0.0: introduced
         */
        get serviceName() {
            return this.__serviceName.get();
        }
        set serviceName(newValue) {
            this.__serviceName.set(newValue);
        }
        get resources() {
            return this.__resources.get();
        }
        /**
         * In version 7.19.0: introduced
         */
        get publishAssociations() {
            return this.__publishAssociations.get();
        }
        set publishAssociations(newValue) {
            this.__publishAssociations.set(newValue);
        }
        /**
         * In version 8.0.0: introduced
         */
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
        }
        /**
         * In version 8.0.0: introduced
         */
        get authenticationMicroflow() {
            return this.__authenticationMicroflow.get();
        }
        set authenticationMicroflow(newValue) {
            this.__authenticationMicroflow.set(newValue);
        }
        get authenticationMicroflowQualifiedName() {
            return this.__authenticationMicroflow.qualifiedName();
        }
        /**
         * In version 8.0.0: introduced
         */
        get authenticationTypes() {
            return this.__authenticationTypes.get();
        }
        /**
         * In version 8.4.0: introduced
         */
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        /**
         * In version 8.4.0: introduced
         */
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * In version 8.12.0: introduced
         */
        get replaceIllegalChars() {
            return this.__replaceIllegalChars.get();
        }
        set replaceIllegalChars(newValue) {
            this.__replaceIllegalChars.set(newValue);
        }
        /**
         * Creates a new PublishedODataService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, PublishedODataService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__authenticationTypes.isAvailable) {
                this.authenticationTypes.replace([RestAuthenticationType.Basic]);
            }
            this.namespace = "DefaultNamespace";
            if (this.__publishAssociations.isAvailable) {
                this.publishAssociations = true;
            }
            if (this.__replaceIllegalChars.isAvailable) {
                this.replaceIllegalChars = false;
            }
            if (this.__version.isAvailable) {
                this.version = "1.0.0";
            }
        }
    }
    PublishedODataService.structureTypeName = "Rest$PublishedODataService";
    PublishedODataService.versionInfo = new exports.StructureVersionInfo({
        properties: {
            serviceName: {
                introduced: "8.0.0"
            },
            publishAssociations: {
                introduced: "7.19.0"
            },
            version: {
                introduced: "8.0.0"
            },
            authenticationMicroflow: {
                introduced: "8.0.0"
            },
            authenticationTypes: {
                introduced: "8.0.0"
            },
            summary: {
                introduced: "8.4.0"
            },
            description: {
                introduced: "8.4.0"
            },
            replaceIllegalChars: {
                introduced: "8.12.0"
            }
        }
    }, internal.StructureType.ModelUnit);
    rest.PublishedODataService = PublishedODataService;
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-resource relevant section in reference guide}
     */
    class PublishedRestResource extends webservices_1.webservices.PublishedResource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__path = new internal.PrimitiveProperty(PublishedRestResource, this, "path", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(PublishedRestResource, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedRestResource, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedRestResource, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__usePaging = new internal.PrimitiveProperty(PublishedRestResource, this, "usePaging", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__pageSize = new internal.PrimitiveProperty(PublishedRestResource, this, "pageSize", 0, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new PublishedRestResource() cannot be invoked directly, please use 'model.rest.createPublishedRestResource()'");
            }
        }
        get containerAsPublishedODataService() {
            return super.getContainerAs(PublishedODataService);
        }
        get path() {
            return this.__path.get();
        }
        set path(newValue) {
            this.__path.set(newValue);
        }
        /**
         * In version 7.19.0: introduced
         */
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        /**
         * In version 8.0.0: introduced
         */
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        /**
         * In version 8.0.0: introduced
         */
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        get usePaging() {
            return this.__usePaging.get();
        }
        set usePaging(newValue) {
            this.__usePaging.set(newValue);
        }
        get pageSize() {
            return this.__pageSize.get();
        }
        set pageSize(newValue) {
            this.__pageSize.set(newValue);
        }
        /**
         * Creates and returns a new PublishedRestResource instance in the SDK and on the server.
         * The new PublishedRestResource will be automatically stored in the 'resources' property
         * of the parent PublishedODataService element passed as argument.
         */
        static createIn(container) {
            return internal.instancehelpers.createElement(container, PublishedRestResource, "resources", true);
        }
        /**
         * Creates and returns a new PublishedRestResource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedRestResource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.pageSize = 10000;
        }
    }
    PublishedRestResource.structureTypeName = "Rest$PublishedRestResource";
    PublishedRestResource.versionInfo = new exports.StructureVersionInfo({
        properties: {
            exposedName: {
                introduced: "7.19.0"
            },
            summary: {
                introduced: "8.0.0"
            },
            description: {
                introduced: "8.0.0"
            }
        }
    }, internal.StructureType.Element);
    rest.PublishedRestResource = PublishedRestResource;
    /**
     * See: {@link https://docs.mendix.com/refguide/published-rest-services relevant section in reference guide}
     *
     * In version 7.11.0: removed experimental
     * In version 7.6.0: introduced
     */
    class PublishedRestService extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__path = new internal.PrimitiveProperty(PublishedRestService, this, "path", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__serviceName = new internal.PrimitiveProperty(PublishedRestService, this, "serviceName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__version = new internal.PrimitiveProperty(PublishedRestService, this, "version", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__authenticationType = new internal.EnumProperty(PublishedRestService, this, "authenticationType", RestAuthenticationType.Basic, RestAuthenticationType);
            /** @internal */
            this.__authenticationTypes = new internal.EnumListProperty(PublishedRestService, this, "authenticationTypes", [], RestAuthenticationType);
            /** @internal */
            this.__authenticationMicroflow = new internal.ByNameReferenceProperty(PublishedRestService, this, "authenticationMicroflow", null, "Microflows$Microflow");
            /** @internal */
            this.__corsConfiguration = new internal.PartProperty(PublishedRestService, this, "corsConfiguration", null, false);
            /** @internal */
            this.__allowedRoles = new internal.ByNameReferenceListProperty(PublishedRestService, this, "allowedRoles", [], "Security$ModuleRole");
            /** @internal */
            this.__resources = new internal.PartListProperty(PublishedRestService, this, "resources", []);
            /** @internal */
            this.__parameters = new internal.PartListProperty(PublishedRestService, this, "parameters", []);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get path() {
            return this.__path.get();
        }
        set path(newValue) {
            this.__path.set(newValue);
        }
        /**
         * In version 7.12.0: introduced
         */
        get serviceName() {
            return this.__serviceName.get();
        }
        set serviceName(newValue) {
            this.__serviceName.set(newValue);
        }
        /**
         * In version 7.12.0: introduced
         */
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
        }
        /**
         * In version 7.13.0: deleted
         * In version 7.11.0: introduced
         */
        get authenticationType() {
            return this.__authenticationType.get();
        }
        set authenticationType(newValue) {
            this.__authenticationType.set(newValue);
        }
        /**
         * In version 7.13.0: introduced
         */
        get authenticationTypes() {
            return this.__authenticationTypes.get();
        }
        /**
         * In version 7.17.0: introduced
         */
        get authenticationMicroflow() {
            return this.__authenticationMicroflow.get();
        }
        set authenticationMicroflow(newValue) {
            this.__authenticationMicroflow.set(newValue);
        }
        get authenticationMicroflowQualifiedName() {
            return this.__authenticationMicroflow.qualifiedName();
        }
        /**
         * In version 7.18.0: introduced
         */
        get corsConfiguration() {
            return this.__corsConfiguration.get();
        }
        set corsConfiguration(newValue) {
            this.__corsConfiguration.set(newValue);
        }
        get allowedRoles() {
            return this.__allowedRoles.get();
        }
        get allowedRolesQualifiedNames() {
            return this.__allowedRoles.qualifiedNames();
        }
        /**
         * In version 7.7.0: introduced
         */
        get resources() {
            return this.__resources.get();
        }
        /**
         * In version 7.17.0: introduced
         */
        get parameters() {
            return this.__parameters.get();
        }
        /**
         * Creates a new PublishedRestService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, PublishedRestService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__authenticationType.isAvailable) {
                this.authenticationType = RestAuthenticationType.Basic;
            }
            if (this.__authenticationTypes.isAvailable) {
                this.authenticationTypes.replace([RestAuthenticationType.Basic, RestAuthenticationType.Session]);
            }
            if (this.__version.isAvailable) {
                this.version = "1.0.0";
            }
        }
    }
    PublishedRestService.structureTypeName = "Rest$PublishedRestService";
    PublishedRestService.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.6.0",
        properties: {
            serviceName: {
                introduced: "7.12.0"
            },
            version: {
                introduced: "7.12.0"
            },
            authenticationType: {
                introduced: "7.11.0",
                deleted: "7.13.0",
                deletionMessage: null
            },
            authenticationTypes: {
                introduced: "7.13.0"
            },
            authenticationMicroflow: {
                introduced: "7.17.0"
            },
            corsConfiguration: {
                introduced: "7.18.0"
            },
            resources: {
                introduced: "7.7.0"
            },
            parameters: {
                introduced: "7.17.0"
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["7.11.0"]
        }
    }, internal.StructureType.ModelUnit);
    rest.PublishedRestService = PublishedRestService;
    /**
     * See: {@link https://docs.mendix.com/refguide/published-rest-operation relevant section in reference guide}
     *
     * In version 7.11.0: removed experimental
     * In version 7.7.0: introduced
     */
    class PublishedRestServiceOperation extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedRestServiceOperation, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(PublishedRestServiceOperation, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__path = new internal.PrimitiveProperty(PublishedRestServiceOperation, this, "path", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__deprecated = new internal.PrimitiveProperty(PublishedRestServiceOperation, this, "deprecated", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__parameters = new internal.PartListProperty(PublishedRestServiceOperation, this, "parameters", []);
            /** @internal */
            this.__httpMethod = new internal.EnumProperty(PublishedRestServiceOperation, this, "httpMethod", services_1.services.HttpMethod.Get, services_1.services.HttpMethod);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(PublishedRestServiceOperation, this, "microflow", null, "Microflows$Microflow");
            /** @internal */
            this.__exportMapping = new internal.ByNameReferenceProperty(PublishedRestServiceOperation, this, "exportMapping", null, "ExportMappings$ExportMapping");
            /** @internal */
            this.__importMapping = new internal.ByNameReferenceProperty(PublishedRestServiceOperation, this, "importMapping", null, "ImportMappings$ImportMapping");
            /** @internal */
            this.__objectHandlingBackup = new internal.EnumProperty(PublishedRestServiceOperation, this, "objectHandlingBackup", mappings_1.mappings.ObjectHandlingBackupEnum.Create, mappings_1.mappings.ObjectHandlingBackupEnum);
            /** @internal */
            this.__commit = new internal.EnumProperty(PublishedRestServiceOperation, this, "commit", microflows_1.microflows.CommitEnum.No, microflows_1.microflows.CommitEnum);
            if (arguments.length < 4) {
                throw new Error("new PublishedRestServiceOperation() cannot be invoked directly, please use 'model.rest.createPublishedRestServiceOperation()'");
            }
        }
        get containerAsPublishedRestServiceResource() {
            return super.getContainerAs(PublishedRestServiceResource);
        }
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        get path() {
            return this.__path.get();
        }
        set path(newValue) {
            this.__path.set(newValue);
        }
        /**
         * In version 7.15.0: introduced
         */
        get deprecated() {
            return this.__deprecated.get();
        }
        set deprecated(newValue) {
            this.__deprecated.set(newValue);
        }
        /**
         * In version 7.17.0: introduced
         */
        get parameters() {
            return this.__parameters.get();
        }
        get httpMethod() {
            return this.__httpMethod.get();
        }
        set httpMethod(newValue) {
            this.__httpMethod.set(newValue);
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
         * In version 7.14.0: introduced
         */
        get exportMapping() {
            return this.__exportMapping.get();
        }
        set exportMapping(newValue) {
            this.__exportMapping.set(newValue);
        }
        get exportMappingQualifiedName() {
            return this.__exportMapping.qualifiedName();
        }
        /**
         * In version 7.14.0: introduced
         */
        get importMapping() {
            return this.__importMapping.get();
        }
        set importMapping(newValue) {
            this.__importMapping.set(newValue);
        }
        get importMappingQualifiedName() {
            return this.__importMapping.qualifiedName();
        }
        /**
         * In version 7.17.0: introduced
         */
        get objectHandlingBackup() {
            return this.__objectHandlingBackup.get();
        }
        set objectHandlingBackup(newValue) {
            this.__objectHandlingBackup.set(newValue);
        }
        /**
         * In version 7.14.0: introduced
         */
        get commit() {
            return this.__commit.get();
        }
        set commit(newValue) {
            this.__commit.set(newValue);
        }
        /**
         * Creates and returns a new PublishedRestServiceOperation instance in the SDK and on the server.
         * The new PublishedRestServiceOperation will be automatically stored in the 'operations' property
         * of the parent PublishedRestServiceResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedRestServiceOperation.structureTypeName, { start: "7.7.0" });
            return internal.instancehelpers.createElement(container, PublishedRestServiceOperation, "operations", true);
        }
        /**
         * Creates and returns a new PublishedRestServiceOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedRestServiceOperation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__commit.isAvailable) {
                this.commit = microflows_1.microflows.CommitEnum.No;
            }
            if (this.__deprecated.isAvailable) {
                this.deprecated = false;
            }
            this.httpMethod = services_1.services.HttpMethod.Get;
            if (this.__objectHandlingBackup.isAvailable) {
                this.objectHandlingBackup = mappings_1.mappings.ObjectHandlingBackupEnum.Create;
            }
        }
    }
    PublishedRestServiceOperation.structureTypeName = "Rest$PublishedRestServiceOperation";
    PublishedRestServiceOperation.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.7.0",
        properties: {
            deprecated: {
                introduced: "7.15.0"
            },
            parameters: {
                introduced: "7.17.0"
            },
            exportMapping: {
                introduced: "7.14.0"
            },
            importMapping: {
                introduced: "7.14.0"
            },
            objectHandlingBackup: {
                introduced: "7.17.0"
            },
            commit: {
                introduced: "7.14.0"
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["7.11.0"]
        }
    }, internal.StructureType.Element);
    rest.PublishedRestServiceOperation = PublishedRestServiceOperation;
    /**
     * See: {@link https://docs.mendix.com/refguide/published-rest-resource relevant section in reference guide}
     *
     * In version 7.11.0: removed experimental
     * In version 7.7.0: introduced
     */
    class PublishedRestServiceResource extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(PublishedRestServiceResource, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(PublishedRestServiceResource, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__operations = new internal.PartListProperty(PublishedRestServiceResource, this, "operations", []);
            if (arguments.length < 4) {
                throw new Error("new PublishedRestServiceResource() cannot be invoked directly, please use 'model.rest.createPublishedRestServiceResource()'");
            }
        }
        get containerAsPublishedRestService() {
            return super.getContainerAs(PublishedRestService);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        get operations() {
            return this.__operations.get();
        }
        /**
         * Creates and returns a new PublishedRestServiceResource instance in the SDK and on the server.
         * The new PublishedRestServiceResource will be automatically stored in the 'resources' property
         * of the parent PublishedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedRestServiceResource.structureTypeName, { start: "7.7.0" });
            return internal.instancehelpers.createElement(container, PublishedRestServiceResource, "resources", true);
        }
        /**
         * Creates and returns a new PublishedRestServiceResource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedRestServiceResource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedRestServiceResource.structureTypeName = "Rest$PublishedRestServiceResource";
    PublishedRestServiceResource.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.7.0",
        experimental: {
            currentValue: false,
            changedIn: ["7.11.0"]
        }
    }, internal.StructureType.Element);
    rest.PublishedRestServiceResource = PublishedRestServiceResource;
    /**
     * In version 7.11.0: removed experimental
     * In version 7.8.0: introduced
     */
    class RestOperationParameter extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(RestOperationParameter, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__microflowParameter = new internal.ByNameReferenceProperty(RestOperationParameter, this, "microflowParameter", null, "Microflows$MicroflowParameter");
            /** @internal */
            this.__type = new internal.PartProperty(RestOperationParameter, this, "type", null, true);
            /** @internal */
            this.__parameterType = new internal.EnumProperty(RestOperationParameter, this, "parameterType", RestOperationParameterType.Query, RestOperationParameterType);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(RestOperationParameter, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__dataType = new internal.PrimitiveProperty(RestOperationParameter, this, "dataType", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new RestOperationParameter() cannot be invoked directly, please use 'model.rest.createRestOperationParameter()'");
            }
        }
        get containerAsPublishedRestService() {
            return super.getContainerAs(PublishedRestService);
        }
        get containerAsPublishedRestServiceOperation() {
            return super.getContainerAs(PublishedRestServiceOperation);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        /**
         * In version 7.17.0: introduced
         */
        get microflowParameter() {
            return this.__microflowParameter.get();
        }
        set microflowParameter(newValue) {
            this.__microflowParameter.set(newValue);
        }
        get microflowParameterQualifiedName() {
            return this.__microflowParameter.qualifiedName();
        }
        /**
         * In version 7.17.0: introduced
         */
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        get parameterType() {
            return this.__parameterType.get();
        }
        set parameterType(newValue) {
            this.__parameterType.set(newValue);
        }
        /**
         * In version 8.3.0: introduced
         */
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get dataType() {
            return this.__dataType.get();
        }
        set dataType(newValue) {
            this.__dataType.set(newValue);
        }
        /**
         * Creates and returns a new RestOperationParameter instance in the SDK and on the server.
         * The new RestOperationParameter will be automatically stored in the 'parameters' property
         * of the parent PublishedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInPublishedRestServiceUnderParameters(container) {
            internal.createInVersionCheck(container.model, RestOperationParameter.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, RestOperationParameter, "parameters", true);
        }
        /**
         * Creates and returns a new RestOperationParameter instance in the SDK and on the server.
         * The new RestOperationParameter will be automatically stored in the 'parameters' property
         * of the parent PublishedRestServiceOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInPublishedRestServiceOperationUnderParameters(container) {
            internal.createInVersionCheck(container.model, RestOperationParameter.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, RestOperationParameter, "parameters", true);
        }
        /**
         * Creates and returns a new RestOperationParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RestOperationParameter);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__dataType.isAvailable) {
                this.dataType = "String";
            }
            this.parameterType = RestOperationParameterType.Query;
            if (this.__type.isAvailable) {
                this.type = datatypes_1.datatypes.UnknownType.create(this.model);
            }
        }
    }
    RestOperationParameter.structureTypeName = "Rest$RestOperationParameter";
    RestOperationParameter.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.8.0",
        properties: {
            microflowParameter: {
                introduced: "7.17.0"
            },
            type: {
                introduced: "7.17.0",
                required: {
                    currentValue: true
                }
            },
            description: {
                introduced: "8.3.0"
            },
            dataType: {
                deleted: "7.9.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["7.11.0"]
        }
    }, internal.StructureType.Element);
    rest.RestOperationParameter = RestOperationParameter;
})(rest = exports.rest || (exports.rest = {}));
const datatypes_1 = require("./datatypes");
const expressions_1 = require("./expressions");
const kafka_1 = require("./kafka");
const mappings_1 = require("./mappings");
const microflows_1 = require("./microflows");
const services_1 = require("./services");
//# sourceMappingURL=rest.js.map