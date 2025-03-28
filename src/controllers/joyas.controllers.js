import {prepararHateoas} from "../utils/hateoas.js"
import {findERR} from "../utils/find.error.utils.js"
import {dataGetJoyas, getDataFiltrer} from "../models/joyas.models.js"

const getjoyas = async(req, res) => {
    try{
  const {limit, order_by, page} = req.query
  const joyas = await dataGetJoyas(limit, order_by, page);
  const joyasHateoas = await prepararHateoas("joyas", joyas)
 
  
res.status(200).json({ joyas: joyasHateoas})
}
  catch(error){
  const findError = findERR(error.code)  
  return res.status(findError[0].status).json({error : findError[0].message, type : findError[0].type})
  }

}

const getjoyasfiltros = async(req, res) => {
  const filters = req.query
  try{
    const joyas = await getDataFiltrer(filters)
   
    res.status(200).json(joyas)
  }catch(error){
    const findError = findERR(error.code) 
    return res.status(findError[0].status).json({error : findError[0].message, type : findError[0].type})
  }
}





export{getjoyas, getjoyasfiltros}