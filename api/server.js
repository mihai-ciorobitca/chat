const express = require('express');
const path = require('path');
const session = require('express-session');

require('dotenv').config();
 
const app = express();
const port = 3000;

app.use(session({
    secret: process.env.SECRET_KEY || 'secret',
    resave: false,
    saveUninitialized: true,
}));

const mainRoutes = require('./routes/main');

app.use('/', mainRoutes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});