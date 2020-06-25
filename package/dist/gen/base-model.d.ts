import { IAbstractModel, AbstractModel } from "../sdk/internal/AbstractModel";
import { appservices } from "./appservices";
import { codeactions } from "./codeactions";
import { constants } from "./constants";
import { datasets } from "./datasets";
import { documenttemplates } from "./documenttemplates";
import { domainmodels } from "./domainmodels";
import { enumerations } from "./enumerations";
import { exportmappings } from "./exportmappings";
import { images } from "./images";
import { importmappings } from "./importmappings";
import { javaactions } from "./javaactions";
import { javascriptactions } from "./javascriptactions";
import { jsonstructures } from "./jsonstructures";
import { kafka } from "./kafka";
import { mappings } from "./mappings";
import { menus } from "./menus";
import { messagedefinitions } from "./messagedefinitions";
import { microflows } from "./microflows";
import { nativepages } from "./nativepages";
import { navigation } from "./navigation";
import { pages } from "./pages";
import { projects } from "./projects";
import { regularexpressions } from "./regularexpressions";
import { rest } from "./rest";
import { scheduledevents } from "./scheduledevents";
import { security } from "./security";
import { settings } from "./settings";
import { texts } from "./texts";
import { webservices } from "./webservices";
import { workflows } from "./workflows";
import { xmlschemas } from "./xmlschemas";
export interface IBaseModel extends IAbstractModel {
    allBuildingBlocks(): pages.IBuildingBlock[];
    allCodeActions(): codeactions.ICodeAction[];
    allConstants(): constants.IConstant[];
    allConsumedAppServices(): appservices.IConsumedAppService[];
    allConsumedKafkaServices(): kafka.IConsumedKafkaService[];
    allConsumedODataServices(): rest.IConsumedODataService[];
    allDataSets(): datasets.IDataSet[];
    allDocuments(): projects.IDocument[];
    allDocumentTemplates(): documenttemplates.IDocumentTemplate[];
    allDomainModels(): domainmodels.IDomainModel[];
    allEnumerations(): enumerations.IEnumeration[];
    allExportMappings(): exportmappings.IExportMapping[];
    allFolders(): projects.IFolder[];
    allFolderBases(): projects.IFolderBase[];
    allFormBases(): pages.IFormBase[];
    allImageCollections(): images.IImageCollection[];
    allImportMappings(): importmappings.IImportMapping[];
    allImportedWebServices(): webservices.IImportedWebService[];
    allJavaActions(): javaactions.IJavaAction[];
    allJavaScriptActions(): javascriptactions.IJavaScriptAction[];
    allJsonStructures(): jsonstructures.IJsonStructure[];
    allLayouts(): pages.ILayout[];
    allMappingDocuments(): mappings.IMappingDocument[];
    allMenuDocuments(): menus.IMenuDocument[];
    allMessageDefinitionCollections(): messagedefinitions.IMessageDefinitionCollection[];
    allMicroflows(): microflows.IMicroflow[];
    allMicroflowBases(): microflows.IMicroflowBase[];
    allModules(): projects.IModule[];
    allModuleDocuments(): projects.IModuleDocument[];
    allModuleSecurities(): security.IModuleSecurity[];
    allMxSchemas(): xmlschemas.IMxSchema[];
    allNanoflows(): microflows.INanoflow[];
    allNativeLayouts(): nativepages.INativeLayout[];
    allNativePages(): nativepages.INativePage[];
    allNavigationDocuments(): navigation.INavigationDocument[];
    allPages(): pages.IPage[];
    allPageTemplates(): pages.IPageTemplate[];
    allProjects(): projects.IProject[];
    allProjectConversions(): projects.IProjectConversion[];
    allProjectDocuments(): projects.IProjectDocument[];
    allProjectSecurities(): security.IProjectSecurity[];
    allProjectSettings(): settings.IProjectSettings[];
    allPublishedAppServices(): webservices.IPublishedAppService[];
    allPublishedODataServices(): rest.IPublishedODataService[];
    allPublishedRestServices(): rest.IPublishedRestService[];
    allPublishedServiceBases(): webservices.IPublishedServiceBase[];
    allPublishedWebServices(): webservices.IPublishedWebService[];
    allRegularExpressions(): regularexpressions.IRegularExpression[];
    allRemoteEntitySourceDocuments(): domainmodels.IRemoteEntitySourceDocument[];
    allRules(): microflows.IRule[];
    allScheduledEvents(): scheduledevents.IScheduledEvent[];
    allServerSideMicroflows(): microflows.IServerSideMicroflow[];
    allSnippets(): pages.ISnippet[];
    allSystemTextCollections(): texts.ISystemTextCollection[];
    allTemplateFormBases(): pages.ITemplateFormBase[];
    allWorkflows(): workflows.IWorkflow[];
    allXmlSchemas(): xmlschemas.IXmlSchema[];
    findAppServiceActionByQualifiedName(qname: string): appservices.IAppServiceAction | null;
    findAppServiceActionParameterByQualifiedName(qname: string): appservices.IAppServiceActionParameter | null;
    findConstantByQualifiedName(qname: string): constants.IConstant | null;
    findDataSetByQualifiedName(qname: string): datasets.IDataSet | null;
    findDataSetParameterByQualifiedName(qname: string): datasets.IDataSetParameter | null;
    findDocumentTemplateByQualifiedName(qname: string): documenttemplates.IDocumentTemplate | null;
    findAssociationBaseByQualifiedName(qname: string): domainmodels.IAssociationBase | null;
    findAttributeByQualifiedName(qname: string): domainmodels.IAttribute | null;
    findEntityByQualifiedName(qname: string): domainmodels.IEntity | null;
    findRemoteEntitySourceDocumentByQualifiedName(qname: string): domainmodels.IRemoteEntitySourceDocument | null;
    findEnumerationByQualifiedName(qname: string): enumerations.IEnumeration | null;
    findEnumerationValueByQualifiedName(qname: string): enumerations.IEnumerationValue | null;
    findExportMappingByQualifiedName(qname: string): exportmappings.IExportMapping | null;
    findImageByQualifiedName(qname: string): images.IImage | null;
    findImportMappingByQualifiedName(qname: string): importmappings.IImportMapping | null;
    findJavaActionByQualifiedName(qname: string): javaactions.IJavaAction | null;
    findJavaActionParameterByQualifiedName(qname: string): javaactions.IJavaActionParameter | null;
    findJavaScriptActionByQualifiedName(qname: string): javascriptactions.IJavaScriptAction | null;
    findJavaScriptActionParameterByQualifiedName(qname: string): javascriptactions.IJavaScriptActionParameter | null;
    findJsonStructureByQualifiedName(qname: string): jsonstructures.IJsonStructure | null;
    findConsumedKafkaServiceByQualifiedName(qname: string): kafka.IConsumedKafkaService | null;
    findMenuDocumentByQualifiedName(qname: string): menus.IMenuDocument | null;
    findMessageDefinitionByQualifiedName(qname: string): messagedefinitions.IMessageDefinition | null;
    findMicroflowByQualifiedName(qname: string): microflows.IMicroflow | null;
    findMicroflowParameterByQualifiedName(qname: string): microflows.IMicroflowParameter | null;
    findNanoflowByQualifiedName(qname: string): microflows.INanoflow | null;
    findNanoflowParameterByQualifiedName(qname: string): microflows.INanoflowParameter | null;
    findRuleByQualifiedName(qname: string): microflows.IRule | null;
    findRuleParameterByQualifiedName(qname: string): microflows.IRuleParameter | null;
    findNativeLayoutByQualifiedName(qname: string): nativepages.INativeLayout | null;
    findNativePageByQualifiedName(qname: string): nativepages.INativePage | null;
    findNavigationProfileByQualifiedName(qname: string): navigation.INavigationProfile | null;
    findLayoutByQualifiedName(qname: string): pages.ILayout | null;
    findLayoutParameterByQualifiedName(qname: string): pages.ILayoutParameter | null;
    findPageByQualifiedName(qname: string): pages.IPage | null;
    findSnippetByQualifiedName(qname: string): pages.ISnippet | null;
    findRegularExpressionByQualifiedName(qname: string): regularexpressions.IRegularExpression | null;
    findConsumedODataServiceByQualifiedName(qname: string): rest.IConsumedODataService | null;
    findModuleRoleByQualifiedName(qname: string): security.IModuleRole | null;
    findUserRoleByQualifiedName(qname: string): security.IUserRole | null;
    findImportedWebServiceByQualifiedName(qname: string): webservices.IImportedWebService | null;
    findWorkflowByQualifiedName(qname: string): workflows.IWorkflow | null;
    findWorkflowTaskOutcomeByQualifiedName(qname: string): workflows.IWorkflowTaskOutcome | null;
    findXmlSchemaByQualifiedName(qname: string): xmlschemas.IXmlSchema | null;
}
/**
 * Class to find generated model units.
 */
