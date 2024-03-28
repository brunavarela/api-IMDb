import updateMovieRatingService from "../services/updateMovieRating.service.js";

const updateMovieRatingController = async (request, response) => {
  try {
    const { movie_id } = request.params;
    const { rating } = request.body;

    const result = await updateMovieRatingService(movie_id, rating);

    if (result.affectedRows > 0) {
      return response
        .status(200)
        .json({ message: "Rating do filme atualizado com sucesso" });
    } else {
      return response.status(404).json({ message: "Filme não encontrado" });
    }
  } catch (error) {
    console.error("Erro no controlador:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
};

export default updateMovieRatingController;
