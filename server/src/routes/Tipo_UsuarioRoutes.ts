import { tipos_usuariocontroller } from './../controllers/Tipo_UsuarioController';
import { Router } from 'express';

class Tipos_UsuarioRoutes{
    public router : Router = Router(); 

    constructor(){
        this.config();
    }

    config():  void {
        this.router.get('/', tipos_usuariocontroller.getTipo);
    }

}

const tipos_usuariosroutes = new Tipos_UsuarioRoutes();
export default tipos_usuariosroutes.router;