import {
  updateMovieRating,
  getMovieById,
} from "../services/updateMovieRating.service.js";

const updateMovieRatingController = (request, response) => {
  const { movie_id, rating } = request.body;
  const movie = updateMovieRating(movie_id, rating);
  if (movie) {
    return response.json(movie);
  }
  return response.status(404).json({ message: "Filme não encontrado" });
};

const getMovieRatingController = (request, response) => {
  const { movie_id } = request.params;
  const movie = getMovieById(movie_id);
  if (movie) {
    return response.json({ rating: movie.rating });
  }
  return response.status(404).json({ message: "Filme não encontrado" });
};

export { updateMovieRatingController, getMovieRatingController };
