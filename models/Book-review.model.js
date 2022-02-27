const mongoose = require("mongoose");

const bookReviewSchema = mongoose.Schema({
  bookId: {
    ref: "Book",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  review: {
    type: String,
    required: true,
  },

  author: String,
});

const BookReview = mongoose.model("BookReview", bookReviewSchema);

module.exports = BookReview;
