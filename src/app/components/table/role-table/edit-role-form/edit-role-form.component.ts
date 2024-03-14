import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../../../interfaces/user';
import { UserRoleService } from '../../../../services/user-role.service';
import { IRole } from '../../../../interfaces/role';
import { IPermission } from '../../../../interfaces/permission';
import { RolePermissionService } from '../../../../services/role_permission.services';
import { IRolePermission } from '../../../../interfaces/rolePermission';

@Component({
  selector: 'app-edit-role-form',
  templateUrl: './edit-role-form.component.html',
  styleUrl: './edit-role-form.component.css'
})
export class EditRoleFormComponent {
  userDialog!: boolean;
  submitted!: boolean;
  userPermission!: number[];
  rolePermissions!: IRolePermission[];
  permissionIds!: number [];

  @Input() display!: boolean;
  @Input() user!: IUser;
  @Input() roles!: IRole[];
  @Input() permissions!: IPermission[];
  @Output() displayChange = new EventEmitter();

  constructor(private _userRoleService: UserRoleService, private _rolePermissionService: RolePermissionService) { }

  ngOnInit() {
    this.getRolePermissions();
  }

  getRolePermissions() {
    this._rolePermissionService.getRolePermissions().subscribe(data => {
      this.rolePermissions = data;
    })
  }
  updateUserRole() {
    this.submitted = true;
    this._userRoleService.updateRoles(this.user.id, this.user.role_id).subscribe();
    this.displayChange.emit(false);
  }

  onClose() {
    this.displayChange.emit(false);
  }

  changedValue($event: any) {
    let permissionIds = this.rolePermissions.filter(rolePermission => rolePermission.role_id == $event).map((a:IRolePermission) => a.permission_id);
    this.user.permissions = permissionIds;
  }

  ngOnDestroy() {
    this.displayChange.unsubscribe();
  }
}
