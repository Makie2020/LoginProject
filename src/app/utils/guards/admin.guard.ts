import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.services';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  routeURL: string;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.routeURL = this.router.url;
  }

  canActivate(): boolean {
    if (this.authenticationService.isAdmin) {
      return true;
    } else {
      this.routeURL = '/dashboard';
      this.router.navigate(['/dashboard']
      );
      return false;
    }
  }
}