import { HttpErrorResponse } from '@angular/common/http';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../interfaces/user';
import { ErrorService } from '../../services/error.services';
import { AuthenticationService } from '../../services/authentication.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  username: string = '';
  password: string = '';
  loading: boolean = false;
  submitted: boolean = false;

  constructor(
    private _AuthenticationService: AuthenticationService,
    private router: Router,
    private _errorService: ErrorService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    const user: User = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }

    this._AuthenticationService.login(user).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/welcome'])
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false
      }
    })
  }
}