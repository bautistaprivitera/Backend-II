import express from "express";
import { config } from "./src/config/config.js";
import { connectDB } from "./src/config/db.js";
import router from "./src/routes/user.router.js";
import sessionsRouter from "./src/routes/session.router.js";

import passport from "passport";
import { initializePassport } from "./src/config/passport.js";
import cookieParser from "cookie-parser";
connectDB();
const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
initializePassport();
app.use(passport.initialize());

app.use('/users', router);
app.use('api/sessions', sessionsRouter);

app.get('/', (req, res) => {
    res.send({status: 'ok'});
})

app.listen(config.PORT, () => { console.log(`Server listening on port ${config.PORT}`)});