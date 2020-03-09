"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
var datosRoutes_1 = __importDefault(require("./routes/datosRoutes"));
var noticiasRoutes_1 = __importDefault(require("./routes/noticiasRoutes"));
var correctivosRoutes_1 = __importDefault(require("./routes/correctivosRoutes"));
var sitiosRoutes_1 = __importDefault(require("./routes/sitiosRoutes"));
var torneosRoutes_1 = __importDefault(require("./routes/torneosRoutes"));
var trabajosRoutes_1 = __importDefault(require("./routes/trabajosRoutes"));
var ticketsRoutes_1 = __importDefault(require("./routes/ticketsRoutes"));
var sitios_deallesRoutes_1 = __importDefault(require("./routes/sitios_deallesRoutes"));
var sitioinfoRoutes_1 = __importDefault(require("./routes/sitioinfoRoutes"));
var getRoutes_1 = __importDefault(require("./routes/getRoutes"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
// defino la clase server que inicializa el servidor
var Server = /** @class */ (function () {
    function Server() {
        // inicializamos express y nos devuelve un objeto y lo guardo
        // en la propiedad pública (para que sea vista en otras partes) app,
        // derivada de Application (Aplicacion de express), de la clase Server
        // express lo obtengo importándolo 
        this.app = express_1.default();
        // creo config para configurar las propiedades de 'app'
        this.config();
        // inicio el servidor
        this.start();
        // inicializo el servidor para ejecutar el típico "app.listen"
        this.routes();
    }
    // metodo config() para configurar la propiedad "app"
    Server.prototype.config = function () {
        // como, no devuelve nada ==> devuelve void
        // 
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    };
    Server.prototype.routes = function () {
        this.app.use('/', indexRoutes_1.default);
        // aca agregamos todas las rutas que necesitemos
        // debemos generar los archivos xxxRouter.ts y xxxControllers.ts
        this.app.use('/api/datos', datosRoutes_1.default);
        this.app.use('/api/noticias', noticiasRoutes_1.default);
        this.app.use('/api/correctivos', correctivosRoutes_1.default);
        this.app.use('/api/torneos', torneosRoutes_1.default);
        this.app.use('/api/sitios', sitiosRoutes_1.default);
        this.app.use('/api/trabajos', trabajosRoutes_1.default);
        this.app.use('/api/tickets', ticketsRoutes_1.default);
        this.app.use('/api/sitiosdetalles', sitios_deallesRoutes_1.default);
        this.app.use('/api/sitioinfo', sitioinfoRoutes_1.default);
        this.app.use('/api/', getRoutes_1.default);
        // this.app.use('/api/sitioinfo', sitios_detallesRoutes);
        // this.app.use('/api/orden', ordenRoutes);
        // this.app.use('/api/torneos/:id', torneosRoutes);
    };
    // inicializo el servidor para ejecutar el típico "app.listen"
    // para que el servidor comience a escuchar    
    Server.prototype.start = function () {
        var _this = this;
        // a listen(), le paso como parámetro el puerto que debe escuchar
        // lo hago con la función this.app.get('port') 
        var server = this.app.listen(this.app.get('port'), function () {
            return console.log('Example app listening on port', _this.app.get('port'));
        });
        server.timeout = 0;
    };
    return Server;
}());
// con new instanciamos la clase y creo el objeto server
// en el constructor defino lo que quiero hacer
var server = new Server;
// server.start();
