import { Router } from "express";

import createUserController from "../controllers/createUser.controller.js";
import listUsersController from "../controllers/listUsers.controller.js";
import updateUserController from "../controllers/updateUser.controller.js";
import deleteUserController from "../controllers/deleteUser.controller.js";
import userLoginController from "../controllers/userLogin.controller.js";

import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware.js";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware.js";

const router = Router();

router.post("", verifyEmailAvailabilityMiddleware, createUserController);
router.get("", listUsersController);
router.put("/:id", verifyAuthTokenMiddleware, updateUserController);
router.delete("/:id", verifyAuthTokenMiddleware, deleteUserController);
router.post("/login", userLoginController);

export default router;
