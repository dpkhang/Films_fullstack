"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var users = require('../../config/schema/user.schema');

var Login =
/*#__PURE__*/
function () {
  function Login() {
    _classCallCheck(this, Login);
  }

  _createClass(Login, [{
    key: "login",
    value: function login(req, res) {
      return regeneratorRuntime.async(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", users.findOne({
                username: req.body.username
              }).then(function (user) {
                if (user.password == req.body.password) {
                  return user;
                } else {
                  res.send("Don't find username");
                }
              })["catch"](function () {
                res.sendStatus(500);
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "updateRefreshToken",
    value: function updateRefreshToken(req, res, refreshToken) {
      return users.updateOne({
        username: req.body.username
      }, {
        token: refreshToken
      }).then(function () {
        return new Promise(function (resolve) {
          resolve("Success");
        });
      })["catch"](function (err) {
        return res.status(500).json('Server is not found!');
      });
    }
  }]);

  return Login;
}();

module.exports = new Login();