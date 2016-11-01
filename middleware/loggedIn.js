/**
 * Created by Mihnea on 5/17/2015.
 */

module.exports = function isLoggedIn(req, res, next) {
    if(!(req.session.isLoggedIn && req.session.user)) {
        return res.redirect('/');
    }
    next();
}