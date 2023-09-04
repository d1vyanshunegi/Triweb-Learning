"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
//const userController = require('../controllers/user');
const user_1 = require("../controllers/user");
router.post('/register', user_1.registerUser);
router.post('/update', user_1.checkTypesAndInterface);
exports.default = router;
