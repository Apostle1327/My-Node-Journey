// const { error } = require("console");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const movieImagePath = "/imageUploads";

const moviePageModel = new mongoose.Schema({
  movieName: {
    type: String,
    required: true,
  },

  ratings: {
    type: Number,
    required: true,
  },

  certification: {
    type: String,
    required: true,
  },

  dimensions: {
    type: String,
    required: true,
  },

  language: {
    type: [String],
    required: true,
  },

  genres: {
    type: [String],
    required: true,
  },

  hours: {
    type: Number,
    required: true,
  },

  minutes: {
    type: Number,
    required: true,
  },

  seconds: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  moviePoster: {
    type: String,
    required: true,
  },

  backgroundImage: {
    type: String,
    required: true,
  },
});

const imageExtensionType = ["image/jpeg", "image/png", "image/webp"];

const images = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", movieImagePath));
  },

  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + Date.now() + extension);
  },
});

const imageFilter = (req, file, cb) => {
  if (imageExtensionType.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Image file type incorrect, ReUpload!"), false);
  }
};

moviePageModel.statics.fileUpload = multer({
  storage: images,
  fileFilter: imageFilter,
}).fields([{ name: "moviePoster" }, { name: "backgroundImage" }]);

moviePageModel.statics.movieImagePath = movieImagePath;

const Movie = mongoose.model("movie", moviePageModel);

module.exports = Movie;
