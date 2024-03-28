import userLoginService from "../services/userLogin.service.js";

const userLoginController = (request, response) => {
  const { email, password } = request.body;

  userLoginService(email, password)
    .then((loginResult) => {
      return response.status(loginResult.status).json(loginResult);
    })
    .catch((error) => {
      console.error("Erro no login:", error);
      return response.status(500).json({ error: "Erro interno do servidor" });
    });
};

export default userLoginController;
