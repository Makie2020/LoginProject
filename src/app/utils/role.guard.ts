import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthGuard } from './auth.guard';

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthGuard, public router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('token')

    return true;
  }
}