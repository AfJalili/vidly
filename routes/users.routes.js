"use strict";

import express from "express";

import {createUser} from "../controllers/users.controller.js";

const router = express.Router();

router.post('/', createUser);

export default router;