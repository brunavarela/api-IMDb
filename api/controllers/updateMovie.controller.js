import updateMovieService from "../services/updateMovie.service.js";

const updateMovieController = (request, response) => {
  const { movie_id } = request.params;
  const { title, director, actors, genre, resume } = request.body;

  const updateMovie = updateMovieService(
    title,
    director,
    actors,
    genre,
    resume,
    movie_id
  );

  return response.json(updateMovie);
};

export default updateMovieController;
