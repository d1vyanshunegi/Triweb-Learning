"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const user_1 = require("../models/user");
const registerUser = (req, res) => {
    const userName = "Divyanshu";
    const password = "Password";
    const result = (0, user_1.addUserToDB)(userName, password);
    res.send("User registration!");
    console.log(result);
};
exports.registerUser = registerUser;
