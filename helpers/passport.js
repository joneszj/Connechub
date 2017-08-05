var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var BearerStrategy = require('passport-http-bearer').Strategy;

const options = {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_APP_CALLBACK,
    profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified', 'displayName']
};
module.exports = function (app) {
    //facebook strategy
    passport.use(
        new FacebookStrategy(options, function (accessToken, refreshToken, profile, done) {
            app.locals.db.models.Profile.findOrCreate({
                where: {
                    oauthid: profile.id
                }
            }).then((profile) => {
                profile[0].update({ access_token: accessToken }).then((profile) => {
                    done(null, profile);
                });
            }).catch((err) => { done(err, null); })
        })
    );

    //token auth setup
    passport.use(
        new BearerStrategy(
            function (token, done) {
                app.locals.db.models.Profile.findOne({
                    where: {
                    access_token: token
                }
            }).then((profile) => {
                    if (!profile) {
                        return done(null, false);
                    }
                    return done(null, profile, { scope: 'all' });
                }).catch(() => {
                    return done(err);
                });
            }
        )
    );
}