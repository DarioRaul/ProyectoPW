import {Request, Response} from 'express';
import pool from '../database';


class UsuarioControllers{

    public async list(req:Request, res:Response){
        const users= await pool.query('SELECT * FROM usuarios');
        res.json(users);
    }
    
    public async getOneUsuario(req:Request, res:Response){
       const { id }=req.params;
        const usuario = await pool.query('SELECT * FROM usuarios WHERE id = ?',[id]);
        if(usuario.length>0){
            return res.json(usuario[0]);     
        }
        res.status(404).json({text:'El usuario no ha sido encontrado'})
    }

    public async getTipoUsuario(req:Request, res:Response){
        const {email}= req.body;
        const usuarios = await pool.query('SELECT id_tipo_usuario FROM usuarios where email = ?', [email])  
        if(usuarios.length>0){
            return res.json(usuarios[0]);     
        }
        res.status(404).json({text:'El usuario no ha sido encontrado'})
    }

    
    
}
const usuarioControllers = new UsuarioControllers();
export default usuarioControllers;
