"use strict";

import express from "express";
import bodyParser from "body-parser";
import usersRouter from "./routes/users.routes.js";
import moviesRouter from "./routes/movies.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

// Middlewares
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/users/", usersRouter);
app.use("/auth/", authRouter);
app.use("/movies/", moviesRouter);

export default app;
