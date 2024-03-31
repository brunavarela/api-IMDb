import knex from "../config/database.js";

const deleteMovieService = (movie_id) => {
  return new Promise((resolve, reject) => {
    knex("movies")
      .where("movie_id", movie_id)
      .del()
      .then((result) => {
        resolve({ mensagem: "Filme excluído com sucesso" });
      })
      .catch((error) => {
        console.error("Erro ao excluir filme:", error);
        reject(error);
      });
  });
};

export default deleteMovieService;
