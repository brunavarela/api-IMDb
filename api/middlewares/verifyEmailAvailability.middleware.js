import users from "../database/users.js";

const verifyEmailAvailabilityMiddleware = (request, response, next) => {
  const { email } = request.body;

  const userArealdyExists = users.find((element) => element.email === email);

  if (userArealdyExists) {
    return response
      .status(400)
      .json({ message: "Esse email já está sendo utilizado" });
  }

  next();
};

export default verifyEmailAvailabilityMiddleware;