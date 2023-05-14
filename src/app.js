const express = require('express');
const app = express();
const mongoose = require('mongoose');
const users = require("../models/user.js");

// Router Middlewares
app.use(express.json());

// Route to get the count of users whose name starts with the given prefix
app.get("/", async function(req, res) {
  let namePrefix = req.query.name || "";
  let count = await users.countDocuments({ name: { $regex: "^" + namePrefix, $options: "i" } });
  res.send(JSON.stringify(count));
});

module.exports = app;
