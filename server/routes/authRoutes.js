const passport = require('passport');
module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google',
        {
            scope: ['https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    })
    app.get('/api/currentUser', (req, res) => {
        console.log(req.user);
        res.send(req.user);
    });
};
