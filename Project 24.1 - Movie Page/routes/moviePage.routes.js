const express = require("express");
const routes = express.Router();

const moviePageController = require("../controllers/moviePage.controller");

const moviePageModel = require("../models/moviePage-Model");

routes.get("/", moviePageController.showMovies);
routes.get("/addMoviePage", moviePageController.addMoviePage);
routes.get("/viewMovies/:id", moviePageController.viewMovies);
routes.post(
  "/addMoviePage",
  moviePageModel.fileUpload,
  moviePageController.addMovies
);

module.exports = routes;
