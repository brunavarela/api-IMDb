import bcrypt from "bcryptjs";
import knex from "../config/database.js";
import * as uuid from 'uuid';

const createUserService = async (name, email, password, isAdmin) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = uuid.v4();

  return new Promise((resolve, reject) => {
    knex("users")
      .insert({ user_id: userId, name, email, password: hashedPassword, isAdmin })
      .then((result) => {
        resolve({ id: userId, name, email, isAdmin });
      })
      .catch((error) => {
        console.error("Erro ao criar usuário:", error);
        reject(error);
      });
  });
};

export default createUserService;
