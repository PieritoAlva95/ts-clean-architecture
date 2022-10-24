import { Request, Response } from "express";
import { userServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { UserGetter } from "../../application/user_getter";
import { UserService } from "../../domain/services/user_service";

export const getUserController = async (req: Request, res: Response) => {
  const userService: UserService = userServiceFactory();
  const userGetter = new UserGetter(userService);
  const result = await userGetter.execute(req.body);
  res.send(result);
};
