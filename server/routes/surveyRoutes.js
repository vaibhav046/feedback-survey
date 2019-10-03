const mongoose = require('mongoose');
const Surveys = mongoose.model('surveys');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
    hosts: ['http://localhost:9200'] //user:password@clusterurl//'https://elastic:40WOZAGrwrTsQvnM9BEWWomc@5ac3d3a3dfb44729b4473a3b3dc1b475.ap-sou' +theast-1.aws.found.io:9243'
});

client.ping({
    requestTimeout: 30000
}, function (error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});

const searchElastic = (title) => {

    return client
        .search({
            index: 'surveys',
            type: 'default',
            filterPath: ['hits.hits'],
            body: {
                "query": {
                    "bool": {
                        "must": {
                            "term": {
                                "title.keyword": `${title}`
                            }
                        }
                    }
                }
            }
        });
}
module.exports = app => {

    app.get('/api/surveys', (req, res) => {
        res.send('Thanks for voting !!!');
    })

    app.post('/api/surveys/thanks', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;
        // console.log(recipients.split(','));
        const survey = new Surveys({
            title,
            subject,
            body,
            recipients: recipients
                .split(',')
                .map(email => ({ email: email })),
            _user: req.user.id,
            dateSent: Date.now()
        });
        const mail = new Mailer(survey, surveyTemplate(survey));

        try {
            await mail.send();
            await survey.save();
            req.user.credits -= 10;
            const user = await req
                .user
                .save();
            return res.send(user);

        } catch (err) {
            return res
                .status(422)
                .send(err);
        }

    });

    app.post('/api/surveys/webhooks', (req, res) => {
        console.log(req.body);
        res.send({});
    });
    app.get('/api/surveys/search/:title', async (req, res) => {
        const mytitle = req.params.title;
        // const result = await Surveys.findOne({ 'title': mytitle });
        const result = await searchElastic(mytitle);
        let obj = result.hits.hits.map((x) => {
            return x._source;
        })
        // console.log(result.hits.hits[0]);
        if (obj) {
            return res
                .status(200)
                .send(obj);
        }
        res
            .status(404)
            .send('survey not found.')
    });
};

