import { Permission } from '../enum/permission';
import { Role } from '../enum/role';

export interface User {
  username: string,
  password: string,
  role?: Role,
  permission?: Permission[]
}