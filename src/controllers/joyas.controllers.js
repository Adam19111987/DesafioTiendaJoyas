import {prepararHateoas} from "../utils/hateoas.js"
// import {findERR} from "../utils/find.error.utils.js"
import {dataGetJoyas} from "../models/joyas.models.js"

const getjoyas = async(req, res) => {
    try{
  const {limit, order_by, page} = req.query
  const joyas = await dataGetJoyas(limit, order_by, page);
  const joyasHateoas = await prepararHateoas("joyas", joyas)
 
  
res.status(200).json({ joyas: joyasHateoas})
}
  catch(error){

  return res.status(404).json({message : error})
  }

}


export{getjoyas}