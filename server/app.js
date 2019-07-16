const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/keys');
const cookieSessionModule = require('cookie-session');
const Users = require('./models/user');
const Surveys = require('./models/surveys');


const passport = require('passport');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


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

require('./services/passport');
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);



const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if (err)
        console.error(err);
    else
        console.info('server running');
});
