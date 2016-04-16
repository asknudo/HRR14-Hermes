var User = require ('../models/user.js');

exports.addUser = function (user, callback) {
  User.create(user, function (err, saved) {
    if (err) {
      return callback(false);
    } else {
      return callback(saved);
    }
  });
};

exports.getUser = function (callback) {
  User.find({}, function(err, data) {
    if (err) {
      return callback(false);
    } else {
      return callback(data);
    }
  })
}