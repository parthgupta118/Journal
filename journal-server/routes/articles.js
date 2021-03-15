const { Article, validate } = require("../models/article");
const express = require("express");
const router = express.Router();
const multer = require("multer");

// const upload = multer({ dest: 'uploads/'})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image.jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },

  fileFilter: fileFilter,
});

router.get("/", async (req, res) => {
  const articles = await Article.find().sort("name");
  res.send(articles);
});

router.post("/", upload.single("articleImage"), async (req, res, next) => {
  console.log(req.file);
  const { error } = validate(req.body);
  console.log(error);
  if (error) return res.status(400).send(error.details[0].message);

  const article = new Article({
    title: req.body.title,
    description: req.body.description,
    articleImage: req.file.path
  });

  await article.save();
  console.log(article)

  res.send(article);
});

router.put("/:id", async (req, res) => {
  const { error } = validateArticle(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //   const genre = await Genre.findById(req.body.genreId);
  //   if (!genre) return res.status(400).send('Invalid genre.');

  const article = await Article.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.descritption,
      articleImage: req.body.articleImage
    },
    { new: true }
  );

  if (!movie)
    return res.status(404).send("The movie with the given ID was not found.");

  res.send(movie);
});

router.delete("/:id", async (req, res) => {
  const article = await Article.findByIdAndRemove(req.params.id);

  if (!article)
    return res.status(404).send("The movie with the given ID was not found.");

  res.send(article);
});

router.get("/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (!article)
    return res.status(404).send("The movie with the given ID was not found.");

    console.log(article)

  res.send(article);
});

module.exports = router;
