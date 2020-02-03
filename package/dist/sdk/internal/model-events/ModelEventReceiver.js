"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = require("../EventEmitter");
class ModelEventReceiver {
    constructor(workingCopyId, client, errorHandler) {
        this.workingCopyId = workingCopyId;
        this.client = client;
        this.errorHandler = errorHandler;
        this.deltaEventEmitter = new EventEmitter_1.EventEmitter();
        this.fileEventEmitter = new EventEmitter_1.EventEmitter();
        this.eventSource = null;
    }
    onDeltaEvent(callback) {
        this.deltaEventEmitter.on("DeltaEvent", callback);
    }
    onFileEvent(callback) {
        this.fileEventEmitter.on("FileEvent", callback);
    }
    start(lastEventId) {
        if (this.eventSource) {
            return;
        }
        this.eventSource = this.client.getModelEventSource(this.workingCopyId, lastEventId);
        this.eventSource.onerror = (e) => this.errorHandler.handleError(`We received an error event from the EventSource: ${JSON.stringify(e)}`, undefined);
        this.eventSource.addEventListener("deltas", (event) => {
            try {
                const deltaEvent = JSON.parse(event.data);
                deltaEvent.deltas.forEach(delta => {
                    if (!delta) {
                        throw new Error("Invalid delta: " + delta);
                    }
                });
                this.deltaEventEmitter.emit("DeltaEvent", deltaEvent);
            }
            catch (err) {
                this.errorHandler.handleError(`An error occurred while processing the incoming event: ${err.message}`, undefined);
            }
        });
        this.eventSource.addEventListener("fileChanges", (event) => {
            try {
                const fileEvent = JSON.parse(event.data);
                fileEvent.files.forEach(file => {
                    if (!file) {
                        throw new Error(`Invalid file: '${file}'`);
                    }
                });
                this.fileEventEmitter.emit("FileEvent", fileEvent);
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