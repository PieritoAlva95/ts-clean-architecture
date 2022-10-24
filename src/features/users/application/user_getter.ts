import { User } from "../domain/entities/user";
import { UserService } from "../domain/services/user_service";

export class UserGetter {
  user_service: UserService;

  constructor(user_service: UserService) {
    this.user_service = user_service;
  }

  public async execute(uuid: string): Promise<User | null> {
    return await this.user_service.getUserById(uuid);
  }
}
