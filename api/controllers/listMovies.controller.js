import listMoviesService from "../services/listMovies.service.js";

const listMovieController = async (request, response) => {
  try {
    const movies = await listMoviesService();
    return response.status(200).json(movies);
  } catch (error) {
    console.error("Erro no controlador:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
};

export default listMovieController;
