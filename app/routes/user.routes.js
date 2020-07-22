const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const express = require("express");
const router = new express.Router();

const User = require("../controllers/user.controller.js");
const Post = require("../controllers/post.controller.js");

const multer = require("multer");

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

  app.get("/api/all/posts", Post.getAllPosts);

  app.get("/", (req, res) => res.send("ok"));
  // user routes
  app.post("/user/find", User.find);
  app.post("/user/find/post/:id", User.postsByUser);
  // post routes
  app.post("/post/create/:id", Post.create);
  app.post("/post/populate/:id", Post.userByPost);

  const handleError = (err, res) => {
    res
      .status(500)
      .contentType("text/plain")
      .end("Oops! Something went wrong!");
  };

  // const upload = multer({
  //   dest: "/path/to/temporary/directory/to/store/uploaded/files",
  //   // you might also want to set some limits: https://github.com/expressjs/multer#limits
  // });

  // app.post(
  //   "/upload",
  //   upload.single("file" /* name attribute of <file> element in your form */),
  //   (req, res) => {
  //     const tempPath = req.file.path;
  //     const targetPath = path.join(__dirname, "./uploads/image.png");

  //     if (path.extname(req.file.originalname).toLowerCase() === ".png") {
  //       fs.rename(tempPath, targetPath, err => {
  //         if (err) return handleError(err, res);

  //         res
  //           .status(200)
  //           .contentType("text/plain")
  //           .end("File uploaded!");
  //       });
  //     } else {
  //       fs.unlink(tempPath, err => {
  //         if (err) return handleError(err, res);

  //         res
  //           .status(403)
  //           .contentType("text/plain")
  //           .end("Only .png files are allowed!");
  //       });
  //     }
  //   }
  // );
};
