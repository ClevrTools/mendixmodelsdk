"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.settings = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var settings;
(function (settings) {
    let CertificateType = /** @class */ (() => {
        class CertificateType extends internal.AbstractEnum {
            constructor() {
                super(...arguments);
                this.qualifiedTsTypeName = "settings.CertificateType";
            }
        }
        CertificateType.Authority = new CertificateType("Authority", {});
        CertificateType.Client = new CertificateType("Client", {});
        return CertificateType;
    })();
    settings.CertificateType = CertificateType;
    let DatabaseType = /** @class */ (() => {
        class DatabaseType extends internal.AbstractEnum {
            constructor() {
                super(...arguments);
                this.qualifiedTsTypeName = "settings.DatabaseType";
            }
        }
        DatabaseType.Hsqldb = new DatabaseType("Hsqldb", {});
        DatabaseType.Db2 = new DatabaseType("Db2", {
            introduced: "6.7.0"
        });
        DatabaseType.SqlServer = new DatabaseType("SqlServer", {});
        DatabaseType.MySql = new DatabaseType("MySql", {});
        DatabaseType.Oracle = new DatabaseType("Oracle", {});
        DatabaseType.PostgreSql = new DatabaseType("PostgreSql", {});
        return DatabaseType;
    })();
    settings.DatabaseType = DatabaseType;
    let FirstDayOfWeekEnum = /** @class */ (() => {
        class FirstDayOfWeekEnum extends internal.AbstractEnum {
            constructor() {
                super(...arguments);
                this.qualifiedTsTypeName = "settings.FirstDayOfWeekEnum";
            }
        }
        FirstDayOfWeekEnum.Default = new FirstDayOfWeekEnum("Default", {});
        FirstDayOfWeekEnum.Sunday = new FirstDayOfWeekEnum("Sunday", {});
        FirstDayOfWeekEnum.Monday = new FirstDayOfWeekEnum("Monday", {});
        FirstDayOfWeekEnum.Tuesday = new FirstDayOfWeekEnum("Tuesday", {});
        FirstDayOfWeekEnum.Wednesday = new FirstDayOfWeekEnum("Wednesday", {});
        FirstDayOfWeekEnum.Thursday = new FirstDayOfWeekEnum("Thursday", {});
        FirstDayOfWeekEnum.Friday = new FirstDayOfWeekEnum("Friday", {});
        FirstDayOfWeekEnum.Saturday = new FirstDayOfWeekEnum("Saturday", {});
        return FirstDayOfWeekEnum;
    })();
    settings.FirstDayOfWeekEnum = FirstDayOfWeekEnum;
    let HashAlgorithmType = /** @class */ (() => {
        class HashAlgorithmType extends internal.AbstractEnum {
            constructor() {
                super(...arguments);
                this.qualifiedTsTypeName = "settings.HashAlgorithmType";
            }
        }
        HashAlgorithmType.BCrypt = new HashAlgorithmType("BCrypt", {});
        HashAlgorithmType.SSHA256 = new HashAlgorithmType("SSHA256", {});
        HashAlgorithmType.SHA256 = new HashAlgorithmType("SHA256", {});
        HashAlgorithmType.MD5 = new HashAlgorithmType("MD5", {});
        return HashAlgorithmType;
    })();
    settings.HashAlgorithmType = HashAlgorithmType;
    let RoundingMode = /** @class */ (() => {
        class RoundingMode extends internal.AbstractEnum {
            constructor() {
                super(...arguments);
                this.qualifiedTsTypeName = "settings.RoundingMode";
            }
        }
        RoundingMode.HalfUp = new RoundingMode("HalfUp", {});
        RoundingMode.HalfEven = new RoundingMode("HalfEven", {});
        return RoundingMode;
    })();
    settings.RoundingMode = RoundingMode;
    let ThemeConversionStatusEnum = /** @class */ (() => {
        class ThemeConversionStatusEnum extends internal.AbstractEnum {
            constructor() {
                super(...arguments);
                this.qualifiedTsTypeName = "settings.ThemeConversionStatusEnum";
            }
        }
        ThemeConversionStatusEnum.Done = new ThemeConversionStatusEnum("Done", {});
        ThemeConversionStatusEnum.ConvertedChangesInVariables = new ThemeConversionStatusEnum("ConvertedChangesInVariables", {});
        ThemeConversionStatusEnum.ConvertedChangesInCustom = new ThemeConversionStatusEnum("ConvertedChangesInCustom", {});
        ThemeConversionStatusEnum.ChangesInAtlas = new ThemeConversionStatusEnum("ChangesInAtlas", {});
        ThemeConversionStatusEnum.AtlasNotFound = new ThemeConversionStatusEnum("AtlasNotFound", {});
        return ThemeConversionStatusEnum;
    })();
    settings.ThemeConversionStatusEnum = ThemeConversionStatusEnum;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Settings`.
     */
    /**
     * In version 8.6.0: introduced
     */
    let ActionActivityDefaultColor = /** @class */ (() => {
        class ActionActivityDefaultColor extends internal.Element {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__actionActivityType = new internal.PrimitiveProperty(ActionActivityDefaultColor, this, "actionActivityType", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__backgroundColor = new internal.EnumProperty(ActionActivityDefaultColor, this, "backgroundColor", microflows_1.microflows.ActionActivityColor.LightBlue, microflows_1.microflows.ActionActivityColor);
                if (arguments.length < 4) {
                    throw new Error("new ActionActivityDefaultColor() cannot be invoked directly, please use 'model.settings.createActionActivityDefaultColor()'");
                }
            }
            get containerAsModelerSettings() {
                return super.getContainerAs(ModelerSettings);
            }
            get actionActivityType() {
                return this.__actionActivityType.get();
            }
            set actionActivityType(newValue) {
                this.__actionActivityType.set(newValue);
            }
            get backgroundColor() {
                return this.__backgroundColor.get();
            }
            set backgroundColor(newValue) {
                this.__backgroundColor.set(newValue);
            }
            /**
             * Creates and returns a new ActionActivityDefaultColor instance in the SDK and on the server.
             * The new ActionActivityDefaultColor will be automatically stored in the 'actionActivityDefaultColors' property
             * of the parent ModelerSettings element passed as argument.
             *
             * Warning! Can only be used on models with the following Mendix meta model versions:
             *  8.6.0 and higher
             */
            static createIn(container) {
                internal.createInVersionCheck(container.model, ActionActivityDefaultColor.structureTypeName, { start: "8.6.0" });
                return internal.instancehelpers.createElement(container, ActionActivityDefaultColor, "actionActivityDefaultColors", true);
            }
            /**
             * Creates and returns a new ActionActivityDefaultColor instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, ActionActivityDefaultColor);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
                this.backgroundColor = microflows_1.microflows.ActionActivityColor.LightBlue;
            }
        }
        ActionActivityDefaultColor.structureTypeName = "Settings$ActionActivityDefaultColor";
        ActionActivityDefaultColor.versionInfo = new exports.StructureVersionInfo({
            introduced: "8.6.0"
        }, internal.StructureType.Element);
        return ActionActivityDefaultColor;
    })();
    settings.ActionActivityDefaultColor = ActionActivityDefaultColor;
    let Certificate = /** @class */ (() => {
        class Certificate extends internal.Element {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__type = new internal.EnumProperty(Certificate, this, "type", CertificateType.Authority, CertificateType);
                /** @internal */
                this.__data = new internal.PrimitiveProperty(Certificate, this, "data", null, internal.PrimitiveTypeEnum.Blob);
                if (arguments.length < 4) {
                    throw new Error("new Certificate() cannot be invoked directly, please use 'model.settings.createCertificate()'");
                }
            }
            get containerAsCertificateSettings() {
                return super.getContainerAs(CertificateSettings);
            }
            get type() {
                return this.__type.get();
            }
            set type(newValue) {
                this.__type.set(newValue);
            }
            get data() {
                return this.__data.get();
            }
            set data(newValue) {
                this.__data.set(newValue);
            }
            /**
             * Creates and returns a new Certificate instance in the SDK and on the server.
             * The new Certificate will be automatically stored in the 'certificates' property
             * of the parent CertificateSettings element passed as argument.
             */
            static createIn(container) {
                return internal.instancehelpers.createElement(container, Certificate, "certificates", true);
            }
            /**
             * Creates and returns a new Certificate instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, Certificate);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
                this.type = CertificateType.Authority;
            }
        }
        Certificate.structureTypeName = "Settings$Certificate";
        Certificate.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
        return Certificate;
    })();
    settings.Certificate = Certificate;
    let ProjectSettingsPart = /** @class */ (() => {
        class ProjectSettingsPart extends internal.Element {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                if (arguments.length < 4) {
                    throw new Error("new ProjectSettingsPart() cannot be invoked directly, please use 'model.settings.createProjectSettingsPart()'");
                }
            }
            get containerAsProjectSettings() {
                return super.getContainerAs(ProjectSettings);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
            }
        }
        ProjectSettingsPart.structureTypeName = "Settings$ProjectSettingsPart";
        ProjectSettingsPart.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
        return ProjectSettingsPart;
    })();
    settings.ProjectSettingsPart = ProjectSettingsPart;
    let CertificateSettings = /** @class */ (() => {
        class CertificateSettings extends ProjectSettingsPart {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__certificates = new internal.PartListProperty(CertificateSettings, this, "certificates", []);
                if (arguments.length < 4) {
                    throw new Error("new CertificateSettings() cannot be invoked directly, please use 'model.settings.createCertificateSettings()'");
                }
            }
            get containerAsProjectSettings() {
                return super.getContainerAs(ProjectSettings);
            }
            get certificates() {
                return this.__certificates.get();
            }
            /**
             * Creates and returns a new CertificateSettings instance in the SDK and on the server.
             * The new CertificateSettings will be automatically stored in the 'settingsParts' property
             * of the parent ProjectSettings element passed as argument.
             */
            static createIn(container) {
                return internal.instancehelpers.createElement(container, CertificateSettings, "settingsParts", true);
            }
            /**
             * Creates and returns a new CertificateSettings instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, CertificateSettings);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
            }
        }
        CertificateSettings.structureTypeName = "Settings$CertificateSettings";
        CertificateSettings.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
        return CertificateSettings;
    })();
    settings.CertificateSettings = CertificateSettings;
    /**
     * See: {@link https://docs.mendix.com/refguide7/configuration relevant section in reference guide}
     */
    let Configuration = /** @class */ (() => {
        class Configuration extends internal.Element {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__name = new internal.PrimitiveProperty(Configuration, this, "name", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__applicationRootUrl = new internal.PrimitiveProperty(Configuration, this, "applicationRootUrl", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__runtimePortNumber = new internal.PrimitiveProperty(Configuration, this, "runtimePortNumber", 0, internal.PrimitiveTypeEnum.Integer);
                /** @internal */
                this.__adminPortNumber = new internal.PrimitiveProperty(Configuration, this, "adminPortNumber", 0, internal.PrimitiveTypeEnum.Integer);
                /** @internal */
                this.__runtimePortOnlyLocal = new internal.PrimitiveProperty(Configuration, this, "runtimePortOnlyLocal", false, internal.PrimitiveTypeEnum.Boolean);
                /** @internal */
                this.__adminPortOnlyLocal = new internal.PrimitiveProperty(Configuration, this, "adminPortOnlyLocal", false, internal.PrimitiveTypeEnum.Boolean);
                /** @internal */
                this.__maxJavaHeapSize = new internal.PrimitiveProperty(Configuration, this, "maxJavaHeapSize", 0, internal.PrimitiveTypeEnum.Integer);
                /** @internal */
                this.__emulateCloudSecurity = new internal.PrimitiveProperty(Configuration, this, "emulateCloudSecurity", false, internal.PrimitiveTypeEnum.Boolean);
                /** @internal */
                this.__extraJvmParameters = new internal.PrimitiveProperty(Configuration, this, "extraJvmParameters", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__databaseType = new internal.EnumProperty(Configuration, this, "databaseType", DatabaseType.Hsqldb, DatabaseType);
                /** @internal */
                this.__databaseUrl = new internal.PrimitiveProperty(Configuration, this, "databaseUrl", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__databaseName = new internal.PrimitiveProperty(Configuration, this, "databaseName", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__databaseUseIntegratedSecurity = new internal.PrimitiveProperty(Configuration, this, "databaseUseIntegratedSecurity", false, internal.PrimitiveTypeEnum.Boolean);
                /** @internal */
                this.__databaseUserName = new internal.PrimitiveProperty(Configuration, this, "databaseUserName", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__databasePassword = new internal.PrimitiveProperty(Configuration, this, "databasePassword", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__customSettings = new internal.PartListProperty(Configuration, this, "customSettings", []);
                /** @internal */
                this.__constantValues = new internal.PartListProperty(Configuration, this, "constantValues", []);
                if (arguments.length < 4) {
                    throw new Error("new Configuration() cannot be invoked directly, please use 'model.settings.createConfiguration()'");
                }
            }
            get containerAsConfigurationSettings() {
                return super.getContainerAs(ConfigurationSettings);
            }
            get name() {
                return this.__name.get();
            }
            set name(newValue) {
                this.__name.set(newValue);
            }
            get applicationRootUrl() {
                return this.__applicationRootUrl.get();
            }
            set applicationRootUrl(newValue) {
                this.__applicationRootUrl.set(newValue);
            }
            get runtimePortNumber() {
                return this.__runtimePortNumber.get();
            }
            set runtimePortNumber(newValue) {
                this.__runtimePortNumber.set(newValue);
            }
            get adminPortNumber() {
                return this.__adminPortNumber.get();
            }
            set adminPortNumber(newValue) {
                this.__adminPortNumber.set(newValue);
            }
            get runtimePortOnlyLocal() {
                return this.__runtimePortOnlyLocal.get();
            }
            set runtimePortOnlyLocal(newValue) {
                this.__runtimePortOnlyLocal.set(newValue);
            }
            get adminPortOnlyLocal() {
                return this.__adminPortOnlyLocal.get();
            }
            set adminPortOnlyLocal(newValue) {
                this.__adminPortOnlyLocal.set(newValue);
            }
            get maxJavaHeapSize() {
                return this.__maxJavaHeapSize.get();
            }
            set maxJavaHeapSize(newValue) {
                this.__maxJavaHeapSize.set(newValue);
            }
            /**
             * In version 7.21.0: deleted
             */
            get emulateCloudSecurity() {
                return this.__emulateCloudSecurity.get();
            }
            set emulateCloudSecurity(newValue) {
                this.__emulateCloudSecurity.set(newValue);
            }
            get extraJvmParameters() {
                return this.__extraJvmParameters.get();
            }
            set extraJvmParameters(newValue) {
                this.__extraJvmParameters.set(newValue);
            }
            get databaseType() {
                return this.__databaseType.get();
            }
            set databaseType(newValue) {
                this.__databaseType.set(newValue);
            }
            get databaseUrl() {
                return this.__databaseUrl.get();
            }
            set databaseUrl(newValue) {
                this.__databaseUrl.set(newValue);
            }
            get databaseName() {
                return this.__databaseName.get();
            }
            set databaseName(newValue) {
                this.__databaseName.set(newValue);
            }
            get databaseUseIntegratedSecurity() {
                return this.__databaseUseIntegratedSecurity.get();
            }
            set databaseUseIntegratedSecurity(newValue) {
                this.__databaseUseIntegratedSecurity.set(newValue);
            }
            get databaseUserName() {
                return this.__databaseUserName.get();
            }
            set databaseUserName(newValue) {
                this.__databaseUserName.set(newValue);
            }
            get databasePassword() {
                return this.__databasePassword.get();
            }
            set databasePassword(newValue) {
                this.__databasePassword.set(newValue);
            }
            get customSettings() {
                return this.__customSettings.get();
            }
            get constantValues() {
                return this.__constantValues.get();
            }
            /**
             * Creates and returns a new Configuration instance in the SDK and on the server.
             * The new Configuration will be automatically stored in the 'configurations' property
             * of the parent ConfigurationSettings element passed as argument.
             */
            static createIn(container) {
                return internal.instancehelpers.createElement(container, Configuration, "configurations", true);
            }
            /**
             * Creates and returns a new Configuration instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, Configuration);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
                this.adminPortNumber = 8090;
                this.adminPortOnlyLocal = true;
                this.applicationRootUrl = "http://localhost:8080/";
                this.databaseName = "default";
                this.databaseType = DatabaseType.Hsqldb;
                if (this.__emulateCloudSecurity.isAvailable) {
                    this.emulateCloudSecurity = true;
                }
                this.runtimePortNumber = 8080;
                this.runtimePortOnlyLocal = false;
            }
        }
        Configuration.structureTypeName = "Settings$Configuration";
        Configuration.versionInfo = new exports.StructureVersionInfo({
            properties: {
                emulateCloudSecurity: {
                    deleted: "7.21.0",
                    deletionMessage: null
                }
            }
        }, internal.StructureType.Element);
        return Configuration;
    })();
    settings.Configuration = Configuration;
    let ConfigurationSettings = /** @class */ (() => {
        class ConfigurationSettings extends ProjectSettingsPart {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__configurations = new internal.PartListProperty(ConfigurationSettings, this, "configurations", []);
                if (arguments.length < 4) {
                    throw new Error("new ConfigurationSettings() cannot be invoked directly, please use 'model.settings.createConfigurationSettings()'");
                }
            }
            get containerAsProjectSettings() {
                return super.getContainerAs(ProjectSettings);
            }
            get configurations() {
                return this.__configurations.get();
            }
            /**
             * Creates and returns a new ConfigurationSettings instance in the SDK and on the server.
             * The new ConfigurationSettings will be automatically stored in the 'settingsParts' property
             * of the parent ProjectSettings element passed as argument.
             */
            static createIn(container) {
                return internal.instancehelpers.createElement(container, ConfigurationSettings, "settingsParts", true);
            }
            /**
             * Creates and returns a new ConfigurationSettings instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, ConfigurationSettings);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
                this.configurations.replace([
                    ((configuration) => {
                        configuration.name = "Default";
                        return configuration;
                    })(Configuration.create(this.model))
                ]);
            }
        }
        ConfigurationSettings.structureTypeName = "Settings$ConfigurationSettings";
        ConfigurationSettings.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
        return ConfigurationSettings;
    })();
    settings.ConfigurationSettings = ConfigurationSettings;
    let ConstantValue = /** @class */ (() => {
        class ConstantValue extends internal.Element {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__constant = new internal.ByNameReferenceProperty(ConstantValue, this, "constant", null, "Constants$Constant");
                /** @internal */
                this.__value = new internal.PrimitiveProperty(ConstantValue, this, "value", "", internal.PrimitiveTypeEnum.String);
                if (arguments.length < 4) {
                    throw new Error("new ConstantValue() cannot be invoked directly, please use 'model.settings.createConstantValue()'");
                }
            }
            get containerAsConfiguration() {
                return super.getContainerAs(Configuration);
            }
            get constant() {
                return this.__constant.get();
            }
            set constant(newValue) {
                this.__constant.set(newValue);
            }
            get constantQualifiedName() {
                return this.__constant.qualifiedName();
            }
            get value() {
                return this.__value.get();
            }
            set value(newValue) {
                this.__value.set(newValue);
            }
            /**
             * Creates and returns a new ConstantValue instance in the SDK and on the server.
             * The new ConstantValue will be automatically stored in the 'constantValues' property
             * of the parent Configuration element passed as argument.
             */
            static createIn(container) {
                return internal.instancehelpers.createElement(container, ConstantValue, "constantValues", true);
            }
            /**
             * Creates and returns a new ConstantValue instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, ConstantValue);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
            }
        }
        ConstantValue.structureTypeName = "Settings$ConstantValue";
        ConstantValue.versionInfo = new exports.StructureVersionInfo({
            properties: {
                constant: {
                    required: {
                        currentValue: true
                    }
                }
            }
        }, internal.StructureType.Element);
        return ConstantValue;
    })();
    settings.ConstantValue = ConstantValue;
    let CustomSetting = /** @class */ (() => {
        class CustomSetting extends internal.Element {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__name = new internal.PrimitiveProperty(CustomSetting, this, "name", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__value = new internal.PrimitiveProperty(CustomSetting, this, "value", "", internal.PrimitiveTypeEnum.String);
                if (arguments.length < 4) {
                    throw new Error("new CustomSetting() cannot be invoked directly, please use 'model.settings.createCustomSetting()'");
                }
            }
            get containerAsConfiguration() {
                return super.getContainerAs(Configuration);
            }
            get name() {
                return this.__name.get();
            }
            set name(newValue) {
                this.__name.set(newValue);
            }
            get value() {
                return this.__value.get();
            }
            set value(newValue) {
                this.__value.set(newValue);
            }
            /**
             * Creates and returns a new CustomSetting instance in the SDK and on the server.
             * The new CustomSetting will be automatically stored in the 'customSettings' property
             * of the parent Configuration element passed as argument.
             */
            static createIn(container) {
                return internal.instancehelpers.createElement(container, CustomSetting, "customSettings", true);
            }
            /**
             * Creates and returns a new CustomSetting instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, CustomSetting);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
            }
        }
        CustomSetting.structureTypeName = "Settings$CustomSetting";
        CustomSetting.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
        return CustomSetting;
    })();
    settings.CustomSetting = CustomSetting;
    let IntegrationProjectSettingsPart = /** @class */ (() => {
        class IntegrationProjectSettingsPart extends ProjectSettingsPart {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                if (arguments.length < 4) {
                    throw new Error("new IntegrationProjectSettingsPart() cannot be invoked directly, please use 'model.settings.createIntegrationProjectSettingsPart()'");
                }
            }
            get containerAsProjectSettings() {
                return super.getContainerAs(ProjectSettings);
            }
            /**
             * Creates and returns a new IntegrationProjectSettingsPart instance in the SDK and on the server.
             * The new IntegrationProjectSettingsPart will be automatically stored in the 'settingsParts' property
             * of the parent ProjectSettings element passed as argument.
             */
            static createIn(container) {
                return internal.instancehelpers.createElement(container, IntegrationProjectSettingsPart, "settingsParts", true);
            }
            /**
             * Creates and returns a new IntegrationProjectSettingsPart instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, IntegrationProjectSettingsPart);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
            }
        }
        IntegrationProjectSettingsPart.structureTypeName = "Settings$IntegrationProjectSettingsPart";
        IntegrationProjectSettingsPart.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
        return IntegrationProjectSettingsPart;
    })();
    settings.IntegrationProjectSettingsPart = IntegrationProjectSettingsPart;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.0.0: deleted
     * In version 6.9.0: introduced
     */
    let JavaActionsSettings = /** @class */ (() => {
        class JavaActionsSettings extends ProjectSettingsPart {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__generatePostfixesForParameters = new internal.PrimitiveProperty(JavaActionsSettings, this, "generatePostfixesForParameters", false, internal.PrimitiveTypeEnum.Boolean);
                if (arguments.length < 4) {
                    throw new Error("new JavaActionsSettings() cannot be invoked directly, please use 'model.settings.createJavaActionsSettings()'");
                }
            }
            get containerAsProjectSettings() {
                return super.getContainerAs(ProjectSettings);
            }
            get generatePostfixesForParameters() {
                return this.__generatePostfixesForParameters.get();
            }
            set generatePostfixesForParameters(newValue) {
                this.__generatePostfixesForParameters.set(newValue);
            }
            /**
             * Creates and returns a new JavaActionsSettings instance in the SDK and on the server.
             * The new JavaActionsSettings will be automatically stored in the 'settingsParts' property
             * of the parent ProjectSettings element passed as argument.
             *
             * Warning! Can only be used on models with the following Mendix meta model versions:
             *  6.9.0 to 7.23.0
             */
            static createIn(container) {
                internal.createInVersionCheck(container.model, JavaActionsSettings.structureTypeName, { start: "6.9.0", end: "7.23.0" });
                return internal.instancehelpers.createElement(container, JavaActionsSettings, "settingsParts", true);
            }
            /**
             * Creates and returns a new JavaActionsSettings instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, JavaActionsSettings);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
            }
        }
        JavaActionsSettings.structureTypeName = "Settings$JavaActionsSettings";
        JavaActionsSettings.versionInfo = new exports.StructureVersionInfo({
            introduced: "6.9.0",
            deleted: "8.0.0",
            deletionMessage: null,
            experimental: {
                currentValue: true
            }
        }, internal.StructureType.Element);
        return JavaActionsSettings;
    })();
    settings.JavaActionsSettings = JavaActionsSettings;
    let Language = /** @class */ (() => {
        class Language extends internal.Element {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__code = new internal.PrimitiveProperty(Language, this, "code", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__checkCompleteness = new internal.PrimitiveProperty(Language, this, "checkCompleteness", false, internal.PrimitiveTypeEnum.Boolean);
                /** @internal */
                this.__customDateFormat = new internal.PrimitiveProperty(Language, this, "customDateFormat", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__customTimeFormat = new internal.PrimitiveProperty(Language, this, "customTimeFormat", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__customDateTimeFormat = new internal.PrimitiveProperty(Language, this, "customDateTimeFormat", "", internal.PrimitiveTypeEnum.String);
                if (arguments.length < 4) {
                    throw new Error("new Language() cannot be invoked directly, please use 'model.settings.createLanguage()'");
                }
            }
            get containerAsLanguageSettings() {
                return super.getContainerAs(LanguageSettings);
            }
            get code() {
                return this.__code.get();
            }
            set code(newValue) {
                this.__code.set(newValue);
            }
            get checkCompleteness() {
                return this.__checkCompleteness.get();
            }
            set checkCompleteness(newValue) {
                this.__checkCompleteness.set(newValue);
            }
            get customDateFormat() {
                return this.__customDateFormat.get();
            }
            set customDateFormat(newValue) {
                this.__customDateFormat.set(newValue);
            }
            get customTimeFormat() {
                return this.__customTimeFormat.get();
            }
            set customTimeFormat(newValue) {
                this.__customTimeFormat.set(newValue);
            }
            get customDateTimeFormat() {
                return this.__customDateTimeFormat.get();
            }
            set customDateTimeFormat(newValue) {
                this.__customDateTimeFormat.set(newValue);
            }
            /**
             * Creates and returns a new Language instance in the SDK and on the server.
             * The new Language will be automatically stored in the 'languages' property
             * of the parent LanguageSettings element passed as argument.
             */
            static createIn(container) {
                return internal.instancehelpers.createElement(container, Language, "languages", true);
            }
            /**
             * Creates and returns a new Language instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, Language);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
            }
        }
        Language.structureTypeName = "Settings$Language";
        Language.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
        return Language;
    })();
    settings.Language = Language;
    let LanguageSettings = /** @class */ (() => {
        class LanguageSettings extends ProjectSettingsPart {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__defaultLanguageCode = new internal.PrimitiveProperty(LanguageSettings, this, "defaultLanguageCode", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__languages = new internal.PartListProperty(LanguageSettings, this, "languages", []);
                if (arguments.length < 4) {
                    throw new Error("new LanguageSettings() cannot be invoked directly, please use 'model.settings.createLanguageSettings()'");
                }
            }
            get containerAsProjectSettings() {
                return super.getContainerAs(ProjectSettings);
            }
            get defaultLanguageCode() {
                return this.__defaultLanguageCode.get();
            }
            set defaultLanguageCode(newValue) {
                this.__defaultLanguageCode.set(newValue);
            }
            get languages() {
                return this.__languages.get();
            }
            /**
             * Creates and returns a new LanguageSettings instance in the SDK and on the server.
             * The new LanguageSettings will be automatically stored in the 'settingsParts' property
             * of the parent ProjectSettings element passed as argument.
             */
            static createIn(container) {
                return internal.instancehelpers.createElement(container, LanguageSettings, "settingsParts", true);
            }
            /**
             * Creates and returns a new LanguageSettings instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, LanguageSettings);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
                this.defaultLanguageCode = "en_US";
                this.languages.replace([
                    ((language) => {
                        language.code = "en_US";
                        return language;
                    })(Language.create(this.model))
                ]);
            }
        }
        LanguageSettings.structureTypeName = "Settings$LanguageSettings";
        LanguageSettings.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.Element);
        return LanguageSettings;
    })();
    settings.LanguageSettings = LanguageSettings;
    let ModelerSettings = /** @class */ (() => {
        class ModelerSettings extends ProjectSettingsPart {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__lowerCaseMicroflowVariables = new internal.PrimitiveProperty(ModelerSettings, this, "lowerCaseMicroflowVariables", false, internal.PrimitiveTypeEnum.Boolean);
                /** @internal */
                this.__actionActivityDefaultColors = new internal.PartListProperty(ModelerSettings, this, "actionActivityDefaultColors", []);
                if (arguments.length < 4) {
                    throw new Error("new ModelerSettings() cannot be invoked directly, please use 'model.settings.createModelerSettings()'");
                }
            }
            get containerAsProjectSettings() {
                return super.getContainerAs(ProjectSettings);
            }
            get lowerCaseMicroflowVariables() {
                return this.__lowerCaseMicroflowVariables.get();
            }
            set lowerCaseMicroflowVariables(newValue) {
                this.__lowerCaseMicroflowVariables.set(newValue);
            }
            /**
             * In version 8.6.0: introduced
             */
            get actionActivityDefaultColors() {
                return this.__actionActivityDefaultColors.get();
            }
            /**
             * Creates and returns a new ModelerSettings instance in the SDK and on the server.
             * The new ModelerSettings will be automatically stored in the 'settingsParts' property
             * of the parent ProjectSettings element passed as argument.
             */
            static createIn(container) {
                return internal.instancehelpers.createElement(container, ModelerSettings, "settingsParts", true);
            }
            /**
             * Creates and returns a new ModelerSettings instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, ModelerSettings);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
            }
        }
        ModelerSettings.structureTypeName = "Settings$ModelerSettings";
        ModelerSettings.versionInfo = new exports.StructureVersionInfo({
            properties: {
                actionActivityDefaultColors: {
                    introduced: "8.6.0"
                }
            }
        }, internal.StructureType.Element);
        return ModelerSettings;
    })();
    settings.ModelerSettings = ModelerSettings;
    /**
     * See: {@link https://docs.mendix.com/refguide7/project-settings relevant section in reference guide}
     */
    let ProjectSettings = /** @class */ (() => {
        class ProjectSettings extends projects_1.projects.ProjectDocument {
            constructor(model, structureTypeName, id, isPartial, container) {
                super(model, structureTypeName, id, isPartial, container);
                /** @internal */
                this.__settingsParts = new internal.PartListProperty(ProjectSettings, this, "settingsParts", []);
                this._containmentName = "projectDocuments";
            }
            get containerAsProject() {
                return super.getContainerAs(projects_1.projects.Project);
            }
            get settingsParts() {
                return this.__settingsParts.get();
            }
            /**
             * Creates a new ProjectSettings unit in the SDK and on the server.
             * Expects one argument, the projects.IProject in which this unit is contained.
             */
            static createIn(container) {
                return internal.instancehelpers.createUnit(container, ProjectSettings);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
            }
        }
        ProjectSettings.structureTypeName = "Settings$ProjectSettings";
        ProjectSettings.versionInfo = new exports.StructureVersionInfo({}, internal.StructureType.ModelUnit);
        return ProjectSettings;
    })();
    settings.ProjectSettings = ProjectSettings;
    let RuntimeSettings = /** @class */ (() => {
        class RuntimeSettings extends ProjectSettingsPart {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__afterStartupMicroflow = new internal.ByNameReferenceProperty(RuntimeSettings, this, "afterStartupMicroflow", null, "Microflows$Microflow");
                /** @internal */
                this.__beforeShutdownMicroflow = new internal.ByNameReferenceProperty(RuntimeSettings, this, "beforeShutdownMicroflow", null, "Microflows$Microflow");
                /** @internal */
                this.__healthCheckMicroflow = new internal.ByNameReferenceProperty(RuntimeSettings, this, "healthCheckMicroflow", null, "Microflows$Microflow");
                /** @internal */
                this.__firstDayOfWeek = new internal.EnumProperty(RuntimeSettings, this, "firstDayOfWeek", FirstDayOfWeekEnum.Default, FirstDayOfWeekEnum);
                /** @internal */
                this.__defaultTimeZoneCode = new internal.PrimitiveProperty(RuntimeSettings, this, "defaultTimeZoneCode", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__scheduledEventTimeZoneCode = new internal.PrimitiveProperty(RuntimeSettings, this, "scheduledEventTimeZoneCode", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__hashAlgorithm = new internal.EnumProperty(RuntimeSettings, this, "hashAlgorithm", HashAlgorithmType.BCrypt, HashAlgorithmType);
                /** @internal */
                this.__roundingMode = new internal.EnumProperty(RuntimeSettings, this, "roundingMode", RoundingMode.HalfUp, RoundingMode);
                /** @internal */
                this.__allowUserMultipleSessions = new internal.PrimitiveProperty(RuntimeSettings, this, "allowUserMultipleSessions", false, internal.PrimitiveTypeEnum.Boolean);
                /** @internal */
                this.__enforceDataStorageUniqueness = new internal.PrimitiveProperty(RuntimeSettings, this, "enforceDataStorageUniqueness", false, internal.PrimitiveTypeEnum.Boolean);
                /** @internal */
                this.__enableDataStorageOptimisticLocking = new internal.PrimitiveProperty(RuntimeSettings, this, "enableDataStorageOptimisticLocking", false, internal.PrimitiveTypeEnum.Boolean);
                /** @internal */
                this.__enableDataStorageNewQueryHandling = new internal.PrimitiveProperty(RuntimeSettings, this, "enableDataStorageNewQueryHandling", false, internal.PrimitiveTypeEnum.Boolean);
                /** @internal */
                this.__useDeprecatedClientForWebServiceCalls = new internal.PrimitiveProperty(RuntimeSettings, this, "useDeprecatedClientForWebServiceCalls", false, internal.PrimitiveTypeEnum.Boolean);
                if (arguments.length < 4) {
                    throw new Error("new RuntimeSettings() cannot be invoked directly, please use 'model.settings.createRuntimeSettings()'");
                }
            }
            get containerAsProjectSettings() {
                return super.getContainerAs(ProjectSettings);
            }
            get afterStartupMicroflow() {
                return this.__afterStartupMicroflow.get();
            }
            set afterStartupMicroflow(newValue) {
                this.__afterStartupMicroflow.set(newValue);
            }
            get afterStartupMicroflowQualifiedName() {
                return this.__afterStartupMicroflow.qualifiedName();
            }
            get beforeShutdownMicroflow() {
                return this.__beforeShutdownMicroflow.get();
            }
            set beforeShutdownMicroflow(newValue) {
                this.__beforeShutdownMicroflow.set(newValue);
            }
            get beforeShutdownMicroflowQualifiedName() {
                return this.__beforeShutdownMicroflow.qualifiedName();
            }
            get healthCheckMicroflow() {
                return this.__healthCheckMicroflow.get();
            }
            set healthCheckMicroflow(newValue) {
                this.__healthCheckMicroflow.set(newValue);
            }
            get healthCheckMicroflowQualifiedName() {
                return this.__healthCheckMicroflow.qualifiedName();
            }
            get firstDayOfWeek() {
                return this.__firstDayOfWeek.get();
            }
            set firstDayOfWeek(newValue) {
                this.__firstDayOfWeek.set(newValue);
            }
            get defaultTimeZoneCode() {
                return this.__defaultTimeZoneCode.get();
            }
            set defaultTimeZoneCode(newValue) {
                this.__defaultTimeZoneCode.set(newValue);
            }
            get scheduledEventTimeZoneCode() {
                return this.__scheduledEventTimeZoneCode.get();
            }
            set scheduledEventTimeZoneCode(newValue) {
                this.__scheduledEventTimeZoneCode.set(newValue);
            }
            get hashAlgorithm() {
                return this.__hashAlgorithm.get();
            }
            set hashAlgorithm(newValue) {
                this.__hashAlgorithm.set(newValue);
            }
            get roundingMode() {
                return this.__roundingMode.get();
            }
            set roundingMode(newValue) {
                this.__roundingMode.set(newValue);
            }
            get allowUserMultipleSessions() {
                return this.__allowUserMultipleSessions.get();
            }
            set allowUserMultipleSessions(newValue) {
                this.__allowUserMultipleSessions.set(newValue);
            }
            /**
             * In version 7.1.0: introduced
             */
            get enforceDataStorageUniqueness() {
                return this.__enforceDataStorageUniqueness.get();
            }
            set enforceDataStorageUniqueness(newValue) {
                this.__enforceDataStorageUniqueness.set(newValue);
            }
            /**
             * In version 7.5.0: introduced
             */
            get enableDataStorageOptimisticLocking() {
                return this.__enableDataStorageOptimisticLocking.get();
            }
            set enableDataStorageOptimisticLocking(newValue) {
                this.__enableDataStorageOptimisticLocking.set(newValue);
            }
            /**
             * In version 8.0.0: deleted
             * In version 7.10.0: introduced
             */
            get enableDataStorageNewQueryHandling() {
                return this.__enableDataStorageNewQueryHandling.get();
            }
            set enableDataStorageNewQueryHandling(newValue) {
                this.__enableDataStorageNewQueryHandling.set(newValue);
            }
            /**
             * In version 8.0.0: deleted
             * In version 7.15.0: introduced
             */
            get useDeprecatedClientForWebServiceCalls() {
                return this.__useDeprecatedClientForWebServiceCalls.get();
            }
            set useDeprecatedClientForWebServiceCalls(newValue) {
                this.__useDeprecatedClientForWebServiceCalls.set(newValue);
            }
            /**
             * Creates and returns a new RuntimeSettings instance in the SDK and on the server.
             * The new RuntimeSettings will be automatically stored in the 'settingsParts' property
             * of the parent ProjectSettings element passed as argument.
             */
            static createIn(container) {
                return internal.instancehelpers.createElement(container, RuntimeSettings, "settingsParts", true);
            }
            /**
             * Creates and returns a new RuntimeSettings instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, RuntimeSettings);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
                if (this.__enableDataStorageNewQueryHandling.isAvailable) {
                    this.enableDataStorageNewQueryHandling = true;
                }
                if (this.__enableDataStorageOptimisticLocking.isAvailable) {
                    this.enableDataStorageOptimisticLocking = true;
                }
                if (this.__enforceDataStorageUniqueness.isAvailable) {
                    this.enforceDataStorageUniqueness = true;
                }
                this.firstDayOfWeek = FirstDayOfWeekEnum.Default;
                this.hashAlgorithm = HashAlgorithmType.BCrypt;
                this.roundingMode = RoundingMode.HalfUp;
                this.scheduledEventTimeZoneCode = "Etc/UTC";
                if (this.__useDeprecatedClientForWebServiceCalls.isAvailable) {
                    this.useDeprecatedClientForWebServiceCalls = false;
                }
            }
        }
        RuntimeSettings.structureTypeName = "Settings$RuntimeSettings";
        RuntimeSettings.versionInfo = new exports.StructureVersionInfo({
            properties: {
                enforceDataStorageUniqueness: {
                    introduced: "7.1.0"
                },
                enableDataStorageOptimisticLocking: {
                    introduced: "7.5.0"
                },
                enableDataStorageNewQueryHandling: {
                    introduced: "7.10.0",
                    deleted: "8.0.0",
                    deletionMessage: null
                },
                useDeprecatedClientForWebServiceCalls: {
                    introduced: "7.15.0",
                    deleted: "8.0.0",
                    deletionMessage: null
                }
            }
        }, internal.StructureType.Element);
        return RuntimeSettings;
    })();
    settings.RuntimeSettings = RuntimeSettings;
    let WebUIProjectSettingsPart = /** @class */ (() => {
        class WebUIProjectSettingsPart extends ProjectSettingsPart {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__theme = new internal.PrimitiveProperty(WebUIProjectSettingsPart, this, "theme", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__themeModuleName = new internal.PrimitiveProperty(WebUIProjectSettingsPart, this, "themeModuleName", "", internal.PrimitiveTypeEnum.String);
                /** @internal */
                this.__feedbackWidgetUpdated = new internal.PrimitiveProperty(WebUIProjectSettingsPart, this, "feedbackWidgetUpdated", false, internal.PrimitiveTypeEnum.Boolean);
                /** @internal */
                this.__enableWidgetBundling = new internal.PrimitiveProperty(WebUIProjectSettingsPart, this, "enableWidgetBundling", false, internal.PrimitiveTypeEnum.Boolean);
                /** @internal */
                this.__enableDownloadResources = new internal.PrimitiveProperty(WebUIProjectSettingsPart, this, "enableDownloadResources", false, internal.PrimitiveTypeEnum.Boolean);
                /** @internal */
                this.__enableMicroflowReachabilityAnalysis = new internal.PrimitiveProperty(WebUIProjectSettingsPart, this, "enableMicroflowReachabilityAnalysis", false, internal.PrimitiveTypeEnum.Boolean);
                /** @internal */
                this.__themeConversionStatus = new internal.EnumProperty(WebUIProjectSettingsPart, this, "themeConversionStatus", ThemeConversionStatusEnum.Done, ThemeConversionStatusEnum);
                if (arguments.length < 4) {
                    throw new Error("new WebUIProjectSettingsPart() cannot be invoked directly, please use 'model.settings.createWebUIProjectSettingsPart()'");
                }
            }
            get containerAsProjectSettings() {
                return super.getContainerAs(ProjectSettings);
            }
            get theme() {
                return this.__theme.get();
            }
            set theme(newValue) {
                this.__theme.set(newValue);
            }
            /**
             * In version 7.9.0: introduced
             */
            get themeModuleName() {
                return this.__themeModuleName.get();
            }
            set themeModuleName(newValue) {
                this.__themeModuleName.set(newValue);
            }
            /**
             * In version 6.2.0: deleted
             */
            get feedbackWidgetUpdated() {
                return this.__feedbackWidgetUpdated.get();
            }
            set feedbackWidgetUpdated(newValue) {
                this.__feedbackWidgetUpdated.set(newValue);
            }
            get enableWidgetBundling() {
                return this.__enableWidgetBundling.get();
            }
            set enableWidgetBundling(newValue) {
                this.__enableWidgetBundling.set(newValue);
            }
            /**
             * In version 6.6.0: introduced
             */
            get enableDownloadResources() {
                return this.__enableDownloadResources.get();
            }
            set enableDownloadResources(newValue) {
                this.__enableDownloadResources.set(newValue);
            }
            /**
             * In version 7.0.2: introduced
             */
            get enableMicroflowReachabilityAnalysis() {
                return this.__enableMicroflowReachabilityAnalysis.get();
            }
            set enableMicroflowReachabilityAnalysis(newValue) {
                this.__enableMicroflowReachabilityAnalysis.set(newValue);
            }
            /**
             * In version 8.0.0: introduced
             */
            get themeConversionStatus() {
                return this.__themeConversionStatus.get();
            }
            set themeConversionStatus(newValue) {
                this.__themeConversionStatus.set(newValue);
            }
            /**
             * Creates and returns a new WebUIProjectSettingsPart instance in the SDK and on the server.
             * The new WebUIProjectSettingsPart will be automatically stored in the 'settingsParts' property
             * of the parent ProjectSettings element passed as argument.
             */
            static createIn(container) {
                return internal.instancehelpers.createElement(container, WebUIProjectSettingsPart, "settingsParts", true);
            }
            /**
             * Creates and returns a new WebUIProjectSettingsPart instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, WebUIProjectSettingsPart);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
                if (this.__enableMicroflowReachabilityAnalysis.isAvailable) {
                    this.enableMicroflowReachabilityAnalysis = true;
                }
                this.theme = "(Default)";
                if (this.__themeConversionStatus.isAvailable) {
                    this.themeConversionStatus = ThemeConversionStatusEnum.Done;
                }
            }
        }
        WebUIProjectSettingsPart.structureTypeName = "Settings$WebUIProjectSettingsPart";
        WebUIProjectSettingsPart.versionInfo = new exports.StructureVersionInfo({
            properties: {
                themeModuleName: {
                    introduced: "7.9.0"
                },
                feedbackWidgetUpdated: {
                    deleted: "6.2.0",
                    deletionMessage: null
                },
                enableDownloadResources: {
                    introduced: "6.6.0"
                },
                enableMicroflowReachabilityAnalysis: {
                    introduced: "7.0.2"
                },
                themeConversionStatus: {
                    introduced: "8.0.0"
                }
            }
        }, internal.StructureType.Element);
        return WebUIProjectSettingsPart;
    })();
    settings.WebUIProjectSettingsPart = WebUIProjectSettingsPart;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.8.0: introduced
     */
    let WorkflowsProjectSettingsPart = /** @class */ (() => {
        class WorkflowsProjectSettingsPart extends ProjectSettingsPart {
            constructor(model, structureTypeName, id, isPartial, unit, container) {
                super(model, structureTypeName, id, isPartial, unit, container);
                /** @internal */
                this.__enabled = new internal.PrimitiveProperty(WorkflowsProjectSettingsPart, this, "enabled", false, internal.PrimitiveTypeEnum.Boolean);
                /** @internal */
                this.__userEntity = new internal.ByNameReferenceProperty(WorkflowsProjectSettingsPart, this, "userEntity", null, "DomainModels$Entity");
                if (arguments.length < 4) {
                    throw new Error("new WorkflowsProjectSettingsPart() cannot be invoked directly, please use 'model.settings.createWorkflowsProjectSettingsPart()'");
                }
            }
            get containerAsProjectSettings() {
                return super.getContainerAs(ProjectSettings);
            }
            get enabled() {
                return this.__enabled.get();
            }
            set enabled(newValue) {
                this.__enabled.set(newValue);
            }
            /**
             * In version 8.11.0: introduced
             */
            get userEntity() {
                return this.__userEntity.get();
            }
            set userEntity(newValue) {
                this.__userEntity.set(newValue);
            }
            get userEntityQualifiedName() {
                return this.__userEntity.qualifiedName();
            }
            /**
             * Creates and returns a new WorkflowsProjectSettingsPart instance in the SDK and on the server.
             * The new WorkflowsProjectSettingsPart will be automatically stored in the 'settingsParts' property
             * of the parent ProjectSettings element passed as argument.
             *
             * Warning! Can only be used on models with the following Mendix meta model versions:
             *  8.8.0 and higher
             */
            static createIn(container) {
                internal.createInVersionCheck(container.model, WorkflowsProjectSettingsPart.structureTypeName, { start: "8.8.0" });
                return internal.instancehelpers.createElement(container, WorkflowsProjectSettingsPart, "settingsParts", true);
            }
            /**
             * Creates and returns a new WorkflowsProjectSettingsPart instance in the SDK and on the server.
             * Expects one argument: the IModel object the instance will "live on".
             * After creation, assign or add this instance to a property that accepts this kind of objects.
             */
            static create(model) {
                return internal.instancehelpers.createElement(model, WorkflowsProjectSettingsPart);
            }
            /** @internal */
            _initializeDefaultProperties() {
                super._initializeDefaultProperties();
                this.enabled = false;
            }
        }
        WorkflowsProjectSettingsPart.structureTypeName = "Settings$WorkflowsProjectSettingsPart";
        WorkflowsProjectSettingsPart.versionInfo = new exports.StructureVersionInfo({
            introduced: "8.8.0",
            properties: {
                userEntity: {
                    introduced: "8.11.0"
                }
            },
            experimental: {
                currentValue: true
            }
        }, internal.StructureType.Element);
        return WorkflowsProjectSettingsPart;
    })();
    settings.WorkflowsProjectSettingsPart = WorkflowsProjectSettingsPart;
})(settings = exports.settings || (exports.settings = {}));
const microflows_1 = require("./microflows");
//# sourceMappingURL=settings.js.map