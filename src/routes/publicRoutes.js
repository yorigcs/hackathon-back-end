import { Router } from "express";
import signInController from "../controllers/publicControllers/signInController.js";
import signUpController from "../controllers/publicControllers/signUpController.js";
import createJwtToken from "../middlewares/publicMiddlewares/createJwtToken.js";
import validateSignInMiddleware from "../middlewares/publicMiddlewares/validateSignInMiddleware.js";
import validateSignUpMiddleware from "../middlewares/publicMiddlewares/validateSignUpMiddleware.js";

const routes = Router();

routes.post("/signUp", validateSignUpMiddleware, signUpController)
routes.post("/signIn", validateSignInMiddleware, createJwtToken,signInController )

export default routes;