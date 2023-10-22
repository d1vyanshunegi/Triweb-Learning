const { myEventEmitter, LOGIN_EVENT } = require("./event");

myEventEmitter.on(LOGIN_EVENT, (userName) => {
  console.log("Writing in Db for user: ", userName);
});