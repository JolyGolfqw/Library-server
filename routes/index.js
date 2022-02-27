const { Router } = require("express");

const router = Router();

router.use(require("./books.route"));
router.use(require("./genres.route"));
router.use(require("./book-reviews.route"));
router.use(require("./users.routes"));

module.exports = router;
