const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const GOOGLE_CLIENT_ID = keys.clientID;
const GOOGLE_CLIENT_SECRET = keys.clientSecret;

const Users = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    let user = await Users.findById(id);
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
    let existingUser = await Users.findOne({
        googleId: profile.id
    });
    console.log(existingUser);
    if (existingUser) {
        //user is found in the mongo schema.
        done(null, existingUser);
    } else {
        await new Users({
            googleId: profile.id
        }).save().then(user => {
            done(null, user);
        });
    }
}));