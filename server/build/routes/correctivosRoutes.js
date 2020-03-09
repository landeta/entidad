"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var correctivosControllers_1 = __importDefault(require("../controllers/correctivosControllers"));
var DatosRoutes = /** @class */ (function () {
    function DatosRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    DatosRoutes.prototype.config = function () {
        this.router.get('/', correctivosControllers_1.default.list);
        this.router.get('/:id', correctivosControllers_1.default.getOne);
        this.router.post('/', correctivosControllers_1.default.create);
        this.router.put('/:id', correctivosControllers_1.default.update);
        this.router.delete('/:id', correctivosControllers_1.default.delete);
    };
    return DatosRoutes;
}());
var correctivosRoutes = new DatosRoutes;
exports.default = correctivosRoutes.router;
