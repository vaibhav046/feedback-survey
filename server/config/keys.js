
const dotenv = require('dotenv').config();
const process = require('process');

module.exports = {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePublishableKey: process.env.STRIPE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET,
    sendGridKey: process.env.SENDGRID_KEY
}