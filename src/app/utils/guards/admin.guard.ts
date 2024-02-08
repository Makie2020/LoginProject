import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.services';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate(): boolean {
    if (this.authenticationService.isAdmin) {
      this.router.navigate(['/admin'])
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}