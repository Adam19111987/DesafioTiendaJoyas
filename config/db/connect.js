import pgk from "pg"
import { envs } from "../envs.js";
const {Pool} = pgk;

const pool = new Pool({
   host : envs.host_db,
   user : envs.user_db,
   database : envs.data_db,
   password : envs.pass_db,
   allowExitOnIdle : true  
})


export default pool;