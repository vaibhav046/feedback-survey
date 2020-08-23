const chai = require('chai');
const nock = require('nock');
const API_URL = 'http://localhost:5000';
const chaiHttp = require('chai-http');
let response = null;
chai.should();
chai.use(chaiHttp);

describe('Register survey', () => {
    beforeEach('Login user', () => {
        response = "Thanks for voting !!!"
        nock(API_URL)
            .get('/api/surveys', response)
            .reply(200, response);
    });
    it('registers a new survey', (done) => {
        chai.request(API_URL)
            .get('/api/surveys')
            .send(response)
            .then((res) => {
                res.should.have.status(200);
            })
            .catch((err) => {
                console.log(`error occured ${err}`);
            });
        done();
    });
});


describe('Reply with survey', () => {
    beforeEach('Reply with survey', () => {
        body = { "title": "Campaign Title", "subject": "subject", "body": "casvbcbvacv", "recipients": [{ "responded": false, "_id": "5f3f881291492a285ab8dc2c", "email": "vaibhav046@gmail.com" }] }
        response = {
            credits: 110,
            _id: "5f3f7185092d772778d96f30",
            googleId: "105419326637063822098",
            __v: 0
        }
        nock(API_URL)
            .post('/api/surveys/thanks', body)
            .reply(200, response);
    });
    it('acknowledges a survey', (done) => {
        chai.request(API_URL)
            .post('/api/surveys/thanks')
            .set('content-type', 'application/json')
            .send(body)
            .then((res) => {
                res.should.have.status(200);
            })
            .catch((err) => {
                console.log(`error occured ${err}`);
            });
        done();
    });
});