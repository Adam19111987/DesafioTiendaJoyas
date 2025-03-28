import format from "pg-format"
import pool from "../../config/db/connect.js"


const dataGetJoyas = async(order_by = "id_ASC", limit = 6, page = 1) => {
  const [atributte, direction] = order_by.split("_") 
  const offset = (page-1) * limit
  const SQLquery = format("SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s", atributte, direction, offset)
  const response =  await pool.query(SQLquery);
  return response.rows;
}

export{dataGetJoyas};