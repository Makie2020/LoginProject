import { Permission } from '../enum/permission';
import { Role } from '../enum/role';

export interface User {
  username: string,
  password: string,
  role?: Role,
  permission?: Permission[]
}

export interface IUser {
  id: any;
  username: string,
  password: string,
  role_id: Role,
  permissions: Permission[];
}