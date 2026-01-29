import { Router } from "express";
import userControllers from "../controllers/user.controllers.js";

const router = Router();

router.get("/", userControllers.getAllUsers);
router.get("/:id", userControllers.getUserById);
router.post("/", userControllers.createUser);
router.put("/:id", userControllers.updateUser);
router.delete("/:id", userControllers.deleteById);

export default router;