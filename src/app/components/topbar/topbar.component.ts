import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../services/layout.services';
import { AuthenticationService } from '../../services/authentication.services';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService, private router: Router, public _authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/welcome']
      },
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-calendar',
        routerLink: ['/dashboard']
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
