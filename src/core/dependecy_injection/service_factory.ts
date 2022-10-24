import { UserService } from "../../features/users/domain/services/user_service";
import { MongoUserRepository } from "../../features/users/infrastructure/repository_implementation/mongo_user_repository";

export const userServiceFactory = (): UserService => {
  const userRepository = new MongoUserRepository();
  const userService = new UserService(userRepository);
  return userService;
};
