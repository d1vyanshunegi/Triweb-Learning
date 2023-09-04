const express = require('express');
const router = express.Router();
//const userController = require('../controllers/user');
import {registerUser} from '../controllers/user';

router.post('/register',registerUser); 

export default router;