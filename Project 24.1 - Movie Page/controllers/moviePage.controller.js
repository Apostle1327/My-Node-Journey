// const { render } = require("ejs");
const movies = require("../models/moviePage-Model");

module.exports.showMovies = async (req, res) => {
  try {
    let movieCatalogue = await movies.find();

    return res.render("index", { movieCatalogue });
  } catch (err) {
    console.error("Error fetching movie list:", err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports.addMovies = async (req, res) => {
  try {
    if (req.files && req.files["moviePoster"]) {
      req.body.moviePoster =
        movies.movieImagePath + "/" + req.files.moviePoster[0].filename;
    }

    if (req.files && req.files["backgroundImage"]) {
      req.body.backgroundImage =
        movies.movieImagePath + "/" + req.files.backgroundImage[0].filename;
    }
    await movies.create(req.body);

    return res.redirect("/");
  } catch (err) {
    console.error("Error adding new movie:", err);
    return res.status(500).send("Failed to add movie");
  }
};

module.exports.addMoviePage = (req, res) => {
  try {
    return res.render("addMovie");
  } catch (err) {
    console.error("Error rendering add movie page:", err);
    return res.status(500).send("Failed to load add movie page");
  }
};

module.exports.viewMovies = async (req, res) => {
  try {
    let movie = await movies.findById(req.params.id);

    if (!movie) {
      return res.status(404).send("Movie not found");
    }

    return res.render("viewMovie", { movie });
  } catch (err) {
    console.error("Error viewing movie:", err);
    return res.status(500).send("Internal Server Error");
  }
};
