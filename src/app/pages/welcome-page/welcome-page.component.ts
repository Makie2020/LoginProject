import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.services';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {
  user: any;

  constructor(public _authenticationService: AuthenticationService) {}
  
  ngOnInit(): void {
    this.user = this._authenticationService.user;
  }
}
