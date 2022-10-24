import { Router } from "express";
import { getUserController } from "../controllers/get_user_controller";

const route = Router();

route.get("/user", getUserController);

export default route;
