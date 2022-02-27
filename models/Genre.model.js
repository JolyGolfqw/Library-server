const mongoose = require("mongoose");

const genreSchema = mongoose.Schema({
  genre: {
    type: String,
    required: true,
  },

  description: String,

  books: [
    {
      ref: "Book",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;
