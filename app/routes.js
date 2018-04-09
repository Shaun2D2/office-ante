const invitation = require('./controllers/invitation');
const register = require('./controllers/auth/register');
const login = require('./controllers/auth/login');
const users = require('./controllers/users');
const home = require('./controllers/home');
const user = require('./controllers/user');
const bet = require('./controllers/bet');


module.exports = function(app, passport) {
    /**
     * Auth routes
     *
     */
    app.post('/api/register', register.index);
    app.post('/api/login', login.index);

    /**
     * User singleton routes
     *
     */
     app.get('/api/user', passport.authenticate('jwt', { session: false }), user.index);

    /**
     * Users routes
     *
     */
    app.get('/api/users', users.index);
    app.get('/api/users/:id', users.show);

    /**
     * Bet routes
     *
     */
    app.get('/api/bet', passport.authenticate('jwt', { session: false }), bet.index);
    app.post('/api/bet', passport.authenticate('jwt', { session: false }), bet.create);

    /**
     * Invitation routes
     *
     */
     app.get('/api/invitation', passport.authenticate('jwt', { session: false }), invitation.index);
     app.get('/api/invitation/:id/:action(accept|decline)', passport.authenticate('jwt', { session: false }), invitation.update);

     /**
      * Home page route
      *
      */
     app.get(/.*/, home.index);
}
