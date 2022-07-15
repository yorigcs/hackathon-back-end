import { Router } from "express";
import validateJwtToken from "../middlewares/privateMiddlewares/validateJwtToken.js";

const routes = Router();

routes.post("/myCards", validateJwtToken)

export default routes;