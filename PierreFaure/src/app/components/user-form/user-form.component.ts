import { Component, HostBinding, OnInit } from '@angular/core';
import { User } from '../../models/users';
import { Tipo_usuario } from '../../models/tipos_usuarios';
import {ActivatedRoute, Router } from '@angular/router';

import { UsersService} from '../../services/users.service';
import { Tipo_UsuarioService } from '../../services/tipos_usuarios.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  user: User = {
    id_user: 0,
    email: '',
    password: '',
    nombre_s: '',
    ape_pat: '',
    ape_mat: '',
    id_tipo_usuario: '',
  };

  tipos: any = [];

  // tslint:disable-next-line: max-line-length
  constructor(private usersService: UsersService, private tipoService: Tipo_UsuarioService, private router: Router, private activatedRoute: ActivatedRoute) { }

  edit = false;

  ngOnInit(): void {
    const params =  this.activatedRoute.snapshot.params;
    if (params.id) {
      this.usersService.getUser(params.id) .subscribe(
        res => {
          console.log(res);
          this.user = res;
          this.edit = true;
        },
        err => console.log(err)
      );
    }
    this.getTipos();
  }


  // tslint:disable-next-line: typedef
  getTipos(){
    this.tipoService.getTipos().subscribe(
      res => {
        this.tipos =  res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

  // tslint:disable-next-line: typedef
  saveNewUser(){
    this.usersService.saveUser(this.user)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/usuarios']);
      },
      err => console.log(err)
    );
    }

    // tslint:disable-next-line: typedef
    updateUser(){
     // tslint:disable-next-line: no-non-null-assertion
     this.usersService.updateUser(this.user.id_user!, this.user) .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/usuarios']);
        },
        err => console.log(err)
      );
    }

    // tslint:disable-next-line: typedef
    back(){
      this.router.navigate(['/usuarios']);
    }

  }


