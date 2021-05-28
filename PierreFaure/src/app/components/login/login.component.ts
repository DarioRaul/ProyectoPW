import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User:any=[];

  user : User = {
    email: '',
    password: '',
    id_tipo_usuario:''
  };



  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authService.getUsuarios()
    .subscribe(
      res =>{
        console.log(res);
        this.User=res;
      },
      err=> console.error(err)
    )
  }


  loginIn(){
    console.log(this.user);
    this.authService.signIn(this.user).subscribe((res:any) =>{
      console.log(res);
      console.log(res.token);
      localStorage.setItem('token', res.token);
     if(this.user.id_tipo_usuario == '1'){
       this.router.navigate(['admin'])
     }else{
       this.router.navigate(['profile'])
     }
    })
  }
}
