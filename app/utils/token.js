const jwt = require('jsonwebtoken');

module.exports = {
    createToken(id) {
        return jwt.sign({
            subject: id
        },
        process.env.APP_KEY,
        {
            expiresIn: "7days"
        });

    }
}
