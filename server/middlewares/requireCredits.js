module.exports = (req, res, next) => {
    if (parseInt(req.user.credits) <= 0) {
        res.status(403).send({ error: 'you don\'t have enough credits' });
    }
    next();
};