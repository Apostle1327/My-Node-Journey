const express = require("express");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 8002;
const Task = require("./Models/To-Do Model");

const app = express();

const db = require("./DataBase/To-Do Database");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.render("Index", { tasks: tasks || [] });
});

app.post("/add", async (req, res) => {
  const title = req.body.title?.trim();
  if (title) {
    await Task.create({ title });
  }
  res.redirect("/");
});

app.post("/toggle/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    task.done = !task.done;
    await task.save();
    ``;
  }
  res.redirect("/");
});

app.post("/delete/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

app.get("/edit/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    res.render("Edit", { task });
  } else {
    res.redirect("/");
  }
});

app.post("/edit/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    task.title = req.body.title?.trim();
    await task.save();
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
