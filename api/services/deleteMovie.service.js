import { pool as mysql } from "../database/mysql.js";

const deleteMovieService = (movie_Id) => {

  return new Promise((resolve, reject) => {
    
    mysql.getConnection((error, conn) => {
      if (error) {
        console.error("Erro ao obter conexão:", error);
        return reject(error);
      }

      conn.query(
        "DELETE FROM movies WHERE movie_id = ?",
        [movie_Id],
        (error, result, field) => {
          conn.release();
          if (error) {
            console.error("Erro ao excluir filme:", error);
            return reject(error);
          }
          resolve({ mensagem: "Filme excluído com sucesso" });
        }
      );
    });
  });
};

export default deleteMovieService;
