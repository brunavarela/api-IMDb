import jwt from "jsonwebtoken";
import knex from "../config/database.js";
import getUserId from "../functions/getUserId.js";

const verifyIsOnlyUserMiddleware = (request, response, next) => {
  const token = request.headers.authorization;

  jwt.verify(token, "SECRET_KEY", async (error, decoded) => {
    if (error) {
      return response.status(401).json({ message: "Token inválido" });
    }

    try {
      const userId = await getUserId(decoded.email);

      if (!userId) {
        return response.status(401).json({ message: "Usuário não encontrado" });
      }

      knex("users")
        .where("user_id", userId)
        .select("isAdmin")
        .first()
        .then((user) => {
          if (!user) {
            return response
              .status(500)
              .json({ message: "Erro interno do servidor" });
          }

          const isAdmin = user.isAdmin === 1;

          if (isAdmin) {
            return response.status(401).json({
              message: "Apenas usuários podem realizar essa ação.",
            });
          }

          next();
        })
        .catch((error) => {
          console.error("Erro ao executar consulta:", error);
          return response
            .status(500)
            .json({ message: "Erro interno do servidor" });
        });
    } catch (error) {
      console.error("Erro ao obter id do usuário do banco de dados:", error);
      return response.status(500).json({ message: "Erro interno do servidor" });
    }
  });
};

export default verifyIsOnlyUserMiddleware;
