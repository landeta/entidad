"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ordenControllers_1 = __importDefault(require("../controllers/ordenControllers"));
var OrdenRoutes = /** @class */ (function () {
    function OrdenRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    OrdenRoutes.prototype.config = function () {
        this.router.get('/', ordenControllers_1.default.list);
        this.router.get('/:id', ordenControllers_1.default.getOne);
    };
    return OrdenRoutes;
}());
var ordenRoutes = new OrdenRoutes;
exports.default = ordenRoutes;
