import movies from "../database/movies.js";

const deleteMovieService = (movie_id) => {
  const movieIndex = movies.findIndex((element) => element.id === movie_id);

  if (movieIndex === -1) {
    return "Filme não encontrado";
  }

  movies.splice(movieIndex, 1);

  return "Filme deletado";
};

export default deleteMovieService;
