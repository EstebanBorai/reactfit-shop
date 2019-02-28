const router = require('express').Router();

router.use('/hub', require('./hub'));
router.use('/auth', require('./auth'));
router.use('/chat', require('./chat'));

module.exports = router;
