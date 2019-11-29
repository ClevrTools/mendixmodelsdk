import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { common } from "../common";
import { projects } from "./projects";
export declare namespace microflows {
    class ActionActivityColor extends internal.AbstractEnum {
        static Default: ActionActivityColor;
        static Red: ActionActivityColor;
        static Orange: ActionActivityColor;
        static Yellow: ActionActivityColor;
        static Green: ActionActivityColor;
        static Blue: ActionActivityColor;
        static Purple: ActionActivityColor;
        static Gray: ActionActivityColor;
        protected qualifiedTsTypeName: string;
    }
    class AggregateFunctionEnum extends internal.AbstractEnum {
        static Sum: AggregateFunctionEnum;
        static Average: AggregateFunctionEnum;
        static Count: AggregateFunctionEnum;
        static Minimum: AggregateFunctionEnum;
        static Maximum: AggregateFunctionEnum;
        protected qualifiedTsTypeName: string;
    }
    class ChangeActionItemType extends internal.AbstractEnum {
        static Set: ChangeActionItemType;
        static Add: ChangeActionItemType;
        static Remove: ChangeActionItemType;
        protected qualifiedTsTypeName: string;
    }
    class ChangeListActionType extends internal.AbstractEnum {
        static Set: ChangeListActionType;
        static Add: ChangeListActionType;
        static Remove: ChangeListActionType;
        static Clear: ChangeListActionType;
        protected qualifiedTsTypeName: string;
    }
    class CommitEnum extends internal.AbstractEnum {
        static Yes: CommitEnum;
        static YesWithoutEvents: CommitEnum;
        static No: CommitEnum;
        protected qualifiedTsTypeName: string;
    }
    class ContentType extends internal.AbstractEnum {
        static Xml: ContentType;
        static Json: ContentType;
        protected qualifiedTsTypeName: string;
    }
    class ErrorHandlingType extends internal.AbstractEnum {
        static Rollback: ErrorHandlingType;
        static Custom: ErrorHandlingType;
        static CustomWithoutRollBack: ErrorHandlingType;
        static Continue: ErrorHandlingType;
        static Abort: ErrorHandlingType;
        protected qualifiedTsTypeName: string;
    }
    class ErrorResultHandlingType extends internal.AbstractEnum {
        static HttpResponse: ErrorResultHandlingType;
        static None: ErrorResultHandlingType;
        protected qualifiedTsTypeName: string;
    }
    class HttpMethod extends internal.AbstractEnum {
        static Post: HttpMethod;
        static Get: HttpMethod;
        static Put: HttpMethod;
        static Patch: HttpMethod;
        static Delete: HttpMethod;
        protected qualifiedTsTypeName: string;
    }
    class LanguageSettingType extends internal.AbstractEnum {
        static CurrentUser: LanguageSettingType;
        static ProjectDefault: LanguageSettingType;
        static Variable: LanguageSettingType;
        protected qualifiedTsTypeName: string;
    }
    class LogLevel extends internal.AbstractEnum {
        static Trace: LogLevel;
        static Debug: LogLevel;
        static Info: LogLevel;
        static Warning: LogLevel;
        static Error: LogLevel;
        static Critical: LogLevel;
        protected qualifiedTsTypeName: string;
    }
    class NullValueOption extends internal.AbstractEnum {
        static SendAsNil: NullValueOption;
        static LeaveOutElement: NullValueOption;
        protected qualifiedTsTypeName: string;
    }
    class RequestHandlingType extends internal.AbstractEnum {
        static Mapping: RequestHandlingType;
        static Simple: RequestHandlingType;
        static Advanced: RequestHandlingType;
        static Binary: RequestHandlingType;
        static Custom: RequestHandlingType;
        static FormData: RequestHandlingType;
        protected qualifiedTsTypeName: string;
    }
    class RequestProxyType extends internal.AbstractEnum {
        static DefaultProxy: RequestProxyType;
        static Override: RequestProxyType;
        static NoProxy: RequestProxyType;
        protected qualifiedTsTypeName: string;
    }
    class ResultHandlingType extends internal.AbstractEnum {
        static Mapping: ResultHandlingType;
        static String: ResultHandlingType;
        static HttpResponse: ResultHandlingType;
        static FileDocument: ResultHandlingType;
        static None: ResultHandlingType;
        protected qualifiedTsTypeName: string;
    }
    class ShowMessageType extends internal.AbstractEnum {
        static Information: ShowMessageType;
        static Warning: ShowMessageType;
        static Error: ShowMessageType;
        protected qualifiedTsTypeName: string;
    }
    class SortOrderEnum extends internal.AbstractEnum {
        static Ascending: SortOrderEnum;
        static Descending: SortOrderEnum;
        protected qualifiedTsTypeName: string;
    }
    class TargetDocumentType extends internal.AbstractEnum {
        static HTML: TargetDocumentType;
        static PDF: TargetDocumentType;
        static DOCX: TargetDocumentType;
        static DOC: TargetDocumentType;
        static RTF: TargetDocumentType;
        static ODT: TargetDocumentType;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Microflows`.
     */
    abstract class MicroflowObject extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowObjectCollection: MicroflowObjectCollection;
        relativeMiddlePoint: common.IPoint;
        size: common.ISize;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    abstract class Activity extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowObjectCollection: MicroflowObjectCollection;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/activities relevant section in reference guide}
     */
    class ActionActivity extends Activity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowObjectCollection: MicroflowObjectCollection;
        action: MicroflowAction | null;
        caption: string;
        autoGenerateCaption: boolean;
        backgroundColor: ActionActivityColor;
        documentation: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ActionActivity instance in the SDK and on the server.
         * The new ActionActivity will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): ActionActivity;
        /**
         * Creates and returns a new ActionActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ActionActivity;
    }
    abstract class RequestHandling extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsExportXmlAction: ExportXmlAction;
        readonly containerAsRestCallAction: RestCallAction;
        readonly containerAsWebServiceCallAction: WebServiceCallAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class AdvancedRequestHandling extends RequestHandling {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsRestCallAction: RestCallAction;
        readonly containerAsWebServiceCallAction: WebServiceCallAction;
        readonly parameterMappings: internal.IList<WebServiceOperationAdvancedParameterMapping>;
        /**
         * In version 6.7.0: introduced
         */
        nullValueOption: NullValueOption;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AdvancedRequestHandling instance in the SDK and on the server.
         * The new AdvancedRequestHandling will be automatically stored in the 'requestHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInRestCallActionUnderRequestHandling(container: RestCallAction): AdvancedRequestHandling;
        /**
         * Creates and returns a new AdvancedRequestHandling instance in the SDK and on the server.
         * The new AdvancedRequestHandling will be automatically stored in the 'requestBodyHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestBodyHandling(container: WebServiceCallAction): AdvancedRequestHandling;
        /**
         * Creates and returns a new AdvancedRequestHandling instance in the SDK and on the server.
         * The new AdvancedRequestHandling will be automatically stored in the 'requestHeaderHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestHeaderHandling(container: WebServiceCallAction): AdvancedRequestHandling;
        /**
         * Creates and returns a new AdvancedRequestHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AdvancedRequestHandling;
    }
    abstract class MicroflowAction extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        errorHandlingType: ErrorHandlingType;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/aggregate-list relevant section in reference guide}
     */
    class AggregateListAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        inputListVariableName: string;
        attribute: domainmodels.IAttribute | null;
        readonly attributeQualifiedName: string | null;
        aggregateFunction: AggregateFunctionEnum;
        outputVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AggregateListAction instance in the SDK and on the server.
         * The new AggregateListAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): AggregateListAction;
        /**
         * Creates and returns a new AggregateListAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AggregateListAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/annotation relevant section in reference guide}
     */
    class Annotation extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowObjectCollection: MicroflowObjectCollection;
        caption: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * The new Annotation will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): Annotation;
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Annotation;
    }
    abstract class Flow extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowBase: MicroflowBase;
        origin: MicroflowObject;
        destination: MicroflowObject;
        originConnectionIndex: number;
        destinationConnectionIndex: number;
        originBezierVector: common.ISize;
        destinationBezierVector: common.ISize;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/annotation-flow relevant section in reference guide}
     */
    class AnnotationFlow extends Flow {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowBase: MicroflowBase;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AnnotationFlow instance in the SDK and on the server.
         * The new AnnotationFlow will be automatically stored in the 'flows' property
         * of the parent MicroflowBase element passed as argument.
         */
        static createIn(container: MicroflowBase): AnnotationFlow;
        /**
         * Creates and returns a new AnnotationFlow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AnnotationFlow;
    }
    class AppServiceCallAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        appServiceAction: appservices.IAppServiceAction | null;
        readonly appServiceActionQualifiedName: string | null;
        readonly parameterMappings: internal.IList<AppServiceCallParameterMapping>;
        useVariable: boolean;
        outputVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AppServiceCallAction instance in the SDK and on the server.
         * The new AppServiceCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): AppServiceCallAction;
        /**
         * Creates and returns a new AppServiceCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AppServiceCallAction;
    }
    class AppServiceCallParameterMapping extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAppServiceCallAction: AppServiceCallAction;
        parameter: appservices.IAppServiceActionParameter | null;
        readonly parameterQualifiedName: string | null;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        argument: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        argumentModel: expressions.Expression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AppServiceCallParameterMapping instance in the SDK and on the server.
         * The new AppServiceCallParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent AppServiceCallAction element passed as argument.
         */
        static createIn(container: AppServiceCallAction): AppServiceCallParameterMapping;
        /**
         * Creates and returns a new AppServiceCallParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AppServiceCallParameterMapping;
    }
    abstract class RetrieveSource extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsRetrieveAction: RetrieveAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class AssociationRetrieveSource extends RetrieveSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsRetrieveAction: RetrieveAction;
        startVariableName: string;
        association: domainmodels.IAssociationBase | null;
        readonly associationQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AssociationRetrieveSource instance in the SDK and on the server.
         * The new AssociationRetrieveSource will be automatically stored in the 'retrieveSource' property
         * of the parent RetrieveAction element passed as argument.
         */
        static createIn(container: RetrieveAction): AssociationRetrieveSource;
        /**
         * Creates and returns a new AssociationRetrieveSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AssociationRetrieveSource;
    }
    /**
     * In version 7.21.0: introduced
     */
    abstract class CodeActionParameterValue extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsJavaActionParameterMapping: JavaActionParameterMapping;
        readonly containerAsJavaScriptActionParameterMapping: JavaScriptActionParameterMapping;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.21.0: introduced
     */
    abstract class ExpressionBasedCodeActionParameterValue extends CodeActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsJavaActionParameterMapping: JavaActionParameterMapping;
        readonly containerAsJavaScriptActionParameterMapping: JavaScriptActionParameterMapping;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.21.0: introduced
     */
    class BasicCodeActionParameterValue extends ExpressionBasedCodeActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsJavaActionParameterMapping: JavaActionParameterMapping;
        readonly containerAsJavaScriptActionParameterMapping: JavaScriptActionParameterMapping;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        argument: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        argumentModel: expressions.Expression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BasicCodeActionParameterValue instance in the SDK and on the server.
         * The new BasicCodeActionParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container: JavaActionParameterMapping): BasicCodeActionParameterValue;
        /**
         * Creates and returns a new BasicCodeActionParameterValue instance in the SDK and on the server.
         * The new BasicCodeActionParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container: JavaScriptActionParameterMapping): BasicCodeActionParameterValue;
        /**
         * Creates and returns a new BasicCodeActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BasicCodeActionParameterValue;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.7.0: introduced
     */
    abstract class JavaActionParameterValue extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsJavaActionParameterMapping: JavaActionParameterMapping;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.7.0: introduced
     */
    class BasicJavaActionParameterValue extends JavaActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsJavaActionParameterMapping: JavaActionParameterMapping;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        argument: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        argumentModel: expressions.Expression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BasicJavaActionParameterValue instance in the SDK and on the server.
         * The new BasicJavaActionParameterValue will be automatically stored in the 'value' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.7.0 to 7.20.0
         */
        static createIn(container: JavaActionParameterMapping): BasicJavaActionParameterValue;
        /**
         * Creates and returns a new BasicJavaActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BasicJavaActionParameterValue;
    }
    abstract class ListOperation extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsListOperationAction: ListOperationAction;
        listVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    abstract class BinaryListOperation extends ListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsListOperationAction: ListOperationAction;
        secondListOrObjectVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 6.9.0: introduced
     */
    class BinaryRequestHandling extends RequestHandling {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsRestCallAction: RestCallAction;
        readonly containerAsWebServiceCallAction: WebServiceCallAction;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        expression: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        expressionModel: expressions.Expression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BinaryRequestHandling instance in the SDK and on the server.
         * The new BinaryRequestHandling will be automatically stored in the 'requestHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.9.0 and higher
         */
        static createInRestCallActionUnderRequestHandling(container: RestCallAction): BinaryRequestHandling;
        /**
         * Creates and returns a new BinaryRequestHandling instance in the SDK and on the server.
         * The new BinaryRequestHandling will be automatically stored in the 'requestBodyHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.9.0 and higher
         */
        static createInWebServiceCallActionUnderRequestBodyHandling(container: WebServiceCallAction): BinaryRequestHandling;
        /**
         * Creates and returns a new BinaryRequestHandling instance in the SDK and on the server.
         * The new BinaryRequestHandling will be automatically stored in the 'requestHeaderHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.9.0 and higher
         */
        static createInWebServiceCallActionUnderRequestHeaderHandling(container: WebServiceCallAction): BinaryRequestHandling;
        /**
         * Creates and returns a new BinaryRequestHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BinaryRequestHandling;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/break-event relevant section in reference guide}
     */
    class BreakEvent extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowObjectCollection: MicroflowObjectCollection;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BreakEvent instance in the SDK and on the server.
         * The new BreakEvent will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): BreakEvent;
        /**
         * Creates and returns a new BreakEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BreakEvent;
    }
    abstract class CaseValue extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsSequenceFlow: SequenceFlow;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/cast-object relevant section in reference guide}
     */
    class CastAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        outputVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CastAction instance in the SDK and on the server.
         * The new CastAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): CastAction;
        /**
         * Creates and returns a new CastAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CastAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/change-list relevant section in reference guide}
     */
    class ChangeListAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        changeVariableName: string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        value: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        valueModel: expressions.Expression;
        type: ChangeListActionType;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ChangeListAction instance in the SDK and on the server.
         * The new ChangeListAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ChangeListAction;
        /**
         * Creates and returns a new ChangeListAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ChangeListAction;
    }
    abstract class ChangeMembersAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        readonly items: internal.IList<MemberChange>;
        refreshInClient: boolean;
        commit: CommitEnum;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/change-object relevant section in reference guide}
     */
    class ChangeObjectAction extends ChangeMembersAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        changeVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ChangeObjectAction instance in the SDK and on the server.
         * The new ChangeObjectAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ChangeObjectAction;
        /**
         * Creates and returns a new ChangeObjectAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ChangeObjectAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/change-variable relevant section in reference guide}
     */
    class ChangeVariableAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        changeVariableName: string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        value: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        valueModel: expressions.Expression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ChangeVariableAction instance in the SDK and on the server.
         * The new ChangeVariableAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ChangeVariableAction;
        /**
         * Creates and returns a new ChangeVariableAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ChangeVariableAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/close-form relevant section in reference guide}
     */
    class CloseFormAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CloseFormAction instance in the SDK and on the server.
         * The new CloseFormAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): CloseFormAction;
        /**
         * Creates and returns a new CloseFormAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CloseFormAction;
    }
    abstract class CodeActionParameterMapping extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsJavaActionCallAction: JavaActionCallAction;
        readonly containerAsJavaScriptActionCallAction: JavaScriptActionCallAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/committing-objects relevant section in reference guide}
     */
    class CommitAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        withEvents: boolean;
        commitVariableName: string;
        refreshInClient: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CommitAction instance in the SDK and on the server.
         * The new CommitAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): CommitAction;
        /**
         * Creates and returns a new CommitAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CommitAction;
    }
    abstract class Range extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDatabaseRetrieveSource: DatabaseRetrieveSource;
        readonly containerAsImportMappingCall: ImportMappingCall;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class ConstantRange extends Range {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDatabaseRetrieveSource: DatabaseRetrieveSource;
        readonly containerAsImportMappingCall: ImportMappingCall;
        singleObject: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConstantRange instance in the SDK and on the server.
         * The new ConstantRange will be automatically stored in the 'range' property
         * of the parent DatabaseRetrieveSource element passed as argument.
         */
        static createInDatabaseRetrieveSourceUnderRange(container: DatabaseRetrieveSource): ConstantRange;
        /**
         * Creates and returns a new ConstantRange instance in the SDK and on the server.
         * The new ConstantRange will be automatically stored in the 'range' property
         * of the parent ImportMappingCall element passed as argument.
         */
        static createInImportMappingCallUnderRange(container: ImportMappingCall): ConstantRange;
        /**
         * Creates and returns a new ConstantRange instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConstantRange;
    }
    class Contains extends BinaryListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsListOperationAction: ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Contains instance in the SDK and on the server.
         * The new Contains will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): Contains;
        /**
         * Creates and returns a new Contains instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Contains;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/continue-event relevant section in reference guide}
     */
    class ContinueEvent extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowObjectCollection: MicroflowObjectCollection;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ContinueEvent instance in the SDK and on the server.
         * The new ContinueEvent will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): ContinueEvent;
        /**
         * Creates and returns a new ContinueEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ContinueEvent;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/create-list relevant section in reference guide}
     */
    class CreateListAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        entity: domainmodels.IEntity | null;
        readonly entityQualifiedName: string | null;
        outputVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CreateListAction instance in the SDK and on the server.
         * The new CreateListAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): CreateListAction;
        /**
         * Creates and returns a new CreateListAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CreateListAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/create-object relevant section in reference guide}
     */
    class CreateObjectAction extends ChangeMembersAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        entity: domainmodels.IEntity | null;
        readonly entityQualifiedName: string | null;
        outputVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CreateObjectAction instance in the SDK and on the server.
         * The new CreateObjectAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): CreateObjectAction;
        /**
         * Creates and returns a new CreateObjectAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CreateObjectAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/create-variable relevant section in reference guide}
     */
    class CreateVariableAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        variableName: string;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        variableDataType: string;
        /**
         * In version 7.9.0: introduced
         */
        variableType: datatypes.DataType;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        initialValue: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        initialValueModel: expressions.Expression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CreateVariableAction instance in the SDK and on the server.
         * The new CreateVariableAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): CreateVariableAction;
        /**
         * Creates and returns a new CreateVariableAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CreateVariableAction;
    }
    class CustomRange extends Range {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDatabaseRetrieveSource: DatabaseRetrieveSource;
        readonly containerAsImportMappingCall: ImportMappingCall;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        limitExpression: string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        offsetExpression: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        limitExpressionModel: expressions.Expression;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        offsetExpressionModel: expressions.Expression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CustomRange instance in the SDK and on the server.
         * The new CustomRange will be automatically stored in the 'range' property
         * of the parent DatabaseRetrieveSource element passed as argument.
         */
        static createInDatabaseRetrieveSourceUnderRange(container: DatabaseRetrieveSource): CustomRange;
        /**
         * Creates and returns a new CustomRange instance in the SDK and on the server.
         * The new CustomRange will be automatically stored in the 'range' property
         * of the parent ImportMappingCall element passed as argument.
         */
        static createInImportMappingCallUnderRange(container: ImportMappingCall): CustomRange;
        /**
         * Creates and returns a new CustomRange instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CustomRange;
    }
    class CustomRequestHandling extends RequestHandling {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsRestCallAction: RestCallAction;
        readonly containerAsWebServiceCallAction: WebServiceCallAction;
        template: StringTemplate;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CustomRequestHandling instance in the SDK and on the server.
         * The new CustomRequestHandling will be automatically stored in the 'requestHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInRestCallActionUnderRequestHandling(container: RestCallAction): CustomRequestHandling;
        /**
         * Creates and returns a new CustomRequestHandling instance in the SDK and on the server.
         * The new CustomRequestHandling will be automatically stored in the 'requestBodyHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestBodyHandling(container: WebServiceCallAction): CustomRequestHandling;
        /**
         * Creates and returns a new CustomRequestHandling instance in the SDK and on the server.
         * The new CustomRequestHandling will be automatically stored in the 'requestHeaderHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestHeaderHandling(container: WebServiceCallAction): CustomRequestHandling;
        /**
         * Creates and returns a new CustomRequestHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CustomRequestHandling;
    }
    class DatabaseRetrieveSource extends RetrieveSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsRetrieveAction: RetrieveAction;
        entity: domainmodels.IEntity | null;
        readonly entityQualifiedName: string | null;
        range: Range;
        /**
         * The value of this property is conceptually of type xPathConstraints.XPathConstraint.
         */
        xPathConstraint: string;
        sortItemList: SortItemList;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DatabaseRetrieveSource instance in the SDK and on the server.
         * The new DatabaseRetrieveSource will be automatically stored in the 'retrieveSource' property
         * of the parent RetrieveAction element passed as argument.
         */
        static createIn(container: RetrieveAction): DatabaseRetrieveSource;
        /**
         * Creates and returns a new DatabaseRetrieveSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DatabaseRetrieveSource;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/deleting-objects relevant section in reference guide}
     */
    class DeleteAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        deleteVariableName: string;
        refreshInClient: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DeleteAction instance in the SDK and on the server.
         * The new DeleteAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): DeleteAction;
        /**
         * Creates and returns a new DeleteAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DeleteAction;
    }
    class DocumentTemplateParameterMapping extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsGenerateDocumentAction: GenerateDocumentAction;
        widgetName: string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        argument: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        argumentModel: expressions.Expression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DocumentTemplateParameterMapping instance in the SDK and on the server.
         * The new DocumentTemplateParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent GenerateDocumentAction element passed as argument.
         */
        static createIn(container: GenerateDocumentAction): DocumentTemplateParameterMapping;
        /**
         * Creates and returns a new DocumentTemplateParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DocumentTemplateParameterMapping;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/download-file relevant section in reference guide}
     */
    class DownloadFileAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        fileDocumentVariableName: string;
        showFileInBrowser: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DownloadFileAction instance in the SDK and on the server.
         * The new DownloadFileAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): DownloadFileAction;
        /**
         * Creates and returns a new DownloadFileAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DownloadFileAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/end-event relevant section in reference guide}
     */
    class EndEvent extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowObjectCollection: MicroflowObjectCollection;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        returnValue: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        returnValueModel: expressions.Expression;
        documentation: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EndEvent instance in the SDK and on the server.
         * The new EndEvent will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): EndEvent;
        /**
         * Creates and returns a new EndEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EndEvent;
    }
    /**
     * In version 7.21.0: introduced
     */
    class EntityTypeCodeActionParameterValue extends ExpressionBasedCodeActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsJavaActionParameterMapping: JavaActionParameterMapping;
        readonly containerAsJavaScriptActionParameterMapping: JavaScriptActionParameterMapping;
        entity: domainmodels.IEntity | null;
        readonly entityQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EntityTypeCodeActionParameterValue instance in the SDK and on the server.
         * The new EntityTypeCodeActionParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container: JavaActionParameterMapping): EntityTypeCodeActionParameterValue;
        /**
         * Creates and returns a new EntityTypeCodeActionParameterValue instance in the SDK and on the server.
         * The new EntityTypeCodeActionParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container: JavaScriptActionParameterMapping): EntityTypeCodeActionParameterValue;
        /**
         * Creates and returns a new EntityTypeCodeActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EntityTypeCodeActionParameterValue;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.8.0: introduced
     */
    class EntityTypeJavaActionParameterValue extends JavaActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsJavaActionParameterMapping: JavaActionParameterMapping;
        entity: domainmodels.IEntity | null;
        readonly entityQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EntityTypeJavaActionParameterValue instance in the SDK and on the server.
         * The new EntityTypeJavaActionParameterValue will be automatically stored in the 'value' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.8.0 to 7.20.0
         */
        static createIn(container: JavaActionParameterMapping): EntityTypeJavaActionParameterValue;
        /**
         * Creates and returns a new EntityTypeJavaActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EntityTypeJavaActionParameterValue;
    }
    class EnumerationCase extends CaseValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsSequenceFlow: SequenceFlow;
        value: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EnumerationCase instance in the SDK and on the server.
         * The new EnumerationCase will be automatically stored in the 'caseValue' property
         * of the parent SequenceFlow element passed as argument.
         */
        static createIn(container: SequenceFlow): EnumerationCase;
        /**
         * Creates and returns a new EnumerationCase instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EnumerationCase;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/error-event relevant section in reference guide}
     */
    class ErrorEvent extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowObjectCollection: MicroflowObjectCollection;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ErrorEvent instance in the SDK and on the server.
         * The new ErrorEvent will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): ErrorEvent;
        /**
         * Creates and returns a new ErrorEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ErrorEvent;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/merge relevant section in reference guide}
     */
    class ExclusiveMerge extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowObjectCollection: MicroflowObjectCollection;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExclusiveMerge instance in the SDK and on the server.
         * The new ExclusiveMerge will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): ExclusiveMerge;
        /**
         * Creates and returns a new ExclusiveMerge instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExclusiveMerge;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/exclusive-split relevant section in reference guide}
     */
    class ExclusiveSplit extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowObjectCollection: MicroflowObjectCollection;
        splitCondition: SplitCondition;
        caption: string;
        errorHandlingType: ErrorHandlingType;
        documentation: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExclusiveSplit instance in the SDK and on the server.
         * The new ExclusiveSplit will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): ExclusiveSplit;
        /**
         * Creates and returns a new ExclusiveSplit instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExclusiveSplit;
    }
    /**
     * In version 7.21.0: deleted
     * In version 7.2.0: introduced
     */
    class ExportMappingJavaActionParameterValue extends JavaActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsJavaActionParameterMapping: JavaActionParameterMapping;
        exportMapping: exportmappings.IExportMapping | null;
        readonly exportMappingQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExportMappingJavaActionParameterValue instance in the SDK and on the server.
         * The new ExportMappingJavaActionParameterValue will be automatically stored in the 'value' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 to 7.20.0
         */
        static createIn(container: JavaActionParameterMapping): ExportMappingJavaActionParameterValue;
        /**
         * Creates and returns a new ExportMappingJavaActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExportMappingJavaActionParameterValue;
    }
    /**
     * In version 7.21.0: introduced
     */
    class ExportMappingParameterValue extends ExpressionBasedCodeActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsJavaActionParameterMapping: JavaActionParameterMapping;
        readonly containerAsJavaScriptActionParameterMapping: JavaScriptActionParameterMapping;
        exportMapping: exportmappings.IExportMapping | null;
        readonly exportMappingQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExportMappingParameterValue instance in the SDK and on the server.
         * The new ExportMappingParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container: JavaActionParameterMapping): ExportMappingParameterValue;
        /**
         * Creates and returns a new ExportMappingParameterValue instance in the SDK and on the server.
         * The new ExportMappingParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container: JavaScriptActionParameterMapping): ExportMappingParameterValue;
        /**
         * Creates and returns a new ExportMappingParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExportMappingParameterValue;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/export-mapping-action relevant section in reference guide}
     */
    class ExportXmlAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        /**
         * In version 7.6.0: deleted
         */
        mapping: exportmappings.IExportMapping | null;
        readonly mappingQualifiedName: string | null;
        /**
         * In version 7.6.0: deleted
         */
        mappingArgumentVariableName: string;
        /**
         * In version 7.6.0: introduced
         */
        resultHandling: MappingRequestHandling;
        outputMethod: OutputMethod;
        isValidationRequired: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExportXmlAction instance in the SDK and on the server.
         * The new ExportXmlAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ExportXmlAction;
        /**
         * Creates and returns a new ExportXmlAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExportXmlAction;
    }
    abstract class SplitCondition extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsExclusiveSplit: ExclusiveSplit;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class ExpressionSplitCondition extends SplitCondition {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsExclusiveSplit: ExclusiveSplit;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        expression: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        expressionModel: expressions.Expression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExpressionSplitCondition instance in the SDK and on the server.
         * The new ExpressionSplitCondition will be automatically stored in the 'splitCondition' property
         * of the parent ExclusiveSplit element passed as argument.
         */
        static createIn(container: ExclusiveSplit): ExpressionSplitCondition;
        /**
         * Creates and returns a new ExpressionSplitCondition instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExpressionSplitCondition;
    }
    abstract class OutputMethod extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsExportXmlAction: ExportXmlAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class FileDocumentExport extends OutputMethod {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsExportXmlAction: ExportXmlAction;
        targetDocumentVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new FileDocumentExport instance in the SDK and on the server.
         * The new FileDocumentExport will be automatically stored in the 'outputMethod' property
         * of the parent ExportXmlAction element passed as argument.
         */
        static createIn(container: ExportXmlAction): FileDocumentExport;
        /**
         * Creates and returns a new FileDocumentExport instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): FileDocumentExport;
    }
    abstract class InspectAttribute extends ListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsListOperationAction: ListOperationAction;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        expression: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        expressionModel: expressions.Expression;
        attribute: domainmodels.IAttribute | null;
        readonly attributeQualifiedName: string | null;
        /**
         * In version 7.0.0: introduced
         */
        association: domainmodels.IAssociationBase | null;
        readonly associationQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class Filter extends InspectAttribute {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsListOperationAction: ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Filter instance in the SDK and on the server.
         * The new Filter will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): Filter;
        /**
         * Creates and returns a new Filter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Filter;
    }
    class Find extends InspectAttribute {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsListOperationAction: ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Find instance in the SDK and on the server.
         * The new Find will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): Find;
        /**
         * Creates and returns a new Find instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Find;
    }
    /**
     * In version 8.0.0: introduced
     */
    class FormDataPart extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFormDataRequestHandling: FormDataRequestHandling;
        key: string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        value: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        valueModel: expressions.Expression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new FormDataPart instance in the SDK and on the server.
         * The new FormDataPart will be automatically stored in the 'parts' property
         * of the parent FormDataRequestHandling element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createIn(container: FormDataRequestHandling): FormDataPart;
        /**
         * Creates and returns a new FormDataPart instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): FormDataPart;
    }
    /**
     * In version 8.0.0: introduced
     */
    class FormDataRequestHandling extends RequestHandling {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsRestCallAction: RestCallAction;
        readonly containerAsWebServiceCallAction: WebServiceCallAction;
        readonly parts: internal.IList<FormDataPart>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new FormDataRequestHandling instance in the SDK and on the server.
         * The new FormDataRequestHandling will be automatically stored in the 'requestHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInRestCallActionUnderRequestHandling(container: RestCallAction): FormDataRequestHandling;
        /**
         * Creates and returns a new FormDataRequestHandling instance in the SDK and on the server.
         * The new FormDataRequestHandling will be automatically stored in the 'requestBodyHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebServiceCallActionUnderRequestBodyHandling(container: WebServiceCallAction): FormDataRequestHandling;
        /**
         * Creates and returns a new FormDataRequestHandling instance in the SDK and on the server.
         * The new FormDataRequestHandling will be automatically stored in the 'requestHeaderHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInWebServiceCallActionUnderRequestHeaderHandling(container: WebServiceCallAction): FormDataRequestHandling;
        /**
         * Creates and returns a new FormDataRequestHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): FormDataRequestHandling;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/generate-document relevant section in reference guide}
     */
    class GenerateDocumentAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        fileVariableName: string;
        languageVariableName: string;
        documentType: TargetDocumentType;
        languageSetting: LanguageSettingType;
        documentTemplate: documenttemplates.IDocumentTemplate | null;
        readonly documentTemplateQualifiedName: string | null;
        readonly parameterMappings: internal.IList<DocumentTemplateParameterMapping>;
        overrideTopMargin: boolean;
        overrideBottomMargin: boolean;
        overrideLeftMargin: boolean;
        overrideRightMargin: boolean;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        marginLeftInInch: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        marginLeftInInchModel: expressions.Expression;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        marginRightInInch: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        marginRightInInchModel: expressions.Expression;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        marginTopInInch: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        marginTopInInchModel: expressions.Expression;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        marginBottomInInch: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        marginBottomInInchModel: expressions.Expression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new GenerateDocumentAction instance in the SDK and on the server.
         * The new GenerateDocumentAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): GenerateDocumentAction;
        /**
         * Creates and returns a new GenerateDocumentAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): GenerateDocumentAction;
    }
    class Head extends ListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsListOperationAction: ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Head instance in the SDK and on the server.
         * The new Head will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): Head;
        /**
         * Creates and returns a new Head instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Head;
    }
    class HttpConfiguration extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsRestCallAction: RestCallAction;
        readonly containerAsWebServiceCallAction: WebServiceCallAction;
        readonly containerAsConsumedODataService: rest.ConsumedODataService;
        overrideLocation: boolean;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        customLocation: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        customLocationModel: expressions.Expression;
        /**
         * In version 6.6.0: introduced
         */
        customLocationTemplate: StringTemplate | null;
        useAuthentication: boolean;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        httpAuthenticationUserName: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        username: expressions.Expression;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        authenticationPassword: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        password: expressions.Expression;
        readonly headerEntries: internal.IList<HttpHeaderEntry>;
        /**
         * In version 7.7.0: deleted
         * In version 6.6.0: introduced
         */
        httpMethod: HttpMethod;
        /**
         * In version 7.7.0: introduced
         */
        newHttpMethod: services.HttpMethod;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new HttpConfiguration instance in the SDK and on the server.
         * The new HttpConfiguration will be automatically stored in the 'httpConfiguration' property
         * of the parent WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 6.5.0
         */
        static createIn(container: WebServiceCallAction): HttpConfiguration;
        /**
         * Creates and returns a new HttpConfiguration instance in the SDK and on the server.
         * The new HttpConfiguration will be automatically stored in the 'httpConfiguration' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInRestCallActionUnderHttpConfiguration(container: RestCallAction): HttpConfiguration;
        /**
         * Creates and returns a new HttpConfiguration instance in the SDK and on the server.
         * The new HttpConfiguration will be automatically stored in the 'httpConfiguration' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderHttpConfiguration(container: WebServiceCallAction): HttpConfiguration;
        /**
         * Creates and returns a new HttpConfiguration instance in the SDK and on the server.
         * The new HttpConfiguration will be automatically stored in the 'httpConfiguration' property
         * of the parent rest.ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createInConsumedODataServiceUnderHttpConfiguration(container: rest.ConsumedODataService): HttpConfiguration;
        /**
         * Creates and returns a new HttpConfiguration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): HttpConfiguration;
    }
    class HttpHeaderEntry extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsHttpConfiguration: HttpConfiguration;
        key: string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        value: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        valueModel: expressions.Expression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new HttpHeaderEntry instance in the SDK and on the server.
         * The new HttpHeaderEntry will be automatically stored in the 'headerEntries' property
         * of the parent HttpConfiguration element passed as argument.
         */
        static createIn(container: HttpConfiguration): HttpHeaderEntry;
        /**
         * Creates and returns a new HttpHeaderEntry instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): HttpHeaderEntry;
    }
    class ImportMappingCall extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsResultHandling: ResultHandling;
        mapping: importmappings.IImportMapping | null;
        readonly mappingQualifiedName: string | null;
        /**
         * In version 7.17.0: introduced
         */
        objectHandlingBackup: mappings.ObjectHandlingBackupEnum;
        /**
         * In version 7.18.0: introduced
         */
        commit: CommitEnum;
        mappingArgumentVariableName: string;
        range: Range;
        /**
         * In version 7.6.0: introduced
         */
        contentType: ContentType;
        /**
         * In version 7.8.0: introduced
         */
        forceSingleOccurrence: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ImportMappingCall instance in the SDK and on the server.
         * The new ImportMappingCall will be automatically stored in the 'importMappingCall' property
         * of the parent ResultHandling element passed as argument.
         */
        static createIn(container: ResultHandling): ImportMappingCall;
        /**
         * Creates and returns a new ImportMappingCall instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ImportMappingCall;
    }
    /**
     * In version 7.21.0: deleted
     * In version 7.2.0: introduced
     */
    class ImportMappingJavaActionParameterValue extends JavaActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsJavaActionParameterMapping: JavaActionParameterMapping;
        importMapping: importmappings.IImportMapping | null;
        readonly importMappingQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ImportMappingJavaActionParameterValue instance in the SDK and on the server.
         * The new ImportMappingJavaActionParameterValue will be automatically stored in the 'value' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.2.0 to 7.20.0
         */
        static createIn(container: JavaActionParameterMapping): ImportMappingJavaActionParameterValue;
        /**
         * Creates and returns a new ImportMappingJavaActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ImportMappingJavaActionParameterValue;
    }
    /**
     * In version 7.21.0: introduced
     */
    class ImportMappingParameterValue extends ExpressionBasedCodeActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsJavaActionParameterMapping: JavaActionParameterMapping;
        readonly containerAsJavaScriptActionParameterMapping: JavaScriptActionParameterMapping;
        importMapping: importmappings.IImportMapping | null;
        readonly importMappingQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ImportMappingParameterValue instance in the SDK and on the server.
         * The new ImportMappingParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container: JavaActionParameterMapping): ImportMappingParameterValue;
        /**
         * Creates and returns a new ImportMappingParameterValue instance in the SDK and on the server.
         * The new ImportMappingParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container: JavaScriptActionParameterMapping): ImportMappingParameterValue;
        /**
         * Creates and returns a new ImportMappingParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ImportMappingParameterValue;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/import-mapping-action relevant section in reference guide}
     */
    class ImportXmlAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        xmlDocumentVariableName: string;
        resultHandling: ResultHandling;
        isValidationRequired: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ImportXmlAction instance in the SDK and on the server.
         * The new ImportXmlAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ImportXmlAction;
        /**
         * Creates and returns a new ImportXmlAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ImportXmlAction;
    }
    class InheritanceCase extends CaseValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsSequenceFlow: SequenceFlow;
        value: domainmodels.IEntity | null;
        readonly valueQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new InheritanceCase instance in the SDK and on the server.
         * The new InheritanceCase will be automatically stored in the 'caseValue' property
         * of the parent SequenceFlow element passed as argument.
         */
        static createIn(container: SequenceFlow): InheritanceCase;
        /**
         * Creates and returns a new InheritanceCase instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): InheritanceCase;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/inheritance-split relevant section in reference guide}
     */
    class InheritanceSplit extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowObjectCollection: MicroflowObjectCollection;
        splitVariableName: string;
        caption: string;
        documentation: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new InheritanceSplit instance in the SDK and on the server.
         * The new InheritanceSplit will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): InheritanceSplit;
        /**
         * Creates and returns a new InheritanceSplit instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): InheritanceSplit;
    }
    class Intersect extends BinaryListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsListOperationAction: ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Intersect instance in the SDK and on the server.
         * The new Intersect will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): Intersect;
        /**
         * Creates and returns a new Intersect instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Intersect;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/java-action-call relevant section in reference guide}
     */
    class JavaActionCallAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        javaAction: javaactions.IJavaAction | null;
        readonly javaActionQualifiedName: string | null;
        readonly parameterMappings: internal.IList<JavaActionParameterMapping>;
        /**
         * In version 7.13.0: introduced
         */
        useReturnVariable: boolean;
        outputVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JavaActionCallAction instance in the SDK and on the server.
         * The new JavaActionCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): JavaActionCallAction;
        /**
         * Creates and returns a new JavaActionCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JavaActionCallAction;
    }
    class JavaActionParameterMapping extends CodeActionParameterMapping {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsJavaActionCallAction: JavaActionCallAction;
        parameter: javaactions.IJavaActionParameter;
        readonly parameterQualifiedName: string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 6.7.0: deleted
         */
        argument: string;
        /**
         * In version 7.21.0: deleted
         * In version 6.7.0: introduced
         */
        value: JavaActionParameterValue;
        /**
         * In version 7.21.0: introduced
         */
        parameterValue: CodeActionParameterValue;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JavaActionParameterMapping instance in the SDK and on the server.
         * The new JavaActionParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent JavaActionCallAction element passed as argument.
         */
        static createIn(container: JavaActionCallAction): JavaActionParameterMapping;
        /**
         * Creates and returns a new JavaActionParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JavaActionParameterMapping;
    }
    /**
     * In version 8.4.0: removed experimental
     * In version 7.21.0: introduced
     */
    class JavaScriptActionCallAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        javaScriptAction: javascriptactions.IJavaScriptAction | null;
        readonly javaScriptActionQualifiedName: string | null;
        readonly parameterMappings: internal.IList<JavaScriptActionParameterMapping>;
        useReturnVariable: boolean;
        outputVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JavaScriptActionCallAction instance in the SDK and on the server.
         * The new JavaScriptActionCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createIn(container: ActionActivity): JavaScriptActionCallAction;
        /**
         * Creates and returns a new JavaScriptActionCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JavaScriptActionCallAction;
    }
    /**
     * In version 8.4.0: removed experimental
     * In version 7.21.0: introduced
     */
    class JavaScriptActionParameterMapping extends CodeActionParameterMapping {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsJavaScriptActionCallAction: JavaScriptActionCallAction;
        parameter: javascriptactions.IJavaScriptActionParameter;
        readonly parameterQualifiedName: string;
        parameterValue: CodeActionParameterValue;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JavaScriptActionParameterMapping instance in the SDK and on the server.
         * The new JavaScriptActionParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent JavaScriptActionCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createIn(container: JavaScriptActionCallAction): JavaScriptActionParameterMapping;
        /**
         * Creates and returns a new JavaScriptActionParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JavaScriptActionParameterMapping;
    }
    class ListEquals extends BinaryListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsListOperationAction: ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ListEquals instance in the SDK and on the server.
         * The new ListEquals will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): ListEquals;
        /**
         * Creates and returns a new ListEquals instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ListEquals;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/list-operation relevant section in reference guide}
     */
    class ListOperationAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        operation: ListOperation | null;
        outputVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ListOperationAction instance in the SDK and on the server.
         * The new ListOperationAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ListOperationAction;
        /**
         * Creates and returns a new ListOperationAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ListOperationAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/log-message relevant section in reference guide}
     */
    class LogMessageAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        level: LogLevel;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        node: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        nodeModel: expressions.Expression;
        messageTemplate: StringTemplate;
        includeLatestStackTrace: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new LogMessageAction instance in the SDK and on the server.
         * The new LogMessageAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): LogMessageAction;
        /**
         * Creates and returns a new LogMessageAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): LogMessageAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/loop relevant section in reference guide}
     */
    class LoopedActivity extends Activity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowObjectCollection: MicroflowObjectCollection;
        objectCollection: MicroflowObjectCollection;
        iteratedListVariableName: string;
        loopVariableName: string;
        errorHandlingType: ErrorHandlingType;
        documentation: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new LoopedActivity instance in the SDK and on the server.
         * The new LoopedActivity will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): LoopedActivity;
        /**
         * Creates and returns a new LoopedActivity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): LoopedActivity;
    }
    class MappingRequestHandling extends RequestHandling {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsExportXmlAction: ExportXmlAction;
        readonly containerAsRestCallAction: RestCallAction;
        readonly containerAsWebServiceCallAction: WebServiceCallAction;
        mapping: exportmappings.IExportMapping | null;
        readonly mappingQualifiedName: string | null;
        mappingArgumentVariableName: string;
        /**
         * In version 7.6.0: introduced
         */
        contentType: ContentType;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MappingRequestHandling instance in the SDK and on the server.
         * The new MappingRequestHandling will be automatically stored in the 'resultHandling' property
         * of the parent ExportXmlAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.6.0 and higher
         */
        static createInExportXmlActionUnderResultHandling(container: ExportXmlAction): MappingRequestHandling;
        /**
         * Creates and returns a new MappingRequestHandling instance in the SDK and on the server.
         * The new MappingRequestHandling will be automatically stored in the 'requestHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInRestCallActionUnderRequestHandling(container: RestCallAction): MappingRequestHandling;
        /**
         * Creates and returns a new MappingRequestHandling instance in the SDK and on the server.
         * The new MappingRequestHandling will be automatically stored in the 'requestBodyHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestBodyHandling(container: WebServiceCallAction): MappingRequestHandling;
        /**
         * Creates and returns a new MappingRequestHandling instance in the SDK and on the server.
         * The new MappingRequestHandling will be automatically stored in the 'requestHeaderHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestHeaderHandling(container: WebServiceCallAction): MappingRequestHandling;
        /**
         * Creates and returns a new MappingRequestHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MappingRequestHandling;
    }
    class MemberChange extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsChangeMembersAction: ChangeMembersAction;
        attribute: domainmodels.IAttribute | null;
        readonly attributeQualifiedName: string | null;
        association: domainmodels.IAssociationBase | null;
        readonly associationQualifiedName: string | null;
        type: ChangeActionItemType;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        value: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        valueModel: expressions.Expression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MemberChange instance in the SDK and on the server.
         * The new MemberChange will be automatically stored in the 'items' property
         * of the parent ChangeMembersAction element passed as argument.
         */
        static createIn(container: ChangeMembersAction): MemberChange;
        /**
         * Creates and returns a new MemberChange instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MemberChange;
    }
    interface IMicroflowBase extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        readonly returnType: string | null;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 7.9.0: introduced
         */
        readonly microflowReturnType: datatypes.IDataType;
        asLoaded(): MicroflowBase;
        load(callback: (element: MicroflowBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MicroflowBase>;
    }
    abstract class MicroflowBase extends projects.Document implements IMicroflowBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        objectCollection: MicroflowObjectCollection;
        readonly flows: internal.IList<Flow>;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        returnType: string;
        /**
         * In version 7.9.0: introduced
         */
        microflowReturnType: datatypes.DataType;
        markAsUsed: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
    }
    interface IServerSideMicroflow extends IMicroflowBase {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): ServerSideMicroflow;
        load(callback: (element: ServerSideMicroflow) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ServerSideMicroflow>;
    }
    abstract class ServerSideMicroflow extends MicroflowBase implements IServerSideMicroflow {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        applyEntityAccess: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/microflows relevant section in reference guide}
     */
    interface IMicroflow extends IServerSideMicroflow {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * In version 7.23.0: added public
         */
        readonly allowedModuleRoles: internal.IList<security.IModuleRole>;
        readonly allowedModuleRolesQualifiedNames: string[];
        /**
         * In version 8.0.0: introduced
         */
        readonly microflowActionInfo: codeactions.IMicroflowActionInfo | null;
        asLoaded(): Microflow;
        load(callback: (element: Microflow) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Microflow>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/microflows relevant section in reference guide}
     */
    class Microflow extends ServerSideMicroflow implements IMicroflow {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        /**
         * In version 7.23.0: added public
         */
        readonly allowedModuleRoles: internal.IList<security.IModuleRole>;
        readonly allowedModuleRolesQualifiedNames: string[];
        /**
         * In version 8.0.0: introduced
         */
        microflowActionInfo: codeactions.MicroflowActionInfo | null;
        allowConcurrentExecution: boolean;
        concurrencyErrorMessage: texts.Text;
        concurrencyErrorMicroflow: IMicroflow | null;
        readonly concurrencyErrorMicroflowQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new Microflow unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): Microflow;
    }
    class MicroflowCall extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowCallAction: MicroflowCallAction;
        microflow: IMicroflow | null;
        readonly microflowQualifiedName: string | null;
        readonly parameterMappings: internal.IList<MicroflowCallParameterMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowCall instance in the SDK and on the server.
         * The new MicroflowCall will be automatically stored in the 'microflowCall' property
         * of the parent MicroflowCallAction element passed as argument.
         */
        static createIn(container: MicroflowCallAction): MicroflowCall;
        /**
         * Creates and returns a new MicroflowCall instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowCall;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/microflow-call relevant section in reference guide}
     */
    class MicroflowCallAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        microflowCall: MicroflowCall;
        useReturnVariable: boolean;
        outputVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowCallAction instance in the SDK and on the server.
         * The new MicroflowCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): MicroflowCallAction;
        /**
         * Creates and returns a new MicroflowCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowCallAction;
    }
    class MicroflowCallParameterMapping extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowCall: MicroflowCall;
        parameter: IMicroflowParameter;
        readonly parameterQualifiedName: string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        argument: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        argumentModel: expressions.Expression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowCallParameterMapping instance in the SDK and on the server.
         * The new MicroflowCallParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent MicroflowCall element passed as argument.
         */
        static createIn(container: MicroflowCall): MicroflowCallParameterMapping;
        /**
         * Creates and returns a new MicroflowCallParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowCallParameterMapping;
    }
    /**
     * In version 7.21.0: deleted
     * In version 6.9.0: introduced
     */
    class MicroflowJavaActionParameterValue extends JavaActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsJavaActionParameterMapping: JavaActionParameterMapping;
        microflow: IMicroflow | null;
        readonly microflowQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowJavaActionParameterValue instance in the SDK and on the server.
         * The new MicroflowJavaActionParameterValue will be automatically stored in the 'value' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.9.0 to 7.20.0
         */
        static createIn(container: JavaActionParameterMapping): MicroflowJavaActionParameterValue;
        /**
         * Creates and returns a new MicroflowJavaActionParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowJavaActionParameterValue;
    }
    class MicroflowObjectCollection extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsLoopedActivity: LoopedActivity;
        readonly containerAsMicroflowBase: MicroflowBase;
        readonly objects: internal.IList<MicroflowObject>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowObjectCollection instance in the SDK and on the server.
         * The new MicroflowObjectCollection will be automatically stored in the 'objectCollection' property
         * of the parent LoopedActivity element passed as argument.
         */
        static createInLoopedActivityUnderObjectCollection(container: LoopedActivity): MicroflowObjectCollection;
        /**
         * Creates and returns a new MicroflowObjectCollection instance in the SDK and on the server.
         * The new MicroflowObjectCollection will be automatically stored in the 'objectCollection' property
         * of the parent MicroflowBase element passed as argument.
         */
        static createInMicroflowBaseUnderObjectCollection(container: MicroflowBase): MicroflowObjectCollection;
        /**
         * Creates and returns a new MicroflowObjectCollection instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowObjectCollection;
    }
    interface IMicroflowParameterBase extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsMicroflow: IMicroflow;
        readonly containerAsRule: IRule;
        readonly name: string;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        readonly type: string | null;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 7.9.0: introduced
         */
        readonly parameterType: datatypes.IDataType;
        asLoaded(): MicroflowParameterBase;
        load(callback: (element: MicroflowParameterBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MicroflowParameterBase>;
    }
    abstract class MicroflowParameterBase extends internal.Element implements IMicroflowParameterBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflow: Microflow;
        readonly containerAsRule: Rule;
        name: string;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        type: string;
        /**
         * In version 7.9.0: introduced
         */
        parameterType: datatypes.DataType;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        readonly qualifiedName: string | null;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/parameter relevant section in reference guide}
     */
    interface IMicroflowParameter extends IMicroflowParameterBase {
        readonly model: IModel;
        readonly containerAsMicroflow: IMicroflow;
        asLoaded(): MicroflowParameter;
        load(callback: (element: MicroflowParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MicroflowParameter>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/parameter relevant section in reference guide}
     */
    class MicroflowParameter extends MicroflowParameterBase implements IMicroflowParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflow: Microflow;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class MicroflowParameterObject extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowObjectCollection: MicroflowObjectCollection;
        name: string;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        type: string;
        /**
         * In version 7.9.0: introduced
         */
        variableType: datatypes.DataType;
        documentation: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowParameterObject instance in the SDK and on the server.
         * The new MicroflowParameterObject will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): MicroflowParameterObject;
        /**
         * Creates and returns a new MicroflowParameterObject instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowParameterObject;
    }
    /**
     * In version 7.21.0: introduced
     */
    class MicroflowParameterValue extends ExpressionBasedCodeActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsJavaActionParameterMapping: JavaActionParameterMapping;
        readonly containerAsJavaScriptActionParameterMapping: JavaScriptActionParameterMapping;
        microflow: IMicroflow | null;
        readonly microflowQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MicroflowParameterValue instance in the SDK and on the server.
         * The new MicroflowParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container: JavaActionParameterMapping): MicroflowParameterValue;
        /**
         * Creates and returns a new MicroflowParameterValue instance in the SDK and on the server.
         * The new MicroflowParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.21.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container: JavaScriptActionParameterMapping): MicroflowParameterValue;
        /**
         * Creates and returns a new MicroflowParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MicroflowParameterValue;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/nanoflows relevant section in reference guide}
     *
     * In version 7.12.0: removed experimental
     * In version 7.10.0: introduced
     */
    interface INanoflow extends IMicroflowBase {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * In version 7.23.0: added public
         */
        readonly allowedModuleRoles: internal.IList<security.IModuleRole>;
        readonly allowedModuleRolesQualifiedNames: string[];
        asLoaded(): Nanoflow;
        load(callback: (element: Nanoflow) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Nanoflow>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/nanoflows relevant section in reference guide}
     *
     * In version 7.12.0: removed experimental
     * In version 7.10.0: introduced
     */
    class Nanoflow extends MicroflowBase implements INanoflow {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        /**
         * In version 7.23.0: added public
         */
        readonly allowedModuleRoles: internal.IList<security.IModuleRole>;
        readonly allowedModuleRolesQualifiedNames: string[];
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new Nanoflow unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): Nanoflow;
    }
    /**
     * In version 8.0.0: introduced
     */
    class NanoflowCall extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsNanoflowCallAction: NanoflowCallAction;
        nanoflow: INanoflow | null;
        readonly nanoflowQualifiedName: string | null;
        readonly parameterMappings: internal.IList<NanoflowCallParameterMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NanoflowCall instance in the SDK and on the server.
         * The new NanoflowCall will be automatically stored in the 'nanoflowCall' property
         * of the parent NanoflowCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createIn(container: NanoflowCallAction): NanoflowCall;
        /**
         * Creates and returns a new NanoflowCall instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NanoflowCall;
    }
    /**
     * In version 8.0.0: introduced
     */
    class NanoflowCallAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        nanoflowCall: NanoflowCall;
        useReturnVariable: boolean;
        outputVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NanoflowCallAction instance in the SDK and on the server.
         * The new NanoflowCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createIn(container: ActionActivity): NanoflowCallAction;
        /**
         * Creates and returns a new NanoflowCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NanoflowCallAction;
    }
    /**
     * In version 8.0.0: introduced
     */
    class NanoflowCallParameterMapping extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsNanoflowCall: NanoflowCall;
        parameter: INanoflowParameter;
        readonly parameterQualifiedName: string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        argument: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        argumentModel: expressions.Expression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NanoflowCallParameterMapping instance in the SDK and on the server.
         * The new NanoflowCallParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent NanoflowCall element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.0.0 and higher
         */
        static createIn(container: NanoflowCall): NanoflowCallParameterMapping;
        /**
         * Creates and returns a new NanoflowCallParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NanoflowCallParameterMapping;
    }
    /**
     * In version 7.19.0: introduced
     */
    interface INanoflowParameter extends IMicroflowParameterBase {
        readonly model: IModel;
        asLoaded(): NanoflowParameter;
        load(callback: (element: NanoflowParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<NanoflowParameter>;
    }
    /**
     * In version 7.19.0: introduced
     */
    class NanoflowParameter extends MicroflowParameterBase implements INanoflowParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NanoflowParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NanoflowParameter;
    }
    class NoCase extends CaseValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsSequenceFlow: SequenceFlow;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NoCase instance in the SDK and on the server.
         * The new NoCase will be automatically stored in the 'caseValue' property
         * of the parent SequenceFlow element passed as argument.
         */
        static createIn(container: SequenceFlow): NoCase;
        /**
         * Creates and returns a new NoCase instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NoCase;
    }
    /**
     * In version 7.15.0: introduced
     */
    class ProxyConfiguration extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsRestCallAction: RestCallAction;
        readonly containerAsWebServiceCallAction: WebServiceCallAction;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        usernameExpression: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        usernameExpressionModel: expressions.Expression | null;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        passwordExpression: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        passwordExpressionModel: expressions.Expression | null;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        hostExpression: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        hostExpressionModel: expressions.Expression | null;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        portExpression: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        portExpressionModel: expressions.Expression | null;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        useConfigurationExpression: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         */
        useConfigurationExpressionModel: expressions.Expression | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ProxyConfiguration instance in the SDK and on the server.
         * The new ProxyConfiguration will be automatically stored in the 'proxyConfiguration' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInRestCallActionUnderProxyConfiguration(container: RestCallAction): ProxyConfiguration;
        /**
         * Creates and returns a new ProxyConfiguration instance in the SDK and on the server.
         * The new ProxyConfiguration will be automatically stored in the 'proxyConfiguration' property
         * of the parent WebServiceCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.15.0 and higher
         */
        static createInWebServiceCallActionUnderProxyConfiguration(container: WebServiceCallAction): ProxyConfiguration;
        /**
         * Creates and returns a new ProxyConfiguration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ProxyConfiguration;
    }
    /**
     * In version 8.4.0: introduced
     */
    class PushToClientAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        dataVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PushToClientAction instance in the SDK and on the server.
         * The new PushToClientAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.4.0 and higher
         */
        static createIn(container: ActionActivity): PushToClientAction;
        /**
         * Creates and returns a new PushToClientAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PushToClientAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/call-rest-action relevant section in reference guide}
     *
     * In version 6.6.0: introduced
     */
    class RestCallAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        httpConfiguration: HttpConfiguration;
        requestHandling: RequestHandling;
        /**
         * In version 6.9.0: introduced
         */
        requestHandlingType: RequestHandlingType;
        resultHandling: ResultHandling;
        /**
         * In version 6.9.0: introduced
         */
        resultHandlingType: ResultHandlingType;
        /**
         * In version 7.0.2: introduced
         */
        errorResultHandlingType: ErrorResultHandlingType;
        /**
         * In version 7.1.0: introduced
         */
        useRequestTimeOut: boolean;
        /**
         * In version 7.15.0: deleted
         * In version 7.1.0: introduced
         */
        timeOut: number;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.15.0: introduced
         */
        timeOutModel: expressions.Expression;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 7.15.0: introduced
         */
        timeOutExpression: string;
        /**
         * In version 7.15.0: introduced
         */
        requestProxyType: RequestProxyType;
        /**
         * In version 7.15.0: introduced
         */
        proxyConfiguration: ProxyConfiguration | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RestCallAction instance in the SDK and on the server.
         * The new RestCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createIn(container: ActionActivity): RestCallAction;
        /**
         * Creates and returns a new RestCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RestCallAction;
    }
    class ResultHandling extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsImportXmlAction: ImportXmlAction;
        readonly containerAsRestCallAction: RestCallAction;
        readonly containerAsWebServiceCallAction: WebServiceCallAction;
        importMappingCall: ImportMappingCall | null;
        storeInVariable: boolean;
        outputVariableName: string;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         * In version 6.10.0: introduced
         */
        variableDataType: string;
        /**
         * In version 7.9.0: introduced
         */
        variableType: datatypes.DataType;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ResultHandling instance in the SDK and on the server.
         * The new ResultHandling will be automatically stored in the 'resultHandling' property
         * of the parent ImportXmlAction element passed as argument.
         */
        static createInImportXmlActionUnderResultHandling(container: ImportXmlAction): ResultHandling;
        /**
         * Creates and returns a new ResultHandling instance in the SDK and on the server.
         * The new ResultHandling will be automatically stored in the 'resultHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInRestCallActionUnderResultHandling(container: RestCallAction): ResultHandling;
        /**
         * Creates and returns a new ResultHandling instance in the SDK and on the server.
         * The new ResultHandling will be automatically stored in the 'resultHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderResultHandling(container: WebServiceCallAction): ResultHandling;
        /**
         * Creates and returns a new ResultHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ResultHandling;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/retrieve relevant section in reference guide}
     */
    class RetrieveAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        retrieveSource: RetrieveSource;
        outputVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RetrieveAction instance in the SDK and on the server.
         * The new RetrieveAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): RetrieveAction;
        /**
         * Creates and returns a new RetrieveAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RetrieveAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/rollback-object relevant section in reference guide}
     */
    class RollbackAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        rollbackVariableName: string;
        refreshInClient: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RollbackAction instance in the SDK and on the server.
         * The new RollbackAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): RollbackAction;
        /**
         * Creates and returns a new RollbackAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RollbackAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/rules relevant section in reference guide}
     */
    interface IRule extends IServerSideMicroflow {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): Rule;
        load(callback: (element: Rule) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Rule>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/rules relevant section in reference guide}
     */
    class Rule extends ServerSideMicroflow implements IRule {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new Rule unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): Rule;
    }
    class RuleCall extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsRuleSplitCondition: RuleSplitCondition;
        rule: IRule | null;
        readonly ruleQualifiedName: string | null;
        readonly parameterMappings: internal.IList<RuleCallParameterMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RuleCall instance in the SDK and on the server.
         * The new RuleCall will be automatically stored in the 'ruleCall' property
         * of the parent RuleSplitCondition element passed as argument.
         */
        static createIn(container: RuleSplitCondition): RuleCall;
        /**
         * Creates and returns a new RuleCall instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RuleCall;
    }
    class RuleCallParameterMapping extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsRuleCall: RuleCall;
        parameter: IRuleParameter;
        readonly parameterQualifiedName: string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        argument: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        argumentModel: expressions.Expression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RuleCallParameterMapping instance in the SDK and on the server.
         * The new RuleCallParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent RuleCall element passed as argument.
         */
        static createIn(container: RuleCall): RuleCallParameterMapping;
        /**
         * Creates and returns a new RuleCallParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RuleCallParameterMapping;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/parameter relevant section in reference guide}
     */
    interface IRuleParameter extends IMicroflowParameterBase {
        readonly model: IModel;
        readonly containerAsRule: IRule;
        asLoaded(): RuleParameter;
        load(callback: (element: RuleParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<RuleParameter>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/parameter relevant section in reference guide}
     */
    class RuleParameter extends MicroflowParameterBase implements IRuleParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsRule: Rule;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class RuleSplitCondition extends SplitCondition {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsExclusiveSplit: ExclusiveSplit;
        ruleCall: RuleCall;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RuleSplitCondition instance in the SDK and on the server.
         * The new RuleSplitCondition will be automatically stored in the 'splitCondition' property
         * of the parent ExclusiveSplit element passed as argument.
         */
        static createIn(container: ExclusiveSplit): RuleSplitCondition;
        /**
         * Creates and returns a new RuleSplitCondition instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RuleSplitCondition;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/sequence-flow relevant section in reference guide}
     */
    class SequenceFlow extends Flow {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowBase: MicroflowBase;
        caseValue: CaseValue;
        isErrorHandler: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SequenceFlow instance in the SDK and on the server.
         * The new SequenceFlow will be automatically stored in the 'flows' property
         * of the parent MicroflowBase element passed as argument.
         */
        static createIn(container: MicroflowBase): SequenceFlow;
        /**
         * Creates and returns a new SequenceFlow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SequenceFlow;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/show-home-page relevant section in reference guide}
     */
    class ShowHomePageAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ShowHomePageAction instance in the SDK and on the server.
         * The new ShowHomePageAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ShowHomePageAction;
        /**
         * Creates and returns a new ShowHomePageAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ShowHomePageAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/show-message relevant section in reference guide}
     */
    class ShowMessageAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        template: TextTemplate;
        type: ShowMessageType;
        blocking: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ShowMessageAction instance in the SDK and on the server.
         * The new ShowMessageAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ShowMessageAction;
        /**
         * Creates and returns a new ShowMessageAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ShowMessageAction;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/show-page relevant section in reference guide}
     */
    class ShowPageAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        pageSettings: pages.PageSettings;
        passedObjectVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ShowPageAction instance in the SDK and on the server.
         * The new ShowPageAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ShowPageAction;
        /**
         * Creates and returns a new ShowPageAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ShowPageAction;
    }
    class SimpleRequestHandling extends RequestHandling {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsRestCallAction: RestCallAction;
        readonly containerAsWebServiceCallAction: WebServiceCallAction;
        readonly parameterMappings: internal.IList<WebServiceOperationSimpleParameterMapping>;
        /**
         * In version 6.7.0: introduced
         */
        nullValueOption: NullValueOption;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SimpleRequestHandling instance in the SDK and on the server.
         * The new SimpleRequestHandling will be automatically stored in the 'requestHandling' property
         * of the parent RestCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInRestCallActionUnderRequestHandling(container: RestCallAction): SimpleRequestHandling;
        /**
         * Creates and returns a new SimpleRequestHandling instance in the SDK and on the server.
         * The new SimpleRequestHandling will be automatically stored in the 'requestBodyHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestBodyHandling(container: WebServiceCallAction): SimpleRequestHandling;
        /**
         * Creates and returns a new SimpleRequestHandling instance in the SDK and on the server.
         * The new SimpleRequestHandling will be automatically stored in the 'requestHeaderHandling' property
         * of the parent WebServiceCallAction element passed as argument.
         */
        static createInWebServiceCallActionUnderRequestHeaderHandling(container: WebServiceCallAction): SimpleRequestHandling;
        /**
         * Creates and returns a new SimpleRequestHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SimpleRequestHandling;
    }
    class Sort extends ListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsListOperationAction: ListOperationAction;
        sortItemList: SortItemList;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Sort instance in the SDK and on the server.
         * The new Sort will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): Sort;
        /**
         * Creates and returns a new Sort instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Sort;
    }
    class SortItem extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsSortItemList: SortItemList;
        /**
         * The value of this property is conceptually of type paths.LegacyAttributePath.
         *
         * In version 7.11.0: deleted
         */
        attributePath: string;
        /**
         * In version 7.11.0: introduced
         */
        attributeRef: domainmodels.AttributeRef;
        sortOrder: SortOrderEnum;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SortItem instance in the SDK and on the server.
         * The new SortItem will be automatically stored in the 'items' property
         * of the parent SortItemList element passed as argument.
         */
        static createIn(container: SortItemList): SortItem;
        /**
         * Creates and returns a new SortItem instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SortItem;
    }
    class SortItemList extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDatabaseRetrieveSource: DatabaseRetrieveSource;
        readonly containerAsSort: Sort;
        readonly items: internal.IList<SortItem>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SortItemList instance in the SDK and on the server.
         * The new SortItemList will be automatically stored in the 'sortItemList' property
         * of the parent DatabaseRetrieveSource element passed as argument.
         */
        static createInDatabaseRetrieveSourceUnderSortItemList(container: DatabaseRetrieveSource): SortItemList;
        /**
         * Creates and returns a new SortItemList instance in the SDK and on the server.
         * The new SortItemList will be automatically stored in the 'sortItemList' property
         * of the parent Sort element passed as argument.
         */
        static createInSortUnderSortItemList(container: Sort): SortItemList;
        /**
         * Creates and returns a new SortItemList instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SortItemList;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/start-event relevant section in reference guide}
     */
    class StartEvent extends MicroflowObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMicroflowObjectCollection: MicroflowObjectCollection;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StartEvent instance in the SDK and on the server.
         * The new StartEvent will be automatically stored in the 'objects' property
         * of the parent MicroflowObjectCollection element passed as argument.
         */
        static createIn(container: MicroflowObjectCollection): StartEvent;
        /**
         * Creates and returns a new StartEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StartEvent;
    }
    abstract class Template extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsCustomRequestHandling: CustomRequestHandling;
        readonly containerAsHttpConfiguration: HttpConfiguration;
        readonly containerAsLogMessageAction: LogMessageAction;
        readonly containerAsShowMessageAction: ShowMessageAction;
        readonly containerAsStringTemplateParameterValue: StringTemplateParameterValue;
        readonly containerAsValidationFeedbackAction: ValidationFeedbackAction;
        readonly arguments: internal.IList<TemplateArgument>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class StringTemplate extends Template {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsCustomRequestHandling: CustomRequestHandling;
        readonly containerAsHttpConfiguration: HttpConfiguration;
        readonly containerAsLogMessageAction: LogMessageAction;
        readonly containerAsStringTemplateParameterValue: StringTemplateParameterValue;
        text: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'template' property
         * of the parent CustomRequestHandling element passed as argument.
         */
        static createInCustomRequestHandlingUnderTemplate(container: CustomRequestHandling): StringTemplate;
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'customLocationTemplate' property
         * of the parent HttpConfiguration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.6.0 and higher
         */
        static createInHttpConfigurationUnderCustomLocationTemplate(container: HttpConfiguration): StringTemplate;
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'messageTemplate' property
         * of the parent LogMessageAction element passed as argument.
         */
        static createInLogMessageActionUnderMessageTemplate(container: LogMessageAction): StringTemplate;
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * The new StringTemplate will be automatically stored in the 'template' property
         * of the parent StringTemplateParameterValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.4.0 and higher
         */
        static createInStringTemplateParameterValueUnderTemplate(container: StringTemplateParameterValue): StringTemplate;
        /**
         * Creates and returns a new StringTemplate instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StringTemplate;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.4.0: introduced
     */
    class StringTemplateParameterValue extends CodeActionParameterValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsJavaActionParameterMapping: JavaActionParameterMapping;
        readonly containerAsJavaScriptActionParameterMapping: JavaScriptActionParameterMapping;
        template: StringTemplate;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StringTemplateParameterValue instance in the SDK and on the server.
         * The new StringTemplateParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.4.0 and higher
         */
        static createInJavaActionParameterMappingUnderParameterValue(container: JavaActionParameterMapping): StringTemplateParameterValue;
        /**
         * Creates and returns a new StringTemplateParameterValue instance in the SDK and on the server.
         * The new StringTemplateParameterValue will be automatically stored in the 'parameterValue' property
         * of the parent JavaScriptActionParameterMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.4.0 and higher
         */
        static createInJavaScriptActionParameterMappingUnderParameterValue(container: JavaScriptActionParameterMapping): StringTemplateParameterValue;
        /**
         * Creates and returns a new StringTemplateParameterValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StringTemplateParameterValue;
    }
    class Subtract extends BinaryListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsListOperationAction: ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Subtract instance in the SDK and on the server.
         * The new Subtract will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): Subtract;
        /**
         * Creates and returns a new Subtract instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Subtract;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/synchronize relevant section in reference guide}
     *
     * In version 7.22.0: introduced
     */
    class SynchronizeAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SynchronizeAction instance in the SDK and on the server.
         * The new SynchronizeAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.22.0 and higher
         */
        static createIn(container: ActionActivity): SynchronizeAction;
        /**
         * Creates and returns a new SynchronizeAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SynchronizeAction;
    }
    class Tail extends ListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsListOperationAction: ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Tail instance in the SDK and on the server.
         * The new Tail will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): Tail;
        /**
         * Creates and returns a new Tail instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Tail;
    }
    class TemplateArgument extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsTemplate: Template;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        expression: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        expressionModel: expressions.Expression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TemplateArgument instance in the SDK and on the server.
         * The new TemplateArgument will be automatically stored in the 'arguments' property
         * of the parent Template element passed as argument.
         */
        static createIn(container: Template): TemplateArgument;
        /**
         * Creates and returns a new TemplateArgument instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TemplateArgument;
    }
    class TextTemplate extends Template {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsShowMessageAction: ShowMessageAction;
        readonly containerAsValidationFeedbackAction: ValidationFeedbackAction;
        text: texts.Text;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TextTemplate instance in the SDK and on the server.
         * The new TextTemplate will be automatically stored in the 'template' property
         * of the parent ShowMessageAction element passed as argument.
         */
        static createInShowMessageActionUnderTemplate(container: ShowMessageAction): TextTemplate;
        /**
         * Creates and returns a new TextTemplate instance in the SDK and on the server.
         * The new TextTemplate will be automatically stored in the 'feedbackTemplate' property
         * of the parent ValidationFeedbackAction element passed as argument.
         */
        static createInValidationFeedbackActionUnderFeedbackTemplate(container: ValidationFeedbackAction): TextTemplate;
        /**
         * Creates and returns a new TextTemplate instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TextTemplate;
    }
    class Union extends BinaryListOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsListOperationAction: ListOperationAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Union instance in the SDK and on the server.
         * The new Union will be automatically stored in the 'operation' property
         * of the parent ListOperationAction element passed as argument.
         */
        static createIn(container: ListOperationAction): Union;
        /**
         * Creates and returns a new Union instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Union;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/validation-feedback relevant section in reference guide}
     */
    class ValidationFeedbackAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        feedbackTemplate: TextTemplate;
        objectVariableName: string;
        /**
         * See: {@link https://docs.mendix.com/refguide7/validation-feedback See 'Member' section in reference guide}
         */
        attribute: domainmodels.IAttribute | null;
        readonly attributeQualifiedName: string | null;
        /**
         * See: {@link https://docs.mendix.com/refguide7/validation-feedback See 'Member' section in reference guide}
         */
        association: domainmodels.IAssociationBase | null;
        readonly associationQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ValidationFeedbackAction instance in the SDK and on the server.
         * The new ValidationFeedbackAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): ValidationFeedbackAction;
        /**
         * Creates and returns a new ValidationFeedbackAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ValidationFeedbackAction;
    }
    class VariableExport extends OutputMethod {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsExportXmlAction: ExportXmlAction;
        outputVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new VariableExport instance in the SDK and on the server.
         * The new VariableExport will be automatically stored in the 'outputMethod' property
         * of the parent ExportXmlAction element passed as argument.
         */
        static createIn(container: ExportXmlAction): VariableExport;
        /**
         * Creates and returns a new VariableExport instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): VariableExport;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/call-web-service-action relevant section in reference guide}
     */
    class WebServiceCallAction extends MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsActionActivity: ActionActivity;
        importedWebService: webservices.IImportedWebService | null;
        readonly importedWebServiceQualifiedName: string | null;
        serviceName: string;
        operationName: string;
        useRequestTimeOut: boolean;
        /**
         * In version 7.15.0: deleted
         */
        timeOut: number;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.15.0: introduced
         */
        timeOutModel: expressions.Expression;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 7.15.0: introduced
         */
        timeOutExpression: string;
        /**
         * In version 6.7.0: deleted
         */
        sendNullValueChoice: NullValueOption;
        requestHeaderHandling: RequestHandling;
        requestBodyHandling: RequestHandling;
        resultHandling: ResultHandling;
        httpConfiguration: HttpConfiguration;
        isValidationRequired: boolean;
        /**
         * In version 7.15.0: introduced
         */
        requestProxyType: RequestProxyType;
        /**
         * In version 7.15.0: introduced
         */
        proxyConfiguration: ProxyConfiguration | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WebServiceCallAction instance in the SDK and on the server.
         * The new WebServiceCallAction will be automatically stored in the 'action' property
         * of the parent ActionActivity element passed as argument.
         */
        static createIn(container: ActionActivity): WebServiceCallAction;
        /**
         * Creates and returns a new WebServiceCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WebServiceCallAction;
    }
    /**
     * In version 6.3.0: introduced
     */
    abstract class WebServiceOperationParameterMapping extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAdvancedRequestHandling: AdvancedRequestHandling;
        readonly containerAsSimpleRequestHandling: SimpleRequestHandling;
        isChecked: boolean;
        parameterName: string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        argument: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 7.9.0: introduced
         */
        argumentModel: expressions.Expression;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class WebServiceOperationAdvancedParameterMapping extends WebServiceOperationParameterMapping {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAdvancedRequestHandling: AdvancedRequestHandling;
        mapping: exportmappings.IExportMapping | null;
        readonly mappingQualifiedName: string | null;
        mappingArgumentVariableName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WebServiceOperationAdvancedParameterMapping instance in the SDK and on the server.
         * The new WebServiceOperationAdvancedParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent AdvancedRequestHandling element passed as argument.
         */
        static createIn(container: AdvancedRequestHandling): WebServiceOperationAdvancedParameterMapping;
        /**
         * Creates and returns a new WebServiceOperationAdvancedParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WebServiceOperationAdvancedParameterMapping;
    }
    class WebServiceOperationSimpleParameterMapping extends WebServiceOperationParameterMapping {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsSimpleRequestHandling: SimpleRequestHandling;
        /**
         * The value of this property is conceptually of type mappings.ElementPath.
         */
        parameterPath: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new WebServiceOperationSimpleParameterMapping instance in the SDK and on the server.
         * The new WebServiceOperationSimpleParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent SimpleRequestHandling element passed as argument.
         */
        static createIn(container: SimpleRequestHandling): WebServiceOperationSimpleParameterMapping;
        /**
         * Creates and returns a new WebServiceOperationSimpleParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): WebServiceOperationSimpleParameterMapping;
    }
}
import { appservices } from "./appservices";
import { codeactions } from "./codeactions";
import { datatypes } from "./datatypes";
import { documenttemplates } from "./documenttemplates";
import { domainmodels } from "./domainmodels";
import { exportmappings } from "./exportmappings";
import { expressions } from "./expressions";
import { importmappings } from "./importmappings";
import { javaactions } from "./javaactions";
import { javascriptactions } from "./javascriptactions";
import { mappings } from "./mappings";
import { pages } from "./pages";
import { rest } from "./rest";
import { security } from "./security";
import { services } from "./services";
import { texts } from "./texts";
import { webservices } from "./webservices";
import { IModel } from "./base-model";
