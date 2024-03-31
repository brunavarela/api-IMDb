import knex from "../config/database.js";

const verifyEmailAvailabilityMiddleware = (request, response, next) => {
  const { email } = request.body;

  knex("users")
    .where("email", email)
    .first()
    .then((user) => {
      if (user) {
        return response
          .status(400)
          .json({ message: "Esse email já está sendo utilizado" });
      }
      next();
    })
    .catch((error) => {
      console.error("Erro ao executar consulta:", error);
      response.status(500).json({ message: "Erro interno do servidor" });
    });
};

export default verifyEmailAvailabilityMiddleware;
