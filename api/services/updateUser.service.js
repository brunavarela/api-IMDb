import knex from "../config/database.js";

const updateUserService = (user_id, name, email, isAdmin) => {
  return new Promise((resolve, reject) => {
    knex("users")
      .where("user_id", user_id)
      .update({ name, email, isAdmin })
      .then((result) => {
        if (result === 0) {
          resolve("Usuário não encontrado.");
        } else {
          resolve("Usuário atualizado com sucesso.");
        }
      })
      .catch((error) => {
        console.error("Erro ao atualizar usuário:", error);
        reject(error);
      });
  });
};

export default updateUserService;
