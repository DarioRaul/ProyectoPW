import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { LoginComponent } from './components/login/login.component';
import { PadreFamiliaComponent } from './components/padre-familia/padre-familia.component';
import { ContactoComponent } from './components/pagina/contacto/contacto.component';
import { NosotrosComponent } from './components/pagina/nosotros/nosotros.component';
import { PrincipalComponent } from './components/pagina/principal/principal.component';
import { ServiciosComponent } from './components/pagina/servicios/servicios.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import {RolGuard } from './guards/rol.guard';
import { RolGuard2 } from './guards/rol2.guard';
import {AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: '' ,
    redirectTo: '/principal',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'usuarios',
    component: UserListComponent
  },
  {
    path: 'usuarios/add',
    component: UserFormComponent
  },
  {
    path: 'usuarios/edit/:id',
    component: UserFormComponent
  },
  {
    path: 'pagos',
    component: PagosComponent
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'admin',
    component: AdministradorComponent,
    canActivate: [RolGuard, AuthGuard],
    data: {expectedRole: 'admin'}
  },
  {
    path : 'profile',
    component: PadreFamiliaComponent,
    canActivate: [RolGuard2],
    data: {expectedRole: 'alumno'}
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
