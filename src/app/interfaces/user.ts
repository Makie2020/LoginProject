import { Permission } from '../enum/permission';
import { Role } from '../enum/role';

export interface User {
  username: string,
  password: string,
  role?: Role,
  permission?: Permission[]
}

export interface IUser {
  username: string,
  password: string,
  'users_role.role_id': number,
  'roles_permissions.permission_id': number[];
}