import { Delta } from "../deltas";
export interface IModelEvent {
    id: number;
    type: string;
    deltas: Delta[];
}
