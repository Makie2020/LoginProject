import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser, User } from '../../interfaces/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  users: IUser[] = []

  constructor(private _userService: UserService) { }
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._userService.getAllUsers().subscribe(data => {
      console.log(data)
      this.users = data;
    })
  }
}
