const passport = require('passport');
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.redirect('/auth/google');
    });
    app.get('/auth/google', passport.authenticate('google',
        {
            scope: ['https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res, next) => {
        res.redirect('/api/currentUser');
        next();
    });

    app.get('/api/currentUser', (req, res) => {
        res.status(200).send(req.user);
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
};
