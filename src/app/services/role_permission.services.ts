import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from '../../envoirments/envoirment';
import { IRolePermission } from '../interfaces/rolePermission';

@Injectable({ providedIn: 'root' })

export class RolePermissionService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private _http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/rolePermission'
  }

  getRolePermissions() {
    return this._http.get<IRolePermission[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }

  updatePermissionsRole(role_id:number, permission_id: number) {
    return this._http.patch<IRolePermission[]>(`${this.myAppUrl}${this.myApiUrl}`, {role_id, permission_id})
  }
}