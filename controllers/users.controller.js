const User = require("../models/User.model");
const Book = require("../models/Book.model");

module.exports.usersController = {
  addUser: async (req, res) => {
    try {
      await User.create({
        name: req.body.name,
        isBlocked: req.body.isBlocked,
      });
      res.json("Пользователь добавлен");
    } catch (err) {
      res.json(`Не удалось добавить пользователя: ${err.message}`);
    }
  },

  addRenter: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      const book = await Book.findById(req.body.book);

      if (user.isBlocked) {
        return res.json("Пользователь заблокирован");
      }

      if (user.rented_books.length > 3) {
        return res.json("Нельзя арендовать больше трех книг");
      }

      if (book.rented) {
        return res.json("Книга уже арендована");
      }

      await User.findByIdAndUpdate(req.params.userId, {
        $addToSet: {
          rented_books: req.body.book,
        },
      });

      await Book.findByIdAndUpdate(req.body.book, {
        $addToSet: { rented: req.params.userId },
      });

      res.json("Книга добавлена");
    } catch (err) {
      res.json(`Ошибка при добавлении книги: ${err.message}`);
    }
  },

  removeRenter: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.userId, {
        $pull: {
          rented_books: req.body.book,
        },
      });
      const book = await Book.findByIdAndUpdate(req.body.book, {
        $pull: { rented: req.params.userId },
      });
      res.json("Книга возвращена");
    } catch (err) {
      res.json(`Ошибка при возвращении книги: ${err.message}`);
    }
  },

  editUser: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        isBlocked: req.body.isBlocked,
      });
      res.json("Информация о пользователе обновлена");
    } catch (err) {
      res.json(`Не удалось изменить пользователя: ${err.message}`);
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json("Пользователь удален");
    } catch (err) {
      res.json(`Не удалось удалить пользователя: ${err.message}`);
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await User.find().populate("rented_books", { name: 1 });
      res.json(users);
    } catch (err) {
      res.json(`Не удалось вывести авторов: ${err.message}`);
    }
  },
};
