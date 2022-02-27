const User = require("../models/User.model");
const Book = require("../models/Book.model");

module.exports.authorsController = {
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
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.json(`Не удалось вывести авторов: ${err.message}`);
    }
  },
};
