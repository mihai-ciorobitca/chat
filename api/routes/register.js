const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const SECRET_CAPTCHA_KEY = process.env.SECRET_CAPTCHA_KEY;

const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
    res.render("register");
});

router.post("/", async (req, res) => {
    try {
        const fetch = (await import("node-fetch")).default;
        const secretKey = SECRET_CAPTCHA_KEY;
        const { recaptchaResponse } = req.body;
        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `secret=${secretKey}&response=${recaptchaResponse}`,
        });

        if (!response.ok) {
            return res.status(500).json({ message: "Error verifying reCAPTCHA" });
        }

        const data = await response.json();

        if (!data.success) {
            return res.status(400).json({ message: "reCAPTCHA validation failed", errorCodes: data["error-codes"] });
        }
        return res.status(200).json({ message: "reCAPTCHA validated successfully" });
    } catch (error) {
        console.error("Error verifying reCAPTCHA:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
