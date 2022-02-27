const { Router } = require('express');
const { bookReviewsController } = require('../controllers/book-reviews.controller')

const router = Router();

router.post('/books/:id/reviews', bookReviewsController.addBookReview);
router.delete('/reviews/:id', bookReviewsController.deleteReview);
router.get('/books/:id/reviews', bookReviewsController.getReviews);

module.exports = router;