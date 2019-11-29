/*
The MIT License (MIT)

Copyright (c) 2015 - present Mendix BV

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./version"));
var Model_1 = require("./Model");
exports.Model = Model_1.Model;
__export(require("./gen/all-model-classes"));
__export(require("./gen/metamodelversion"));
__export(require("./sdk/utils"));
__export(require("./sdk/internal/properties"));
var internal_1 = require("./sdk/internal");
exports.Structure = internal_1.Structure;
exports.AbstractUnit = internal_1.AbstractUnit;
exports.AbstractElement = internal_1.AbstractElement;
exports.AbstractEnum = internal_1.AbstractEnum;
exports.Element = internal_1.Element;
exports.ModelUnit = internal_1.ModelUnit;
exports.StructuralUnit = internal_1.StructuralUnit;
exports.AbstractModel = internal_1.AbstractModel;
exports.Version = internal_1.Version;
exports.UndoManager = internal_1.UndoManager;
exports.UndoState = internal_1.UndoState;
exports.createElementFromJSON = internal_1.createElementFromJSON;
exports.ModelEventReceiver = internal_1.ModelEventReceiver;
var JavaScriptSerializer_1 = require("./sdk/extras/JavaScriptSerializer");
exports.JavaScriptSerializer = JavaScriptSerializer_1.JavaScriptSerializer;
var TransactionManager_1 = require("./sdk/internal/deltas/TransactionManager");
exports.Transaction = TransactionManager_1.Transaction;
exports.runInTransaction = TransactionManager_1.runInTransaction;
exports.beginTransaction = TransactionManager_1.beginTransaction;
//# sourceMappingURL=index.js.map