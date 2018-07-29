$(function() {
  let socket = io()
  console.log('custom.js', socket)

  socket.emit('chat', 'chat')
  socket.on('send', data => {
    console.log('send', data)
  })
})
