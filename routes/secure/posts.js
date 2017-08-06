var express = require('express');
var router = express.Router();
var passport = require('passport');
var posts = require('../../data/repositories/post');
var impersonation = require('../../data/repositories/impersonation');

router.get('/', passport.authenticate('bearer', { session: false }), function (req, res, next) {
    posts.get(req.app, null, req.user.id, (post) => {
        res.json(post);
    });
});

router.get('/:id', passport.authenticate('bearer', { session: false }), function (req, res, next) {
    posts.get(req.app, req.params.id, req.user.id, (post) => {
        impersonation.create(req.app, req.params.id, () => {
            res.json(post);
        });
    });
});

router.post('/', passport.authenticate('bearer', { session: false }), function (req, res, next) {
    posts.create(req.app, req.user.id, req.body.attributes, (post) => {
        res.json(post);
    });
});

router.put('/:id', passport.authenticate('bearer', { session: false }), function (req, res, next) {
    posts.update(req.app, req.params.id, req.user.id, req.body.attributes, (post) => {
        res.json(post);
    });
});

router.delete('/:id', passport.authenticate('bearer', { session: false }), function (req, res, next) {
    posts.remove(req.app, req.params.id, req.user.id, (status) => {
        res.json({ status: status });
    });
});

module.exports = router;