import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-profile',
  templateUrl: './nav-profile.component.html',
  styleUrls: ['./nav-profile.component.css']
})
export class NavProfileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  irInicioSesion(){
    this.router.navigate(['login'])
  }

}
