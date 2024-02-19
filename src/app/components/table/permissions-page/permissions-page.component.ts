import { Component } from '@angular/core';
import { IRolePermission } from '../../../interfaces/rolePermission';
import { RolePermissionService } from '../../../services/role_permission.services';
import { IRole } from '../../../interfaces/role';
import { RoleService } from '../../../services/role.service';
import { PermissionService } from '../../../services/permission.service';
import { IPermission } from '../../../interfaces/permission';

@Component({
  selector: 'app-permissions-page',
  templateUrl: './permissions-page.component.html',
  styleUrl: './permissions-page.component.css'
})
export class PermissionsPageComponent {
  rolePermissions: IRolePermission[] = [];
  rolePermission!: IRolePermission;
  roles: IRole[] = [];
  permissions!: IPermission[];

  constructor(private _rolePermissionService: RolePermissionService, private _roleService: RoleService, private _permissionService: PermissionService) { }

  ngOnInit() {
    this.getRolePermissions();
    this.getRoles();
    this.getPermissions();
  }

  getRolePermissions() {
    this._rolePermissionService.getRolePermissions().subscribe(data => {
      this.rolePermissions = data;
      this.getRoles();

      // const output = Object.values(
      //   this.rolePermissions.reduce(
      //     (res, o) => ((res[o.role_id] ||= { ...o, permission_id: [] }).permission_id.push(o.role_id), res),
      //     {}
      //   )
      // );
      // console.log(output);
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
