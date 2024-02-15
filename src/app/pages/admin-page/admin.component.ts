import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({ templateUrl: 'admin.component.html' })

export class AdminComponent implements OnInit {
  loading = false;
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  constructor() { }
  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/admin', 'home']},
      { label: 'Users', icon: 'pi pi-fw pi-users',  routerLink: ['/admin', 'users']},
      { label: 'Permission', icon: 'pi pi-fw pi-verified', routerLink: ['/admin', 'permission']}, 
      { label: 'Role', icon: 'pi pi-fw pi-user-edit',  routerLink: ['/admin', 'role']},
  ];

  this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
}
}