const { Router } = require("express");
const { genresController } = require("../controllers/genres.controller");

const router = Router();

router.get("/genres/:id/books", genresController.getGenresBooks);
router.get("/genres/:id", genresController.getGenreById);
router.post("/genres", genresController.addGenre);
router.delete("/genres/:id", genresController.deleteGenre);
router.get("/genres", genresController.getGenres);
router.patch("/genres/:id/books", genresController.addBooks);

module.exports = router;
