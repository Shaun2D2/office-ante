const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const user = require('../app/models/User');

module.exports = function(passport) {
    const opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = process.env.APP_KEY;
    // opts.issuer = process.env.APP_HOST;

    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        user.findById(jwt_payload.subject).exec().then((user) => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
        .catch((err) => done(err, false));
    }));
}
