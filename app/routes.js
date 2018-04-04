const home = require('./controllers/home');
const register = require('./controllers/auth/register');
const user = require('./controllers/user');

module.exports = function(app) {

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

    /**
     * User routes
     *
     */
    app.get('/user', user.index);
    app.get('/user/:id', user.show);

}
