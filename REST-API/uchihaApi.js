const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const Uchiha = require("./uchiha");
const cors = require("cors");

app.use(express.json()); // To get posted data through body
app.use(cors());

mongoose.connect("mongodb://0.0.0.0:27017/uchiha", (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Connected to MongoDB successfully`);
  }
});

router.get("/", (req, res) => {
  res.json("Uchiha Clan");
});

router.get("/uchihas", (req, res) => {
  Uchiha.getUchihas(function (err, data) {
    if (err) {
      throw err;
    }
    res.json(data);
  });
});

router.post("/uchihas", (req, res) => {
  const uchiha = req.body;
  Uchiha.createUchihas(uchiha, (err, data) => {
    if (err) {
      console.log("error :", err)
      res.send(err).status(500);
    }
    res.json(data);
  });
});

app.use("/api", router);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server listening at PORT ${PORT}`);
});
