import { pool as mysql } from "../database/mysql.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userLoginService = (email, password) => {
  return new Promise((resolve, reject) => {
    mysql.getConnection((error, conn) => {
      if (error) {
        console.error("Erro ao obter conexão:", error);
        return reject({ status: 500, message: "Erro interno do servidor" });
      }

      conn.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (error, results) => {
          conn.release();
          if (error) {
            console.error("Erro ao executar consulta:", error);
            return reject({ status: 500, message: "Erro interno do servidor" });
          }

          if (results.length === 0) {
            return resolve({
              status: 401,
              message: "Email ou senha inválidos.",
            });
          }

          const user = results[0];

          const passwordMatch = bcrypt.compareSync(password, user.password);

          if (!passwordMatch) {
            return resolve({
              status: 401,
              message: "Email ou senha inválidos.",
            });
          }

          const token = jwt.sign(
            { email: user.email, isAdmin: user.isAdmin },
            "SECRET_KEY",
            { expiresIn: "24h", subject: user.id.toString() } // Convertendo para string
          );

          resolve({ status: 200, token });
        }
      );
    });
  });
};

export default userLoginService;
