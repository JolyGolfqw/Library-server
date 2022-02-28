const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");

const router = Router();

router.post("/user", usersController.addUser);
router.patch("/user/:id", usersController.editUser);
router.delete("/userd/:id", usersController.deleteUser);
router.get("/users", usersController.getUsers);
router.patch("/books/renter/:userId/add", usersController.addRenter);
router.patch("/books/renter/:userId/:remove", usersController.removeRenter);

module.exports = router;
