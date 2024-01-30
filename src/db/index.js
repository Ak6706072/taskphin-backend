import { Client } from "pg";

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DATABASE_NAME,
  user: process.env.USER_NAME,
  password: process.env.DB_PASSWORD,
});

export default client;
