const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  avatar: String,
  dateCreated: Date,
  participants: Schema.Types.Array,
  storage: String,
  history: Schema.Types.Array
});

module.exports = mongoose.model('Chat', ChatSchema);
