import { NextFunction, request, Request,Response} from 'express';
import pool from '../database'
const jwt=require('jsonwebtoken');
 
export class UsersControllers{
   
   

    public async list(req:Request,res:Response){
        const users= await pool.query('SELECT *  FROM usuarios');
       res.json(users);
       }

    public async create(req : Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO usuarios set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Usuario creado'}); 
    }
  
    public async getOne (req: Request, res: Response) : Promise<void> {
        const { id }=req.params;
        const usuario = await pool.query('SELECT * FROM usuarios WHERE id_user = ?',[id]);
        if(usuario.length>0){
            res.json(usuario[0]);     
        }
        res.status(404).json({text:'El usuario no ha sido encontrado'})
    }

    public async delete(req: Request, res: Response): Promise<void>{
     const { id } = req.params;
     await pool.query('DELETE FROM usuarios WHERE id_user = ?', [id]);
     res.json({text: 'Usuario eliminado con exito'});
    }
  
    public async update(req: Request, res: Response): Promise<void>{
     const { id } = req.params;
     await pool.query('UPDATE usuarios set ? WHERE id_user = ?', [req.body,id]);
     res.json({message: 'Datos actualizados'});
    }

    public async gettoken(req:Request,res:Response){
        const {email, password}= req.body;
      const users= await pool.query('SELECT email,password,id_tipo_usuario FROM usuarios where email=? and password=?',
        [email,password]);
       
     
       if(users.length>0){
        let data=JSON.stringify(users[0]);
        const token=jwt.sign(data,'stil');
        res.json({token});
       }else{
           res.json('usuario incorrecto');
       }
       }

       secretinfo=(req:Request,res:Response,next:NextFunction)=>{
  
        if(!req.headers.authorization)return res.status(401).json('no autorizado')
       
        const token=req.headers.authorization.substr(7);
        if(token!==''){
          const content= jwt.verify(token,'stil');
          req.params=content;
          console.log(req.params);
          next();
       }else{
           res.json('token vacio')

       }
       }

       secret=(req:Request,res:Response)=>{

       res.json('informacion secreta')
       } 

    }
    

const usersController = new UsersControllers();
export default usersController;