const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

// Middlewares
app.use(cors());
app.use(express.json());

// Import Routes
const postRoute = require("./routes/posts");
app.use("/posts", postRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Learning express with nodejs");
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB Connected");
  }
);

// Listening to the server
app.listen(3000);
