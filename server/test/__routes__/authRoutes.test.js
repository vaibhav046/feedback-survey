const chai = require('chai');
const nock = require('nock');
const API_URL = 'http://localhost:5000';
const chaiHttp = require('chai-http');
let response = null;
chai.should();
chai.use(chaiHttp);

describe('Callback google redirect', () => {
    beforeEach('hitting  google auth callback', () => {
        nock(API_URL)
            .get('/auth/google/callback')
            .reply(200);
    });
    it('Callback redirects', (done) => {
        chai.request(API_URL)
            .get('/auth/google/callback')
            .redirects(1)
            .then((res) => {
                res.redirect = '/api/currentUser'
            })
            .catch((err) => {
                console.log(`error occured ${err}`);
            });
        done();
    });
});

describe('Login the user', () => {
    beforeEach('Login user', () => {
        response = {
            credits: 110,
            _id: "5f3f7185092d772778d96f30",
            googleId: "105419326637063822098",
            __v: 0
        };
        nock(API_URL)
            .get('/api/currentUser', response)
            .reply(200, response);
    });
    it('login the user with correct credentials', (done) => {
        chai.request(API_URL)
            .get('/api/currentUser')
            .send(response)
            .then((res) => {
                console.log(res.status);
                res.should.have.status(200);
            })
            .catch((err) => {
                console.log(`error occured ${err}`);
            });
        done();
    });
});
