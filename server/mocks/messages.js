module.exports = function(app) {
  var express = require('express');
  var messagesRouter = express.Router();

  messagesRouter.get('/', function(req, res) {
    res.send({
      'messages': [
        {message_id: 'XYZ', title: 'Blabla'}
      ]
    });
  });

  messagesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  messagesRouter.get('/:id', function(req, res) {
    res.send({
      'messages': {
       message_id: req.params.id
      }
    });
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
