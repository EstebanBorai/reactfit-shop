const router = require('express').Router();

// TODO: Saves user in some database. For now "generate" an UUID 
router.post('/:username', function(req, res) {
  const username = req.params.username;

  if (username) {
    res.status(200).send({
      id: '', // TODO: Generate an UUID 
      username
    });
  } else {
    res.status(400).send('Missing username');
  }
});

module.exports = router;
