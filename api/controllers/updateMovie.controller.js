import updateMovieService from "../services/updateMovie.service.js";

const updateMovieController = async (request, response) => {
  try {
    const { movie_id } = request.params;
    const { title, director, cast, genre, resume } = request.body;

    const result = await updateMovieService(
      title,
      director,
      cast,
      genre,
      resume,
      movie_id
    );

    if (result.affectedRows > 0) {
      return response
        .status(200)
        .json({ message: "Filme atualizado com sucesso" });
    } else {
      return response.status(404).json({ message: "Filme não encontrado" });
    }
  } catch (error) {
    console.error("Erro no controlador:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
};

export default updateMovieController;
