"use strict";

import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export async function signIn(req, res) {
    if (await userExists())
        res.status(200).json("user logged in");
     else
         res.status(400).json("Invalid email or password@");

    async function userExists() {
        try {
            const user = await User.findOne({email: req.body.email});
            if (user)
                return await bcrypt.compare(req.body.password, user.password);

            return false;
        } catch (err) {
            res.status(500).json(err.message);

        }
    }

}