var _ = require('lodash');

var contacts = [
  {"family_name": "dey", "tags": null, "given_name": null, "contact_id": "6ac99495-10de-470f-99b2-b3d38bdf00ee", "title": "dey", privacy: 60, importance: 30},
	{"family_name": "laurent", "tags": null, "given_name": null, "contact_id": "2cf04070-13d4-4da3-8f6b-fdcdd6614a9b", "title": "laurent", privacy: 70, importance: 90},
	{"family_name": "thomas.laurent", "tags": null, "given_name": null, "contact_id": "258d3e50-9f5f-4810-9fa1-31eb91c15537", "title": "thomas.laurent", privacy: 50, importance: 20},
	{"family_name": "mric", "tags": null, "given_name": null, "contact_id": "1c94bcdb-a766-4658-bcc0-bf78b41863be", "title": "mric", privacy: 80, importance: 60},
	{"family_name": "alexis", "tags": null, "given_name": null, "contact_id": "f097686a-278c-4261-9d43-d553c7bcc8b9", "title": "alexis", privacy: 50, importance: 80},
	{"family_name": "alban", "tags": null, "given_name": null, "contact_id": "9fa46257-0390-4926-8618-a046f6f22f65", "title": "alban", privacy: 90, importance: 30},
	{"family_name": "joseph", "tags": null, "given_name": null, "contact_id": "c3685256-42e2-4712-926a-a8e540b14b6b", "title": "joseph", privacy: 70, importance: 40},
	{"family_name": "julien.muetton", "tags": null, "given_name": null, "contact_id": "17ecccb3-33fb-4abc-b71c-537f727f4fff", "title": "julien.muetton", privacy: 70, importance: 50},
	{"family_name": "Muetton", "tags": null, "given_name": "Julien", "contact_id": "81c7be57-b230-4058-956b-699870a694b4", "title": "Julien Muetton", privacy: 40, importance: 30},
	{"family_name": "caliopdev", "tags": null, "given_name": null, "contact_id": "a5e379d3-f300-40a5-97c1-9179c8f8303f", "title": "caliopdev", privacy: 100, importance: 90}
];

module.exports = function(app) {
  var express = require('express');
  var contactsRouter = express.Router();
  contactsRouter.use(function (req, res, next) {
    var importance = {
      min: parseInt(req.header('X-CALIOPEN-IMPORTANCE').split(':')[0], 10),
      max: parseInt(req.header('X-CALIOPEN-IMPORTANCE').split(':')[1], 10)
    };
    var privacy = {
      min: parseInt(req.header('X-CALIOPEN-PRIVACY-INDEX').split(':')[0], 10),
      max: parseInt(req.header('X-CALIOPEN-PRIVACY-INDEX').split(':')[1], 10)
    };
    req.contacts = contacts.filter(function (x) {
      return x.importance >= importance.min &&
             x.importance <= importance.max &&
             x.privacy >= privacy.min &&
             x.privacy <= privacy.max;
    });
    next();
  });

  contactsRouter.get('/', function(req, res) {
    res.send({
      total: req.contacts.length,
      contacts: req.contacts
    });
  });

  contactsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  contactsRouter.get('/:id', function(req, res) {
    var contact = _.find(req.contacts, {contact_id: req.params.id});
    if (!contact) {
      return res
        .status(404)
        .send({
          message: 'Not Found'
        });
    }
    return res
      .status(200)
      .send({contacts: contact});
  });

  contactsRouter.put('/:id', function(req, res) {
    var contact = _.find(req.contacts, {id: req.params.id});
    if (!contact) {
      return res
        .status(404)
        .send({
          message: 'Not Found'
        });
    }
    res.send({
      'contacts': contact
    });
  });

  contactsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/contacts', contactsRouter);
};
