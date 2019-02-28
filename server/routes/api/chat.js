const router = require('express').Router();
const Chat = require('../../models/Chat');

router.get('/:chatId', (req, res) => {
  Chat.findById(req.params.chatId, function(error, chat) {
    if (!error) {
      res.statusCode = 200;
      res.send(chat);  
    }
    res.statusCode = 500;
    res.send(error);
  });
});

router.post('/', (req, res) => {
  const { body } = req;
  if (body) {
    body.dateCreated = new Date(); 
    body.participants = [];
    // TODO: Generate storage on create chat 
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
