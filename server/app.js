const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/keys');
const cookieSessionModule = require('cookie-session');
const passport = require('passport');
const Users = require('./models/user');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./services/passport');


mongoose.connect(config.mongoURI, (err) => {
    if (!err)
        console.log('mongo db connected successfully');
});

app.use(
    cookieSessionModule({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [config.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if (err)
        console.error(err);
    else
        console.info('server running');
});
