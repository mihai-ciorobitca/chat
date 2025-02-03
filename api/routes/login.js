const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");

dotenv.config();

const router = express.Router();

router.use(session({
    secret: process.env.SECRET_KEY || 'secret',
    resave: false,
    saveUninitialized: true,
}));

router.use(express.json());

router.get("/", (req, res) => {
    res.render("login");
});

router.post("/", async (req, res) => {
    const { email, password, type } = req.body;

    if (type == "user") {
        req.session.user = true;
        res.status(200).json({ message: "/dashboard" });
    } else if (email === "admin@mail.com" && password === process.env.ADMIN_PASSWORD) {
        req.session.admin = true;
        res.status(200).json({ message: "/admin" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

module.exports = router;
