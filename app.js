const express = require("express");
const app = express();
const mongoose = require("mongoose");
const usersRoute = require("./routes/users");
const auth = require("./routes/auth");
/*  CONNCTION TO MONGO */
mongoose
  .connect("mongodb+srv://sagi:sagilat@cluster0.zlfbf.mongodb.net/level-up-gaming?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongoDb"))
  .catch((e) => console.log(e, "error in connection"));

app.use(require("morgan")("dev"));
app.use(express.json());
app.use(require("cors")());

// a route to create a token for a registered user
app.use("/levelup/auth", auth);

// route for user (crud)
app.use("/levelup/users", usersRoute);

/* listen to port */
app.listen(process.env.PORT || "4000", () => console.log(`server is running`));
