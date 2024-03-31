import knex from "../config/database.js";

const listUsersService = () => {
  return new Promise((resolve, reject) => {
    knex
      .select("user_id", "name", "email", "isAdmin")
      .from("users")
      .then((results) => {
        resolve(results);
      })
      .catch((error) => {
        console.error("Erro ao listar usuários:", error);
        reject(error);
      });
  });
};

export default listUsersService;
