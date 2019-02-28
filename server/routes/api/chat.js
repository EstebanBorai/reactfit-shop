const router = require('express').Router();
const Chat = require('../../models/Chat');

router.get('/:chatId', (req, res) => {
  Chat.findById(req.params.chatId, function(error, chat) {
    if (!error) {
      return res.status(200).send(error);
    }
    return res.status(500).send(error);
  });
});

router.get('/user/:userId', (req, res) => {
  Chat.find({ participants: [ req.params.userId ] }, function(error, chat) {
    if (!error) {
      return res.status(200).send(chat);
    }
    return res.status(500).send(error);
  });
});

router.post('/:userId', (req, res) => {
  const { body } = req;
  if (body) {
    body.dateCreated = new Date(); 
    body.participants = [req.params.userId];
    body.storage = "TestStorage";
    body.history = [];

    const newChat = new Chat(body);
    newChat.save((error, chat) => {
      if (error) {
        return res.status(500).send(error);
      }
      return res.status(200).send(chat);
    })
  }
});

module.exports = router;
