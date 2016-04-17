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

exports.signup = function(req, res, next) {

  if (!req.body.emailAddress || !req.body.password ) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }

  // See if a user with the given email exists
  User.findOne({ emailAddress: req.body.emailAddress }, function(err, existingUser) {
    if (err) {
      return next(err);
    }
    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // Else create and save user and email
    var user = new User(req.body);
    user.save(function(err) {
      if (err) {
        return next(err);
      }
      // Response to request indicating the user was created
      res.json({success: true});
    });

  });

};


// var userSchema = mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   eventsCreated: String,
//   eventsAttending: String,
//   imageUrl: String,
//   emailAddress: { type: String, unique: true},  
//   password: String
// })