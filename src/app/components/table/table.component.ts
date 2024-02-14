import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PermissionService } from '../../services/permission.service';
import { RoleService } from '../../services/role.service';
import { IUser } from '../../interfaces/user';
import { IRole } from '../../interfaces/role';
import { IPermission } from '../../interfaces/permission';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
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

  onDialogClose(event:any) {
    this.display = event;
 }

  deleteUser(user: IUser) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.username + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        //this.users = this.user.filter(val => val.id !== user.id);
        //this.user = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000 });
      }
    });
  }

}
