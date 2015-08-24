var _ = require('lodash');

var messages = [
  {message_id: 'az1-34567-8olf01', thread_id: 1, read: true,  subject: 'I am a great message', text: 'I am a great body', contacts: [{title: 'dey'}, {"title": "thomas.laurent"}], privacy: 50, importance: 50, date: '2015-01-01', date_insert: '2015-01-01' },
  {message_id: 'az1-34567-8olf02', thread_id: 1, read: true,  subject: 'I am a great message', text: 'I am a great body', contacts: [{title: 'dey'}, {"title": "thomas.laurent"}], privacy: 10, importance: 90, date: '2015-01-02', date_insert: '2015-01-02' },
  {message_id: 'az1-34567-8olf03', thread_id: 1, read: false, subject: 'I am a great message', text: 'I am a great body', privacy: 20,  importance: 80, date: '2015-01-02', date_insert: '2015-01-02' },
  {message_id: 'az1-34567-8olf04', thread_id: 1, read: true,  subject: 'I am a great message', text: 'I am a great body', privacy: 30,  importance: 70, date: '2015-01-03', date_insert: '2015-01-03' },
  {message_id: 'az1-34567-8olf05', thread_id: 1, read: true,  subject: 'I am a great message', text: 'I am a great body', privacy: 40,  importance: 60, date: '2015-01-04', date_insert: '2015-01-04' },
  {message_id: 'az1-34567-8olf06', thread_id: 1, read: true,  subject: 'I am a great message', text: 'I am a great body', privacy: 50,  importance: 50, date: '2015-02-01', date_insert: '2015-02-01' },
  {message_id: 'az1-34567-8olf07', thread_id: 1, read: false, subject: 'I am a great message', text: 'I am a great body', privacy: 60,  importance: 40, date: '2015-01-05', date_insert: '2015-01-05' },
  {message_id: 'az1-34567-8olf08', thread_id: 2, read: true,  subject: 'I am a great message', text: 'I am a great body', privacy: 70,  importance: 30, date: '2015-01-01', date_insert: '2015-01-01' },
  {message_id: 'az1-34567-8olf09', thread_id: 2, read: true,  subject: 'I am a great message', text: 'I am a great body', privacy: 80,  importance: 20, date: '2015-01-01', date_insert: '2015-01-01' },
  {message_id: 'az1-34567-8olf10', thread_id: 3, read: false, subject: 'I am a great message', text: 'I am a great body', privacy: 90,  importance: 10, date: '2015-01-01', date_insert: '2015-01-01' },
  {message_id: 'az1-34567-8olf11', thread_id: 3, read: false, subject: 'I am a great message', text: 'I am a great body', privacy: 100, importance: 80, date: '2015-01-01', date_insert: '2015-01-01' },
  {message_id: 'az1-34567-8olf12', thread_id: 3, read: false, subject: 'I am a great message', text: 'I am a great body', privacy: 0,   importance: 50, date: '2015-01-01', date_insert: '2015-01-01' },
  {message_id: 'az1-34567-8olf13', thread_id: 3, read: false, subject: 'I am a great message', text: 'I am a great body', privacy: 25,  importance: 50, date: '2015-01-01', date_insert: '2015-01-01' },
  {message_id: 'az1-34567-8olf14', thread_id: 4, read: false, subject: 'I am a great message', text: 'I am a great body', privacy: 35,  importance: 50, date: '2015-01-01', date_insert: '2015-01-01' },
  {message_id: 'az1-34567-8olf15', thread_id: 5, read: false, subject: 'I am a great message', text: 'I am a great body', privacy: 45,  importance: 50, date: '2015-01-01', date_insert: '2015-01-01' },
  {message_id: 'az1-34567-8olf16', thread_id: 5, read: false, subject: 'I am a great message', text: 'I am a great body', privacy: 55,  importance: 50, date: '2015-01-01', date_insert: '2015-01-01' },
  {message_id: 'az1-34567-8olf17', thread_id: 6, read: false, subject: 'I am a great message', text: 'I am a great body', privacy: 65,  importance: 50, date: '2015-01-01', date_insert: '2015-01-01' },
  {message_id: 'az1-34567-8olf18', thread_id: 6, read: false, subject: 'I am a great message', text: 'I am a great body', privacy: 75,  importance: 50, date: '2015-01-01', date_insert: '2015-01-01' },
  {message_id: 'az1-34567-8olf19', thread_id: 6, read: false, subject: 'I am a great message', text: 'I am a great body', privacy: 85,  importance: 50, date: '2015-01-01', date_insert: '2015-01-01' },
  {message_id: 'az1-34567-8olf20', thread_id: 6, read: false, subject: 'I am a great message', text: 'I am a great body', privacy: 95,  importance: 50, date: '2015-01-01', date_insert: '2015-01-01' }
];

// [
// { 'message_id': 41, 'type': 'str', 'external_message_id' : 'bbb', 'thread_id' : 42, 'security_level' : 43, 'subject' : 'mail subject or whatever', 'from_' : '???', 'date' : '2015-07-18', 'date_insert' : '2015-07-18', 'text' : 'I can haz cheesburger', 'size': '???', 'answer_to' => 'xxx', 'offset': '', 'headers': '', 'tags': [], 'flags': [], 'parts': '???', 'contacts': [{ ??? }],
// ]

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
    var message = _.find(req.messages, {message_id: req.params.id});
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
