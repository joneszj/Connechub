var express = require('express');
var router = express.Router();
var category = require('../data/repositories/category');

// get categories and subcategories
router.get('/', function (req, res, next) {
  category.getPostCategories(req.app, (categories) => res.json({ Categories: categories }));
});

// get category and subcategories
router.get('/api/:category', function (req, res, next) {
  category.getPostCategory(req.app, req.params.category, (category) => res.json({ Category: category }));
});

// get subcategory posts
router.get('/api/:category/:subcategory', function (req, res, next) {
  category.getCategorySubcategories(req.app, req.params.category, req.params.subcategory, (subcategory) => res.json({ Category: subcategory }))
});

module.exports = router;
