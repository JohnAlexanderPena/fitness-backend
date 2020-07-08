const Post = require("../models/post.model");
const User = require("../models/user.model");

module.exports = {
  create: async (req, res) => {
    // console.log(req);
    console.log("req body: ", req.body);
    user = req.params;
    id = user.id;
    const { title, subtitle } = req.body;
    console.log(title);
    const post = await Post.create({
      title,
      subtitle,
      user: id,
    });
    console.log(post);
    await post.save();

    const userById = await User.findById(id);

    userById.posts.push(post);
    console.log(userById);
    await post.save();

    return res.send(userById);
  },
  userByPost: async (req, res) => {
    const { id } = req.params;
    const userByPost = await Post.findById(id).populate("user");
    res.send(userByPost);
  },

  delete: async (req, res) => {
    var deleteCustomer = posts["customer" + req.params.id];
    delete post["customer" + req.params.id];
    console.log(
      "--->After deletion, customer list:\n" +
        JSON.stringify(customers, null, 4)
    );
    res.end("Deleted customer: \n" + JSON.stringify(deleteCustomer, null, 4));
  },
};
