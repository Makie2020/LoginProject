import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from '../../envoirments/envoirment';
import { IRole } from '../interfaces/role';

@Injectable({ providedIn: 'root' })

export class RoleService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private _http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/roles'
  }

  getRoles() {
    return this._http.get<IRole[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }
}