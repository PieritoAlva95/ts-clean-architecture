import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/user_repository";
import UserModel from "../models/user.schema";

const MOCK_USER = {
  user_id: "000-000-000",
  name: "Usuario Mock",
  email: "mock@gmail.com",
  is_admin: true,
};
export class MongoUserRepository implements UserRepository {
  async create(user: User): Promise<User> {
    const userCreated = MOCK_USER;
    return userCreated;
  }

  async get(uuid: string): Promise<User | null> {
    const userGeted = MOCK_USER;
    return userGeted;
  }
}
