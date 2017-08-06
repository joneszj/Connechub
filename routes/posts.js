var express = require('express');
var router = express.Router();
var post = require('../data/repositories/post');

router.get('/:profileid/', function (req, res, next) {
    post.get(req.app, null, req.params.profileid, (posts) => res.json({ Posts: posts }));
});

router.get('/:profileid/:postid', function (req, res, next) {
    post.get(req.app, req.params.postid, req.params.profileid, (post) => res.json({ Post: post }));
});

module.exports = router;