import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cancelar() {
    this.router.navigate(['admin']);
  }

}
