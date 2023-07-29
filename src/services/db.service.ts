// const mysql = require("mysql2/promise");
import dbConfig from "@configs/general.config";

async function query(sql: any, params: any) {
  //   const connection = await mysql.createConnection(dbConfig);
  //   const [results] = await connection.execute(sql, params);

  return [];
}

export default {
  query,
};
