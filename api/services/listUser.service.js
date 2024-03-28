import { pool as mysql } from "../database/mysql.js";

const listUsersService = () => {
  return new Promise((resolve, reject) => {
    mysql.getConnection((error, conn) => {
      if (error) {
        console.error("Erro ao obter conexão:", error);
        return reject(error);
      }

      conn.query(
        "SELECT id, name, email, password, CAST(isAdmin AS UNSIGNED) AS isAdmin FROM users",
        (error, results) => {
          conn.release();
          if (error) {
            console.error("Erro ao listar usuários:", error);
            return reject(error);
          }
          resolve(results);
        }
      );
    });
  });
};

export default listUsersService;
