"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var torneosControllers_1 = __importDefault(require("../controllers/torneosControllers"));
var TorneosRoutes = /** @class */ (function () {
    function TorneosRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    TorneosRoutes.prototype.config = function () {
        console.log('torneos');
        this.router.get('/', torneosControllers_1.default.list);
        this.router.get('/:id', torneosControllers_1.default.getOne);
        this.router.post('/', torneosControllers_1.default.create);
        this.router.put('/:id', torneosControllers_1.default.update);
        this.router.delete('/:id', torneosControllers_1.default.delete);
    };
    return TorneosRoutes;
}());
var torneosRoutes = new TorneosRoutes;
exports.default = torneosRoutes.router;
