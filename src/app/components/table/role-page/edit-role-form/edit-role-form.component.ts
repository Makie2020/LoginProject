import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../../../interfaces/user';
import { IPermission } from '../../../../interfaces/permission';
import { UserRoleService } from '../../../../services/user-role.service';

@Component({
  selector: 'app-edit-role-form',
  templateUrl: './edit-role-form.component.html',
  styleUrl: './edit-role-form.component.css'
})
export class EditRoleFormComponent {
  userDialog!: boolean;
  submitted!: boolean;
  @Input() display!: boolean;
  @Input() user!: IUser;
  @Output() displayChange = new EventEmitter();

  constructor(private _userRoleService: UserRoleService) { }

  updateUserRole() {
    this.submitted = true;
    this._userRoleService.updateRoles(this.user.id, this.user['users_role.role_id']).subscribe();
    this.displayChange.emit(false);
  }

  onClose() {
    this.displayChange.emit(false);
  }

  ngOnDestroy() {
    this.displayChange.unsubscribe();
  }
}
