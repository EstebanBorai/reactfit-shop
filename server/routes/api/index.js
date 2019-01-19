const router = require('express').Router();

router.use('/socket', require('./socket'));

module.exports = router;
