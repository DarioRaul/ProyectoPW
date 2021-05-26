import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/users';
import { map } from "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient, private jwtHelper:JwtHelperService) { }

  getUsuarios():Observable<User[]>{
    return  this.http.get<User[]>(`${this.API_URI}/usuarios`);
  }

  signIn(user:User){
    return this.http.post(`${this.API_URI}/users/singin`,user);
  }

  isAuth():boolean{
    const token = localStorage.getItem('token')
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }


}
