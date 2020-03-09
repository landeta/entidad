import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import datosRoutes from './routes/datosRoutes';
import noticiasRoutes from './routes/noticiasRoutes';
import correctivosRoutes from './routes/correctivosRoutes';
import sitiosRoutes  from './routes/sitiosRoutes';
import torneosRoutes  from './routes/torneosRoutes';
import trabajosRoutes  from './routes/trabajosRoutes';
import ticketsRoutes  from './routes/ticketsRoutes';
import sitios_detallesRoutes from './routes/sitios_deallesRoutes';
import sitioinfoRoutes from './routes/sitioinfoRoutes';
import getRoutes from './routes/getRoutes';

import morgan from 'morgan';
import cors from 'cors';


// defino la clase server que inicializa el servidor
class Server {

    public app: Application;
    public puerto: any; 
    constructor() {
        // inicializamos express y nos devuelve un objeto y lo guardo
        // en la propiedad pública (para que sea vista en otras partes) app,
        // derivada de Application (Aplicacion de express), de la clase Server
        // express lo obtengo importándolo 
        this.app =  express();
        // creo config para configurar las propiedades de 'app'
        this.config();
        // inicio el servidor
        this.start();
        // inicializo el servidor para ejecutar el típico "app.listen"
        this.routes();
    }

    // metodo config() para configurar la propiedad "app"
    config(): void {
        // como, no devuelve nada ==> devuelve void
        // 
        this.app.set('port', process.env.PORT||3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        
    }
    routes(): void {
        this.app.use('/', indexRoutes);
        // aca agregamos todas las rutas que necesitemos
        // debemos generar los archivos xxxRouter.ts y xxxControllers.ts
        this.app.use('/api/datos', datosRoutes);
        this.app.use('/api/noticias', noticiasRoutes);
        this.app.use('/api/correctivos', correctivosRoutes);
        this.app.use('/api/torneos', torneosRoutes);
        this.app.use('/api/sitios', sitiosRoutes);
        this.app.use('/api/trabajos', trabajosRoutes);
        this.app.use('/api/tickets', ticketsRoutes);
        this.app.use('/api/sitiosdetalles', sitios_detallesRoutes);
        this.app.use('/api/sitioinfo', sitioinfoRoutes);
        this.app.use('/api/', getRoutes);
        
        // this.app.use('/api/sitioinfo', sitios_detallesRoutes);
        
        // this.app.use('/api/orden', ordenRoutes);
        // this.app.use('/api/torneos/:id', torneosRoutes);
        
    }

    // inicializo el servidor para ejecutar el típico "app.listen"
    // para que el servidor comience a escuchar    
    start(): void {
        // a listen(), le paso como parámetro el puerto que debe escuchar
        // lo hago con la función this.app.get('port') 
        const server = this.app.listen(this.app.get('port'), () =>
          console.log('Example app listening on port',
            this.app.get('port')));
        server.timeout = 0;        
    }

}

// con new instanciamos la clase y creo el objeto server
// en el constructor defino lo que quiero hacer
const server = new Server;
// server.start();
