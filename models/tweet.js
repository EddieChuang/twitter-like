const mongoose = require('mongoose')
const Schema   = mongoose.Scheam

const TweetSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: 'user'},
  content: String,
  created:{type: Date, default: Date.now}
})

module.exports = mongoose.model('Tweet', TweetSchema)