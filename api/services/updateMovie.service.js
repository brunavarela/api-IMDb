import knex from "../config/database.js";

const updateMovieService = (
  title,
  director,
  cast,
  genre,
  resume,
  image,
  movie_id
) => {
  return new Promise((resolve, reject) => {
    knex("movies")
      .where("movie_id", movie_id)
      .update({ title, director, cast, genre, resume, image })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        console.error("Erro ao atualizar filme:", error);
        reject(error);
      });
  });
};

export default updateMovieService;
