import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import authenticationRoutes from './routes/authenticationRoutes';


const passport= require('passport');
import morgan from 'morgan';
import cors from 'cors';
import usersRoutes  from './routes/usersRoutes';
import UsuarioRoutes from './routes/UsuarioRoutes';


class Server{
     public app:Application;
    constructor(){
       this.app=express();
       this.config();
       this.routes();
    }
  config (): void{
  this.app.set('port',process.env.PORT || 3000);
  this.app.use(morgan('dev'));
  this.app.use(cors());
  this.app.use(express.json());
  this.app.use(express.urlencoded({extended: false}));
  }
  routes():void{
  this.app.use('/',indexRoutes);

  this.app.use('/users',usersRoutes);
  this.app.use('/usuario',UsuarioRoutes);
  this.app.use(passport.initialize());
  this.app.use(passport.session());
  }

  start():void{
  this.app.listen(this.app.get('port'),()=>{
      console.log('Server on port',this.app.get('port'));
  });
}

}
const server= new Server();
server.start();