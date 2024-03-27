import movies from "../database/movies.js";
import { v4 as uuidv4 } from "uuid";

const createMovieService = (title, director, actors, genre, resume, rating) => {
  const newMovie = {
    title,
    director,
    actors,
    genre,
    resume,
    rating,
    movie_id: uuidv4(),
  };

  movies.push(newMovie);

  return newMovie;
};

export default createMovieService;
