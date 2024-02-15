import { Component, Input } from '@angular/core';
import { IPermission } from '../../../interfaces/permission';
import { PermissionService } from '../../../services/permission.service';

@Component({
  selector: 'app-table-permissions',
  templateUrl: './table-permissions.component.html',
  styleUrl: './table-permissions.component.css'
})
export class TablePermissionsComponent {
  permissions!: IPermission[];
  @Input() userPermissions!: number[];

  permission: IPermission[] = [];

  ngOnInit() {
    this.getPermissions();
  }

  constructor(private _permissionService: PermissionService) { }

  getPermissions() {
    this._permissionService.getPermissions().subscribe(data => {
      this.permissions = data;
      this.findPermissions();
    })
  }
  
  findPermissions() {
    this.permission = this.permissions.filter((permission) => this.userPermissions.includes(permission.id));
  }
}
