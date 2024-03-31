import { Router } from "express";

import updateMovieRatingController from "../controllers/updateMovieRating.controller.js";
import verifyIsOnlyUserMiddleware from "../middlewares/verifyIsOnlyUser.middleware.js";

const router = Router();

router.put(
  "/movies/:movie_id/rating",
  verifyIsOnlyUserMiddleware,
  updateMovieRatingController
);

export default router;
