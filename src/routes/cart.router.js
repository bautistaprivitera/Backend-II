import { Router } from "express";
import passport from "passport";
import * as cartControllers from "../controllers/cart.controllers.js";

const router = Router();    

router.post("/", passport.authenticate("jwt", { session: false }), cartControllers.createCart);
router.get("/:cid", passport.authenticate("jwt", { session: false }), cartControllers.getCartById);
router.post("/:cid/products/:pid", passport.authenticate("jwt", { session: false }), cartControllers.addProductToCart);
router.post("/:cid/purchase", passport.authenticate("jwt", { session: false }), cartControllers.purchaseCart);

export default router;