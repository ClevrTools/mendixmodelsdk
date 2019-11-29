"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function promiseOrCallbacks(action, callback, errorCallback) {
    if (callback) {
        action(result => callback(result), errorCallback);
    }
    else {
        return new Promise(action);
    }
}
exports.promiseOrCallbacks = promiseOrCallbacks;
//# sourceMappingURL=utils.js.map