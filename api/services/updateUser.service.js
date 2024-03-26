import users from "../database/users.js";

const updateUserService = (id, name, email) => {
  const updateUser = {
    id,
    name,
    email,
  };

  const userIndex = users.findIndex((element) => element.id === id);

  if (userIndex === -1) {
    return "Usuário não encontrado.";
  }

  users[userIndex] = { ...users[userIndex], ...updateUser };

  return users[userIndex];
};

export default updateUserService;