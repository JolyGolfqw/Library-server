const { Router } = require("express");
const { booksController } = require("../controllers/books.controller");

const router = Router();

router.get("/books/:id", booksController.getBookById);
router.get("/books", booksController.getBooks);
router.get("/books/genres/:id", booksController.getBooksByGenre);

module.exports = router;
