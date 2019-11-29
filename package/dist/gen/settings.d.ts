import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace settings {
    class CertificateType extends internal.AbstractEnum {
        static Authority: CertificateType;
        static Client: CertificateType;
        protected qualifiedTsTypeName: string;
    }
    class DatabaseType extends internal.AbstractEnum {
        static Hsqldb: DatabaseType;
        static Db2: DatabaseType;
        static SqlServer: DatabaseType;
        static MySql: DatabaseType;
        static Oracle: DatabaseType;
        static PostgreSql: DatabaseType;
        protected qualifiedTsTypeName: string;
    }
    class FirstDayOfWeekEnum extends internal.AbstractEnum {
        static Default: FirstDayOfWeekEnum;
        static Sunday: FirstDayOfWeekEnum;
        static Monday: FirstDayOfWeekEnum;
        static Tuesday: FirstDayOfWeekEnum;
        static Wednesday: FirstDayOfWeekEnum;
        static Thursday: FirstDayOfWeekEnum;
        static Friday: FirstDayOfWeekEnum;
        static Saturday: FirstDayOfWeekEnum;
        protected qualifiedTsTypeName: string;
    }
    class HashAlgorithmType extends internal.AbstractEnum {
        static BCrypt: HashAlgorithmType;
        static SSHA256: HashAlgorithmType;
        static SHA256: HashAlgorithmType;
        static MD5: HashAlgorithmType;
        protected qualifiedTsTypeName: string;
    }
    class RoundingMode extends internal.AbstractEnum {
        static HalfUp: RoundingMode;
        static HalfEven: RoundingMode;
        protected qualifiedTsTypeName: string;
    }
    class ThemeConversionStatusEnum extends internal.AbstractEnum {
        static Done: ThemeConversionStatusEnum;
        static ConvertedChangesInVariables: ThemeConversionStatusEnum;
        static ConvertedChangesInCustom: ThemeConversionStatusEnum;
        static ChangesInAtlas: ThemeConversionStatusEnum;
        static AtlasNotFound: ThemeConversionStatusEnum;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Settings`.
     */
    class Certificate extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsCertificateSettings: CertificateSettings;
        type: CertificateType;
        data: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Certificate instance in the SDK and on the server.
         * The new Certificate will be automatically stored in the 'certificates' property
         * of the parent CertificateSettings element passed as argument.
         */
        static createIn(container: CertificateSettings): Certificate;
        /**
         * Creates and returns a new Certificate instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Certificate;
    }
    abstract class ProjectSettingsPart extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProjectSettings: ProjectSettings;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class CertificateSettings extends ProjectSettingsPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProjectSettings: ProjectSettings;
        readonly certificates: internal.IList<Certificate>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CertificateSettings instance in the SDK and on the server.
         * The new CertificateSettings will be automatically stored in the 'settingsParts' property
         * of the parent ProjectSettings element passed as argument.
         */
        static createIn(container: ProjectSettings): CertificateSettings;
        /**
         * Creates and returns a new CertificateSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CertificateSettings;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/configuration relevant section in reference guide}
     */
    class Configuration extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsConfigurationSettings: ConfigurationSettings;
        name: string;
        applicationRootUrl: string;
        runtimePortNumber: number;
        adminPortNumber: number;
        runtimePortOnlyLocal: boolean;
        adminPortOnlyLocal: boolean;
        maxJavaHeapSize: number;
        /**
         * In version 7.21.0: deleted
         */
        emulateCloudSecurity: boolean;
        extraJvmParameters: string;
        databaseType: DatabaseType;
        databaseUrl: string;
        databaseName: string;
        databaseUseIntegratedSecurity: boolean;
        databaseUserName: string;
        databasePassword: string;
        readonly customSettings: internal.IList<CustomSetting>;
        readonly constantValues: internal.IList<ConstantValue>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Configuration instance in the SDK and on the server.
         * The new Configuration will be automatically stored in the 'configurations' property
         * of the parent ConfigurationSettings element passed as argument.
         */
        static createIn(container: ConfigurationSettings): Configuration;
        /**
         * Creates and returns a new Configuration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Configuration;
    }
    class ConfigurationSettings extends ProjectSettingsPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProjectSettings: ProjectSettings;
        readonly configurations: internal.IList<Configuration>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConfigurationSettings instance in the SDK and on the server.
         * The new ConfigurationSettings will be automatically stored in the 'settingsParts' property
         * of the parent ProjectSettings element passed as argument.
         */
        static createIn(container: ProjectSettings): ConfigurationSettings;
        /**
         * Creates and returns a new ConfigurationSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConfigurationSettings;
    }
    class ConstantValue extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsConfiguration: Configuration;
        constant: constants.IConstant;
        readonly constantQualifiedName: string;
        value: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConstantValue instance in the SDK and on the server.
         * The new ConstantValue will be automatically stored in the 'constantValues' property
         * of the parent Configuration element passed as argument.
         */
        static createIn(container: Configuration): ConstantValue;
        /**
         * Creates and returns a new ConstantValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConstantValue;
    }
    class CustomSetting extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsConfiguration: Configuration;
        name: string;
        value: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CustomSetting instance in the SDK and on the server.
         * The new CustomSetting will be automatically stored in the 'customSettings' property
         * of the parent Configuration element passed as argument.
         */
        static createIn(container: Configuration): CustomSetting;
        /**
         * Creates and returns a new CustomSetting instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CustomSetting;
    }
    class IntegrationProjectSettingsPart extends ProjectSettingsPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProjectSettings: ProjectSettings;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new IntegrationProjectSettingsPart instance in the SDK and on the server.
         * The new IntegrationProjectSettingsPart will be automatically stored in the 'settingsParts' property
         * of the parent ProjectSettings element passed as argument.
         */
        static createIn(container: ProjectSettings): IntegrationProjectSettingsPart;
        /**
         * Creates and returns a new IntegrationProjectSettingsPart instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): IntegrationProjectSettingsPart;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.0.0: deleted
     * In version 6.9.0: introduced
     */
    class JavaActionsSettings extends ProjectSettingsPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProjectSettings: ProjectSettings;
        generatePostfixesForParameters: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JavaActionsSettings instance in the SDK and on the server.
         * The new JavaActionsSettings will be automatically stored in the 'settingsParts' property
         * of the parent ProjectSettings element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.9.0 to 7.23.0
         */
        static createIn(container: ProjectSettings): JavaActionsSettings;
        /**
         * Creates and returns a new JavaActionsSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JavaActionsSettings;
    }
    class Language extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsLanguageSettings: LanguageSettings;
        code: string;
        checkCompleteness: boolean;
        customDateFormat: string;
        customTimeFormat: string;
        customDateTimeFormat: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Language instance in the SDK and on the server.
         * The new Language will be automatically stored in the 'languages' property
         * of the parent LanguageSettings element passed as argument.
         */
        static createIn(container: LanguageSettings): Language;
        /**
         * Creates and returns a new Language instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Language;
    }
    class LanguageSettings extends ProjectSettingsPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProjectSettings: ProjectSettings;
        defaultLanguageCode: string;
        readonly languages: internal.IList<Language>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new LanguageSettings instance in the SDK and on the server.
         * The new LanguageSettings will be automatically stored in the 'settingsParts' property
         * of the parent ProjectSettings element passed as argument.
         */
        static createIn(container: ProjectSettings): LanguageSettings;
        /**
         * Creates and returns a new LanguageSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): LanguageSettings;
    }
    class ModelerSettings extends ProjectSettingsPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProjectSettings: ProjectSettings;
        lowerCaseMicroflowVariables: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ModelerSettings instance in the SDK and on the server.
         * The new ModelerSettings will be automatically stored in the 'settingsParts' property
         * of the parent ProjectSettings element passed as argument.
         */
        static createIn(container: ProjectSettings): ModelerSettings;
        /**
         * Creates and returns a new ModelerSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ModelerSettings;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/project-settings relevant section in reference guide}
     */
    interface IProjectSettings extends projects.IProjectDocument {
        readonly model: IModel;
        readonly containerAsProject: projects.IProject;
        asLoaded(): ProjectSettings;
        load(callback: (element: ProjectSettings) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ProjectSettings>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/project-settings relevant section in reference guide}
     */
    class ProjectSettings extends projects.ProjectDocument implements IProjectSettings {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProject: projects.Project;
        readonly settingsParts: internal.IList<ProjectSettingsPart>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IProject);
        /**
         * Creates a new ProjectSettings unit in the SDK and on the server.
         * Expects one argument, the projects.IProject in which this unit is contained.
         */
        static createIn(container: projects.IProject): ProjectSettings;
    }
    class RuntimeSettings extends ProjectSettingsPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProjectSettings: ProjectSettings;
        afterStartupMicroflow: microflows.IMicroflow | null;
        readonly afterStartupMicroflowQualifiedName: string | null;
        beforeShutdownMicroflow: microflows.IMicroflow | null;
        readonly beforeShutdownMicroflowQualifiedName: string | null;
        healthCheckMicroflow: microflows.IMicroflow | null;
        readonly healthCheckMicroflowQualifiedName: string | null;
        firstDayOfWeek: FirstDayOfWeekEnum;
        defaultTimeZoneCode: string;
        scheduledEventTimeZoneCode: string;
        hashAlgorithm: HashAlgorithmType;
        roundingMode: RoundingMode;
        allowUserMultipleSessions: boolean;
        /**
         * In version 7.1.0: introduced
         */
        enforceDataStorageUniqueness: boolean;
        /**
         * In version 7.5.0: introduced
         */
        enableDataStorageOptimisticLocking: boolean;
        /**
         * In version 8.0.0: deleted
         * In version 7.10.0: introduced
         */
        enableDataStorageNewQueryHandling: boolean;
        /**
         * In version 8.0.0: deleted
         * In version 7.15.0: introduced
         */
        useDeprecatedClientForWebServiceCalls: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RuntimeSettings instance in the SDK and on the server.
         * The new RuntimeSettings will be automatically stored in the 'settingsParts' property
         * of the parent ProjectSettings element passed as argument.
         */
        static createIn(container: ProjectSettings): RuntimeSettings;
        /**
         * Creates and returns a new RuntimeSettings instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RuntimeSettings;
    }
    class WebUIProjectSettingsPart extends ProjectSettingsPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsProjectSettings: ProjectSettings;
        theme: string;
        /**
         * In version 7.9.0: introduced
         */
        themeModuleName: string;
        /**
         * In version 6.2.0: deleted
         */
        feedbackWidgetUpdated: boolean;
        enableWidgetBundling: boolean;
        /**
         * In version 6.6.0: introduced
         */
        enableDownloadResources: boolean;
        /**
         * In version 7.0.2: introduced
         */
        enableMicroflowReachabilityAnalysis: boolean;
        /**
         * In version 8.0.0: introduced
         */
        themeConversionStatus: ThemeConversionStatusEnum;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WebUIProjectSettingsPart instance in the SDK and on the server.
         * The new WebUIProjectSettingsPart will be automatically stored in the 'settingsParts' property
         * of the parent ProjectSettings element passed as argument.
         */
        static createIn(container: ProjectSettings): WebUIProjectSettingsPart;
        /**
         * Creates and returns a new WebUIProjectSettingsPart instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WebUIProjectSettingsPart;
    }
}
import { constants } from "./constants";
import { microflows } from "./microflows";
import { IModel } from "./base-model";
