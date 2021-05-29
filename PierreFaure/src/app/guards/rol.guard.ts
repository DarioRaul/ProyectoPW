// tslint:disable-next-line: import-spacing
import  decode  from 'jwt-decode';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router ){}
  canActivate(route: ActivatedRouteSnapshot): boolean{
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');

    let abc = {username: String, role: String};
    // tslint:disable-next-line: no-non-null-assertion
    abc = decode(token!);
    console.log(abc.role);

    if ( abc.role !== expectedRole){
    console.log('usuario no autorizado');
    alert('Credenciales Incorrectas, vuelve a intentarlo.');
    return false;
  }
    return true;
  }
}
