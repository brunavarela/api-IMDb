import { pool as mysql } from "../database/mysql.js";

const updateUserService = (id, name, email, isAdmin) => {
  return new Promise((resolve, reject) => {
    mysql.getConnection((error, conn) => {
      if (error) {
        console.error("Erro ao obter conexão:", error);
        return reject(error);
      }

      conn.query(
        "UPDATE users SET name = ?, email = ?, isAdmin = ? WHERE id = ?",
        [name, email, isAdmin, id],
        (error, result) => {
          conn.release();
          if (error) {
            console.error("Erro ao atualizar usuário:", error);
            return reject(error);
          }
          if (result.affectedRows === 0) {
            return resolve("Usuário não encontrado.");
          }
          resolve("Usuário atualizado com sucesso.");
        }
      );
    });
  });
};

export default updateUserService;
