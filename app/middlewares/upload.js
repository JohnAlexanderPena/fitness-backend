// const util = require("util");
// require("dotenv").config();
// const dbConfig = require("./app/config/db.config");

// const multer = require("multer");
// const GridFsStorage = require("multer-gridfs-storage");

// var storage = new GridFsStorage({
//   url: process.env.URI,
//   options: { useNewUrlParser: true, useUnifiedTopology: true },
//   file: (req, file) => {
//     const match = ["image/png", "image/jpeg", "image/jpg"];

//     if (match.indexOf(file.mimetype) === -1) {
//       const filename = `${Date.now()}-bezkoder-${file.originalname}`;
//       return filename;
//     }

//     return {
//       bucketName: "photos",
//       filename: `${Date.now()}-bezkoder-${file.originalname}`,
//     };
//   },
// });

// app.use(
//   multer({
//     dest: "./uploads/",
//     rename: function (fieldname, filename) {
//       return filename;
//     },
//   })
// );

// var uploadFile = multer({ storage: storage }).single("file");
// var uploadFilesMiddleware = util.promisify(uploadFile);
// module.exports = uploadFilesMiddleware;
