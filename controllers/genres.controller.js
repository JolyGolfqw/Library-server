const Genre = require("../models/Genre.model");

module.exports.genresController = {
  addGenre: async (req, res) => {
    try {
      await Genre.create({
        genre: req.body.genre,
        description: req.body.description,
      });
      res.json("Жанр создан");
    } catch (err) {
      res.json(`Не удалось добавить жанр: ${err.message}`);
    }
  },

  getGenresBooks: async (req, res) => {
    try {
      const books = await Genre.findById(req.params.id, { books: 1 }).populate(
        "books",
        { name: 1 }
      );
      res.json(books);
    } catch (err) {
      res.json(err.message);
    }
  },

  addBooks: async (req, res) => {
    try {
      await Genre.findByIdAndUpdate(req.params.id, {
        $push: {
          books: req.body.book,
        },
      });
      res.json("Книга добавлена к жанру");
    } catch (err) {
      res.json(err.message);
    }
  },

  deleteGenre: async (req, res) => {
    try {
      await Genre.findByIdAndDelete(req.params.id);
      res.json("Жанр удален");
    } catch (err) {
      res.json(`Ошибка при удалении книги: ${err.message}`);
    }
  },

  getGenres: async (req, res) => {
    try {
      const genres = await Genre.find().populate("books", { name: 1 });
      res.json(genres);
    } catch (err) {
      res.json(`Не удалось вывести жанры: ${err.message}`);
    }
  },

  getGenreById: async (req, res) => {
    try {
      const genres = await Genre.findById(req.params.id).populate("books", {
        name: 1,
      });
      res.json(genres);
    } catch (err) {
      res.json(`Не удалось вывести жанры: ${err.message}`);
    }
  },
};
