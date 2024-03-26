import users from "../database/users.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userLoginService = (email, password) => {
  const user = users.find((element) => element.email === email);

  if (!user) {
    return "Email ou senha inválidos.";
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return "Email ou senha inválidos.";
  }

  const token = jwt.sign({ email: email }, "SECRET_KEY", { expiresIn: "24h" });

  return token;
};

export default userLoginService;
