import { Router } from "express";
import * as sessionControllers from "../controllers/session.controllers.js";

const router = Router();

router.post("/login", sessionControllers.login);
router.get("/current", sessionControllers.current);

export default router;