import knex from "../config/database.js";

const listMoviesService = () => {
  return new Promise((resolve, reject) => {
    knex
      .select("*")
      .from("movies")
      .then((results) => {
        resolve(results);
      })
      .catch((error) => {
        console.error("Erro ao listar filmes:", error);
        reject(error);
      });
  });
};

export default listMoviesService;
