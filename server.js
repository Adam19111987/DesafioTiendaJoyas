import {envs} from "./config/envs.js";
import express from "express"
import joyasRouter from "./router/joyas.router.js"


const app = express();
const ports = envs.port
app.listen(ports, () => { console.log(`Server on! in host : ${ports}`)})

app.use(express.json()) 

app.use("/api", joyasRouter)