const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(proxy(['/api', '/auth/google', '/api/stripe', '/api/surveys/thanks', 'api/surveys/'], {
        target: 'http://localhost:5000'
    }));
}