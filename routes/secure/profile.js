var express = require('express');
var router = express.Router();
var passport = require('passport');

// get profile
router.get('/:id', passport.authenticate('bearer', { session: false }), function (req, res, next) {

});

// update profile
router.post('/:id', passport.authenticate('bearer', { session: false }), function (req, res, next) {

});

module.exports = router;