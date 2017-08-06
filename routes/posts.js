var express = require('express');
var router = express.Router();
var post = require('../data/repositories/post');

// get profile posts
router.get('/profile/:id/posts', function (req, res, next) {

});

// get profile post
router.get('/profile/:id/posts/:id', function (req, res, next) {
    post.getPost(req.app, req.params.postid, (post) => res.json({ Post: post }));
});

module.exports = router;