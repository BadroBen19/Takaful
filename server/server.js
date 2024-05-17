const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const tourRoutes = require("./routes/tourRoutes");
const cardRoutes = require("./routes/cardRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const dotenv = require("dotenv");
const AppError = require("./outilles/appError");
const globalErrorHandler = require("./Controllers/errorController");
dotenv.config({ path: "./config.env" });
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://mabenblal:0z2Cdm5TiWGzKf9K@cluster0.auxy0zc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
  });

const app = express();

app.use(cors());
app.use(express.static("Html"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", authRoutes);
app.use("/", reviewRoutes);
app.use("/tour", tourRoutes);
app.use("/", cardRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

app.listen(5000, () => {
  console.log(`App running on port 3001...`);
});
