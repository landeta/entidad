"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var timers_1 = require("timers");
var sitiosControllers_1 = __importDefault(require("../controllers/sitiosControllers"));
function searchSitios(req, res) {
    var LESSONS = sitiosControllers_1.default.list;
    var queryParams = req.query;
    console.log('prueba de que: ', LESSONS);
    var id = queryParams.id, filter = queryParams.filter || '', sortOrder = queryParams.sortOrder, pageNumber = parseInt(queryParams.pageNumber) || 0, pageSize = parseInt(queryParams.pageSize);
    var sitios = Object.values(LESSONS).filter(function (sitio) { return sitio.id == id; }).sort(function (l1, l2) { return l1.id - l2.id; });
    if (filter) {
        sitios = sitios.filter(function (sitio) { return sitio.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0; });
    }
    if (sortOrder == "desc") {
        sitios = sitios.reverse();
    }
    var initialPos = pageNumber * pageSize;
    var sitiosPage = sitios.slice(initialPos, initialPos + pageSize);
    timers_1.setTimeout(function () {
        res.status(200).json({ payload: LESSONS });
    }, 1000);
}
exports.searchSitios = searchSitios;
