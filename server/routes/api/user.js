const router = require('express').Router();
const User = require('../../models/User');

router.get('/', (req, res) => {
  User.find({}, function(error, users) {
    if (!error) {
      return res.status(200).send(users);
    }
    return res.status(500).send(error);
  });
});

router.get('/:userId', (req, res) => {
   User.find({ _id: req.params.userId }, function(error, user) {
     if (!error) {
       if (user) {
         return res.status(200).send(user[0]);
       }
       return res.status(404).send('No user found.');
     }
     return res.status(500).send(error);
   });
});

module.exports = router;
