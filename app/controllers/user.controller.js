const rp = require("request-promise");
///Controller for testing Authorization

///– /api/test/all for public access

const axios = require("axios");
const User = require("../models/user.model");
const Post = require("../controllers/post.controller");

exports.find = async (req, res) => {
  const user = await User.find();
  return res.send(user);
};

exports.postsByUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).populate("posts");

  res.send(user.posts);
};

exports.cryptoAPI = async (req, res) => {
  const requestOptions = {
    method: "GET",
    uri: "https://undefined/v1/cryptocurrency/listings/latest",
    qs: {
      start: "1",
      limit: "5000",
      convert: "USD",
    },
    headers: {
      "X-CMC_PRO_API_KEY": "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c",
    },
    json: true,
    gzip: true,
  };

  rp(requestOptions)
    .then((response) => {
      console.log("API call response:", response);
    })
    .catch((err) => {
      console.log("API call error:", err.message);
    });
};

exports.allAccess = async (req, res) => {
  try {
    return await axios
      .get("https://api.propublica.org/congress/v1/116/", {
        headers: {
          "X-API-key": "dzndfj10HNHIdMHfvF2XrhnL6UIVs4COkM1WCwvq",
        },
      })
      .then((response) => {
        console.log(response);
      });
  } catch (error) {
    console.error(error);
  }

  // console.log(process.env.PRO_PUBLICO_API);
  // await axios({
  //   url: "https://api.propublica.org/congress/v1/",
  //   method: "get",
  // });
};

//– /api/test/user for loggedin users (any role)
exports.userBoard = async (req, res) => {
  const userPosts = await res.status(200).send(userPosts);
};

//– /api/test/mod for moderator users
exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

//– /api/test/admin for admin users
exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
