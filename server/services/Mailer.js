// const sendGrid = require('sendgrid');
// const helper = sendGrid.mail;
// const surveyTemplate = require('./emailTemplates/surveyTemplate');
// const keys = require('../config/keys');

// module.exports = class Mailer extends helper.Mail {

//     /**
//      * Creates an instance of Mailer.
//      * @param {*} { subject, recipients }
//      * @param {*} content
//      */
//     constructor({ subject, recipients }, content) {
//         super();

//         this.sgApi = sendGrid(keys.sendGridKey);
//         this.from_email = new helper.Email('no-reply@emaily.com');
//         this.subject = subject;
//         this.body = new helper.Content('text/email', content);
//         this.recipients = this.formatAddresses(recipients);
//         this.addContent(this.body);
//         this.addClickTracking();
//         this.addRecipients();
//     }

//     formatAddresses(recipients) {
//         return recipients.map(({ email }) => {
//             return new helper.Email(email);
//         });
//     }

//     addClickTracking() {
//         const trackingSettings = new helper.TrackingSettings();
//         const clickTracking = new helper.ClickTracking(true, true);

//         trackingSettings.setClickTracking(clickTracking);
//         this.addTrackingSettings(trackingSettings);
//     }

//     addRecipients() {
//         // console.log(this.recipients);
//         const personalization = new helper.Personalization();
//         this.recipients.forEach(element => {
//             personalization.addTo(element);
//         });
//         // console.log(personalization.getTos());
//     }

//     async send() {
//         const request = this.sgApi.emptyRequest({
//             method: 'POST',
//             path: '/v3/mail/send',
//             body: this.toJSON()
//         });

//         const response = await this.sgApi.API(request);
//         console.log(response);
//         return response;
//     }
// }


const keys = require('../config/keys');
const sgMail = require('@sendgrid/mail');

class Mailer {
    constructor({ subject, recipients }, content) {
        sgMail.setApiKey(keys.sendGridKey);
        this.to = recipients.map(({ email }) => email);
        this.from = 'no-reply@emaily.com';
        this.subject = subject;
        this.html = content;
    }

    async send() {
        let response;
        try {
            // console.log(this);
            response = await sgMail.send(this, true);
            // console.log(response);
        } catch (error) {
            console.error(error);
        }
        return response;
    }
}

module.exports = Mailer;