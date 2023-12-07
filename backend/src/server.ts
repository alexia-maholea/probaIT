const express = require("express");
const mongoose = require("mongoose"); // Modificare aici: 'mongooDB' la 'mongoose'
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
import { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://root:example@localhost:27017/admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error: Error) => {
  console.error("Eroare la conectarea la baza de date:", error);
});

db.once("open", () => {
  console.log("Conectat la baza de date MongoDB");
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ username: email });

  if (user && user.password === password) {
    const token = jwt.sign({ username: user.username }, "secret_key");

    res.json({ success: true, message: "Autentificare reușită", token });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Email sau parolă incorecte" });
  }
});

app.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ username: email });

    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email-ul este deja înregistrat" });
    }

    const newUser = new User({ username: email, password });
    await newUser.save();

    const token = jwt.sign({ username: newUser.username }, "secret_key");

    res.json({ success: true, message: "Înregistrare reușită", token });
  } catch (error: any) {
    console.error("Eroare la înregistrare:", error);
    res.status(500).json({
      success: false,
      message: "Eroare la înregistrare",
      error: error.message,
    });
  }
});

app.listen(3001, () => {
  console.log("Serverul ascultă pe portul 3001");
});
