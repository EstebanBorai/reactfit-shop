const router = require('express').Router();

router.use('/hub', require('./hub'));

module.exports = router;
