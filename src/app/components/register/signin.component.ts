import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { ErrorService } from '../../services/error.services';
import { AuthenticationService } from '../../services/authentication.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  registerForm!: FormGroup;

  constructor(private toastr: ToastrService,
    private _AuthenticationService: AuthenticationService,
    private router: Router,
    private _errorService: ErrorService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  addUser() {
    console.log(this.registerForm.value)
    if (this.registerForm.value.username == '' || this.registerForm.value.password == '' || this.registerForm.value.confirmPassword == '') {
      this.toastr.error('All fields are required', 'Error');
      return;
    }

    if (this.registerForm.value.password != this.registerForm.value.confirmPassword) {
      this.toastr.error('The passwords entered are different', 'Error');
      return;
    }

    const user: User = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password
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