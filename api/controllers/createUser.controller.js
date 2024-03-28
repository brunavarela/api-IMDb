import createUserService from "../services/createUser.service.js";

const createUserController = async (request, response) => {
  try {
    const { name, email, password, isAdmin } = request.body;
    const user = await createUserService(name, email, password, isAdmin);
    return response.status(201).json(user);
  } catch (error) {
    console.error("Erro no controlador de criação de usuário:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
};

export default createUserController;
