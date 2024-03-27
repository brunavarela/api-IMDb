import movies from "../database/movies.js";

const updateMovieService = (
  title,
  director,
  actors,
  genre,
  resume,
  movie_id
) => {
  const updateMovie = {
    title,
    director,
    actors,
    genre,
    resume,
    movie_id,
  };

  const movieIndex = movies.findIndex((element) => element.id === movie_id);

  if (movieIndex === -1) {
    return "Filme não encontrado";
  }

  movies[movieIndex] = { ...movies[movieIndex], ...updateMovie };

  return movies[movieIndex];
};

export default updateMovieService;
