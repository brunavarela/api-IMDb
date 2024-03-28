import listUsersService from "../services/listUser.service.js";

const listUsersController = async (request, response) => {
  try {
    const users = await listUsersService();
    return response.status(200).json(users);
  } catch (error) {
    console.error("Erro no controlador de listagem de usuários:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
};

export default listUsersController;
