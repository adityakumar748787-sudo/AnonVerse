const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    content: String,
    category: {
        type: String,
        enum: ["Confession", "Startup Idea", "Study Help", "Internship", "Random"]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    upvotes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Post", postSchema);