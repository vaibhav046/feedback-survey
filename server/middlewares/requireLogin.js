/**
 * Middleware for Login handler.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports = (req, res, next) => {
    if (!req.user) {
        res.status(401).send({ error: 'you must log in' });
    }
    next();
};