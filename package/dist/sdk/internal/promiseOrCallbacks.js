"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseOrCallbacks = void 0;
function promiseOrCallbacks(action, callback, errorCallback) {
    if (callback) {
        action(callback, errorCallback);
    }
    else {
        return new Promise(action);
    }
}
exports.promiseOrCallbacks = promiseOrCallbacks;
//# sourceMappingURL=promiseOrCallbacks.js.map