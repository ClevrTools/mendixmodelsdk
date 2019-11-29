import { configuration } from "../configuration";
export interface IAuthInfo {
    username: string;
    password: string;
    openid?: string;
}
export declare function getAuthInfo(config: configuration.ISdkConfig): IAuthInfo;
