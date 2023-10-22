const express = require("express");
const userRoutes = require("./routers/user");
const app = express();


app.use((req, res, next) => {
  console.log("I am here");
  next();
});

app.use("/user", userRoutes);

app.listen(3000);