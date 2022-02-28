const BookReview = require("../models/Book-review.model");

module.exports.bookReviewsController = {
  addBookReview: async (req, res) => {
    try {
      await BookReview.create({
        bookId: req.params.id,
        review: req.body.review,
        author: req.body.author,
      });
      res.json("Рецензия добавлена");
    } catch (err) {
      res.json(`Не удалось опубликовать рецензии: ${err.message}`);
    }
  },

  deleteReview: async (req, res) => {
    try {
      await BookReview.findByIdAndDelete(req.params.id);
      res.json("Рецензия удалена");
    } catch (err) {
      res.json(`Ошибка при удалении рецензии: ${err.message}`);
    }
  },

  getReviews: async (req, res) => {
    try {
      const reviews = await BookReview.find({ bookId: req.params.id });

      !reviews.length ? res.json("нет рецензий") : res.json(reviews);
    } catch (err) {
      res.json(`Не удалось вывести рецензию: ${err.message}`);
    }
  },
};
