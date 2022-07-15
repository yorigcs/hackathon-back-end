import { Router } from "express";
import validateSignUpMiddleware from "../middlewares/publicMiddlewares/validateSignUpMiddleware.js";

const routes = Router();

routes.post("/signUp", validateSignUpMiddleware)

export default routes;