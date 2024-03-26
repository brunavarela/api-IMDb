import updateMovieService from "../services/updateMovie.service.js";

const updateMovieController = (request, response) => {
  const { owner_id } = request.params;
  const { title, director, actors, genre, resume } = request.body;

  const updateMovie = updateMovieService(
    title,
    director,
    actors,
    genre,
    resume,
    owner_id
  );

  return response.json(updateMovie);
};

export default updateMovieController;
