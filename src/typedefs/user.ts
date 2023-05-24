export interface UserBase {
  name: string
  email: string
}

export interface User extends UserBase {
  id: number;
  authToken?: string;
}

export interface UserFormLogin {
  email: string
  password: string
}

export interface UserFormSignup extends UserBase {
  password: string
}