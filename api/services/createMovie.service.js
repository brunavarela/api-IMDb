import knex from "../config/database.js";
import * as uuid from "uuid";

const createMovieService = (title, director, cast, genre, resume) => {
  const movieId = uuid.v4();

  return new Promise((resolve, reject) => {
    knex("movies")
      .insert({ movie_id: movieId, title, director, cast, genre, resume })
      .then(() => {
        resolve({
          mensagem: "Filme inserido com sucesso",
          id_movie: movieId,
        });
      })
      .catch((error) => {
        console.error("Erro ao inserir filme:", error);
        reject(error);
      });
  });
};

export default createMovieService;
