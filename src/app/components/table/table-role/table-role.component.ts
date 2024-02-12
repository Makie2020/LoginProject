import { Component, Input } from '@angular/core';
import { IRole } from '../../../interfaces/role';

@Component({
  selector: 'app-table-role',
  templateUrl: './table-role.component.html',
  styleUrl: './table-role.component.css'
})
export class TableRoleComponent {
  @Input() roles!: IRole[];
  @Input() userRole!: number;

  result: IRole[] = [];

  ngOnInit() {
    this.getRole();
  }

  getRole() {
    this.result = this.roles.filter((role) => role.id === this.userRole);
  }
}
