const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");
const isLoggedIn = require("../middleware/isLoggedIn");
const Post = require("../models/Post");

/* HOME */
router.get("/", postController.home);

/* CREATE PAGE */
router.get("/create", isLoggedIn, (req, res) => {
    res.render("create");
});

/* CREATE POST */
router.post("/posts", isLoggedIn, postController.createPost);

/* UPVOTE */
router.post("/posts/:id/upvote", isLoggedIn, postController.upvote);

/* DELETE POST (Owner) */
router.delete("/posts/:id", isLoggedIn, postController.deletePost);

/* PROFILE PAGE */
router.get("/profile", isLoggedIn, postController.profile);


module.exports = router;