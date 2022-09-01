const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express", value: process.env.TEST_VARIABLE });
});

router.get("/about", (req, res, next) => {
  res.render("about", {});
});

module.exports = router;
