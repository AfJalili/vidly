"use strict";

import express from "express";

import {createUser, getCurrentUser} from "../controllers/users.controller.js";
import auth from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post('/', createUser);

router.get('/me', auth, getCurrentUser);

export default router;