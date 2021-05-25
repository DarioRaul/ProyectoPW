import { User } from './../models/users';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getUsers(){
    return this.http.get(`${this.API_URI}/usuarios`);
  }

  // tslint:disable-next-line: typedef
  getUser(id: string){
    return this.http.get(`${this.API_URI}/usuarios/${id}`);
  }

  // tslint:disable-next-line: typedef
  deleteUser(id: string){
    return this.http.delete(`${this.API_URI}/usuarios/${id}`);
  }

  // tslint:disable-next-line: typedef
  saveUser(users: User){
    return this.http.post(`${this.API_URI}/usuarios`, users);
  }

  updateUser(id: string|number, updatedUser: User): Observable<User>{
    return this.http.put(`${this.API_URI}/usuarios/${id}`, updatedUser);
  }
}
