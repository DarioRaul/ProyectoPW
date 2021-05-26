import { NextFunction, request, Request,Response} from 'express';
import pool from '../database'

export class Tipo_UsuarioControllers{

    public async getTipo(req:Request,res:Response){
        const users= await pool.query('SELECT *  FROM tipo_usuarios');
       res.json(users);
       }
}

export const tipos_usuariocontroller = new Tipo_UsuarioControllers();
export default tipos_usuariocontroller;