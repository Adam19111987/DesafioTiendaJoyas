import express from "express"
import {getjoyas, getjoyasfiltros} from "../src/controllers/joyas.controllers.js"
 
const router = express.Router();


router.get("/joyas", getjoyas)
router.get("/joyas/filtros" , getjoyasfiltros)

export default router


