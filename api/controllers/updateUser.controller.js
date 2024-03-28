import updateUserService from "../services/updateUser.service.js";

const updateUserController = (request, response) => {
  const { id } = request.params;
  const { name, email, isAdmin } = request.body;

  updateUserService(id, name, email, isAdmin)
    .then((message) => {
      // Usuário atualizado com sucesso
      return response.json({ message });
    })
    .catch((error) => {
      // Erro ao atualizar usuário
      console.error("Erro ao atualizar usuário:", error);
      return response.status(500).json({ error: "Erro interno do servidor" });
    });
};

export default updateUserController;
