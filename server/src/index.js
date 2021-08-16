const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const route = require('./routes');
const db = require('./config/database');
const POST = 3001;

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret:"nodejs",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000,
    }
}));
db.connect();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
route(app);

app.listen(POST);