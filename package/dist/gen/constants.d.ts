import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace constants {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Constants`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide7/constants relevant section in reference guide}
     */
    interface IConstant extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): Constant;
        load(callback: (element: Constant) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Constant>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/constants relevant section in reference guide}
     */
    class Constant extends projects.Document implements IConstant {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        dataType: string;
        /**
         * In version 7.9.0: introduced
         */
        type: datatypes.DataType;
        defaultValue: string;
        /**
         * In version 8.2.0: introduced
         */
        exposedToClient: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new Constant unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): Constant;
    }
}
import { datatypes } from "./datatypes";
import { IModel } from "./base-model";
