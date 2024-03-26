import createMovieService from "../services/createMovie.service.js";

const createMovieController = (request, response) => {
  const { title, director, actors, genre, resume } = request.body;

  const movie = createMovieService(title, director, actors, genre, resume);

  return response.json(movie);
};

export default createMovieController;
