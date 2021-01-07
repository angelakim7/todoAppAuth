const router = require('express').Router();
const User = require('../controllers/auth')

router
    .route('/register')
    .post(User.register)

router
    .route('/login')
    .post(User.login)
router 
    .route('/tokenIsValid')
    .post(User.verifyToken)

module.exports = router;