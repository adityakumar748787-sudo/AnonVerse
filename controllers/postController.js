const Post = require("../models/Post");

exports.home = async (req, res) => {
    const posts = await Post.find({})
        .populate("author")
        .lean();

    posts.sort((a, b) => {
        const scoreA = a.upvotes.length * 2 + (Date.now() - a.createdAt) / -10000000;
        const scoreB = b.upvotes.length * 2 + (Date.now() - b.createdAt) / -10000000;
        return scoreB - scoreA;
    });

    res.render("home", { posts });
};

exports.createPost = async (req, res) => {
    await Post.create({
        content: req.body.content,
        category: req.body.category,
        author: req.session.userId
    });

    res.redirect("/");
};

exports.upvote = async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post.upvotes.includes(req.session.userId)) {
        post.upvotes.push(req.session.userId);
        await post.save();
    }

    res.redirect("/");
};

exports.deletePost = async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (post.author.equals(req.session.userId)) {
        await Post.findByIdAndDelete(req.params.id);
    }

    res.redirect("/");
};

exports.profile = async (req, res) => {
    const posts = await Post.find({ author: req.session.userId })
        .populate("author");

    res.render("profile", { posts });
};