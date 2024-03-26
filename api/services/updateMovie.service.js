import movies from "../database/movies.js";

const updateMovieService = (
  title,
  director,
  actors,
  genre,
  resume,
  owner_id
) => {
  const updateMovie = {
    title,
    director,
    actors,
    genre,
    resume,
    owner_id,
  };

  const movieIndex = movies.findIndex((element) => element.id === owner_id);

  if (movieIndex === -1) {
    return "Filme não encontrado";
  }

  movies[movieIndex] = { ...movies[movieIndex], ...updateMovie };

  return movies[movieIndex];
};

export default updateMovieService;
