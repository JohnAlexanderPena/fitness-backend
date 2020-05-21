const express = require("express");
const router = express.Router();
const Client = require("../models/clients");

router.get("/clients", (req, res, next) => {
  console.log("this is a GET");
  Client.find({}, "action")
    .then((data) => res.json("THIS IS A TEST"))
    .catch(next);
});

router.post("/clients", (req, res, next) => {
  if (req.body.action) {
    Client.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty",
    });
  }
});

router.delete("/clients/:id", (req, res, next) => {
  Client.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
