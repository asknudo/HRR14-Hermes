var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
  eventName: String,
  creator: String,
  location: String,
  lat: Number,
  lng: Number,
  imageUrl: String,
  dateCreated: Date,
  dateofEvent: Date,
  tags: String,
});

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;