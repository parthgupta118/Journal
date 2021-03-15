const Joi = require("joi");
const mongoose = require("mongoose");

const Article = mongoose.model(
  "Articles",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 255,
    },

    description: {
      type: String,
      required: true,
      minlength: 20,
      maxlength: 510,
    },

    articleImage: {
      type: String,
      required: true,
    },
  })
);

function validateArticle(article) {
  const schema = Joi.object({
    title: Joi.string().min(5).max(255).required(),
    description: Joi.string().min(20).max(510).required(),
    articleImage: Joi.string(),
  });

  return schema.validate(article);
}

exports.Article = Article;
exports.validate = validateArticle;
