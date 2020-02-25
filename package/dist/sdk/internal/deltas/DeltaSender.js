"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const deltaUtils_1 = require("./deltaUtils");
class DeltaSender {
    constructor(model, flushCallback, errorCallback) {
        this.model = model;
        this.flushCallback = flushCallback;
        this.errorCallback = errorCallback;
        this.isClosing = false;
        this.hasError = false;
        this.queue = [];
        this.pending = false;
    }
    closeConnection() {
        if (this.isClosing) {
            throw new Error("closeConnection already called");
        }
        this.isClosing = true;
        this.flush();
    }
    flush() {
        if (!this.pending) {
            this.flushCallback();
        }
    }
    scheduleDeltas(deltas) {
        if (this.isClosing) {
            throw new Error("Deltas rejected; connection has closed");
        }
        if (this.hasError) {
            throw new Error("Deltas rejected; an error occurred earlier while sending deltas");
        }
        this.queue.push(deltas);
        if (!this.pending) {
            this.pending = true;
            // We're not interested in the result of this Promise. It already calls the callbacks when it's done.
            /* tslint:disable-next-line:no-floating-promises */
            this.processQueue();
        }
    }
    processQueue() {
        return __awaiter(this, void 0, void 0, function* () {
            while (this.queue.length > 0 && !this.hasError) {
                try {
                    const lastEventId = yield this.sendDeltas(deltaUtils_1.removeUselessDeltas(this.queue.shift()));
                    this.model.setlastEventId(lastEventId);
                }
                catch (error) {
                    this.hasError = true;
                    this.errorCallback(error);
                }
            }
            this.pending = false;
            if (!this.hasError) {
                this.flushCallback();
            }
        });
    }
    sendDeltas(deltas) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.model._client.sendDeltas(this.model.workingCopy.id, deltas, result => {
                    if (result.firstError) {
                        reject(result.firstError);
                    }
                    else {
                        resolve(result.eventId);
                    }
                }, err => {
                    reject(err);
                });
            });
        });
    }
}
exports.DeltaSender = DeltaSender;
//# sourceMappingURL=DeltaSender.js.map