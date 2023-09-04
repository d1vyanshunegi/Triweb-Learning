const express = require('express');
const router = express.Router();
//const userController = require('../controllers/user');
import {registerUser,checkTypesAndInterface} from '../controllers/user';

router.post('/register',registerUser); 
router.post('/update',checkTypesAndInterface); 

export default router;