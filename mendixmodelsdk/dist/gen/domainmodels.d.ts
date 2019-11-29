import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { common } from "../common";
import { projects } from "./projects";
export declare namespace domainmodels {
    class ActionMoment extends internal.AbstractEnum {
        static Before: ActionMoment;
        static After: ActionMoment;
        protected qualifiedTsTypeName: string;
    }
    class AssociationOwner extends internal.AbstractEnum {
        static Default: AssociationOwner;
        static Both: AssociationOwner;
        protected qualifiedTsTypeName: string;
    }
    class AssociationType extends internal.AbstractEnum {
        static Reference: AssociationType;
        static ReferenceSet: AssociationType;
        protected qualifiedTsTypeName: string;
    }
    class DeletingBehavior extends internal.AbstractEnum {
        static DeleteMeAndReferences: DeletingBehavior;
        static DeleteMeButKeepReferences: DeletingBehavior;
        static DeleteMeIfNoReferences: DeletingBehavior;
        protected qualifiedTsTypeName: string;
    }
    class EventType extends internal.AbstractEnum {
        static Create: EventType;
        static Commit: EventType;
        static Delete: EventType;
        static RollBack: EventType;
        protected qualifiedTsTypeName: string;
    }
    class IndexedAttributeType extends internal.AbstractEnum {
        static Normal: IndexedAttributeType;
        static CreatedDate: IndexedAttributeType;
        static ChangedDate: IndexedAttributeType;
        protected qualifiedTsTypeName: string;
    }
    class MemberAccessRights extends internal.AbstractEnum {
        static None: MemberAccessRights;
        static ReadOnly: MemberAccessRights;
        static ReadWrite: MemberAccessRights;
        protected qualifiedTsTypeName: string;
    }
    class RangeType extends internal.AbstractEnum {
        static GreaterThanOrEqualTo: RangeType;
        static SmallerThanOrEqualTo: RangeType;
        static Between: RangeType;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `DomainModels`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide7/access-rules relevant section in reference guide}
     */
    class AccessRule extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsEntity: Entity;
        readonly containerAsAccessRuleContainerBase: security.AccessRuleContainerBase;
        readonly memberAccesses: internal.IList<MemberAccess>;
        readonly moduleRoles: internal.IList<security.IModuleRole>;
        readonly moduleRolesQualifiedNames: string[];
        documentation: string;
        allowCreate: boolean;
        allowDelete: boolean;
        defaultMemberAccessRights: MemberAccessRights;
        /**
         * The value of this property is conceptually of type xPathConstraints.XPathConstraint.
         */
        xPathConstraint: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AccessRule instance in the SDK and on the server.
         * The new AccessRule will be automatically stored in the 'accessRules' property
         * of the parent Entity element passed as argument.
         */
        static createInEntityUnderAccessRules(container: Entity): AccessRule;
        /**
         * Creates and returns a new AccessRule instance in the SDK and on the server.
         * The new AccessRule will be automatically stored in the 'accessRules' property
         * of the parent security.AccessRuleContainerBase element passed as argument.
         */
        static createInAccessRuleContainerBaseUnderAccessRules(container: security.AccessRuleContainerBase): AccessRule;
        /**
         * Creates and returns a new AccessRule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AccessRule;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/annotations relevant section in reference guide}
     */
    class Annotation extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDomainModel: DomainModel;
        caption: string;
        location: common.IPoint;
        width: number;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * The new Annotation will be automatically stored in the 'annotations' property
         * of the parent DomainModel element passed as argument.
         */
        static createIn(container: DomainModel): Annotation;
        /**
         * Creates and returns a new Annotation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Annotation;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/associations relevant section in reference guide}
     */
    interface IAssociationBase extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsDomainModel: IDomainModel;
        readonly name: string;
        readonly type: AssociationType;
        readonly owner: AssociationOwner;
        /**
         * This property is required and cannot be set to null.
         */
        readonly parent: IEntity;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.3.0: introduced
         */
        readonly remoteSourceDocument: IRemoteEntitySourceDocument | null;
        readonly remoteSourceDocumentQualifiedName: string | null;
        asLoaded(): AssociationBase;
        load(callback: (element: AssociationBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<AssociationBase>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/associations relevant section in reference guide}
     */
    abstract class AssociationBase extends internal.Element implements IAssociationBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDomainModel: DomainModel;
        name: string;
        dataStorageGuid: string;
        type: AssociationType;
        owner: AssociationOwner;
        deleteBehavior: AssociationDeleteBehavior;
        parent: Entity;
        documentation: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.3.0: introduced
         */
        remoteSourceDocument: IRemoteEntitySourceDocument | null;
        readonly remoteSourceDocumentQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        readonly qualifiedName: string | null;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/associations relevant section in reference guide}
     */
    interface IAssociation extends IAssociationBase {
        readonly model: IModel;
        readonly containerAsDomainModel: IDomainModel;
        /**
         * This property is required and cannot be set to null.
         */
        readonly child: IEntity;
        asLoaded(): Association;
        load(callback: (element: Association) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Association>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/associations relevant section in reference guide}
     */
    class Association extends AssociationBase implements IAssociation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDomainModel: DomainModel;
        child: Entity;
        parentConnection: common.IPoint;
        childConnection: common.IPoint;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Association instance in the SDK and on the server.
         * The new Association will be automatically stored in the 'associations' property
         * of the parent DomainModel element passed as argument.
         */
        static createIn(container: DomainModel): Association;
        /**
         * Creates and returns a new Association instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Association;
    }
    class AssociationDeleteBehavior extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAssociationBase: AssociationBase;
        parentDeleteBehavior: DeletingBehavior;
        childDeleteBehavior: DeletingBehavior;
        parentErrorMessage: texts.Text | null;
        childErrorMessage: texts.Text | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AssociationDeleteBehavior instance in the SDK and on the server.
         * The new AssociationDeleteBehavior will be automatically stored in the 'deleteBehavior' property
         * of the parent AssociationBase element passed as argument.
         */
        static createIn(container: AssociationBase): AssociationDeleteBehavior;
        /**
         * Creates and returns a new AssociationDeleteBehavior instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AssociationDeleteBehavior;
    }
    /**
     * In version 7.11.0: introduced
     */
    abstract class MemberRef extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetValue: customwidgets.WidgetValue;
        readonly containerAsAttributeWidget: documenttemplates.AttributeWidget;
        readonly containerAsDataGridColumn: documenttemplates.DataGridColumn;
        readonly containerAsDocumentTemplatesGridSortItem: documenttemplates.GridSortItem;
        readonly containerAsVariableRefExpression: expressions.VariableRefExpression;
        readonly containerAsSortItem: microflows.SortItem;
        readonly containerAsClientTemplateParameter: pages.ClientTemplateParameter;
        readonly containerAsGridColumn: pages.GridColumn;
        readonly containerAsPagesGridSortItem: pages.GridSortItem;
        readonly containerAsListViewSearch: pages.ListViewSearch;
        readonly containerAsMemberWidget: pages.MemberWidget;
        readonly containerAsRangeSearchField: pages.RangeSearchField;
        readonly containerAsSingleSearchField: pages.SingleSearchField;
        readonly containerAsStaticOrDynamicString: pages.StaticOrDynamicString;
        entityRef: IndirectEntityRef | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.11.0: introduced
     */
    class AssociationRef extends MemberRef {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsVariableRefExpression: expressions.VariableRefExpression;
        association: IAssociationBase;
        readonly associationQualifiedName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AssociationRef instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AssociationRef;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/attributes relevant section in reference guide}
     */
    interface IAttribute extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsEntity: IEntity;
        readonly name: string;
        /**
         * This property is required and cannot be set to null.
         */
        readonly type: IAttributeType;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 6.6.0: added public
         */
        readonly value: IValueType;
        asLoaded(): Attribute;
        load(callback: (element: Attribute) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Attribute>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/attributes relevant section in reference guide}
     */
    class Attribute extends internal.Element implements IAttribute {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsEntity: Entity;
        name: string;
        dataStorageGuid: string;
        type: AttributeType;
        documentation: string;
        /**
         * In version 6.6.0: added public
         */
        value: ValueType;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Attribute instance in the SDK and on the server.
         * The new Attribute will be automatically stored in the 'attributes' property
         * of the parent Entity element passed as argument.
         */
        static createIn(container: Entity): Attribute;
        /**
         * Creates and returns a new Attribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Attribute;
        readonly qualifiedName: string | null;
    }
    /**
     * In version 7.11.0: introduced
     */
    class AttributeRef extends MemberRef {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetValue: customwidgets.WidgetValue;
        readonly containerAsAttributeWidget: documenttemplates.AttributeWidget;
        readonly containerAsDataGridColumn: documenttemplates.DataGridColumn;
        readonly containerAsDocumentTemplatesGridSortItem: documenttemplates.GridSortItem;
        readonly containerAsVariableRefExpression: expressions.VariableRefExpression;
        readonly containerAsSortItem: microflows.SortItem;
        readonly containerAsClientTemplateParameter: pages.ClientTemplateParameter;
        readonly containerAsGridColumn: pages.GridColumn;
        readonly containerAsPagesGridSortItem: pages.GridSortItem;
        readonly containerAsListViewSearch: pages.ListViewSearch;
        readonly containerAsMemberWidget: pages.MemberWidget;
        readonly containerAsRangeSearchField: pages.RangeSearchField;
        readonly containerAsSingleSearchField: pages.SingleSearchField;
        readonly containerAsStaticOrDynamicString: pages.StaticOrDynamicString;
        attribute: IAttribute;
        readonly attributeQualifiedName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInWidgetValueUnderAttributeRef(container: customwidgets.WidgetValue): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent documenttemplates.AttributeWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInAttributeWidgetUnderAttributeRef(container: documenttemplates.AttributeWidget): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent documenttemplates.DataGridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInDataGridColumnUnderAttributeRef(container: documenttemplates.DataGridColumn): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent documenttemplates.GridSortItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInDocumentTemplatesGridSortItemUnderAttributeRef(container: documenttemplates.GridSortItem): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'member' property
         * of the parent expressions.VariableRefExpression element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInVariableRefExpressionUnderMember(container: expressions.VariableRefExpression): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent microflows.SortItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInSortItemUnderAttributeRef(container: microflows.SortItem): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent pages.ClientTemplateParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInClientTemplateParameterUnderAttributeRef(container: pages.ClientTemplateParameter): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent pages.GridColumn element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInGridColumnUnderAttributeRef(container: pages.GridColumn): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent pages.GridSortItem element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInPagesGridSortItemUnderAttributeRef(container: pages.GridSortItem): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'searchRefs' property
         * of the parent pages.ListViewSearch element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInListViewSearchUnderSearchRefs(container: pages.ListViewSearch): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent pages.MemberWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInMemberWidgetUnderAttributeRef(container: pages.MemberWidget): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'lowerBoundRef' property
         * of the parent pages.RangeSearchField element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInRangeSearchFieldUnderLowerBoundRef(container: pages.RangeSearchField): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'upperBoundRef' property
         * of the parent pages.RangeSearchField element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInRangeSearchFieldUnderUpperBoundRef(container: pages.RangeSearchField): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent pages.SingleSearchField element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInSingleSearchFieldUnderAttributeRef(container: pages.SingleSearchField): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * The new AttributeRef will be automatically stored in the 'attributeRef' property
         * of the parent pages.StaticOrDynamicString element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInStaticOrDynamicStringUnderAttributeRef(container: pages.StaticOrDynamicString): AttributeRef;
        /**
         * Creates and returns a new AttributeRef instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AttributeRef;
    }
    interface IAttributeType extends internal.IElement {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): AttributeType;
        load(callback: (element: AttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<AttributeType>;
    }
    abstract class AttributeType extends internal.Element implements IAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    interface INumericAttributeTypeBase extends IAttributeType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): NumericAttributeTypeBase;
        load(callback: (element: NumericAttributeTypeBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<NumericAttributeTypeBase>;
    }
    abstract class NumericAttributeTypeBase extends AttributeType implements INumericAttributeTypeBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    interface IIntegerAttributeTypeBase extends INumericAttributeTypeBase {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): IntegerAttributeTypeBase;
        load(callback: (element: IntegerAttributeTypeBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<IntegerAttributeTypeBase>;
    }
    abstract class IntegerAttributeTypeBase extends NumericAttributeTypeBase implements IIntegerAttributeTypeBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    interface IAutoNumberAttributeType extends IIntegerAttributeTypeBase {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): AutoNumberAttributeType;
        load(callback: (element: AutoNumberAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<AutoNumberAttributeType>;
    }
    class AutoNumberAttributeType extends IntegerAttributeTypeBase implements IAutoNumberAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AutoNumberAttributeType instance in the SDK and on the server.
         * The new AutoNumberAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createIn(container: Attribute): AutoNumberAttributeType;
        /**
         * Creates and returns a new AutoNumberAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AutoNumberAttributeType;
    }
    interface IBinaryAttributeType extends IAttributeType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): BinaryAttributeType;
        load(callback: (element: BinaryAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<BinaryAttributeType>;
    }
    class BinaryAttributeType extends AttributeType implements IBinaryAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BinaryAttributeType instance in the SDK and on the server.
         * The new BinaryAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createIn(container: Attribute): BinaryAttributeType;
        /**
         * Creates and returns a new BinaryAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BinaryAttributeType;
    }
    interface IBooleanAttributeType extends IAttributeType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): BooleanAttributeType;
        load(callback: (element: BooleanAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<BooleanAttributeType>;
    }
    class BooleanAttributeType extends AttributeType implements IBooleanAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BooleanAttributeType instance in the SDK and on the server.
         * The new BooleanAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createIn(container: Attribute): BooleanAttributeType;
        /**
         * Creates and returns a new BooleanAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BooleanAttributeType;
    }
    /**
     * In version 6.6.0: added public
     */
    interface IValueType extends internal.IElement {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): ValueType;
        load(callback: (element: ValueType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ValueType>;
    }
    /**
     * In version 6.6.0: added public
     */
    abstract class ValueType extends internal.Element implements IValueType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 6.6.0: added public
     */
    interface ICalculatedValue extends IValueType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): CalculatedValue;
        load(callback: (element: CalculatedValue) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CalculatedValue>;
    }
    /**
     * In version 6.6.0: added public
     */
    class CalculatedValue extends ValueType implements ICalculatedValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        microflow: microflows.IMicroflow | null;
        readonly microflowQualifiedName: string | null;
        passEntity: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CalculatedValue instance in the SDK and on the server.
         * The new CalculatedValue will be automatically stored in the 'value' property
         * of the parent Attribute element passed as argument.
         */
        static createIn(container: Attribute): CalculatedValue;
        /**
         * Creates and returns a new CalculatedValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CalculatedValue;
    }
    interface ICrossAssociation extends IAssociationBase {
        readonly model: IModel;
        readonly containerAsDomainModel: IDomainModel;
        /**
         * This property is required and cannot be set to null.
         */
        readonly child: IEntity;
        readonly childQualifiedName: string;
        asLoaded(): CrossAssociation;
        load(callback: (element: CrossAssociation) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CrossAssociation>;
    }
    class CrossAssociation extends AssociationBase implements ICrossAssociation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDomainModel: DomainModel;
        child: IEntity;
        readonly childQualifiedName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CrossAssociation instance in the SDK and on the server.
         * The new CrossAssociation will be automatically stored in the 'crossAssociations' property
         * of the parent DomainModel element passed as argument.
         */
        static createIn(container: DomainModel): CrossAssociation;
        /**
         * Creates and returns a new CrossAssociation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CrossAssociation;
    }
    interface IDecimalAttributeTypeBase extends INumericAttributeTypeBase {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): DecimalAttributeTypeBase;
        load(callback: (element: DecimalAttributeTypeBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DecimalAttributeTypeBase>;
    }
    abstract class DecimalAttributeTypeBase extends NumericAttributeTypeBase implements IDecimalAttributeTypeBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    interface IFloatAttributeTypeBase extends IDecimalAttributeTypeBase {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): FloatAttributeTypeBase;
        load(callback: (element: FloatAttributeTypeBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<FloatAttributeTypeBase>;
    }
    abstract class FloatAttributeTypeBase extends DecimalAttributeTypeBase implements IFloatAttributeTypeBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 6.0.0: deprecated
     */
    interface ICurrencyAttributeType extends IFloatAttributeTypeBase {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): CurrencyAttributeType;
        load(callback: (element: CurrencyAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CurrencyAttributeType>;
    }
    /**
     * In version 6.0.0: deprecated
     */
    class CurrencyAttributeType extends FloatAttributeTypeBase implements ICurrencyAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CurrencyAttributeType instance in the SDK and on the server.
         * The new CurrencyAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createIn(container: Attribute): CurrencyAttributeType;
        /**
         * Creates and returns a new CurrencyAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CurrencyAttributeType;
    }
    interface IDateTimeAttributeType extends IAttributeType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): DateTimeAttributeType;
        load(callback: (element: DateTimeAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DateTimeAttributeType>;
    }
    class DateTimeAttributeType extends AttributeType implements IDateTimeAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        localizeDate: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DateTimeAttributeType instance in the SDK and on the server.
         * The new DateTimeAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createIn(container: Attribute): DateTimeAttributeType;
        /**
         * Creates and returns a new DateTimeAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DateTimeAttributeType;
    }
    interface IDecimalAttributeType extends IDecimalAttributeTypeBase {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): DecimalAttributeType;
        load(callback: (element: DecimalAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DecimalAttributeType>;
    }
    class DecimalAttributeType extends DecimalAttributeTypeBase implements IDecimalAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DecimalAttributeType instance in the SDK and on the server.
         * The new DecimalAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createIn(container: Attribute): DecimalAttributeType;
        /**
         * Creates and returns a new DecimalAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DecimalAttributeType;
    }
    /**
     * In version 7.11.0: introduced
     */
    abstract class EntityRef extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetValue: customwidgets.WidgetValue;
        readonly containerAsEntityWidget: documenttemplates.EntityWidget;
        readonly containerAsMemberRef: MemberRef;
        readonly containerAsCreateObjectClientAction: pages.CreateObjectClientAction;
        readonly containerAsEntityPathSource: pages.EntityPathSource;
        readonly containerAsNewButton: pages.NewButton;
        readonly containerAsReferenceSetSelector: pages.ReferenceSetSelector;
        readonly containerAsSelectorXPathSource: pages.SelectorXPathSource;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 7.11.0: introduced
     */
    class DirectEntityRef extends EntityRef {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetValue: customwidgets.WidgetValue;
        readonly containerAsEntityWidget: documenttemplates.EntityWidget;
        readonly containerAsCreateObjectClientAction: pages.CreateObjectClientAction;
        readonly containerAsEntityPathSource: pages.EntityPathSource;
        readonly containerAsNewButton: pages.NewButton;
        readonly containerAsReferenceSetSelector: pages.ReferenceSetSelector;
        readonly containerAsSelectorXPathSource: pages.SelectorXPathSource;
        entity: IEntity;
        readonly entityQualifiedName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInWidgetValueUnderEntityRef(container: customwidgets.WidgetValue): DirectEntityRef;
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent documenttemplates.EntityWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInEntityWidgetUnderEntityRef(container: documenttemplates.EntityWidget): DirectEntityRef;
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent pages.CreateObjectClientAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInCreateObjectClientActionUnderEntityRef(container: pages.CreateObjectClientAction): DirectEntityRef;
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent pages.EntityPathSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInEntityPathSourceUnderEntityRef(container: pages.EntityPathSource): DirectEntityRef;
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent pages.NewButton element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 to 7.16.0
         */
        static createInNewButtonUnderEntityRef(container: pages.NewButton): DirectEntityRef;
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'constrainedByRefs' property
         * of the parent pages.ReferenceSetSelector element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInReferenceSetSelectorUnderConstrainedByRefs(container: pages.ReferenceSetSelector): DirectEntityRef;
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * The new DirectEntityRef will be automatically stored in the 'constrainedByRefs' property
         * of the parent pages.SelectorXPathSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInSelectorXPathSourceUnderConstrainedByRefs(container: pages.SelectorXPathSource): DirectEntityRef;
        /**
         * Creates and returns a new DirectEntityRef instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DirectEntityRef;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/domain-model relevant section in reference guide}
     */
    interface IDomainModel extends projects.IModuleDocument {
        readonly model: IModel;
        readonly containerAsModule: projects.IModule;
        readonly entities: internal.IList<IEntity>;
        readonly associations: internal.IList<IAssociation>;
        readonly crossAssociations: internal.IList<ICrossAssociation>;
        asLoaded(): DomainModel;
        load(callback: (element: DomainModel) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DomainModel>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/domain-model relevant section in reference guide}
     */
    class DomainModel extends projects.ModuleDocument implements IDomainModel {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsModule: projects.Module;
        documentation: string;
        readonly entities: internal.IList<Entity>;
        readonly annotations: internal.IList<Annotation>;
        readonly associations: internal.IList<Association>;
        readonly crossAssociations: internal.IList<CrossAssociation>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IModule);
        /**
         * Creates a new DomainModel unit in the SDK and on the server.
         * Expects one argument, the projects.IModule in which this unit is contained.
         */
        static createIn(container: projects.IModule): DomainModel;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/entities relevant section in reference guide}
     */
    interface IEntity extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsDomainModel: IDomainModel;
        readonly name: string;
        /**
         * This property is required and cannot be set to null.
         */
        readonly generalization: IGeneralizationBase;
        readonly attributes: internal.IList<IAttribute>;
        /**
         * In version 8.2.0: added public
         * In version 7.17.0: introduced
         */
        readonly isRemote: boolean;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.2.0: introduced
         */
        readonly remoteSourceDocument: IRemoteEntitySourceDocument | null;
        readonly remoteSourceDocumentQualifiedName: string | null;
        asLoaded(): Entity;
        load(callback: (element: Entity) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Entity>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/entities relevant section in reference guide}
     */
    class Entity extends internal.Element implements IEntity {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsDomainModel: DomainModel;
        name: string;
        dataStorageGuid: string;
        location: common.IPoint;
        documentation: string;
        generalization: GeneralizationBase;
        readonly attributes: internal.IList<Attribute>;
        readonly validationRules: internal.IList<ValidationRule>;
        readonly eventHandlers: internal.IList<EventHandler>;
        readonly indexes: internal.IList<Index>;
        readonly accessRules: internal.IList<AccessRule>;
        image: images.IImage | null;
        readonly imageQualifiedName: string | null;
        /**
         * In version 8.2.0: added public
         * In version 7.17.0: introduced
         */
        isRemote: boolean;
        /**
         * In version 7.17.0: introduced
         */
        remoteSource: string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * In version 8.2.0: introduced
         */
        remoteSourceDocument: IRemoteEntitySourceDocument | null;
        readonly remoteSourceDocumentQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Entity instance in the SDK and on the server.
         * The new Entity will be automatically stored in the 'entities' property
         * of the parent DomainModel element passed as argument.
         */
        static createIn(container: DomainModel): Entity;
        /**
         * Creates and returns a new Entity instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Entity;
        readonly qualifiedName: string | null;
    }
    /**
     * In version 7.11.0: introduced
     */
    class EntityRefStep extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsIndirectEntityRef: IndirectEntityRef;
        association: IAssociationBase;
        readonly associationQualifiedName: string;
        destinationEntity: IEntity;
        readonly destinationEntityQualifiedName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EntityRefStep instance in the SDK and on the server.
         * The new EntityRefStep will be automatically stored in the 'steps' property
         * of the parent IndirectEntityRef element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createIn(container: IndirectEntityRef): EntityRefStep;
        /**
         * Creates and returns a new EntityRefStep instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EntityRefStep;
    }
    interface IEnumerationAttributeType extends IAttributeType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        /**
         * This property is required and cannot be set to null.
         */
        readonly enumeration: enumerations.IEnumeration;
        readonly enumerationQualifiedName: string;
        asLoaded(): EnumerationAttributeType;
        load(callback: (element: EnumerationAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EnumerationAttributeType>;
    }
    class EnumerationAttributeType extends AttributeType implements IEnumerationAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        enumeration: enumerations.IEnumeration;
        readonly enumerationQualifiedName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EnumerationAttributeType instance in the SDK and on the server.
         * The new EnumerationAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createIn(container: Attribute): EnumerationAttributeType;
        /**
         * Creates and returns a new EnumerationAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EnumerationAttributeType;
    }
    abstract class RuleInfo extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsValidationRule: ValidationRule;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    class EqualsToRuleInfo extends RuleInfo {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsValidationRule: ValidationRule;
        useValue: boolean;
        equalsToValue: string;
        equalsToAttribute: IAttribute | null;
        readonly equalsToAttributeQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EqualsToRuleInfo instance in the SDK and on the server.
         * The new EqualsToRuleInfo will be automatically stored in the 'ruleInfo' property
         * of the parent ValidationRule element passed as argument.
         */
        static createIn(container: ValidationRule): EqualsToRuleInfo;
        /**
         * Creates and returns a new EqualsToRuleInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EqualsToRuleInfo;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/event-handlers relevant section in reference guide}
     */
    class EventHandler extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsEntity: Entity;
        moment: ActionMoment;
        event: EventType;
        microflow: microflows.IMicroflow | null;
        readonly microflowQualifiedName: string | null;
        raiseErrorOnFalse: boolean;
        passEventObject: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EventHandler instance in the SDK and on the server.
         * The new EventHandler will be automatically stored in the 'eventHandlers' property
         * of the parent Entity element passed as argument.
         */
        static createIn(container: Entity): EventHandler;
        /**
         * Creates and returns a new EventHandler instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EventHandler;
    }
    /**
     * In version 6.0.0: deprecated
     */
    interface IFloatAttributeType extends IFloatAttributeTypeBase {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): FloatAttributeType;
        load(callback: (element: FloatAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<FloatAttributeType>;
    }
    /**
     * In version 6.0.0: deprecated
     */
    class FloatAttributeType extends FloatAttributeTypeBase implements IFloatAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new FloatAttributeType instance in the SDK and on the server.
         * The new FloatAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createIn(container: Attribute): FloatAttributeType;
        /**
         * Creates and returns a new FloatAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): FloatAttributeType;
    }
    interface IGeneralizationBase extends internal.IElement {
        readonly model: IModel;
        readonly containerAsEntity: IEntity;
        asLoaded(): GeneralizationBase;
        load(callback: (element: GeneralizationBase) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<GeneralizationBase>;
    }
    abstract class GeneralizationBase extends internal.Element implements IGeneralizationBase {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsEntity: Entity;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    interface IGeneralization extends IGeneralizationBase {
        readonly model: IModel;
        readonly containerAsEntity: IEntity;
        /**
         * This property is required and cannot be set to null.
         */
        readonly generalization: IEntity;
        readonly generalizationQualifiedName: string;
        asLoaded(): Generalization;
        load(callback: (element: Generalization) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Generalization>;
    }
    class Generalization extends GeneralizationBase implements IGeneralization {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsEntity: Entity;
        generalization: IEntity;
        readonly generalizationQualifiedName: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Generalization instance in the SDK and on the server.
         * The new Generalization will be automatically stored in the 'generalization' property
         * of the parent Entity element passed as argument.
         */
        static createIn(container: Entity): Generalization;
        /**
         * Creates and returns a new Generalization instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Generalization;
    }
    interface IHashedStringAttributeType extends IAttributeType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): HashedStringAttributeType;
        load(callback: (element: HashedStringAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<HashedStringAttributeType>;
    }
    class HashedStringAttributeType extends AttributeType implements IHashedStringAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new HashedStringAttributeType instance in the SDK and on the server.
         * The new HashedStringAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createIn(container: Attribute): HashedStringAttributeType;
        /**
         * Creates and returns a new HashedStringAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): HashedStringAttributeType;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/indexes relevant section in reference guide}
     */
    class Index extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsEntity: Entity;
        dataStorageGuid: string;
        readonly attributes: internal.IList<IndexedAttribute>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Index instance in the SDK and on the server.
         * The new Index will be automatically stored in the 'indexes' property
         * of the parent Entity element passed as argument.
         */
        static createIn(container: Entity): Index;
        /**
         * Creates and returns a new Index instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Index;
    }
    class IndexedAttribute extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsIndex: Index;
        type: IndexedAttributeType;
        attribute: Attribute | null;
        /**
         * In version 7.14.0: introduced
         */
        ascending: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new IndexedAttribute instance in the SDK and on the server.
         * The new IndexedAttribute will be automatically stored in the 'attributes' property
         * of the parent Index element passed as argument.
         */
        static createIn(container: Index): IndexedAttribute;
        /**
         * Creates and returns a new IndexedAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): IndexedAttribute;
    }
    /**
     * In version 7.11.0: introduced
     */
    class IndirectEntityRef extends EntityRef {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsWidgetValue: customwidgets.WidgetValue;
        readonly containerAsEntityWidget: documenttemplates.EntityWidget;
        readonly containerAsMemberRef: MemberRef;
        readonly containerAsCreateObjectClientAction: pages.CreateObjectClientAction;
        readonly containerAsEntityPathSource: pages.EntityPathSource;
        readonly containerAsNewButton: pages.NewButton;
        readonly containerAsReferenceSetSelector: pages.ReferenceSetSelector;
        readonly containerAsSelectorXPathSource: pages.SelectorXPathSource;
        readonly steps: internal.IList<EntityRefStep>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent customwidgets.WidgetValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInWidgetValueUnderEntityRef(container: customwidgets.WidgetValue): IndirectEntityRef;
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent documenttemplates.EntityWidget element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInEntityWidgetUnderEntityRef(container: documenttemplates.EntityWidget): IndirectEntityRef;
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent MemberRef element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInMemberRefUnderEntityRef(container: MemberRef): IndirectEntityRef;
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent pages.CreateObjectClientAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInCreateObjectClientActionUnderEntityRef(container: pages.CreateObjectClientAction): IndirectEntityRef;
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent pages.EntityPathSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInEntityPathSourceUnderEntityRef(container: pages.EntityPathSource): IndirectEntityRef;
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'entityRef' property
         * of the parent pages.NewButton element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 to 7.16.0
         */
        static createInNewButtonUnderEntityRef(container: pages.NewButton): IndirectEntityRef;
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'constrainedByRefs' property
         * of the parent pages.ReferenceSetSelector element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInReferenceSetSelectorUnderConstrainedByRefs(container: pages.ReferenceSetSelector): IndirectEntityRef;
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * The new IndirectEntityRef will be automatically stored in the 'constrainedByRefs' property
         * of the parent pages.SelectorXPathSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.11.0 and higher
         */
        static createInSelectorXPathSourceUnderConstrainedByRefs(container: pages.SelectorXPathSource): IndirectEntityRef;
        /**
         * Creates and returns a new IndirectEntityRef instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): IndirectEntityRef;
    }
    interface IIntegerAttributeType extends IIntegerAttributeTypeBase {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): IntegerAttributeType;
        load(callback: (element: IntegerAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<IntegerAttributeType>;
    }
    class IntegerAttributeType extends IntegerAttributeTypeBase implements IIntegerAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new IntegerAttributeType instance in the SDK and on the server.
         * The new IntegerAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createIn(container: Attribute): IntegerAttributeType;
        /**
         * Creates and returns a new IntegerAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): IntegerAttributeType;
    }
    interface ILongAttributeType extends IIntegerAttributeTypeBase {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): LongAttributeType;
        load(callback: (element: LongAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<LongAttributeType>;
    }
    class LongAttributeType extends IntegerAttributeTypeBase implements ILongAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new LongAttributeType instance in the SDK and on the server.
         * The new LongAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createIn(container: Attribute): LongAttributeType;
        /**
         * Creates and returns a new LongAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): LongAttributeType;
    }
    class MaxLengthRuleInfo extends RuleInfo {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsValidationRule: ValidationRule;
        maxLength: number;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MaxLengthRuleInfo instance in the SDK and on the server.
         * The new MaxLengthRuleInfo will be automatically stored in the 'ruleInfo' property
         * of the parent ValidationRule element passed as argument.
         */
        static createIn(container: ValidationRule): MaxLengthRuleInfo;
        /**
         * Creates and returns a new MaxLengthRuleInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MaxLengthRuleInfo;
    }
    class MemberAccess extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAccessRule: AccessRule;
        attribute: IAttribute | null;
        readonly attributeQualifiedName: string | null;
        association: IAssociationBase | null;
        readonly associationQualifiedName: string | null;
        accessRights: MemberAccessRights;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MemberAccess instance in the SDK and on the server.
         * The new MemberAccess will be automatically stored in the 'memberAccesses' property
         * of the parent AccessRule element passed as argument.
         */
        static createIn(container: AccessRule): MemberAccess;
        /**
         * Creates and returns a new MemberAccess instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MemberAccess;
    }
    interface INoGeneralization extends IGeneralizationBase {
        readonly model: IModel;
        readonly containerAsEntity: IEntity;
        /**
         * In version 8.2.0: added public
         */
        readonly hasChangedDate: boolean;
        /**
         * In version 8.2.0: added public
         */
        readonly hasCreatedDate: boolean;
        /**
         * In version 8.2.0: added public
         */
        readonly hasOwner: boolean;
        /**
         * In version 8.2.0: added public
         */
        readonly hasChangedBy: boolean;
        readonly persistable: boolean;
        asLoaded(): NoGeneralization;
        load(callback: (element: NoGeneralization) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<NoGeneralization>;
    }
    class NoGeneralization extends GeneralizationBase implements INoGeneralization {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsEntity: Entity;
        /**
         * In version 8.2.0: added public
         */
        hasChangedDate: boolean;
        /**
         * In version 8.2.0: added public
         */
        hasCreatedDate: boolean;
        /**
         * In version 8.2.0: added public
         */
        hasOwner: boolean;
        /**
         * In version 8.2.0: added public
         */
        hasChangedBy: boolean;
        persistable: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NoGeneralization instance in the SDK and on the server.
         * The new NoGeneralization will be automatically stored in the 'generalization' property
         * of the parent Entity element passed as argument.
         */
        static createIn(container: Entity): NoGeneralization;
        /**
         * Creates and returns a new NoGeneralization instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NoGeneralization;
    }
    class RangeRuleInfo extends RuleInfo {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsValidationRule: ValidationRule;
        typeOfRange: RangeType;
        useMinValue: boolean;
        useMaxValue: boolean;
        minValue: string;
        maxValue: string;
        minAttribute: IAttribute | null;
        readonly minAttributeQualifiedName: string | null;
        maxAttribute: IAttribute | null;
        readonly maxAttributeQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RangeRuleInfo instance in the SDK and on the server.
         * The new RangeRuleInfo will be automatically stored in the 'ruleInfo' property
         * of the parent ValidationRule element passed as argument.
         */
        static createIn(container: ValidationRule): RangeRuleInfo;
        /**
         * Creates and returns a new RangeRuleInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RangeRuleInfo;
    }
    class RegExRuleInfo extends RuleInfo {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsValidationRule: ValidationRule;
        regularExpression: regularexpressions.IRegularExpression | null;
        readonly regularExpressionQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RegExRuleInfo instance in the SDK and on the server.
         * The new RegExRuleInfo will be automatically stored in the 'ruleInfo' property
         * of the parent ValidationRule element passed as argument.
         */
        static createIn(container: ValidationRule): RegExRuleInfo;
        /**
         * Creates and returns a new RegExRuleInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RegExRuleInfo;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.2.0: introduced
     */
    interface IRemoteEntitySourceDocument extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): RemoteEntitySourceDocument;
        load(callback: (element: RemoteEntitySourceDocument) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<RemoteEntitySourceDocument>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * In version 8.2.0: introduced
     */
    abstract class RemoteEntitySourceDocument extends projects.Document implements IRemoteEntitySourceDocument {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
    }
    class RequiredRuleInfo extends RuleInfo {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsValidationRule: ValidationRule;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RequiredRuleInfo instance in the SDK and on the server.
         * The new RequiredRuleInfo will be automatically stored in the 'ruleInfo' property
         * of the parent ValidationRule element passed as argument.
         */
        static createIn(container: ValidationRule): RequiredRuleInfo;
        /**
         * Creates and returns a new RequiredRuleInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RequiredRuleInfo;
    }
    /**
     * In version 6.6.0: added public
     */
    interface IStoredValue extends IValueType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): StoredValue;
        load(callback: (element: StoredValue) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<StoredValue>;
    }
    /**
     * In version 6.6.0: added public
     */
    class StoredValue extends ValueType implements IStoredValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        defaultValue: string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StoredValue instance in the SDK and on the server.
         * The new StoredValue will be automatically stored in the 'value' property
         * of the parent Attribute element passed as argument.
         */
        static createIn(container: Attribute): StoredValue;
        /**
         * Creates and returns a new StoredValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StoredValue;
    }
    interface IStringAttributeType extends IAttributeType {
        readonly model: IModel;
        readonly containerAsAttribute: IAttribute;
        asLoaded(): StringAttributeType;
        load(callback: (element: StringAttributeType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<StringAttributeType>;
    }
    class StringAttributeType extends AttributeType implements IStringAttributeType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsAttribute: Attribute;
        length: number;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StringAttributeType instance in the SDK and on the server.
         * The new StringAttributeType will be automatically stored in the 'type' property
         * of the parent Attribute element passed as argument.
         */
        static createIn(container: Attribute): StringAttributeType;
        /**
         * Creates and returns a new StringAttributeType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StringAttributeType;
    }
    class UniqueRuleInfo extends RuleInfo {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsValidationRule: ValidationRule;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new UniqueRuleInfo instance in the SDK and on the server.
         * The new UniqueRuleInfo will be automatically stored in the 'ruleInfo' property
         * of the parent ValidationRule element passed as argument.
         */
        static createIn(container: ValidationRule): UniqueRuleInfo;
        /**
         * Creates and returns a new UniqueRuleInfo instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): UniqueRuleInfo;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/validation-rules relevant section in reference guide}
     */
    class ValidationRule extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsEntity: Entity;
        attribute: IAttribute;
        readonly attributeQualifiedName: string;
        errorMessage: texts.Text;
        ruleInfo: RuleInfo;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ValidationRule instance in the SDK and on the server.
         * The new ValidationRule will be automatically stored in the 'validationRules' property
         * of the parent Entity element passed as argument.
         */
        static createIn(container: Entity): ValidationRule;
        /**
         * Creates and returns a new ValidationRule instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ValidationRule;
    }
}
import { customwidgets } from "./customwidgets";
import { documenttemplates } from "./documenttemplates";
import { enumerations } from "./enumerations";
import { expressions } from "./expressions";
import { images } from "./images";
import { microflows } from "./microflows";
import { pages } from "./pages";
import { regularexpressions } from "./regularexpressions";
import { security } from "./security";
import { texts } from "./texts";
import { IModel } from "./base-model";
