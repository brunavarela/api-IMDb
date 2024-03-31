import { useEffect, useState } from "react";
import {
  Container,
  MovieList,
  MovieCard,
  MovieImage,
  MovieTitle,
  MovieRating,
  Button,
} from "./listMovies";
import axios from "axios";

export const ListMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3000/movies");
        setMovies(response.data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <Container>
        <MovieList>
          {movies.map((movie, index) => (
            <MovieCard key={index}>
              <MovieImage src={movie.image} alt={movie.title} />
              <MovieRating>Avaliação: {movie.rating}</MovieRating>
              <MovieTitle>{movie.title}</MovieTitle>

              <Button>Detalhes</Button>
            </MovieCard>
          ))}
        </MovieList>
      </Container>
    </div>
  );
};
