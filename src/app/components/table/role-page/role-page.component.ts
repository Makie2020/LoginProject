import { Component } from '@angular/core';

import { UserService } from '../../../services/user.service';
import { PermissionService } from '../../../services/permission.service';
import { RoleService } from '../../../services/role.service';

import { IUser } from '../../../interfaces/user';
import { IRole } from '../../../interfaces/role';
import { IPermission } from '../../../interfaces/permission';

@Component({
  selector: 'app-role-page',
  templateUrl: './role-page.component.html',
  styleUrl: './role-page.component.css'
})
export class RolePageComponent {
  users: IUser[] = [];
  user!: IUser;
  roles: IRole[] = [];

  display: boolean = false;
  confirmationService: any;
  messageService: any;

  constructor(private _userService: UserService, private _roleService: RoleService) { }

  ngOnInit() {
    this.getUsers();
    this.getRoles();
  }

  getUsers() {
    this._userService.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }
  getRoles() {
    this._roleService.getRoles().subscribe(data => {
      this.roles = data;
    })
  }

  editUser(user: IUser) {
    this.user = { ...user };
    this.display = true;
  }

  onDialogClose(event: any) {
    this.display = event;
    this.getUsers();
  }
}
