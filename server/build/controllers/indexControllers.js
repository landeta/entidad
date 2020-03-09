"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexControllers = /** @class */ (function () {
    function IndexControllers() {
    }
    IndexControllers.prototype.index = function (req, res) {
        //res.send('Hola ');
        res.json({ text: 'API Is /api/datos' });
    };
    return IndexControllers;
}());
exports.indexControllers = new IndexControllers;
