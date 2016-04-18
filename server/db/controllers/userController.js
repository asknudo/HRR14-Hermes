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
      return callback({ success: true });
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