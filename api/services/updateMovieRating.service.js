import knex from "../config/database.js";

const updateMovieRatingService = (movie_id, rating) => {
  return new Promise((resolve, reject) => {
    knex("movies")
      .where("movie_id", movie_id)
      .update({ rating })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        console.error("Erro ao atualizar a nota do filme:", error);
        reject(error);
      });
  });
};

export default updateMovieRatingService;
