import express from "express";
import { config } from "./src/config/config.js";
import { connectDB } from "./src/config/db.js";
import router from "./src/routes/user.router.js";

connectDB();
const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', router);

app.get('/', (req, res) => {
    res.send({status: 'ok'});
})

app.listen(config.PORT, () => { console.log(`Server listening on port ${config.PORT}`)});