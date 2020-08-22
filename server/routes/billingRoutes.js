const keys = require('../config/keys');
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

/**
 * Billing Route include stripe billing api.
 * Contracts [Stripe Credits:'/api/stripe']
 * @param {*} app 
 */
module.exports = (app) => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: "usd",
            source: req.body.id, // obtained with Stripe.js
            description: "50$ for 50 credits"
        });
        req.user.credits += 50;
        const user = await req.user.save();
        res.send(user);
    });
};