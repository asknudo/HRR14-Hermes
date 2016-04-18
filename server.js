var express = require('express');
var app = express();
var db = require('./server/db/config.js');
var bodyParser = require('body-parser');
var eventController = require('./server/db/controllers/eventController.js');
var userController = require('./server/db/controllers/userController.js');

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/event', function (req, res) {
  eventController.getEvent(function(events) {
    if (events) {
      res.status(200).send(events);
    } else {
      res.status(404).send('Could not retrieve...');
    }
  });
});


app.post('/api/event', function (req, res) {
  eventController.addEvent(req.body, function (event) {
    if (event) {
      res.status(201).send(event);
    } else {
      res.status(404).send('Did not save');
    }
  });
});

app.post('/signup', function (req, res) {

  if (!req.body.emailAddress || !req.body.password ) {
    return res.status(404).send({ error: 'You must provide email and password' });
  }
  console.log("inside router " + req.body.emailAddress);
  userController.signup(req.body, function(user) {
    if (user.error) {
      res.status(404).send(user);
    } else {
      res.status(201).json(user);
    }
  });
});

// app.post('/api/user', function (req, res) {
//   eventController.addEvent(req.body, function (event) {
//     if (event) {
//       res.status(201).send(event);
//     } else {
//       res.status(404).send('Did not save');
//     }
//   });
// });



app.get(/^(.+)$/, function (req, res) {
    res.sendFile(__dirname + req.params[0]);
});

var PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log("Listening to port: " + PORT);

