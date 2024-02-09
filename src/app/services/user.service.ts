import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from '../../envoirments/envoirment';
import { IUser, User } from '../interfaces/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private _http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users'
  }

  getAllUsers() {
    return this._http.get<IUser[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }

  getUserById(id: number) {
    return this._http.get<User>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
  }
}