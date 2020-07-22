const mongoose = require("mongoose");

// create a new User: object.save()
// find a User by id: User.findById(id)
// find User by email: User.findOne({ email: … })
// find User by username: User.findOne({ username: … })
// find all Roles which name in given roles array: Role.find({ name: { $in: roles } })
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    date: {
      type: Date,
      default: Date.now(),
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    img: {
      type: mongoose.Schema.Types.ObjectId,
      data: Buffer,
      contentType: String,
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  })
);

module.exports = User;
