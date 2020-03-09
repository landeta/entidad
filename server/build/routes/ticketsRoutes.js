"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ticketsControllers_1 = __importDefault(require("../controllers/ticketsControllers"));
var TicketsRoutes = /** @class */ (function () {
    function TicketsRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    TicketsRoutes.prototype.config = function () {
        this.router.get('/', ticketsControllers_1.default.list);
        this.router.get('/:id', ticketsControllers_1.default.getOne);
        this.router.post('/', ticketsControllers_1.default.create);
        this.router.put('/:id', ticketsControllers_1.default.update);
        this.router.delete('/:id', ticketsControllers_1.default.delete);
    };
    return TicketsRoutes;
}());
var ticketsRoutes = new TicketsRoutes;
exports.default = ticketsRoutes.router;
