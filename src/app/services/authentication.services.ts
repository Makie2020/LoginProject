import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../envoirments/envoirment';
import { User } from '../interfaces/user';
import { JwtService } from './jwt.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient, private jwtService:JwtService) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users'
  }
  
  public get user() {
    let token = localStorage.getItem('token');
    if(!token) return null;
    return this.jwtService.DecodeToken(token);
  }

  public get isAdmin() {
    let token: any = this.jwtService.DecodeToken(localStorage.getItem('token')!);
    if( token.role === 1) return true;
    return false;
  }

  public get isUser() {
    let token: any = this.jwtService.DecodeToken(localStorage.getItem('token')!);
    if( token.role != 1) return true;
    return false;
  }

  public get permissions() {
    let token: any = this.jwtService.DecodeToken(localStorage.getItem('token')!);
    return token.permission;
  }

  signIn(user: User): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, user);
  }


  login(user: User): Observable<string> {
    return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}/login`, user)
  }

  logout() {
    localStorage.removeItem('token');
  }
}