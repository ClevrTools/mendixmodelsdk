import { IObservableValue } from "mobx";
import { AbstractProperty } from "./abstract-property";
import { AbstractElement, Element } from "../elements";
import { IList } from "../instances";
import { ModelUnit } from "../units";
import { IAbstractElementJson } from "../transport-interfaces";
import { Structure } from "../structures";
import { utils } from "../../utils";
/**
 * A property value that is a (model) element.
 * Will detect when children are moved, added, deleted and sends the appropriate deltas.
 */
export declare class PartProperty<T extends Element> extends AbstractProperty<T | null, IObservableValue<T | null>> {
    parent: AbstractElement;
    hasDefaultValue: boolean;
    get(): T | null;
    set(newValue: T | null): void;
    updateWithRawValue(value: IAbstractElementJson | null): void;
    updateElementContainer(unit: ModelUnit): void;
    detachValue(): void;
    dispose(): void;
    deepCopyInto(clone: Structure, idMap: utils.IMap<Structure>, unresolvedIdentifierFixers: ((idMap: utils.IMap<Structure>) => void)[]): void;
}
/**
 * A property value that is a list of (model) elements.
 * Will detect when children are moved, added, deleted and sends the appropriate deltas.
 */
export declare class PartListProperty<T extends Element> extends AbstractProperty<T[], IList<T>> {
    parent: AbstractElement;
    private _detaching;
    get(): IList<T>;
    updateWithRawValue(value: IAbstractElementJson[]): void;
    updateElementContainer(unit: ModelUnit): void;
    removeChild(child: T): boolean;
    detachChild(child: T): void;
    dispose(): void;
    deepCopyInto(clone: Structure, idMap: utils.IMap<Structure>, unresolvedIdentifierFixers: ((idMap: utils.IMap<Structure>) => void)[]): void;
}
