import {exampleRoleWire, RoleWire} from '..';

export interface PrivateUserWire {
  id: number;
  email: string;
  role: RoleWire;
}

export const examplePrivateUserWire: PrivateUserWire = {
  id: 1,
  role: exampleRoleWire,
  email: 'user@gmail.com',
};
