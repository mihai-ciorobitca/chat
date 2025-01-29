const express = require("express");
const router = express.Router();
const { createClient } = require("@supabase/supabase-js");
const session = require("express-session");

router.use(express.json());

supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const adminAuthClient = supabase.auth.admin;

router.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

router.get('/', async (req, res) => {
    if (req.session.admin) {
        const { data: { users }, error } = await adminAuthClient.listUsers()
        if (error) {
            console.log(error);
            return res.status(500).json({message: error.message});
        }
        console.log(users);
        return res.render('admin', { users });
    }
    return res.redirect("/login");
});

router.delete("/delete-user", async(req, res) => {
    const { id } = req.body;
    console.log(id);
    const { data, error } = await supabase.auth.admin.deleteUser(id);
    if (error) {
        return res.status(500).json({message: error.message});
    }      
    console.log(data);
    return res.status(200).json({ message: "Login successful" });;
});

module.exports = router;