import { User } from "../domain/entities/user";
import { UserService } from "../domain/services/user_service";

export class UserCreator {
  user_service: UserService;

  constructor(user_service: UserService) {
    this.user_service = user_service;
  }

  public execute = async (uuid: string, user: User): Promise<User> => {
    return await this.user_service.createUser(uuid, user);
  };
}
