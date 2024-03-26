import updateUserService from "../services/updateUser.service.js";

const updateUserController = (request, response) => {
  const { id } = request.params;
  const { name, email } = request.body;

  const updateUser = updateUserService(id, name, email);

  return response.json(updateUser);
};

export default updateUserController;