const { Router } = require("express");
const { genresController } = require("../controllers/genres.controller");

const router = Router();

router.get("/genres/:id/books", genresController.getGenresBooks);
router.get("/genres/:id", genresController.getGenreById);
router.get("/genres", genresController.getGenres);

module.exports = router;
