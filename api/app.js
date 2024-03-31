import express from "express";

import usersRouter from "./routes/users.routes.js";
import moviesRouter from "./routes/movies.routes.js";
import ratingRouter from "./routes/rating.routes.js";
import database from "./config/database.js";

const app = express();
import cors from "cors";

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.database = database;

app.use("/users", usersRouter);
app.use("/movies", moviesRouter);
app.use("/", ratingRouter);

app.listen(3000);
