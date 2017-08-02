var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

const options = {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
};

//facebook strategy
passport.use(
    new FacebookStrategy(options, function(accessToken, refreshToken, profile, done) {
            User.findOrCreate({ facebookId: profile.id }, function (err, result) {
                    if(result) {
                        result.access_token = accessToken;
                        result.save(function(err, doc) {
                            done(err, doc);
                        });
                    } else {
                        done(err, result);
                    }
                }
            );
        }
    )
);

//token auth setup
passport.use(
    new BearerStrategy(
        function(token, done) {
            User.findOne({ access_token: token }, function(err, user) {
                    if(err) {
                        return done(err);
                    }
                    if(!user) {
                        return done(null, false);
                    }
                    return done(null, user, { scope: 'all' });
                }
            );
        }
    )
);