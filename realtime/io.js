module.exports = function(io) {
  io.on('connection', function(socket) {
    console.log('Socket.io Connected')

    let user = socket.request.user
    console.log(user)
    socket.on('chat', data => {
      console.log(data)
      socket.emit('send', 'send')
    })
  })
}
