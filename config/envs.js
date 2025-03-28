import dotenv from "dotenv"
dotenv.config();

const envs = {
  port_db : process.env.PORT,
  host_db : process.env.HOST,
  user_db : process.env.USER,
  data_db : process.env.DATA,
  pass_db : process.env.PASS


}

export {envs}