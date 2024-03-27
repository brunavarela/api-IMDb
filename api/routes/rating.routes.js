import { Router } from "express";

import {
  updateMovieRatingController,
  getMovieRatingController,
} from "../controllers/updateMovieRating.controller.js";

const router = Router();

router.put("/movies/:movie_id/rating", updateMovieRatingController);
router.get("/movies/:movie_id/rating", getMovieRatingController);

export default router;
