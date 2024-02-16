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
  userPermission: number[] | undefined;
  rolePermissions!: IRolePermission[];

  @Input() display!: boolean;
  @Input() user!: IUser;
  @Input() roles!: IRole[];
  @Input() permissions! : IPermission[];
  @Output() displayChange = new EventEmitter();

  constructor(private _userRoleService: UserRoleService, private _rolePermissionService: RolePermissionService) { }

  ngOnInit() {
    this.getRolePermissions();
  }

  getRolePermissions () {
    this._rolePermissionService.getRolePermissions().subscribe(data => {
      this.rolePermissions = data;
    })
  }
  updateUserRole() {
    this.submitted = true;
    this._userRoleService.updateRoles(this.user.id, this.user['users_role.role_id']).subscribe();
    this.displayChange.emit(false);
  }

  onClose() {
    this.displayChange.emit(false);
  }

  changedValue($event: any) {
    console.log($event) 


    if ($event === 1) {
      this.user['roles_permissions.permission_id'] = [1, 2, 3, 4]
    } else {
      this.user['roles_permissions.permission_id'] = [3, 1]
    }
  }

  ngOnDestroy() {
    this.displayChange.unsubscribe();
  }
}
