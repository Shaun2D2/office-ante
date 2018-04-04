const home = require('./controllers/home');
const register = require('./controllers/auth/register');
const login = require('./controllers/auth/login');
const user = require('./controllers/user');

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
     * example protected route to test passport
     *
     */
    app.get('/protected', passport.authenticate('jwt', { session: false }), function(req, res) {
        return res.json(req.user);
    })

}
