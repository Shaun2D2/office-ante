const home = require('./controllers/home');
const register = require('./controllers/auth/register');
const login = require('./controllers/auth/login');
const user = require('./controllers/user');
const bet = require('./controllers/bet');
const invitation = require('./controllers/invitation');

module.exports = function(app, passport) {
    /**
     * Home page route
     *
     */
    app.get('/', home.index);

    /**
     * Auth routes
     *
     */
    app.post('/register', register.index);
    app.post('/login', login.index);

    /**
     * User routes
     *
     */
    app.get('/user', user.index);
    app.get('/user/:id', user.show);

    /**
     * Bet routes
     *
     */
    app.get('/bet', passport.authenticate('jwt', { session: false }), bet.index);
    app.post('/bet', passport.authenticate('jwt', { session: false }), bet.create);

    /**
     * Invitation routes
     *
     */
     app.get('/invitation', passport.authenticate('jwt', { session: false }), invitation.index);
     app.get('/invitation/:id/:action(accept|decline)', passport.authenticate('jwt', { session: false }), invitation.update);

}
