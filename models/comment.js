const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  speaker: {type: Schema.Types.ObjectId, ref='User'},
  text: String,
  created:{type: Date, default: Date.now}
})

module.exports = mongoose.model('Comment', CommentSchema)