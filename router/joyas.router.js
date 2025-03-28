import express from "express"
import {getjoyas} from "../src/controllers/joyas.controllers.js"
 
const router = express.Router();


router.get("/joyas", getjoyas)


export default router


