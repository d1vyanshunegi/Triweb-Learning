const dbfile = require("./db");
const { loginSuccessful } = require("./login");
const { myEventEmitter, LOGIN_EVENT } = require("./event");

myEventEmitter.on(LOGIN_EVENT, (userName) => {
  console.log("Sending email to user: ", userName);
});

loginSuccessful("Divyanshu");