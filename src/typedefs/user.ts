import { GenericFormProps } from "./auth";

export interface UserBase {
  name: string
  email: string
}
export interface User extends UserBase {
  id: number;
  authToken: string;
}

export interface UserFormSignup extends UserBase {
  password: string
}
export interface UserFormLogin {
  email: string
  password: string
}

export interface UserFormUpdate {
  name?: string
  email?: string
  password?: string
}

export interface UserDetailsComponentProps {
  user: User
}

export interface UserFormUpdateComponent extends GenericFormProps {
  setSuccess: (msg: string) => void
  user: User
}
