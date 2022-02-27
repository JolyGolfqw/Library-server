const { Router } = require("express");
const { authorsController } = require("../controllers/users.controller");

const router = Router();

router.post("/user", authorsController.addUser);
router.patch("/user/:id", authorsController.editUser);
router.delete("/userd/:id", authorsController.deleteUser);
router.get("/users", authorsController.getUsers);

module.exports = router;
