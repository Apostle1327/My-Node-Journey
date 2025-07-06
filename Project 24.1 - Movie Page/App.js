const express = require("express");
const path = require("path");
const port = process.env.PORT || 8002;

const app = express();

const db = require("./databases/moviePage-Database");
const movieModel = require("./models/moviePage-Model");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
app.use("/imageUploads", express.static(path.join(__dirname, "imageUploads")));
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/moviePage.routes"));

app.listen(port, (err) => {
  err
    ? console.error(err)
    : console.log(`🚀 Server is Running on http://localhost:${port}`);
});
