import { pool as mysql } from "../database/mysql.js";

const deleteUserService = (id) => {
  return new Promise((resolve, reject) => {
    mysql.getConnection((error, conn) => {
      if (error) {
        console.error("Erro ao obter conexão:", error);
        return reject(error);
      }

      conn.query("DELETE FROM users WHERE id = ?", [id], (error, result) => {
        conn.release();
        if (error) {
          console.error("Erro ao deletar usuário:", error);
          return reject(error);
        }

        if (result.affectedRows === 0) {
          return resolve("Usuário não encontrado.");
        }

        resolve("Usuário deletado com sucesso.");
      });
    });
  });
};

export default deleteUserService;
