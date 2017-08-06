var express = require('express');
var router = express.Router();
var passport = require('passport');
var vote = require('../../data/repositories/vote');

router.post('/:postid', passport.authenticate('bearer', { session: false }), function (req, res, next) {
    vote.create(req.app, req.user.id, req.params.postid, (profile) => {
        res.json(profile);
    });
});

router.delete('/:postid', passport.authenticate('bearer', { session: false }), function (req, res, next) {
    vote.remove(req.app, req.user.id, req.params.postid, (profile) => {
        res.json(profile);
    });
});

module.exports = router;