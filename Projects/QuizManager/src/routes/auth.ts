import express from 'express';
import {body} from 'express-validator';

import {registerUser, loginUser, isUserExists} from '../controllers/auth';

const router = express.Router();

router.post('/', [
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({min:4})
        .withMessage("Please enter a valid name with minimum length of 4 character."),
    body('email')
        .trim()
        .isEmail()
        .custom((emailId:String) => {
            return isUserExists(emailId)
                .then((status:Boolean) => {
                    if(status){
                        return Promise.reject("User already exists!")
                    }  
                })
                .catch((err) => {
                    return Promise.reject(err);
                })
        }),
        //.normalizeEmail({gmail_remove_dots:false}),
    body('password')
        .trim()
        .isLength({min:8})
        .withMessage("Enter atleast 8-character long password!"),
    body('confirm_password')
        .trim()
        .custom((value:String, {req}) => {
            if(value!=req.body.password){
                return Promise.reject("Password mismatch!")
            }
            return true;
        })
], registerUser);

router.post('/login', loginUser);

export default router;