import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.services';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuItems!: MenuItem[];

  constructor(private router: Router, public _authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Dashboard',
        routerLink:['/dashboard']
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-pencil',
        visible: this._authenticationService.isAdmin,
        routerLink: ['/admin']
      },
    ]
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}