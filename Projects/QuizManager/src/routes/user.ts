import express from 'express';
import {getUser, registerUser, updateUser, loginUser} from '../controllers/user';
const router = express.Router();

router.post('/', registerUser);

router.post('/login', loginUser);

router.get('/:userId', getUser);

router.put('/', updateUser);

export default router;