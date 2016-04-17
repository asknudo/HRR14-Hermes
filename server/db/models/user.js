var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  eventsCreated: String,
  eventsAttending: String,
  imageUrl: String,
  emailAddress: { type: String, unique: true},  
  password: String
})

userSchema.pre('save', function(next) {
  var user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});


var User = mongoose.model('User', userSchema);

module.exports = User;
