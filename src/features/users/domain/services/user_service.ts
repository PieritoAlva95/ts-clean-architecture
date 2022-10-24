import { User } from "../entities/user";
import { UserRepository } from "../repositories/user_repository";

export class UserService {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  createUser(uuid: string, user: User): Promise<User> {
    if (!this.isAdmin(uuid)) throw new Error("Permission Error!");
    const userCreated: Promise<User> = this.userRepository.create(user);
    return userCreated;
  }

  getUserById(uuid: string): Promise<User | null> {
    const userFinded: Promise<User | null> = this.userRepository.get(uuid);
    return userFinded;
  }

  isAdmin(uuid: string): boolean {
    const isAdmin = this.userRepository.get(uuid);
    if (!isAdmin) return false;
    return true;
  }
}
