import deleteUserService from "../services/deleteUser.service.js";

const deleteUserController = (request, response) => {
  const { id } = request.params;

  const deleteUser = deleteUserService(id);

  return response.json(deleteUser);
};

export default deleteUserController;