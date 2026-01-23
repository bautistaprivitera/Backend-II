import { Router } from "express";
import userControllers from "../controllers/user.controllers.js";
import { hashPassword, comparePassword } from "../utils/crypt.js";

const router = Router();

router.get("/", userControllers.getAllUsers);
router.get("/:id", userControllers.getUserById);
router.post("/", userControllers.createUser);
router.delete("/:id", userControllers.deleteById);

export default router;