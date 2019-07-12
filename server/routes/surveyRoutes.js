const mongoose = require('mongoose');
const Surveys = mongoose.model('surveys');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        const { title, subject, body, recipients } = req.body;
        const survey = new Surveys({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email:email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });
    });
};