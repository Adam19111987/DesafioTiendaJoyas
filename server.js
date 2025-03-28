import {envs} from "./config/envs.js";
import express from "express"
import joyasRouter from "./router/joyas.rourter.js"

const app = express();
const ports = envs.port_db
app.listen(ports, () => { console.log(`Server on! in host : ${ports}`)})


app.use("/api", joyasRouter)