import { pool as mysql } from "../database/mysql.js";

const verifyEmailAvailabilityMiddleware = (request, response, next) => {
  const { email } = request.body;

  mysql.getConnection((error, conn) => {
    if (error) {
      console.error("Erro ao obter conexão:", error);
      return response.status(500).json({ message: "Erro interno do servidor" });
    }

    conn.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      (error, results) => {
        conn.release();
        if (error) {
          console.error("Erro ao executar consulta:", error);
          return response
            .status(500)
            .json({ message: "Erro interno do servidor" });
        }

        if (results.length > 0) {
          return response
            .status(400)
            .json({ message: "Esse email já está sendo utilizado" });
        }

        next();
      }
    );
  });
};

export default verifyEmailAvailabilityMiddleware;
