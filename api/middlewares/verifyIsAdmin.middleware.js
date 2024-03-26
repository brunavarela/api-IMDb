const verifyIsAdminMiddleware = (request, response, next) => {
  const { isAdmin } = request;

  if (isAdmin) {
    next();
  } else {
    return response
      .status(401)
      .json({ message: "Apenas administradores podem realizar essa ação." });
  }
};

export default verifyIsAdminMiddleware;
