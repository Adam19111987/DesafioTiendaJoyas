import express from "express"
import {getjoyas, getjoyasfiltros, getrutanoencontrada} from "../src/controllers/joyas.controllers.js"
 
const router = express.Router();


router.get("/joyas", getjoyas)
router.get("/joyas/filtros" , getjoyasfiltros)
router.get("*", getrutanoencontrada)
    

export default router


