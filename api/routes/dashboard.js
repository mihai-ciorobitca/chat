const express = require("express");
const router = express.Router();
const session = require("express-session");

router.use(express.json());

router.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

router.get('/', async (req, res) => {
    if (req.session.user) {
        return res.render('dashboard', { data: req.session.data });
    } else if (req.session.admin) {
        return res.redirect('/admin');
    }
    return res.redirect("/login");
});

router.get("/courses", async (req, res) => {
    if (req.session.user) {
        return res.render("courses");
    }   
    return res.redirect("/login");
});



module.exports = router;