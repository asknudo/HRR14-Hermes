var Event = require ('../models/event.js');

exports.addEvent = function (event, callback) {
  Event.create(event, function (err, saved) {
    if (err) {
      return callback(false);
    } else {
      return callback(saved);
    }
  });
};

exports.getEvent = function (callback) {
  Event.find({}, function(err, data) {
    if (err) {
      return callback(false);
    } else {
      return callback(data);
    }
  })
}