import listMoviesService from "../services/listMovies.service.js";

const listMoviesController = (request, response) => {
  const movies = listMoviesService();

  return response.json(movies);
};

export default listMoviesController;
