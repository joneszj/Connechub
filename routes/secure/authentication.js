var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/login', function (req, res, next) {

});

router.get('/logout', function (req, res, next) {

});

router.post('/signup', function (req, res, next) {

});

//facebook oauth
//https://jeroenpelgrims.com/token-based-sessionless-auth-using-express-and-passport
// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));

module.exports = router;