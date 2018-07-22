const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TweetSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  content: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  like: [{ user: { type: Schema.Types.ObjectId, ref: 'User' } }],
  created: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Tweet', TweetSchema)
