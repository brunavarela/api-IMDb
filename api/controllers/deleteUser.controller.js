import deleteUserService from "../services/deleteUser.service.js";

const deleteUserController = async (request, response) => {
  try {
    const { user_id } = request.params;
    const result = await deleteUserService(user_id);
    return response.status(200).json(result);
  } catch (error) {
    console.error("Erro no controlador de exclusão de usuário:", error);
    return response.status(500).json({ error: "Erro interno do servidor" });
  }
};

export default deleteUserController;
