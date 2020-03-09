"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var datosControllers_1 = __importDefault(require("../controllers/datosControllers"));
var DatosRoutes = /** @class */ (function () {
    function DatosRoutes() {
        this.router = express_1.Router();
        console.log('datos');
        this.config();
    }
    DatosRoutes.prototype.config = function () {
        console.log('datos');
        this.router.get('/', datosControllers_1.default.list);
        this.router.get('/:id', datosControllers_1.default.getOne);
        this.router.post('/', datosControllers_1.default.create);
        this.router.put('/:id', datosControllers_1.default.update);
        this.router.delete('/:id', datosControllers_1.default.delete);
    };
    return DatosRoutes;
}());
var datosRoutes = new DatosRoutes;
exports.default = datosRoutes.router;
