const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  rented: [{
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  }],

  name: {
    type: String,
    required: true,
  },

  author: String,

  genre: {
    ref: "Genre",
    type: mongoose.Schema.Types.ObjectId,
  },

  reviews: [
    {
      ref: "BookReview",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
