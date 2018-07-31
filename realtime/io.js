const Message = require('../models/message')

module.exports = function(io) {
  io.on('connection', function(socket) {
    const query = socket.handshake.query
    const chatId = query.chatId
    socket.on('chatId', data => {
      socket.emit('chatId', [data])
      console.log(data)
      let message = new Message()
      message.chatId = chatId
      message.userId = data.userId
      message.name = data.name
      message.text = data.text
      message.save(function(err) {})
    })
    Message.find({ chatId }, function(err, messages) {
      console.log(messages)
      socket.emit('chatId', messages)
    })
  })
}
