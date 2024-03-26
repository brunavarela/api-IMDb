import movies from "../database/movies.js";

const deleteMovieService = (owner_id) => {
  const movieIndex = movies.findIndex((element) => element.id === owner_id);

  if (movieIndex === -1) {
    return "Filme não encontrado";
  }

  movies.splice(movieIndex, 1);

  return "Filme deletado";
};

export default deleteMovieService;
