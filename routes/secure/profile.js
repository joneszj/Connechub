var express = require('express');
var router = express.Router();
var passport = require('passport');
var profile = require('../../data/repositories/profile');

// get profile
router.get('/', passport.authenticate('bearer', { session: false }), function (req, res, next) {
    profile.getProfile(req.app, req.user.id, (profile) => {
        res.json(profile);
    });
});

// update profile
router.post('/', passport.authenticate('bearer', { session: false }), function (req, res, next) {
    debugger;
});

module.exports = router;