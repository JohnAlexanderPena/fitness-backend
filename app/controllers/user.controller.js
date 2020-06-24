///Controller for testing Authorization

///– /api/test/all for public access
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
