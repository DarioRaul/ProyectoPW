import { Tipo_usuario } from './../models/tipos_usuarios';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Tipo_UsuarioService {
  API_URI = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getTipos(){
    return this.http.get(`${this.API_URI}/add`);
  }
}
