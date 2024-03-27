import { Router } from "express";

import createMovieController from "../controllers/createMovie.controller.js";
import deleteMovieController from "../controllers/deleteMovie.controller.js";
import listMovieController from "../controllers/listMovies.controller.js";
import updateMovieController from "../controllers/updateMovie.controller.js";

import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware.js";
import verifyIsAdminMiddleware from "../middlewares/verifyIsAdmin.middleware.js";

const router = Router();

router.post(
  "",
  verifyAuthTokenMiddleware,
  verifyIsAdminMiddleware,
  createMovieController
);
router.get("", listMovieController);
router.put(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyIsAdminMiddleware,
  updateMovieController
);
router.delete(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyIsAdminMiddleware,
  deleteMovieController
);

export default router;
