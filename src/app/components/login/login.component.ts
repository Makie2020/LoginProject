import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../../services/error.services';
import { AuthenticationService } from '../../services/authentication.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _AuthenticationService: AuthenticationService,
    private router: Router,
   private _errorService: ErrorService) { }

  ngOnInit(): void {
  }

  login() {
    if (this.username == '' || this.password == '') {
      this.toastr.error('All fields are required', 'Error');
      return
    }

    const user: User = {
      username: this.username,
      password: this.password
    }

    this.loading = true;
    
    this._AuthenticationService.login(user).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/dashboard'])
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false
      }
    })
  }
}