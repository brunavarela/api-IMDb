import { Router } from "express";

import createMovieController from "../controllers/createMovie.controller.js";
import deleteMovieController from "../controllers/deleteMovie.controller.js";
import listMovieController from "../controllers/listMovies.controller.js";
import updateMovieController from "../controllers/updateMovie.controller.js";

import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware.js";

const router = Router();

router.post("", verifyAuthTokenMiddleware, createMovieController);
router.get("", listMovieController);
router.put("/:id", verifyAuthTokenMiddleware, updateMovieController);
router.delete("/:id", verifyAuthTokenMiddleware, deleteMovieController);

export default router;
