import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { title } from "process";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const numLetter = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs",{numberOfLetters: numLetter});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
