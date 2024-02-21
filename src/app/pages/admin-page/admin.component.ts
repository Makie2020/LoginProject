import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({ templateUrl: 'admin.component.html' })

export class AdminComponent implements OnInit {
  loading = false;
  items!: MenuItem[];

  activeItem!: MenuItem;

  constructor() { }
  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/admin', 'dashboard']},
      { label: 'Users', icon: 'pi pi-fw pi-users',  routerLink: ['/admin', 'users']},
      { label: 'Permission', icon: 'pi pi-fw pi-verified', routerLink: ['/admin', 'permission']}, 
  ];

  this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
}
}