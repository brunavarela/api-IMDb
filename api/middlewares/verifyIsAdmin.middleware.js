import jwt from "jsonwebtoken";
import { pool as mysql } from "../database/mysql.js";

const getUserIdFromDatabase = (email) => {
  return new Promise((resolve, reject) => {
    mysql.getConnection((error, conn) => {
      if (error) {
        reject(error);
      } else {
        conn.query(
          "SELECT id FROM users WHERE email = ?",
          [email],
          (error, results) => {
            conn.release();
            if (error) {
              reject(error);
            } else {
              if (results.length > 0) {
                resolve(results[0].id);
              } else {
                resolve(null);
              }
            }
          }
        );
      }
    });
  });
};

const verifyIsAdminMiddleware = (request, response, next) => {
  const token = request.headers.authorization;

  jwt.verify(token, "SECRET_KEY", async (error, decoded) => {
    if (error) {
      return response.status(401).json({ message: "Token inválido" });
    }

    try {
      const userId = await getUserIdFromDatabase(decoded.email);

      if (!userId) {
        return response.status(401).json({ message: "Usuário não encontrado" });
      }

      mysql.getConnection((error, conn) => {
        if (error) {
          console.error("Erro ao obter conexão:", error);
          return response
            .status(500)
            .json({ message: "Erro interno do servidor" });
        }

        conn.query(
          "SELECT isAdmin FROM users WHERE id = ?",
          [userId],
          (error, results) => {
            conn.release();
            if (error) {
              console.error("Erro ao executar consulta:", error);
              return response
                .status(500)
                .json({ message: "Erro interno do servidor" });
            }

            const user = Object.assign({}, results[0]);
            console.log("user é", user);

            const isAdmin =
              user.isAdmin.readUIntLE(0, user.isAdmin.length) === 1;

            if (!isAdmin) {
              console.log("admin é:", user.isAdmin);
              return response.status(401).json({
                message: "Apenas administradores podem realizar essa ação.",
              });
            }

            next();
          }
        );
      });
    } catch (error) {
      console.error("Erro ao obter id do usuário do banco de dados:", error);
      return response.status(500).json({ message: "Erro interno do servidor" });
    }
  });
};

export default verifyIsAdminMiddleware;
