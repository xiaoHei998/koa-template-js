const mysql2 = require("mysql2/promise.js");
async function connectionDB() {
  // 创建单个连接
  try {
    const connection = await mysql2.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_ROOT,
      password: process.env.DB_PASSWORD,
      database: "template_data",
      port: process.env.DB_PORT,
    });
    return connection;
  } catch (error) {
    throw new Error("数据库连接失败->" + error);
  }
}

async function executeQuery(sql) {
  const con = await connectionDB();

  try {
    const res = await con.query(sql);
    return res;
  } catch (error) {
    throw new Error("mysql error:" + error);
  } finally {
    con.end();
  }
}

exports.connectionDB = connectionDB;
exports.executeQuery = executeQuery;