export declare abstract class BaseModel extends AbstractModel implements IBaseModel {
    allBuildingBlocks(): pages.IBuildingBlock[];
    allCodeActions(): codeactions.ICodeAction[];
    allConstants(): constants.IConstant[];
    allConsumedAppServices(): appservices.IConsumedAppService[];
    allConsumedKafkaServices(): kafka.IConsumedKafkaService[];
    allConsumedODataServices(): rest.IConsumedODataService[];
    allDataSets(): datasets.IDataSet[];
    allDocuments(): projects.IDocument[];
    allDocumentTemplates(): documenttemplates.IDocumentTemplate[];
    allDomainModels(): domainmodels.IDomainModel[];
    allEnumerations(): enumerations.IEnumeration[];
    allExportMappings(): exportmappings.IExportMapping[];
    allFolders(): projects.IFolder[];
    allFolderBases(): projects.IFolderBase[];
    allFormBases(): pages.IFormBase[];
    allImageCollections(): images.IImageCollection[];
    allImportMappings(): importmappings.IImportMapping[];
    allImportedWebServices(): webservices.IImportedWebService[];
    allJavaActions(): javaactions.IJavaAction[];
    allJavaScriptActions(): javascriptactions.IJavaScriptAction[];
    allJsonStructures(): jsonstructures.IJsonStructure[];
    allLayouts(): pages.ILayout[];
    allMappingDocuments(): mappings.IMappingDocument[];
    allMenuDocuments(): menus.IMenuDocument[];
    allMessageDefinitionCollections(): messagedefinitions.IMessageDefinitionCollection[];
    allMicroflows(): microflows.IMicroflow[];
    allMicroflowBases(): microflows.IMicroflowBase[];
    allModules(): projects.IModule[];
    allModuleDocuments(): projects.IModuleDocument[];
    allModuleSecurities(): security.IModuleSecurity[];
    allMxSchemas(): xmlschemas.IMxSchema[];
    allNanoflows(): microflows.INanoflow[];
    allNativeLayouts(): nativepages.INativeLayout[];
    allNativePages(): nativepages.INativePage[];
    allNavigationDocuments(): navigation.INavigationDocument[];
    allPages(): pages.IPage[];
    allPageTemplates(): pages.IPageTemplate[];
    allProjects(): projects.IProject[];
    allProjectConversions(): projects.IProjectConversion[];
    allProjectDocuments(): projects.IProjectDocument[];
    allProjectSecurities(): security.IProjectSecurity[];
    allProjectSettings(): settings.IProjectSettings[];
    allPublishedAppServices(): webservices.IPublishedAppService[];
    allPublishedODataServices(): rest.IPublishedODataService[];
    allPublishedRestServices(): rest.IPublishedRestService[];
    allPublishedServiceBases(): webservices.IPublishedServiceBase[];
    allPublishedWebServices(): webservices.IPublishedWebService[];
    allRegularExpressions(): regularexpressions.IRegularExpression[];
    allRemoteEntitySourceDocuments(): domainmodels.IRemoteEntitySourceDocument[];
    allRules(): microflows.IRule[];
    allScheduledEvents(): scheduledevents.IScheduledEvent[];
    allServerSideMicroflows(): microflows.IServerSideMicroflow[];
    allSnippets(): pages.ISnippet[];
    allSystemTextCollections(): texts.ISystemTextCollection[];
    allTemplateFormBases(): pages.ITemplateFormBase[];
    allWorkflows(): workflows.IWorkflow[];
    allXmlSchemas(): xmlschemas.IXmlSchema[];
    findAppServiceActionByQualifiedName(qname: string): appservices.IAppServiceAction | null;
    findAppServiceActionParameterByQualifiedName(qname: string): appservices.IAppServiceActionParameter | null;
    findConstantByQualifiedName(qname: string): constants.IConstant | null;
    findDataSetByQualifiedName(qname: string): datasets.IDataSet | null;
    findDataSetParameterByQualifiedName(qname: string): datasets.IDataSetParameter | null;
    findDocumentTemplateByQualifiedName(qname: string): documenttemplates.IDocumentTemplate | null;
    findAssociationBaseByQualifiedName(qname: string): domainmodels.IAssociationBase | null;
    findAttributeByQualifiedName(qname: string): domainmodels.IAttribute | null;
    findEntityByQualifiedName(qname: string): domainmodels.IEntity | null;
    findRemoteEntitySourceDocumentByQualifiedName(qname: string): domainmodels.IRemoteEntitySourceDocument | null;
    findEnumerationByQualifiedName(qname: string): enumerations.IEnumeration | null;
    findEnumerationValueByQualifiedName(qname: string): enumerations.IEnumerationValue | null;
    findExportMappingByQualifiedName(qname: string): exportmappings.IExportMapping | null;
    findImageByQualifiedName(qname: string): images.IImage | null;
    findImportMappingByQualifiedName(qname: string): importmappings.IImportMapping | null;
    findJavaActionByQualifiedName(qname: string): javaactions.IJavaAction | null;
    findJavaActionParameterByQualifiedName(qname: string): javaactions.IJavaActionParameter | null;
    findJavaScriptActionByQualifiedName(qname: string): javascriptactions.IJavaScriptAction | null;
    findJavaScriptActionParameterByQualifiedName(qname: string): javascriptactions.IJavaScriptActionParameter | null;
    findJsonStructureByQualifiedName(qname: string): jsonstructures.IJsonStructure | null;
    findConsumedKafkaServiceByQualifiedName(qname: string): kafka.IConsumedKafkaService | null;
    findMenuDocumentByQualifiedName(qname: string): menus.IMenuDocument | null;
    findMessageDefinitionByQualifiedName(qname: string): messagedefinitions.IMessageDefinition | null;
    findMicroflowByQualifiedName(qname: string): microflows.IMicroflow | null;
    findMicroflowParameterByQualifiedName(qname: string): microflows.IMicroflowParameter | null;
    findNanoflowByQualifiedName(qname: string): microflows.INanoflow | null;
    findNanoflowParameterByQualifiedName(qname: string): microflows.INanoflowParameter | null;
    findRuleByQualifiedName(qname: string): microflows.IRule | null;
    findRuleParameterByQualifiedName(qname: string): microflows.IRuleParameter | null;
    findNativeLayoutByQualifiedName(qname: string): nativepages.INativeLayout | null;
    findNativePageByQualifiedName(qname: string): nativepages.INativePage | null;
    findNavigationProfileByQualifiedName(qname: string): navigation.INavigationProfile | null;
    findLayoutByQualifiedName(qname: string): pages.ILayout | null;
    findLayoutParameterByQualifiedName(qname: string): pages.ILayoutParameter | null;
    findPageByQualifiedName(qname: string): pages.IPage | null;
    findSnippetByQualifiedName(qname: string): pages.ISnippet | null;
    findRegularExpressionByQualifiedName(qname: string): regularexpressions.IRegularExpression | null;
    findConsumedODataServiceByQualifiedName(qname: string): rest.IConsumedODataService | null;
    findModuleRoleByQualifiedName(qname: string): security.IModuleRole | null;
    findUserRoleByQualifiedName(qname: string): security.IUserRole | null;
    findImportedWebServiceByQualifiedName(qname: string): webservices.IImportedWebService | null;
    findWorkflowByQualifiedName(qname: string): workflows.IWorkflow | null;
    findWorkflowTaskOutcomeByQualifiedName(qname: string): workflows.IWorkflowTaskOutcome | null;
    findXmlSchemaByQualifiedName(qname: string): xmlschemas.IXmlSchema | null;
}
/**
 * This interface exposes a single Mendix Model.
 * This interface contains the parts of the {@link Model} that are exposed through the SDK.
 */
export interface IModel extends IBaseModel {
    /**
     * The actual contents of the model.
     */
    root: projects.IProject;
    /**
     * Given a qualified name, returns a Module.
     */
    findModuleByQualifiedName(qualifiedName: string): projects.IModule | null;
}
