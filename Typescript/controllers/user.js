const {addUserToDB} = require('../models/user');

const registerUser = (req,res) => {

    const userName = "Divyanshu";
    const password = "Password";

    const result = addUserToDB(userName,password);

    res.send("User registration!");
    console.log(result);
}

module.exports = {registerUser};