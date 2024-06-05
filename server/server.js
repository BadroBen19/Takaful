const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const donationRoutes = require("./routes/donationRoute");
const tourRoutes = require("./routes/tourRoutes");
const cardRoutes = require("./routes/cardRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const dotenv = require("dotenv");
const AppError = require("./outilles/appError");
const globalErrorHandler = require("./Controllers/errorController");
dotenv.config({ path: "./config.env" });
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const signModel = require("./models/signModel");
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
const port = 5000;
app.use(cors());
app.use(express.static("publics"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", authRoutes);
app.use("/", donationRoutes);
app.use("/", reviewRoutes);
app.use("/tour", tourRoutes);
app.use("/", cardRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

//multer image temporairement ici

// app.post('/upload', upload.single('image'), async (req, res) => {
//   try {
//     const { filename } = req.file;
//     const image = new Image({ image: filename });
//     await signModel.save();
//     res.status(201).json(image);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to upload image' });
//   }
// });

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
