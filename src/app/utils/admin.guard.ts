// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { UserService } from '../services/user.services';


// @Injectable({
//   providedIn: 'root'
// })
// export class AdminGuard implements CanActivate {

//   constructor(private authService: UserService, private router: Router) {}

//   canActivate(): boolean {
//     if (this.authService.isAdmin()) {
//       return true;
//     } else {
//       this.router.navigate(['/dashboard']);
//       return false;
//     }
//   }
// }