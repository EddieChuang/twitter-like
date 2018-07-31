const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  chatId: String,
  name: String,
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  text: String,
  created: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Message', messageSchema)
