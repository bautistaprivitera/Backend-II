import { config } from "dotenv";
import express from "express";
import router from "./routes/user.router.js";
import {config} from "./config/db.js";

config();
const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', router);

app.get('/', (req, res) => {
    res.send({status: 'ok'});
})

app.listen(config.PORT, () => { console.log(`Server listening on port ${config.PORT}`)});