import users from "../database/users.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";


const createUserService = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    email,
    password: hashedPassword,
    id: uuidv4(),
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;