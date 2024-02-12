import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PermissionService } from '../../services/permission.service';
import { RoleService } from '../../services/role.service';
import { IUser } from '../../interfaces/user';
import { Permission } from '../../enum/permission';
import { IRole } from '../../interfaces/role';
import { IPermission } from '../../interfaces/permission';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  users: IUser[] = [];
  roles: IRole[] = [];
  permissions: IPermission[]=[];

  constructor(private _userService: UserService, private _roleService: RoleService, private _permissionService : PermissionService)  { }

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

}
