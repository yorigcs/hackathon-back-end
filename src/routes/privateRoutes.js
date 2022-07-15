import { Router } from "express";
import createMyCardController from "../controllers/privateControllers/createMyCardController.js";
import getMyCardsController from "../controllers/privateControllers/getMyCardsController.js";
import validateJwtToken from "../middlewares/privateMiddlewares/validateJwtToken.js";
import validateCreateMyCard from "../middlewares/publicMiddlewares/validateCreateMyCards.js";

const routes = Router();

routes.post("/myCards", validateJwtToken, validateCreateMyCard, createMyCardController)
routes.get("/myCards", validateJwtToken,getMyCardsController)
export default routes;