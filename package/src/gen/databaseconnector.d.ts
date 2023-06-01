import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
import { microflows } from "./microflows";
export declare namespace databaseconnector {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `DatabaseConnector`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.22.0: introduced
     */
    class ColumnMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsTableMapping(): TableMapping;
        get columnName(): string;
        set columnName(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get sqlDataType(): SqlDataType | null;
        set sqlDataType(newValue: SqlDataType | null);
        get attribute(): domainmodels.IAttribute;
        set attribute(newValue: domainmodels.IAttribute);
        get attributeQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ColumnMapping instance in the SDK and on the server.
         * The new ColumnMapping will be automatically stored in the 'columns' property
         * of the parent TableMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createIn(container: TableMapping): ColumnMapping;
        /**
         * Creates and returns a new ColumnMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ColumnMapping;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: deleted
     * In version 9.22.0: introduced
     */
    class ConnectionDetails extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseConnection(): DatabaseConnection;
        get host(): string;
        set host(newValue: string);
        get port(): number;
        set port(newValue: number);
        get databaseName(): string;
        set databaseName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConnectionDetails instance in the SDK and on the server.
         * The new ConnectionDetails will be automatically stored in the 'connectionDetails' property
         * of the parent DatabaseConnection element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 to 9.24.0
         */
        static createIn(container: DatabaseConnection): ConnectionDetails;
        /**
         * Creates and returns a new ConnectionDetails instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConnectionDetails;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: introduced
     */
    abstract class ConnectionInput extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseConnection(): DatabaseConnection;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 10.0.0: introduced
     */
    class ConnectionParts extends ConnectionInput {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseConnection(): DatabaseConnection;
        get host(): string;
        set host(newValue: string);
        get port(): number;
        set port(newValue: number);
        get databaseName(): string;
        set databaseName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConnectionParts instance in the SDK and on the server.
         * The new ConnectionParts will be automatically stored in the 'connectionInput' property
         * of the parent DatabaseConnection element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createIn(container: DatabaseConnection): ConnectionParts;
        /**
         * Creates and returns a new ConnectionParts instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConnectionParts;
    }
    /**
     * In version 10.0.0: introduced
     */
    class ConnectionString extends ConnectionInput {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseConnection(): DatabaseConnection;
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConnectionString instance in the SDK and on the server.
         * The new ConnectionString will be automatically stored in the 'connectionInput' property
         * of the parent DatabaseConnection element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createIn(container: DatabaseConnection): ConnectionString;
        /**
         * Creates and returns a new ConnectionString instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConnectionString;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.22.0: introduced
     */
    interface IDatabaseConnection extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        readonly queries: internal.IList<IDatabaseQuery>;
        asLoaded(): DatabaseConnection;
        load(callback: (element: DatabaseConnection) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DatabaseConnection>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.22.0: introduced
     */
    class DatabaseConnection extends projects.Document implements IDatabaseConnection {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get databaseType(): string;
        set databaseType(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 10.0.0: introduced
         */
        get connectionInput(): ConnectionInput | null;
        set connectionInput(newValue: ConnectionInput | null);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 10.0.0: deleted
         */
        get connectionDetails(): ConnectionDetails | null;
        set connectionDetails(newValue: ConnectionDetails | null);
        get connectionString(): constants.IConstant | null;
        set connectionString(newValue: constants.IConstant | null);
        get connectionStringQualifiedName(): string | null;
        get userName(): constants.IConstant | null;
        set userName(newValue: constants.IConstant | null);
        get userNameQualifiedName(): string | null;
        get password(): constants.IConstant | null;
        set password(newValue: constants.IConstant | null);
        get passwordQualifiedName(): string | null;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 10.0.0: introduced
         */
        get lastSelectedQuery(): IDatabaseQuery | null;
        set lastSelectedQuery(newValue: IDatabaseQuery | null);
        get lastSelectedQueryQualifiedName(): string | null;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get queries(): internal.IList<DatabaseQuery>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new DatabaseConnection unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): DatabaseConnection;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.22.0: introduced
     */
    interface IDatabaseQuery extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsDatabaseConnection: IDatabaseConnection;
        readonly name: string;
        asLoaded(): DatabaseQuery;
        load(callback: (element: DatabaseQuery) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DatabaseQuery>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.22.0: introduced
     */
    class DatabaseQuery extends internal.Element<IModel> implements IDatabaseQuery {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseConnection(): DatabaseConnection;
        get name(): string;
        set name(newValue: string);
        get query(): string;
        set query(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get tableMapping(): TableMapping;
        set tableMapping(newValue: TableMapping);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get parameters(): internal.IList<QueryParameter>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DatabaseQuery instance in the SDK and on the server.
         * The new DatabaseQuery will be automatically stored in the 'queries' property
         * of the parent DatabaseConnection element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createIn(container: DatabaseConnection): DatabaseQuery;
        /**
         * Creates and returns a new DatabaseQuery instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DatabaseQuery;
        get qualifiedName(): string | null;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class ExecuteDatabaseQueryAction extends microflows.MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): microflows.ActionActivity;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get query(): IDatabaseQuery;
        set query(newValue: IDatabaseQuery);
        get queryQualifiedName(): string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get parameterMappings(): internal.IList<QueryParameterMapping>;
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExecuteDatabaseQueryAction instance in the SDK and on the server.
         * The new ExecuteDatabaseQueryAction will be automatically stored in the 'action' property
         * of the parent microflows.ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createIn(container: microflows.ActionActivity): ExecuteDatabaseQueryAction;
        /**
         * Creates and returns a new ExecuteDatabaseQueryAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExecuteDatabaseQueryAction;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.22.0: introduced
     */
    abstract class SqlDataType extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsColumnMapping(): ColumnMapping;
        get containerAsQueryParameter(): QueryParameter;
        get dataTypeName(): string;
        set dataTypeName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.22.0: introduced
     */
    class LimitedLengthSqlDataType extends SqlDataType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsColumnMapping(): ColumnMapping;
        get containerAsQueryParameter(): QueryParameter;
        get length(): number;
        set length(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new LimitedLengthSqlDataType instance in the SDK and on the server.
         * The new LimitedLengthSqlDataType will be automatically stored in the 'sqlDataType' property
         * of the parent ColumnMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createInColumnMappingUnderSqlDataType(container: ColumnMapping): LimitedLengthSqlDataType;
        /**
         * Creates and returns a new LimitedLengthSqlDataType instance in the SDK and on the server.
         * The new LimitedLengthSqlDataType will be automatically stored in the 'sqlDataType' property
         * of the parent QueryParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createInQueryParameterUnderSqlDataType(container: QueryParameter): LimitedLengthSqlDataType;
        /**
         * Creates and returns a new LimitedLengthSqlDataType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): LimitedLengthSqlDataType;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.22.0: introduced
     */
    class QueryParameter extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseQuery(): DatabaseQuery;
        get parameterName(): string;
        set parameterName(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get sqlDataType(): SqlDataType | null;
        set sqlDataType(newValue: SqlDataType | null);
        get dataType(): datatypes.DataType | null;
        set dataType(newValue: datatypes.DataType | null);
        get defaultValue(): string;
        set defaultValue(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new QueryParameter instance in the SDK and on the server.
         * The new QueryParameter will be automatically stored in the 'parameters' property
         * of the parent DatabaseQuery element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createIn(container: DatabaseQuery): QueryParameter;
        /**
         * Creates and returns a new QueryParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): QueryParameter;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class QueryParameterMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsExecuteDatabaseQueryAction(): ExecuteDatabaseQueryAction;
        get parameterName(): string;
        set parameterName(newValue: string);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new QueryParameterMapping instance in the SDK and on the server.
         * The new QueryParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent ExecuteDatabaseQueryAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createIn(container: ExecuteDatabaseQueryAction): QueryParameterMapping;
        /**
         * Creates and returns a new QueryParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): QueryParameterMapping;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.22.0: introduced
     */
    class SimpleSqlDataType extends SqlDataType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsColumnMapping(): ColumnMapping;
        get containerAsQueryParameter(): QueryParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SimpleSqlDataType instance in the SDK and on the server.
         * The new SimpleSqlDataType will be automatically stored in the 'sqlDataType' property
         * of the parent ColumnMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createInColumnMappingUnderSqlDataType(container: ColumnMapping): SimpleSqlDataType;
        /**
         * Creates and returns a new SimpleSqlDataType instance in the SDK and on the server.
         * The new SimpleSqlDataType will be automatically stored in the 'sqlDataType' property
         * of the parent QueryParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createInQueryParameterUnderSqlDataType(container: QueryParameter): SimpleSqlDataType;
        /**
         * Creates and returns a new SimpleSqlDataType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SimpleSqlDataType;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.22.0: introduced
     */
    class TableMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseQuery(): DatabaseQuery;
        get tableName(): string;
        set tableName(newValue: string);
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get columns(): internal.IList<ColumnMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TableMapping instance in the SDK and on the server.
         * The new TableMapping will be automatically stored in the 'tableMapping' property
         * of the parent DatabaseQuery element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createIn(container: DatabaseQuery): TableMapping;
        /**
         * Creates and returns a new TableMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TableMapping;
    }
}
import { constants } from "./constants";
import { datatypes } from "./datatypes";
import { domainmodels } from "./domainmodels";
import { IModel } from "./base-model";
