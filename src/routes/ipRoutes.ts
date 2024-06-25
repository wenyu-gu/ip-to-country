import { Router } from "express";
import ipController from "../controllers/ipController";

const ipRouter = Router();

ipRouter.get("/country/:ip", (req, res) => ipController.getCountry(req, res));

ipRouter.get("/country/", (req, res) => {
  res.status(400).json({ error: "IP address is missing." });
});

export default ipRouter;
