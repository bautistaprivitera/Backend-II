import { Router } from "express";
import passport from "passport";
import { authorizeRoles } from "../middlewares/auth.js";
import  * as productControllers from "../controllers/product.controllers.js";

const router = Router();    

router.post("/", passport.authenticate("jwt", { session: false }), authorizeRoles("admin"), productControllers.createProduct);
router.get("/", passport.authenticate("jwt", { session: false }), productControllers.getProducts);
router.get("/:pid", passport.authenticate("jwt", { session: false }), productControllers.getProductById);

export default router;