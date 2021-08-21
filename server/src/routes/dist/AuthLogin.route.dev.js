"use strict";

var jwt = require('jsonwebtoken');

var authToken = require('../middleware/token');

var loginCon = require('../app/controllers/login.controller');

var route = function route(app) {
  app.post('/login', loginCon.index);
  app.post('/token', function (req, res) {
    var token = req.body.refreshToken;
    if (!token) return res.sendStatus(401);
    var user = users.find(function (user) {
      return user.refreshToken === token;
    });
    if (!user) return res.sendStatus(403);

    try {
      var decode = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
      var tokens = generateToken(user);
      updateRefreshToken(user.username, tokens.refreshToken);
      res.json(tokens);
    } catch (err) {
      res.sendStatus(403);
    }
  });
  app["delete"]('/logout', authToken, function (req, res) {
    var user = users.find(function (user) {
      return user.userId === req.userId;
    });
    if (!user) return res.sendStatus(403);
    updateRefreshToken(user.username, null);
    res.json(users);
  });
  app.get('/', function (req, res, next) {
    res.send("Auth Server");
  });
};

module.exports = route;