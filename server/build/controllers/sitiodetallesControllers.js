"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../database"));
var SitioDetallesControllers = /** @class */ (function () {
    function SitioDetallesControllers() {
    }
    SitioDetallesControllers.prototype.getOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, sitio;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('SELECT * FROM sitios WHERE id = ?', [id])];
                    case 1:
                        sitio = _a.sent();
                        if (sitio.length > 0) {
                            return [2 /*return*/, res.json(sitio[0])];
                        }
                        res.status(404).json({ mensaje: 'EL sitio no existe' });
                        return [2 /*return*/];
                }
            });
        });
    };
    SitioDetallesControllers.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('INSERT INTO sitios set ?', [req.params.id])];
                    case 1:
                        _a.sent();
                        res.json({ mensaje: 'Sitios Guardados' });
                        return [2 /*return*/];
                }
            });
        });
    };
    SitioDetallesControllers.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, sitio;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('UPDATE sitios set ? WHERE id = ?', [req.body, id])];
                    case 1:
                        sitio = _a.sent();
                        res.json({ mensaje: 'Sitio cambiado ' });
                        return [2 /*return*/];
                }
            });
        });
    };
    SitioDetallesControllers.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, sitio, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('DELETE FROM sitios WHERE id = ?', [id])];
                    case 1:
                        sitio = _a.sent();
                        res.json({ mensaje: 'Sitios borrados' + req.params.id });
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log("Error: ", err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SitioDetallesControllers.prototype.list = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParams, id_1, filter, sortOrder, pageNumber, pageSize, words, result, initialPos, sitiosPage, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        queryParams = req.query;
                        id_1 = queryParams.id || 1, filter = queryParams.filter || '', sortOrder = queryParams.sortOrder, pageNumber = parseInt(queryParams.pageNumber) || 0, pageSize = parseInt(queryParams.pageSize) || 1000;
                        return [4 /*yield*/, database_1.default.query('SELECT * FROM sitios_detalles')];
                    case 1:
                        words = _a.sent();
                        result = Object.values(words).filter(function (resp) { return resp.id >= id_1; });
                        initialPos = pageNumber * pageSize;
                        sitiosPage = result.slice(initialPos, initialPos + pageSize);
                        res.json(sitiosPage);
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.log("Error: ", err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SitioDetallesControllers.prototype.searchSitios = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var LESSONS, queryParams, id, filter, sortOrder, pageNumber, pageSize, sitios, initialPos, sitiosPage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('SELECT * FROM sitios')];
                    case 1:
                        LESSONS = _a.sent();
                        queryParams = req.query;
                        id = queryParams.id, filter = queryParams.filter || '', sortOrder = queryParams.sortOrder, pageNumber = parseInt(queryParams.pageNumber) || 0, pageSize = parseInt(queryParams.pageSize);
                        sitios = Object.values(LESSONS);
                        initialPos = pageNumber * pageSize;
                        sitiosPage = sitios.slice(initialPos, initialPos + pageSize);
                        res.json({ 'sitios': 'lll' });
                        return [2 /*return*/];
                }
            });
        });
    };
    return SitioDetallesControllers;
}());
var sitioDetallesControllers = new SitioDetallesControllers;
exports.default = sitioDetallesControllers;
