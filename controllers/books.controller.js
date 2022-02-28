const Book = require("../models/Book.model");
const User = require("../models/User.model");

module.exports.booksController = {
  addBook: async (req, res) => {
    try {
      await Book.create({
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre,
      });
      res.json("Книга добавлена");
    } catch (err) {
      res.json(`Ошибка при добавлении книги: ${err.message}`);
    }
  },

  deleteBook: async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.json("Книга удалена");
    } catch (err) {
      res.json(`Ошибка при удалении книги: ${err.message}`);
    }
  },

  editBook: async (req, res) => {
    try {
      await Book.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre,
      });
      res.json("Книга изменена");
    } catch (err) {
      res.json(`Ошибка при попытке изменить книгу: ${err.message}`);
    }
  },

  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id).populate("reviews", {
        author: 1,
      });
      res.json(book);
    } catch (err) {
      res.json(`Не удалось вывести книгу: ${err.message}`);
    }
  },

  getBooks: async (req, res) => {
    try {
      const books = await Book.find()
        .populate("author", { name: 1 })
        .populate("genre", { genre: 1 });
      res.json(books);
    } catch (err) {
      res.json(`Не удалось вывести книги: ${err.message}`);
    }
  },

  getBooksByGenre: async (req, res) => {
    try {
      const book = await Book.find({ genre: req.params.id })
        .populate("author", { name: 1 })
        .populate("genre", { genre: 1 });
      res.json(book);
    } catch (err) {
      res.json(`Не удалось вывести книгу: ${err.message}`);
    }
  },
};
