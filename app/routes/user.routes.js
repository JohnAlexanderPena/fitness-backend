const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const express = require("express");
const router = new express.Router();

const User = require("../controllers/user.controller.js");
const Post = require("../controllers/post.controller.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.get("/", (req, res) => res.send("ok"));
  // user routes
  app.post("/user/find", User.find);
  app.post("/user/find/post/:id", User.postsByUser);
  // post routes
  app.post("/post/create/:id", Post.create);
  app.post("/post/populate/:id", Post.userByPost);
};
