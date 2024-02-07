import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from '../../envoirments/envoirment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private myAppUrl: string;
  private myApiUrl: string;
  public currentUser: Observable<User>
  private currentUserSubject: BehaviorSubject<User>

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users'
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('token')!));
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value
  }

  get isAdmin() {
    return this.currentUser && this.currentUserSubject.value.role === 1
  }

  get isUser() {
    return this.currentUser && this.currentUserSubject.value.role != 1
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