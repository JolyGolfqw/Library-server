const User = require("../models/User.model");
const Book = require("../models/Book.model");

module.exports.adminController = {
  goToBan: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.userId, {
        $pull: {
          rented_books: req.params.bookId,
        },
      });
      await User.findByIdAndUpdate(req.params.userId, {isBlocked: true})
      await Book.findByIdAndUpdate(req.params.bookId, {
        $pull: { rented: req.params.userId },
      });
      res.json("Banned");
    } catch (err) {
      res.json(`Ошибка при возвращении книги: ${err.message}`);
    }
  },
};
