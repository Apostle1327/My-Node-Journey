const { log } = require("console");
const express = require("express");
const path = require("path");
const port = process.env.PORT || 8002;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));
app.use(express.static(path.join(__dirname, "Public")));

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("Index");
});

app.listen(port, (err) => {
  err
    ? console.error(err)
    : console.log(`🚀 Server running on http://localhost:${port}`);
});
