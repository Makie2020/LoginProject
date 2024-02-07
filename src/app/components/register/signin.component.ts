import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { ErrorService } from '../../services/error.services';
import { AuthenticationService } from '../../services/authentication.services';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _AuthenticationService: AuthenticationService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {
  }

  addUser() {

    if (this.username == '' || this.password == '' || this.confirmPassword == '') {
      this.toastr.error('All fields are required', 'Error');
      return;
    }

    if (this.password != this.confirmPassword) {
      this.toastr.error('The passwords entered are different', 'Error');
      return;
    }

    const user: User = {
      username: this.username,
      password: this.password
    }

    this.loading = true;
    this._AuthenticationService.signIn(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`The user ${this.username} was successfully registered`, 'Registered user');
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }
}