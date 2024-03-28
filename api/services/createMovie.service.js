import { pool as mysql } from "../database/mysql.js";

const createMovieService = (title, director, cast, genre, resume) => {
  console.log("Dados recebidos no serviço:", {
    title,
    director,
    cast,
    genre,
    resume,
  });

  return new Promise((resolve, reject) => {
    mysql.getConnection((error, conn) => {
      if (error) {
        console.error("Erro ao obter conexão:", error);
        return reject(error);
      }

      conn.query(
        "INSERT INTO movies (title, director, cast, genre, resume) VALUES (?, ?, ?, ?, ?)",
        [title, director, cast, genre, resume],
        (error, result, field) => {
          conn.release();
          if (error) {
            console.error("Erro ao inserir filme:", error);
            return reject(error);
          }
          resolve({
            mensagem: "Filme inserido com sucesso",
            id_movie: result.insertId,
          });
        }
      );
    });
  });
};

export default createMovieService;
