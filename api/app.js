import express from "express";

import usersRouter from "./routes/users.routes.js";
import moviesRouter from "./routes/movies.routes.js";

const app = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/movies", moviesRouter);

app.listen(3000, () => console.log("App running at http://localhost:3000"));
