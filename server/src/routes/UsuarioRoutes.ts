import {Router} from 'express';
import UsuarioControllers from '../controllers/UsuariosControllers'

class UsuarioRoutes{
    public router:Router = Router();
    
    constructor(){
       this.config();
    }
    config():void{
        this.router.get('/',UsuarioControllers.list);
        this.router.get('/:id',UsuarioControllers.getOneUsuario);
        this.router.get('/singin',UsuarioControllers.getTipoUsuario);
       
    }
}
export const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;