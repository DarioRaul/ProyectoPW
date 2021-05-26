import {Router} from 'express';
import usersController from '../controllers/usersControllers'
import pool from '../database';

class UsersRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
        this.getToken();
        this.secretInfo();
        this.secret();
    }

    config():void{
        this.router.get('/',usersController.list); 
        this.router.post('/', usersController.create);
        this.router.delete('/:id',usersController.delete);
        this.router.put('/:id', usersController.update);
        this.router.get('/:id', usersController.getOne );
    }


    getToken():void{
        this.router.post('/singin',usersController.gettoken);
    }
    secretInfo():void{
    this.router.post('/test',usersController.secretinfo);
    } 
    secret():void{
    this.router.post('/test',usersController.secret);
    } 
 


     
  
}
export const usersRoutes= new UsersRoutes();
export default usersRoutes.router;


