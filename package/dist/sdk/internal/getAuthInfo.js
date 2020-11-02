"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthInfo = void 0;
function getAuthInfo(config) {
    let auth;
    const backendCredentials = config.credentials;
    const sdkCredentials = config.credentials;
    if (config.credentials && config.credentials.username) {
        auth = { username: config.credentials.username, password: "" };
        if (backendCredentials.password) {
            // Backend credentials
            auth.password = backendCredentials.password;
            if (backendCredentials.openid) {
                auth.openid = backendCredentials.openid;
            }
        }
        else if (sdkCredentials.apikey) {
            // Api key
            auth.password = sdkCredentials.apikey;
        }
        else {
            throw new Error("Expected either an API key or password (for selected users only)");
        }
    }
    else {
        throw new Error("No credentials provided");
    }
    return auth;
}
exports.getAuthInfo = getAuthInfo;
//# sourceMappingURL=getAuthInfo.js.map