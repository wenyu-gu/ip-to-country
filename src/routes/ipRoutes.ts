import { Router } from "express";
import ipController from "../controllers/ipController";

const ipRouter = Router();

ipRouter.get("/country/:ip", (req, res) => ipController.getCountry(req, res));

export default ipRouter;
