import dotenv from "dotenv";
dotenv.config();

const node_env = process.env.NODE_ENV;
const port = Number(process.env.PORT);

if(!node_env) throw new Error("'NODE_ENV' is not defined in environment variables");
if(!port) throw new Error("'PORT' is not defined in environment variables");

export const env = {
  node_env,
  port,
}