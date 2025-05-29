const express = require("express");
const path = require("path");
const port = process.env.PORT || 8002;

const app = express();

const db = require("./Database/CRUD Database");

const User = require("./Models/CRUD Model");

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
  try {
    const users = await User.find({});
    res.render("Index", { users });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.post("/addData", async (req, res) => {
  try {
    let { firstName, lastName, eMail, age, gender, city } = req.body;
    let hobbies = req.body.hobbies || [];
    if (!Array.isArray(hobbies)) hobbies = [hobbies];

    await new User({
      firstName,
      lastName,
      eMail,
      age,
      gender,
      hobbies,
      city,
    }).save();
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app
  .route("/edit/:id")
  .get(async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).send("User not found");
      res.render("Edit", { user });
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  })
  .post(async (req, res) => {
    try {
      const { firstName, lastName, eMail, age, gender, city } = req.body;
      let hobbies = req.body.hobbies || [];
      if (!Array.isArray(hobbies)) hobbies = [hobbies];

      const updated = await User.findByIdAndUpdate(
        req.params.id,
        { firstName, lastName, eMail, age, gender, hobbies, city },
        { new: true, runValidators: true }
      );
      if (!updated) return res.status(404).send("User not found");
      res.redirect("/");
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });

app.post("/delete/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.listen(port, (err) => {
  if (err) console.error(err);
  else console.log(`🚀 Server is Running on http://localhost:${port}`);
});
