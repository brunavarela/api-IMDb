import knex from "../config/database.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userLoginService = (email, password) => {
  return new Promise((resolve, reject) => {
    knex("users")
      .where("email", email)
      .first()
      .then((user) => {
        if (!user) {
          return resolve({
            status: 401,
            message: "Email ou senha inválidos.",
          });
        }

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
          { expiresIn: "24h", subject: user.user_id.toString() } // Convertendo para string
        );

        resolve({ status: 200, token });
      })
      .catch((error) => {
        console.error("Erro ao executar consulta:", error);
        reject({ status: 500, message: "Erro interno do servidor" });
      });
  });
};

export default userLoginService;
