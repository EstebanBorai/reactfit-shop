const router = require('express').Router();

router.use('/hub', require('./hub'));
router.use('/auth', require('./auth'));

module.exports = router;
