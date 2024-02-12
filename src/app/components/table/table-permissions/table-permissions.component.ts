import { Component, Input } from '@angular/core';
import { IPermission } from '../../../interfaces/permission';

@Component({
  selector: 'app-table-permissions',
  templateUrl: './table-permissions.component.html',
  styleUrl: './table-permissions.component.css'
})
export class TablePermissionsComponent {
  @Input() permissions!: IPermission[];
  @Input() userPermissions!: number[];

  permission: IPermission[] = [];

  ngOnInit() {
    this.getPermissions();
  }

  getPermissions() {
    this.permission = this.permissions.filter((permission) => this.userPermissions.includes(permission.id));
  }
}
