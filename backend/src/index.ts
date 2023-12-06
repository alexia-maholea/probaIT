import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
const collection = require("./config");
const bcrypt = require("bcrypt");

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));


app.post("/register", async (req, res) => {
  try {
    const data = {
      username: req.body.username,
      password: req.body.password
    };

    const existingUser = await collection.findOne({ username: data.username });
    if (existingUser) {
      res.json({ error: "User already exists. Please choose a different username." });
    } else {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(data.password, saltRounds);

      data.password = hashedPassword;

      const userdata = await collection.insertMany(data);
      res.json({ success: true});
    }
  } catch {
    res.json({ error: "Internal error during user registration." });
  }
});


app.post("/login", async (req, res) => {
  try {
    const check = await collection.findOne({ username: req.body.username });
    if (!check) {
      res.json({ error: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
    if (isPasswordMatch) {
      res.json({ success: true});
    } else {
      res.json({ error: "Incorrect password" });
    }
  } catch {
    res.json({ error: "Wrong username or password" });
  }
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});