import { Component } from '@angular/core';
import { IRolePermission } from '../../../interfaces/rolePermission';
import { RolePermissionService } from '../../../services/role_permission.services';
import { IRole } from '../../../interfaces/role';
import { RoleService } from '../../../services/role.service';

@Component({
  selector: 'app-permissions-page',
  templateUrl: './permissions-page.component.html',
  styleUrl: './permissions-page.component.css'
})
export class PermissionsPageComponent {
  rolePermissions: IRolePermission[] = [];
  rolePermission!: IRolePermission;
  roles: IRole[] = [];

  constructor(private _rolePermissionService: RolePermissionService, private _roleService: RoleService) { }

  ngOnInit() {
    this.getRolePermissions();
    this.getRoles();
  }

  getRolePermissions() {
    this._rolePermissionService.getRolePermissions().subscribe(data => {
      this.rolePermissions = data;
      this.getRoles();
    })
  }
  getRoles() {
    this._roleService.getRoles().subscribe(data => {
      this.roles = data;
    })
  }
}
