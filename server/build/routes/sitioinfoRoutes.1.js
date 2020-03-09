"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sitioinfoControllers_1 = __importDefault(require("../controllers/sitioinfoControllers"));
var SitioInfoRoutes = /** @class */ (function () {
    function SitioInfoRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    SitioInfoRoutes.prototype.config = function () {
        console.log('sitiosinfo');
        this.router.get('/', sitioinfoControllers_1.default.list);
        this.router.get('/:id', sitioinfoControllers_1.default.getOne);
        this.router.post('/', sitioinfoControllers_1.default.create);
        this.router.put('/:id', sitioinfoControllers_1.default.update);
        this.router.delete('/:id', sitioinfoControllers_1.default.delete);
        // this.router.get('/:id', sitiosControllers.searchSitios);
    };
    return SitioInfoRoutes;
}());
var sitioinfoRoutes = new SitioInfoRoutes;
exports.default = sitioinfoRoutes.router;
