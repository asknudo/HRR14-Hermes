var passport = require('passport');
var User = require('./db/models/user');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var LocalStrategy = require('passport-local');

var Key = require('./db/controllers/userController').secret;

// Create local strategy
var localOptions = {
  usernameField: 'emailAddress'
}

var localLogin = new LocalStrategy(localOptions, function(emailAddress, password, done) {
  User.findOne({ emailAddress: emailAddress}, function(err, user) {

    if (err) { return done(err); }
    if (!user) {return done(null, false); }

    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false); } 
      return done(null, user);
    });
  });
});

// Setup options for JWT strategy
var jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: Key.secret
};

// Create JWT strategy
var jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  console.log(payload.sub);
  User.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false); }

    if (user) {
      done(null, done);
    } else {
      done(null, false);
    }
  });
});


// Tell passport to use this strategy.
passport.use(jwtLogin);
passport.use(localLogin);