import deleteMovieService from "../services/deleteMovie.service.js";

const deleteMovieController = async (request, response) => {
  try {
    const { movie_id } = request.params;

    await deleteMovieService(movie_id);

    return response
      .status(200)
      .json({ mensagem: "Filme excluído com sucesso" });
  } catch (error) {
    console.error("Erro no controlador:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
};

export default deleteMovieController;
