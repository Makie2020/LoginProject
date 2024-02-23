import { Component } from '@angular/core';
import { IRolePermission } from '../../../interfaces/rolePermission';
import { RolePermissionService } from '../../../services/role_permission.services';
import { IRole } from '../../../interfaces/role';
import { RoleService } from '../../../services/role.service';
import { PermissionService } from '../../../services/permission.service';
import { IPermission } from '../../../interfaces/permission';

@Component({
  selector: 'app-permissions-table',
  templateUrl: './permissions-table.component.html',
  styleUrl: './permissions-table.component.css'
})
export class PermissionsTableComponent {
  rolePermissions!: IRolePermission[];
  roles!: IRole[];
  permissions!: IPermission[];
  groupedByRoleId: any;

  constructor(private _rolePermissionService: RolePermissionService, private _roleService: RoleService, private _permissionService: PermissionService) { }

  ngOnInit() {
    this.getRolePermissions();
    this.getRoles();
    this.getPermissions();
  }

  getRolePermissions() {
    this._rolePermissionService.getRolePermissions().subscribe(data => {
      this.rolePermissions = data;
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
      this.mergeArrays();
    })
  }

  mergeArrays() {
  
  }
}