import { pool as mysql } from "../database/mysql.js";

const listMoviesService = () => {
  return new Promise((resolve, reject) => {
    mysql.getConnection((error, conn) => {
      if (error) {
        console.error("Erro ao obter conexão:", error);
        return reject(error);
      }

      conn.query(
        "SELECT * FROM movies",
        (error, results, fields) => {
          conn.release();
          if (error) {
            console.error("Erro ao listar filmes:", error);
            return reject(error);
          }
          resolve(results);
        }
      );
    });
  });
};

export default listMoviesService;
