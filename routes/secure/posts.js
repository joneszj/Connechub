var express = require('express');
var router = express.Router();
var passport = require('passport');

// update profile post
router.post('/profile/:id/posts/:id', passport.authenticate('bearer', { session: false }), function (req, res, next) {

});

module.exports = router;