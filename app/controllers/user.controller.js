///Controller for testing Authorization

///– /api/test/all for public access

const User = require("../models/user.model");

exports.find = async (req, res) => {
  const user = await User.find();
  return res.send(user);
};

exports.postsByUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).populate("posts");

  res.send(user.posts);
};

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

//– /api/test/user for loggedin users (any role)
exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

//– /api/test/mod for moderator users
exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

//– /api/test/admin for admin users
exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
