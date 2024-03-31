import updateMovieService from "../services/updateMovie.service.js";

const updateMovieController = async (request, response) => {
  try {
    const { movie_id } = request.params;
    const { title, director, cast, genre, resume, image } = request.body;

    const result = await updateMovieService(
      title,
      director,
      cast,
      genre,
      resume,
      image,
      movie_id
    );

    return response
      .status(200)
      .json({ message: "Filme atualizado com sucesso" });
  } catch (error) {
    console.error("Erro no controlador:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
};

export default updateMovieController;
