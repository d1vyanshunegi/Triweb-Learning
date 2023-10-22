const { myEventEmitter, LOGIN_EVENT } = require("./event");

module.exports.loginSuccessful = (userName) => {
  setInterval(() => {
    myEventEmitter.emit(LOGIN_EVENT, userName);
  }, 2000);
};