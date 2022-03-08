const express = require("express");
const cors = require("cors");

const { loginMock, userMock, menuMock, moreSoldProductsMock, resellersRankingMock, salesMock } = require("./mocks");

const app = express();
const port = 8080;

const jsonResponse = require("./db.json");

app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).send({ message: "email_is_required" });
  }

  if (!password) {
    return res.status(400).send({ message: "password_is_required" });
  }

  if (email === loginMock.email && password === loginMock.password) {
    return res.status(200).send(true);
  }

  res.status(400).json({ message: "user_not_found" });
});

app.get("/user", (req, res) => {
  res.status(200).json(userMock);
});

app.get("/menu", (req, res) => {
  res.status(200).json(menuMock);
});

app.get("/products/more-sold", (req, res) => {
  res.status(200).json(moreSoldProductsMock);
});

app.get("/resellers/ranking", (req, res) => {
  res.status(200).json(resellersRankingMock);
});

app.get("/sales", (req, res) => {
  res.status(200).json(salesMock);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
