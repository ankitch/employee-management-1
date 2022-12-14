const express = require("express");
const { route } = require(".");
const router = express.Router();
const userController = require("../controller/userController");

/* GET users listing. */
router.get("/", userController.getUsers);
router.post("/", userController.postUser);

module.exports = router;
