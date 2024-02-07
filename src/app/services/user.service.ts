import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from '../../envoirments/envoirment';
import { User } from '../interfaces/user';


@Injectable({ providedIn: 'root' })
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private _http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users'
  }

  getAll() {
    return this._http.get<User[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }

  getById(id: number) {
    return this._http.get<User>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
  }
}