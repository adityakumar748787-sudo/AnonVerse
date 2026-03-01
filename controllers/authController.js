const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hash });
    req.flash("success", "Registered successfully");
    res.redirect("/login");
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        req.flash("error", "Invalid email");
        return res.redirect("/login");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        req.flash("error", "Wrong password");
        return res.redirect("/login");
    }
    req.session.userId = user._id;
    req.flash("success", "Logged in");
    res.redirect("/");
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect("/");
};