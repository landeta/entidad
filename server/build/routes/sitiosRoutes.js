"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sitiosControllers_1 = __importDefault(require("../controllers/sitiosControllers"));
var DatosRoutes = /** @class */ (function () {
    function DatosRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    DatosRoutes.prototype.config = function () {
        console.log('sitios');
        this.router.get('/', sitiosControllers_1.default.list);
        this.router.get('/:id', sitiosControllers_1.default.getOne);
        this.router.post('/', sitiosControllers_1.default.create);
        this.router.put('/:id', sitiosControllers_1.default.update);
        this.router.delete('/:id', sitiosControllers_1.default.delete);
        // this.router.get('/:id', sitiosControllers.searchSitios);
    };
    return DatosRoutes;
}());
var sitiosRoutes = new DatosRoutes;
exports.default = sitiosRoutes.router;
