var User = require ('../models/user.js');
var jwt = require('jwt-simple');

// Temp Secret. Redo and factor it in config folder.
exports.secret = { secret: '0c3hnd8n4bs8woJKgywCDdoff93' };

// Create Token Session for user.
function tokenForUser(user) {
  var timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp}, '0c3hnd8n4bs8woJKgywCDdoff93');
};

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
  });
};

exports.signup = function(user, callback) {
  // See if a user with the given email exists
  User.findOne({ emailAddress: user.emailAddress }, function(err, existingUser) {
    if (err) {
      return callback(err);
    }
    // If a user with email does exist, return an error
    if (existingUser) {
      return callback({ error: 'Email is in use' });
    }
    // Else create and save user and email
    var newUser = new User(user);
    newUser.save(function(err) {
      if (err) {
        return callback(err);
      }
      // Response to request indicating the user was created
      // Send back web token.
      return callback({ token: tokenForUser(newUser) });
    });

  }); 
};

exports.signin = function(req, res, next) {
  console.log(req.user);
  res.send({ token: tokenForUser(req.user) });
}

