const mongoose = require('mongoose');
const Surveys = mongoose.model('surveys');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;
        console.log(recipients.split(','));
        const survey = new Surveys({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email })),
            _user: req.user.id,
            dateSent: Date.now()
        });
        const mail = new Mailer(survey, surveyTemplate(survey));

        try {
            await mail.send();
            await survey.save();
            req.user.credits -= 10;
            const user = await req.user.save();
            return res.send(user);

        } catch (err) {
            return res.status(422).send(err);
        }

    });
};
