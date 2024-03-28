import { pool as mysql } from "../database/mysql.js";

const updateMovieService = (title, director, cast, genre, resume, movie_Id) => {
  return new Promise((resolve, reject) => {
    mysql.getConnection((error, conn) => {
      if (error) {
        console.error("Erro ao obter conexão:", error);
        return reject(error);
      }

      conn.query(
        "UPDATE movies SET title = ?, director = ?, cast = ?, genre = ?, resume = ? WHERE movie_id = ?",
        [title, director, cast, genre, resume, movie_Id],
        (error, result) => {
          conn.release();
          if (error) {
            console.error("Erro ao atualizar filme:", error);
            return reject(error);
          }
          resolve(result);
        }
      );
    });
  });
};

export default updateMovieService;
