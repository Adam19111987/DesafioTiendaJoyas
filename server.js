import {envs} from "./config/envs.js";
import express from "express"
import joyasRouter from "./router/joyas.router.js"
import { logger } from "logger-express";

const loggerOption = {
    logToFile: true, // If you need to log information to a file
    colorize: true, // enable console colors
    infoColor: "magenta", // set a color for information messages
    errorColor: "red", // set a color for error messages:
  };

const app = express();
const ports = envs.port
app.listen(ports, () => { console.log(`Server on! in host : ${ports}`)})

app.use(express.json()) 
app.use(logger(loggerOption));
app.use("/api", joyasRouter)
