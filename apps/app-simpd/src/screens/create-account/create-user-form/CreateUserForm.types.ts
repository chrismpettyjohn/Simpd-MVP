import { UserCreateInput } from "graphql";

export interface CreateUserFormProps {
  loading: boolean;
  onSave(newUserDTO: UserCreateInput): void;
}