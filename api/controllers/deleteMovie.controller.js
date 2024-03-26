import deleteMovieService from "../services/deleteMovie.service.js";

const deleteMovieController = (request, response) => {
  const { owner_id } = request.params;

  const deleteMovie = deleteMovieService(owner_id);

  return response.json(deleteMovie);
};

export default deleteMovieController;