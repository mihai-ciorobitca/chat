const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const SECRET_CAPTCHA_KEY = process.env.SECRET_CAPTCHA_KEY;

const router = express.Router();

router.get("/", (req, res) => {
    res.render("register");
});

router.post("/", async (req, res) => {
    const secretKey = SECRET_CAPTCHA_KEY;
    const { recapchaResponse } = req.body;
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${recapchaResponse}`,
    });
    return await response.json();
})

module.exports = router;