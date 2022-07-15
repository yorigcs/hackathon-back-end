import { Router } from "express";
import signUpController from "../controllers/publicControllers/signUpController.js";
import validateSignUpMiddleware from "../middlewares/publicMiddlewares/validateSignUpMiddleware.js";

const routes = Router();

routes.post("/signUp", validateSignUpMiddleware, signUpController)

export default routes;