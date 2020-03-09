"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var trabajosControllers_1 = __importDefault(require("../controllers/trabajosControllers"));
var TrabajosRoutes = /** @class */ (function () {
    function TrabajosRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    TrabajosRoutes.prototype.config = function () {
        this.router.get('/', trabajosControllers_1.default.list);
        this.router.get('/:id', trabajosControllers_1.default.getOne);
        this.router.post('/', trabajosControllers_1.default.create);
        this.router.put('/:id', trabajosControllers_1.default.update);
        this.router.delete('/:id', trabajosControllers_1.default.delete);
    };
    return TrabajosRoutes;
}());
var trabajosRoutes = new TrabajosRoutes;
exports.default = trabajosRoutes.router;
