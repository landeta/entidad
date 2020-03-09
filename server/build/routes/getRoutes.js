"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var getControllers_1 = __importDefault(require("../controllers/getControllers"));
var SitioInfoRoutes = /** @class */ (function () {
    function SitioInfoRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    SitioInfoRoutes.prototype.config = function () {
        console.log('entre en getRoutes');
        this.router.get('/contratistas', getControllers_1.default.listContratistas);
        this.router.get('/modulos', getControllers_1.default.listModulos);
        this.router.get('/equipos', getControllers_1.default.listEquipos);
    };
    return SitioInfoRoutes;
}());
var sitioinfoRoutes = new SitioInfoRoutes;
exports.default = sitioinfoRoutes.router;
