import createUserService from "../services/createUser.service.js";

const createUserController = async (request, response) => {
  const { name, email, password, isAdmin } = request.body;

  const user = await createUserService(name, email, password, isAdmin);

  return response.json(user);
};

export default createUserController;
