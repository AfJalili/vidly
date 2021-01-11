"use strict";


import jwt from "jsonwebtoken";
import config from "../config.js";

export default function auth(req, res, next) {
    // check for existence
    const token = req.header("x-auth-token");
    if(!token) return res.status(401).send("Access Denied. No token provided!");

    // validate token
    try {
        const decodedToken = jwt.verify(token, config.jwtSecret);
        req.user = decodedToken;
        next();
    } catch (err) {
            res.status(400).send("Invalid token!");
    }

}