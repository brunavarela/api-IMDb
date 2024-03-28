import { pool as mysql } from "../database/mysql.js";

const updateMovieRatingService = (movie_id, rating) => {
  return new Promise((resolve, reject) => {
    mysql.getConnection((error, conn) => {
      if (error) {
        console.error("Erro ao obter conexão:", error);
        return reject(error);
      }

      conn.query(
        "UPDATE movies SET rating = ? WHERE movie_id = ?",
        [rating, movie_id],
        (error, result) => {
          conn.release();
          if (error) {
            console.error("Erro ao atualizar a nota do filme:", error);
            return reject(error);
          }
          resolve(result);
        }
      );
    });
  });
};

export default updateMovieRatingService;
