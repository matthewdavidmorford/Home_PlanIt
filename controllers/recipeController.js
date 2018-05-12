const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Recipe
        .find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByUser: function(req, res) {
        db.Recipe
          .find({user: req.params.user})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    findById: function(req, res) {
        db.Recipe
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    create: function(req, res) {
        db.Recipe
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
}