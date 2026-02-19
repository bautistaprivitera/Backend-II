import express from "express";
import { config } from "./src/config/config.js";
import { connectDB } from "./src/config/db.js";
import userRouter from "./src/routes/user.router.js";
import sessionsRouter from "./src/routes/session.router.js";
import productRouter from "./src/routes/product.router.js";
import cartRouter from "./src/routes/cart.router.js";

import passport from "passport";
import { initializePassport } from "./src/config/passport.js";
import cookieParser from "cookie-parser";
connectDB();
const app = express(); 

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializePassport();
app.use(passport.initialize());

app.get('/', (req, res) => {
    res.send({status: 'ok'});
})

app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/api/users', userRouter);
app.use('/api/sessions', sessionsRouter);

app.listen(config.PORT, () => { console.log(`Server listening on port ${config.PORT}`)});