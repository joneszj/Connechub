var express = require('express');
var router = express.Router();
var category = require('../data/repositories/category');
var subcategory = require('../data/repositories/subcategory');

// get categories and subcategories
router.get('/', function (req, res, next) {
  category.get(req.app, null, (categories) => { res.json({ Categories: categories }); });
});

// get category and subcategories
router.get('/:category', function (req, res, next) {
  category.get(req.app, req.params.category, (category) => res.json({ Category: category }));
});

// get subcategory posts
router.get('/:category/:subcategory', function (req, res, next) {
  subcategory.get(req.app, req.params.category, req.params.subcategory, (subcategory) => res.json({ Category: subcategory }));
});

module.exports = router;
