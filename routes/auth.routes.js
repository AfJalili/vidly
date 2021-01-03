"use strict";

import express from "express";

import {signIn} from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/', signIn);

export default router;