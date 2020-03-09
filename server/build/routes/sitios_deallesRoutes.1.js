"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sitios_DetallesControllers_1 = __importDefault(require("../controllers/sitios_DetallesControllers"));
var DatosDetallesRoutes = /** @class */ (function () {
    function DatosDetallesRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    DatosDetallesRoutes.prototype.config = function () {
        console.log('sitios');
        this.router.get('/', sitios_DetallesControllers_1.default.list);
        this.router.get('/:id', sitios_DetallesControllers_1.default.getOne);
        this.router.post('/', sitios_DetallesControllers_1.default.create);
        this.router.put('/:id', sitios_DetallesControllers_1.default.update);
        this.router.delete('/:id', sitios_DetallesControllers_1.default.delete);
        // this.router.get('/:id', sitiosControllers.searchSitios);
    };
    return DatosDetallesRoutes;
}());
var sitiosDetallesRoutes = new DatosDetallesRoutes;
exports.default = sitiosDetallesRoutes.router;
