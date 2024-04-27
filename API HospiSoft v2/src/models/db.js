//modulo que gestiona la conexión con la base de datos

//Cadena de conexión

import { createPool } from "mysql2";
import dotenv from "dotenv";
dotenv.config({ path: "././.env" });

export const cnx = createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  multipleStatements: process.env.MULTIPLESTATEMENTS
}).promise();


