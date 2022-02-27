const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    requiured: true,
  },

  isBlocked: {
    type: Boolean,
    required: true
  },

  rented_books: [
    {
      ref: "Book",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
