const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
// routes import starts from here
const userRoutes = require("./user/user.routes.js");

/// default middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));

/// routes starts from here

app.use("/user", userRoutes);

// mongo connections and server starts from here
const port = 6009;
mongoose
  .connect(
    "mongodb+srv://tanzanco:tanzanco@nodeexpressprojects.zz6ywry.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
