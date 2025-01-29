const express = require('express');
const path = require('path');
const session = require('express-session');
 
const app = express();
const port = 3000;

app.use(session({
    secret: process.env.SECRET_KEY || 'secret',
    resave: false,
    saveUninitialized: true,
}));

const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');
const dashboardRoutes = require('./routes/dashboard');
const adminRoutes = require('./routes/admin');

app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/admin', adminRoutes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
    secret: 'your-secret-key', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true } 
}));

app.get('/', async (req, res) => {
    if (req.session.admin) {
        return res.redirect('/admin');
    }
    return res.redirect('/dashboard');
});

app.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        res.redirect("/login");
    });
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});