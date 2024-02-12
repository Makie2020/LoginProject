import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from '../../envoirments/envoirment';
import { IPermission } from '../interfaces/permission';

@Injectable({ providedIn: 'root' })

export class PermissionService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private _http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/permissions'
  }

  getPermissions() {
    return this._http.get<IPermission[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }
}