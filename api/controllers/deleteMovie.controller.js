import deleteMovieService from "../services/deleteMovie.service.js";

const deleteMovieController = (request, response) => {
  const { movie_id } = request.params;

  const deleteMovie = deleteMovieService(movie_id);

  return response.json(deleteMovie);
};

export default deleteMovieController;