const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {
    await Comment.create({
        text: req.body.text,
        author: req.session.userId,
        post: req.params.id
    });
    res.redirect("/posts/" + req.params.id);
};