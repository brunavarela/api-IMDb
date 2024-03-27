import movies from "../database/movies.js";

const updateMovieRating = (movie_id, rating) => {
  const movieIndex = movies.findIndex((movie) => movie.id === movie_id);
  if (movieIndex !== -1) {
    movies[movieIndex].rating = rating;
    return movies[movieIndex];
  }
  return null;
};

const getMovieById = (movie_id) => {
  return movies.find((movie) => movie.id === movie_id);
};

export { updateMovieRating, getMovieById };
