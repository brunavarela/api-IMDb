import listUsersService from "../services/listUser.service.js";

const listUsersController = (request, response) => {
  const users = listUsersService();

  return response.json(users);
};

export default listUsersController;