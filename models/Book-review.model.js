const mongoose = require("mongoose");

const bookReviewSchema = mongoose.Schema({
  bookId: {
    ref: "Book",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  author: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },

  review: {
    type: String,
    required: true,
  },
});

const BookReview = mongoose.model("BookReview", bookReviewSchema);

module.exports = BookReview;
