const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/chat', require('./chat'));
router.use('/user', require('./user'));
router.use('/hub', require('./hub'));


module.exports = router;
