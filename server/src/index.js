const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const route = require('./routes');

const POST = 4000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret:"nodejs",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000,
    }
}));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
route(app);

app.listen(POST);