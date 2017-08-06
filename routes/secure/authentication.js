var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/login', function (req, res, next) {
    //should be handled entirely clientside, until local login is created
    res.json({});    
});

router.post('/logout', function (req, res, next) {
    //should always be handled entirely clientside
    res.json({});
});

router.post('/signup', function (req, res, next) {
    //should be handled entirely clientside, until local login is created
    res.json({});
});

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback', passport.authenticate('facebook', { session: false, failureRedirect: '/auth/login' }),
  function(req, res, next) {
    //todo: replace redirect and return json of access token to be used on subsequent requests for authentication
    res.redirect("/auth/profile/?access_token=" + req.user.dataValues.access_token);
    //res.json({ access_token: req.user.dataValues.access_token });
  });

module.exports = router;