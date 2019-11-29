"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line
const WolfyEventEmitter = require("wolfy87-eventemitter");
class EventEmitter {
    constructor() {
        this.eventEmitter = new WolfyEventEmitter();
    }
    on(eventType, callback) {
        this.eventEmitter.on(eventType, callback);
    }
    emit(eventType, value) {
        this.eventEmitter.emitEvent(eventType, [value]);
    }
}
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=EventEmitter.js.map