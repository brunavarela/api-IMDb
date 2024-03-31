import updateUserService from "../services/updateUser.service.js";

const updateUserController = (request, response) => {
  const { user_id } = request.params;
  const { name, email, isAdmin } = request.body;

  updateUserService(user_id, name, email, isAdmin)
    .then((message) => {
      return response.json({ message });
    })
    .catch((error) => {
      console.error("Erro ao atualizar usuário:", error);
      return response.status(500).json({ error: "Erro interno do servidor" });
    });
};

export default updateUserController;
