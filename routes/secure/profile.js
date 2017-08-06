var express = require('express');
var router = express.Router();
var passport = require('passport');
var profile = require('../../data/repositories/profile');

router.get('/', passport.authenticate('bearer', { session: false }), function (req, res, next) {
    profile.get(req.app, req.user.id, (profile) => {
        res.json(profile);
    });
});

router.post('/', passport.authenticate('bearer', { session: false }), function (req, res, next) {
    profile.get(req.app, req.user.id, req.body.attributes, (profile) => {
        res.json(profile);
    });
});

router.put('/', passport.authenticate('bearer', { session: false }), function (req, res, next) {
    profile.update(req.app, req.user.id, req.body.attributes, (profile) => {
        res.json(profile);
    });
});

router.delete('/', passport.authenticate('bearer', { session: false }), function (req, res, next) {
    profile.remove(req.app, req.user.id, (profile) => {
        res.json(profile);
    });
});

module.exports = router;