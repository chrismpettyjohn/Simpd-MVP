import { UserCreateInput } from '@simpd/lib-web';

export interface CreateUserFormProps {
  loading: boolean;
  onSave(newUserDTO: UserCreateInput): void;
}