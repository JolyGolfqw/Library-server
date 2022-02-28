const User = require("../models/User.model");
const Book = require("../models/Book.model");

module.exports.adminsController = {
  goToBan: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.userId, {
        $set: {
          rented_books: [],
        },
      });
      await User.findByIdAndUpdate(req.params.userId, { isBlocked: true });
      await Book.findByIdAndUpdate(req.params.bookId, {
        $pull: { rented: req.params.userId },
      });
      res.json("Пользователь заблокирован");
    } catch (err) {
      res.json(err.message);
    }
  },
};
