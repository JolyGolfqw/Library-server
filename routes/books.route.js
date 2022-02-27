const { Router } = require("express");
const { booksController } = require("../controllers/books.controller");
const { adminController } = require("../controllers/admins.controller")

const router = Router();

router.post("/books", booksController.addBook);
router.delete("/books/:id", booksController.deleteBook);
router.patch("/books/:id", booksController.editBook);
router.get("/books/:id", booksController.getBookById);
router.get("/books", booksController.getBooks);
router.get("/books/genres/:id", booksController.getBooksByGenre);
router.patch("/books/:id/reviews", booksController.addReview);

router.patch("/books/renter/:userId/add", booksController.addRenter);
router.patch("/books/renter/:userId/:remove", booksController.removeRenter);
router.patch("/admin/:userId/:bookId/ban", adminController.goToBan)

module.exports = router;
