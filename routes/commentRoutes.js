const express = require("express");
const router = express.Router();
const comment = require("../controllers/commentController");
const isLoggedIn = require("../middleware/isLoggedIn");

router.post("/posts/:id/comment", isLoggedIn, comment.addComment);

module.exports = router;