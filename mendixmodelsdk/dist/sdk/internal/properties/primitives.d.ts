import { IArrayWillChange, IArrayWillSplice, IObservableValue } from "mobx";
import { AbstractProperty } from "./abstract-property";
import { AbstractEnum, IList } from "../instances";
import { Structure, IStructureClass } from "../structures";
import { ILifeCycle } from "../version-checks";
/**
 * All primitive types.
 * Note: must match exactly with MxPrimitiveTypeEnum!
 */
export declare enum PrimitiveTypeEnum {
    Integer = 0,
    String = 1,
    Boolean = 2,
    Double = 3,
    DateTime = 4,
    Guid = 5,
    Point = 6,
    Size = 7,
    Color = 8,
    Blob = 9
}
export declare class PrimitiveProperty<T> extends AbstractProperty<T, IObservableValue<T>> {
    defaultValue: T;
    private primitiveType;
    get(): T;
    set(newValue: T): void;
    updateWithRawValue(value: T): void;
    protected getRawValue(value: T): any;
    private beforeChange;
    markCurrentValueAsDefault(): void;
    deepCopyInto(clone: Structure): void;
}
/**
 * Primitive-typed property values list.
 */
export declare class PrimitiveListProperty<T> extends AbstractProperty<T[], IList<T>> {
    private primitiveType;
    get(): IList<T>;
    updateWithRawValue(value: T[]): void;
    deepCopyInto(clone: Structure): void;
}
/**
 * A property value that is an enum literal.
 */
export declare class EnumProperty<T extends AbstractEnum> extends PrimitiveProperty<T> {
    private initialValue;
    protected enumType: new (key: string, lifeCycle: ILifeCycle) => AbstractEnum;
    constructor(declaredOn: IStructureClass, parent: Structure, name: string, initialValue: T, enumType: new (key: string, lifeCycle: ILifeCycle) => AbstractEnum);
    updateWithRawValue(value: any): void;
    getRawValue(value: T): string;
    set(value: T): void;
}
/**
 * A property value that is a list of enum literals.
 */
export declare class EnumListProperty<T extends AbstractEnum> extends PrimitiveListProperty<T> {
    private initialValue;
    protected enumType: new (key: string, lifeCycle: ILifeCycle) => AbstractEnum;
    constructor(declaredOn: IStructureClass, parent: Structure, name: string, initialValue: T[], enumType: new (key: string, lifeCycle: ILifeCycle) => AbstractEnum);
    updateWithRawValue(value: any[]): void;
}
export declare function sendListChangeDeltas<T, P>(property: AbstractProperty<T[], IList<P>> & {
    toRawChangeValue: (value: P) => any;
}, change: IArrayWillSplice<P> | IArrayWillChange<P>): void;
