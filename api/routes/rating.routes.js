import { Router } from "express";

import updateMovieRatingController from "../controllers/updateMovieRating.controller.js";

const router = Router();

router.put("/movies/:movie_id/rating", updateMovieRatingController);

export default router;
