import knex from "../config/database.js";

const deleteUserService = (user_id) => {
  return new Promise((resolve, reject) => {
    knex("users")
      .where("user_id", user_id)
      .del()
      .then((result) => {
        if (result === 0) {
          return resolve("Usuário não encontrado.");
        }
        resolve("Usuário deletado com sucesso.");
      })
      .catch((error) => {
        console.error("Erro ao deletar usuário:", error);
        reject(error);
      });
  });
};

export default deleteUserService;
