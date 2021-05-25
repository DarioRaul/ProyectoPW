import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { NavProfileComponent } from './components/nav-profile/nav-profile.component';
import { PadreFamiliaComponent } from './components/padre-familia/padre-familia.component';
import { ContactoComponent } from './components/pagina/contacto/contacto.component';
import { NavegacionComponent } from './components/pagina/navegacion/navegacion.component';
import { NosotrosComponent } from './components/pagina/nosotros/nosotros.component';
import { PrincipalComponent } from './components/pagina/principal/principal.component';
import { ServiciosComponent } from './components/pagina/servicios/servicios.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormsModule } from '@angular/forms';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { Tipo_UsuarioService } from './services/tipos_usuarios.service';
import { JwtHelperService, JWT_OPTIONS }  from '@auth0/angular-jwt'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    CalendarioComponent,
    NavProfileComponent,
    PadreFamiliaComponent,
    ContactoComponent,
    NavegacionComponent,
    NosotrosComponent,
    PrincipalComponent,
    ServiciosComponent,
    PagosComponent,
    UserFormComponent,
    UserListComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AmazingTimePickerModule

  ],
  providers: [
    UsersService,
    AuthService,
    Tipo_UsuarioService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
