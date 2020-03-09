"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var noticiasControllers_1 = __importDefault(require("../controllers/noticiasControllers"));
var NoticiasRoutes = /** @class */ (function () {
    function NoticiasRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    NoticiasRoutes.prototype.config = function () {
        console.log('noticias');
        this.router.get('/', noticiasControllers_1.default.list);
        this.router.get('/:id', noticiasControllers_1.default.getOne);
        this.router.post('/', noticiasControllers_1.default.create);
        this.router.put('/:id', noticiasControllers_1.default.update);
        this.router.delete('/:id', noticiasControllers_1.default.delete);
    };
    return NoticiasRoutes;
}());
var noticiasRoutes = new NoticiasRoutes;
exports.default = noticiasRoutes.router;
