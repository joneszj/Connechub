var express = require('express');
var router = express.Router();
var search = require('../data/repositories/search');

router.get('/', function (req, res, next) {
  search.search(req.app, req.query.search, req.query.location, req.query.category, (result) => res.json({ Result: result }));
});

module.exports = router;