"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = require("../EventEmitter");
class ModelEventReceiver {
    constructor(workingCopyId, client, errorHandler) {
        this.workingCopyId = workingCopyId;
        this.client = client;
        this.errorHandler = errorHandler;
        this.eventEmitter = new EventEmitter_1.EventEmitter();
        this.eventSource = null;
    }
    onNewModelEvent(callback) {
        this.eventEmitter.on("NewModelEvent", callback);
    }
    start(lastEventId) {
        if (this.eventSource) {
            return;
        }
        this.eventSource = this.client.getModelEventSource(this.workingCopyId, lastEventId);
        this.eventSource.onerror = (e) => console.error(e);
        this.eventSource.addEventListener("deltas", (event) => {
            try {
                const modelEvent = JSON.parse(event.data);
                modelEvent.deltas.forEach(delta => {
                    if (!delta) {
                        throw new Error("Invalid delta: " + delta);
                    }
                });
                this.eventEmitter.emit("NewModelEvent", modelEvent);
            }
            catch (err) {
                this.errorHandler.handleError(`An error occurred while processing the incoming event: ${err.message}`, undefined);
            }
        });
    }
    stop() {
        if (this.eventSource) {
            this.eventSource.close();
            this.eventSource = null;
        }
    }
    get isRunning() {
        return !!this.eventSource;
    }
}
exports.ModelEventReceiver = ModelEventReceiver;
//# sourceMappingURL=ModelEventReceiver.js.map