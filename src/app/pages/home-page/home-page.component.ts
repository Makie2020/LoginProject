import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.services';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  user: any;

  constructor(public _authenticationService: AuthenticationService) {}
  
  ngOnInit(): void {
    this.user = this._authenticationService.user;
  }
}
