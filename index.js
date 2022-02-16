const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

const jsonResponse = require("./db.json");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json(jsonResponse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
