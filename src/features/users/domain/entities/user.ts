import { v4 as uuid } from "uuid";

interface UserEntity {
  user_id?: string;
  name: string;
  email: string;
  is_admin?: boolean;
}
export class User implements UserEntity {
  user_id: string;
  name: string;
  email: string;
  is_admin: boolean;

  constructor({ name, email }: UserEntity) {
    this.user_id = uuid();
    this.name = name;
    this.email = email;
    this.is_admin = false;
  }
}
