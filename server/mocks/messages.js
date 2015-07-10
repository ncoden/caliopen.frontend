var _ = require('lodash');

var messages = [
  {message_id: 'az1-34567-8olf01', title: 'I am a great message', privacy: 50, importance: 50},
  {message_id: 'az1-34567-8olf02', title: 'I am a great message', privacy: 10, importance: 90},
  {message_id: 'az1-34567-8olf03', title: 'I am a great message', privacy: 20, importance: 80},
  {message_id: 'az1-34567-8olf04', title: 'I am a great message', privacy: 30, importance: 70},
  {message_id: 'az1-34567-8olf05', title: 'I am a great message', privacy: 40, importance: 60},
  {message_id: 'az1-34567-8olf06', title: 'I am a great message', privacy: 50, importance: 50},
  {message_id: 'az1-34567-8olf07', title: 'I am a great message', privacy: 60, importance: 40},
  {message_id: 'az1-34567-8olf08', title: 'I am a great message', privacy: 70, importance: 30},
  {message_id: 'az1-34567-8olf09', title: 'I am a great message', privacy: 80, importance: 20},
  {message_id: 'az1-34567-8olf10', title: 'I am a great message', privacy: 90, importance: 10},
  {message_id: 'az1-34567-8olf11', title: 'I am a great message', privacy: 100, importance: 80},
  {message_id: 'az1-34567-8olf12', title: 'I am a great message', privacy: 0, importance: 50},
  {message_id: 'az1-34567-8olf13', title: 'I am a great message', privacy: 25, importance: 50},
  {message_id: 'az1-34567-8olf14', title: 'I am a great message', privacy: 35, importance: 50},
  {message_id: 'az1-34567-8olf15', title: 'I am a great message', privacy: 45, importance: 50},
  {message_id: 'az1-34567-8olf16', title: 'I am a great message', privacy: 55, importance: 50},
  {message_id: 'az1-34567-8olf17', title: 'I am a great message', privacy: 65, importance: 50},
  {message_id: 'az1-34567-8olf18', title: 'I am a great message', privacy: 75, importance: 50},
  {message_id: 'az1-34567-8olf19', title: 'I am a great message', privacy: 85, importance: 50},
  {message_id: 'az1-34567-8olf20', title: 'I am a great message', privacy: 95, importance: 50}
];

module.exports = function(app) {
  var express = require('express');
  var messagesRouter = express.Router();

  messagesRouter.use(function(req, res, next) {
    var importance = {
      min: parseInt(req.header('X-CALIOPEN-IMPORTANCE').split(':')[0], 10),
      max: parseInt(req.header('X-CALIOPEN-IMPORTANCE').split(':')[1], 10)
    };
    var privacy = {
      min: parseInt(req.header('X-CALIOPEN-PRIVACY-INDEX').split(':')[0], 10),
      max: parseInt(req.header('X-CALIOPEN-PRIVACY-INDEX').split(':')[1], 10)
    };
    req.messages = messages.filter(function (x) {
      return x.importance >= importance.min &&
             x.importance <= importance.max &&
             x.privacy >= privacy.min &&
             x.privacy <= privacy.max;
    });
    next();
  });
  messagesRouter.get('/', function(req, res) {
    res.send({
      total: req.messages.length,
      'messages': req.messages
    });
  });

  messagesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  messagesRouter.get('/:id', function(req, res) {
    var message = _.find(req.messages, {id: req.params.id});
    if (!message) {
      return res
        .status(404)
        .send({
          message: 'Not Found'
        });
    }
    return res
      .status(200)
      .send({messages: message});
  });

  messagesRouter.put('/:id', function(req, res) {
    res.send({
      'messages': {
        message_id: req.params.id
      }
    });
  });

  messagesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/messages', messagesRouter);
};
