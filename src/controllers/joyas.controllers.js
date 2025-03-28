
import {findERR} from "../utils/find.error.utils.js"
import {dataGetJoyas} from "../models/joyas.models.js"

const getjoyas = async(req, res) => {
    try{
  const {order_by, limit, page} = req.query
  const joyas = await dataGetJoyas(order_by, limit, page);
res.status(200).json(joyas)}
  catch(error){
   const errorFound = findERR(error.code);
   return res
   .status(errorFound[0].status)
   .json({error : errorFound[0].message, type : errorFound[0].type})
  }

}


export{getjoyas}