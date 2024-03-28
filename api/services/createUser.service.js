import bcrypt from "bcryptjs";
import { pool as mysql } from "../database/mysql.js";

const createUserService = async (name, email, password, isAdmin) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return new Promise((resolve, reject) => {
    mysql.getConnection((error, conn) => {
      if (error) {
        console.error("Erro ao obter conexão:", error);
        return reject(error);
      }

      conn.query(
        "INSERT INTO users (name, email, password, isAdmin) VALUES (?, ?, ?, ?)",
        [name, email, hashedPassword, isAdmin],
        (error, result) => {
          conn.release();
          if (error) {
            console.error("Erro ao criar usuário:", error);
            return reject(error);
          }
          resolve({ id: result.insertId, name, email, isAdmin });
        }
      );
    });
  });
};

export default createUserService;
