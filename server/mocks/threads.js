var _ = require('lodash');

var threads = [
  {importance: 50, privacy: 10, 'thread_id': 1,  'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'first thread - last shortened messages from thread', 'slug': null, 'tags': [], 'contacts': ['6ac99495-10de-470f-99b2-b3d38bdf00ee','2cf04070-13d4-4da3-8f6b-fdcdd6614a9b'], messages: ['az1-34567-8olf01', 'az1-34567-8olf02', 'az1-34567-8olf03']},
  {importance: 30, privacy: 40, 'thread_id': 2,  'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'no contacts', 'slug': null, 'tags': [], 'contacts': []},
  {importance: 30, privacy: 90, 'thread_id': 3,  'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'last shortened messages from thread', 'slug': null, 'tags': [], 'contacts': ['6ac99495-10de-470f-99b2-b3d38bdf00ee'], messages: ['az1-34567-8olf04', 'az1-34567-8olf05']},
  {importance: 20, privacy: 20, 'thread_id': 4,  'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'last shortened messages from thread', 'slug': null, 'tags': [], 'contacts': ['6ac99495-10de-470f-99b2-b3d38bdf00ee', '2cf04070-13d4-4da3-8f6b-fdcdd6614a9b'], messages: ['az1-34567-8olf06']},
  {importance: 70, privacy: 60, 'thread_id': 5,  'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'last shortened messages from thread', 'slug': null, 'tags': [], 'contacts': ['258d3e50-9f5f-4810-9fa1-31eb91c15537', '6ac99495-10de-470f-99b2-b3d38bdf00ee','2cf04070-13d4-4da3-8f6b-fdcdd6614a9b']},
  {importance: 70, privacy: 50, 'thread_id': 6,  'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'last shortened messages from thread', 'slug': null, 'tags': [], 'contacts': ['f097686a-278c-4261-9d43-d553c7bcc8b9', '1c94bcdb-a766-4658-bcc0-bf78b41863be', '6ac99495-10de-470f-99b2-b3d38bdf00ee','2cf04070-13d4-4da3-8f6b-fdcdd6614a9b']},
  {importance: 80, privacy: 60, 'thread_id': 7,  'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'last shortened messages from thread', 'slug': null, 'tags': [], 'contacts': ['17ecccb3-33fb-4abc-b71c-537f727f4fff', 'c3685256-42e2-4712-926a-a8e540b14b6b', '9fa46257-0390-4926-8618-a046f6f22f65', '6ac99495-10de-470f-99b2-b3d38bdf00ee','2cf04070-13d4-4da3-8f6b-fdcdd6614a9b']},
  {importance: 90, privacy: 90, 'thread_id': 9,  'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'last shortened messages from thread', 'slug': null, 'tags': [], 'contacts': ['17ecccb3-33fb-4abc-b71c-537f727f4fff', 'c3685256-42e2-4712-926a-a8e540b14b6b', '9fa46257-0390-4926-8618-a046f6f22f65', '6ac99495-10de-470f-99b2-b3d38bdf00ee','2cf04070-13d4-4da3-8f6b-fdcdd6614a9b', '81c7be57-b230-4058-956b-699870a694b4']},
  {importance: 30, privacy: 50, 'thread_id': 10, 'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': '1 contact and a missing ', 'slug': null, 'tags': [], 'contacts': ['6ac99495-10de-470f-99b2-b3d38bdf00ee', '']},
  {importance: 20, privacy: 50, 'thread_id': 11,  'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'last shortened messages from thread', 'slug': null, 'tags': [], 'contacts': ['6ac99495-10de-470f-99b2-b3d38bdf00ee','2cf04070-13d4-4da3-8f6b-fdcdd6614a9b']},
  {importance: 10, privacy: 50, 'thread_id': 12, 'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'last shortened messages from thread', 'slug': null, 'tags': [], 'contacts': ['6ac99495-10de-470f-99b2-b3d38bdf00ee']},
  {importance: 60, privacy: 40, 'thread_id': 13, 'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'last shortened messages from thread', 'slug': null, 'tags': [], 'contacts': ['6ac99495-10de-470f-99b2-b3d38bdf00ee']},
  {importance: 50, privacy: 50, 'thread_id': 14, 'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'last shortened messages from thread', 'slug': null, 'tags': [], 'contacts': ['6ac99495-10de-470f-99b2-b3d38bdf00ee']},
  {importance: 50, privacy: 50, 'thread_id': 15, 'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'last shortened messages from thread', 'slug': null, 'tags': [], 'contacts': ['6ac99495-10de-470f-99b2-b3d38bdf00ee']},
  {importance: 50, privacy: 30, 'thread_id': 16, 'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'last shortened messages from thread', 'slug': null, 'tags': [], 'contacts': ['6ac99495-10de-470f-99b2-b3d38bdf00ee']},
  {importance: 50, privacy: 50, 'thread_id': 17, 'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'last shortened messages from thread', 'slug': null, 'tags': [], 'contacts': ['6ac99495-10de-470f-99b2-b3d38bdf00ee']},
  {importance: 50, privacy: 50, 'thread_id': 18, 'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'last shortened messages from thread', 'slug': null, 'tags': [], 'contacts': ['6ac99495-10de-470f-99b2-b3d38bdf00ee']},
  {importance: 50, privacy: 50, 'thread_id': 19, 'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'last shortened messages from thread', 'slug': null, 'tags': [], 'contacts': ['6ac99495-10de-470f-99b2-b3d38bdf00ee']},
  {importance: 50, privacy: 50, 'thread_id': 20, 'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'last shortened messages from thread', 'slug': null, 'tags': [], 'contacts': ['6ac99495-10de-470f-99b2-b3d38bdf00ee']},
  {importance: 50, privacy: 50, 'thread_id': 21, 'date_insert': '2012-01-02', 'date_update': '2012-01-03', 'security_level': 20, 'subject': 'latestt thread - last shortened messages from thread', 'slug': null, 'tags': [], 'contacts': ['6ac99495-10de-470f-99b2-b3d38bdf00ee','2cf04070-13d4-4da3-8f6b-fdcdd6614a9b']}
];

module.exports = function(app) {
  var express = require('express');
  var threadsRouter = express.Router();

  threadsRouter.use(function(req, res, next) {
    const importance = req.header('X-CALIOPEN-IMPORTANCE') || '0-100';
    const privacy = req.header('X-CALIOPEN-PRIVACY-INDEX') || '0-100';
    var importance = {
      min: parseInt(importance.split(':')[0], 10),
      max: parseInt(importance.split(':')[1], 10)
    };
    var privacy = {
      min: parseInt(privacy.split(':')[0], 10),
      max: parseInt(privacy.split(':')[1], 10)
    };

    req.threads = threads.filter(function (x) {
      return x.importance >= importance.min &&
             x.importance <= importance.max &&
             x.privacy >= privacy.min &&
             x.privacy <= privacy.max;
    });
    next();
  });
  threadsRouter.get('/', function(req, res) {
    res.send({
      total: req.threads.length,
      threads: req.threads
    });
  });

  threadsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  threadsRouter.get('/:id', function(req, res) {
    var thread = _.find(req.threads, {id: req.params.id});
    if (!thread) {
      return res
        .status(404)
        .send({
          thread: 'Not Found'
        });
    }
    return res
      .status(200)
      .send({threads: thread});
  });

  threadsRouter.put('/:id', function(req, res) {
    res.send({
      'threads': {
        thread_id: req.params.id
      }
    });
  });

  threadsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/threads', threadsRouter);
};
