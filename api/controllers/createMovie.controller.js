import createMovieService from "../services/createMovie.service.js";

const createMovieController = async (request, response) => {
  try {
    const { title, director, cast, genre, resume } = request.body;
    console.log("Dados recebidos no controlador:", {
      title,
      director,
      cast,
      genre,
      resume,
    });

    const movie = await createMovieService(
      title,
      director,
      cast,
      genre,
      resume,
    );
    return response.status(201).json(movie);
  } catch (error) {
    console.error("Erro no controlador:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
};

export default createMovieController;
