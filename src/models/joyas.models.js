import format from "pg-format"
import pool from "../../config/db/connect.js"


const dataGetJoyas = async( limit = 6 , order_by = "id_ASC", page = 1) => {
     
  const [atributte, direction] = order_by.split("_") 
  const ValidarAtributte = ["id", "nombre", "precio"].includes(atributte) ? atributte : "id"
  if(!ValidarAtributte.includes(atributte)) throw new Error("Atributte not valid")
  const ValidarDirrection = direction.toLowerCase() === "ASC" ? "ASC" : "DESC";
  const offset = (page-1) * limit
  const SQLquery = format("SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s",  atributte, ValidarDirrection, limit, offset)
  const response =  await pool.query(SQLquery);
  return response.rows;
}

export{dataGetJoyas}