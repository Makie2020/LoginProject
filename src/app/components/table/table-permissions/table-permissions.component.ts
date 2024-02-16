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
  userPermissions: IPermission[] = [];

  @Input() userPermissionsIds!: number[];

  constructor(private _permissionService: PermissionService) { }

  ngOnInit() {
    this.getPermissions();
  } 

  getPermissions() {
    this._permissionService.getPermissions().subscribe(data => {
      this.permissions = data;
      this.findPermissions();
    })
  }
  
  findPermissions() {
    this.userPermissions = this.permissions.filter((permission) => this.userPermissionsIds.includes(permission.id));
  }
}
