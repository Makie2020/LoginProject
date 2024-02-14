import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from '../../envoirments/envoirment';
import { IUserRole } from '../interfaces/userRole';

@Injectable({ providedIn: 'root' })

export class UserRoleService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private _http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/userRoles'
  }

  updateRoles(user_id:number, role_id: number) {
    return this._http.patch<IUserRole[]>(`${this.myAppUrl}${this.myApiUrl}`, {user_id, role_id})
  }
}