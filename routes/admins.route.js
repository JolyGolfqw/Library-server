const { Router } = require("express");
const { booksController } = require("../controllers/books.controller");
const { adminsController } = require("../controllers/admins.controller");
const { genresController } = require("../controllers/genres.controller");
const { usersController } = require("../controllers/users.controller");

const router = Router();

router.post("/admin/user", usersController.addUser);
router.patch("/admin/user/:id", usersController.editUser);
router.delete("/admin/userd/:id", usersController.deleteUser);
router.get("/admin/users", usersController.getUsers);

router.post("/admin/books", booksController.addBook);
router.delete("/admin/books/:id", booksController.deleteBook);
router.patch("/admin/books/:id", booksController.editBook);
router.get("/admin/books/:id", booksController.getBookById);
router.get("/admin/books", booksController.getBooks);
router.get("/admin/books/genres/:id", booksController.getBooksByGenre);
router.patch("/admin/:userId/:bookId/banned", adminsController.goToBan);

router.get("/admin/genres/:id/books", genresController.getGenresBooks);
router.get("/admin/genres/:id", genresController.getGenreById);
router.post("/admin/genres", genresController.addGenre);
router.delete("/admin/genres/:id", genresController.deleteGenre);
router.get("/admin/genres", genresController.getGenres);
router.patch("/admin/genres/:id/books", genresController.addBooks);

module.exports = router;
