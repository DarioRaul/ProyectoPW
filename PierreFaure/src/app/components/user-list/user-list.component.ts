import { Component, HostBinding, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  users: any = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  // tslint:disable-next-line: typedef
  getUsers(){
    this.usersService.getUsers().subscribe(
      res => {
        this.users =  res;
      },
      err => console.error(err)
    );
  }

  // tslint:disable-next-line: typedef
  deleteUser(id: string){
    this.usersService.deleteUser(id).subscribe(
      res => {
        console.log(res);
        this.getUsers();
      },
      err => console.error(err)
    );
  }

  // tslint:disable-next-line: typedef
  editUser(id: string){
    console.log(id);
  }

}

