import { Component } from '@angular/core';

import { UserService } from '../../../services/user.service';
import { RoleService } from '../../../services/role.service';

import { IUser } from '../../../interfaces/user';
import { IRole } from '../../../interfaces/role';
import { PermissionService } from '../../../services/permission.service';
import { IPermission } from '../../../interfaces/permission';


@Component({
  selector: 'app-role-table',
  templateUrl: './role-table.component.html',
  styleUrl: './role-table.component.css'
})
export class RoleTableComponent {
  users: IUser[] = [];
  user!: IUser;
  roles: IRole[] = [];
  permissions: IPermission[] = [];

  display: boolean = false;
  confirmationService: any;
  messageService: any;

  constructor(private _userService: UserService, private _roleService: RoleService, private _permissionService: PermissionService) { }

  ngOnInit() {
    this.getUsers();
    this.getRoles();
    this.getPermissions();
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

  getPermissions() {
    this._permissionService.getPermissions().subscribe(data => {
      this.permissions = data;
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
