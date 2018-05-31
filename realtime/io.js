module.exports = function(io){
  
  io.on('connection', function(socket){
    console.log('Socket.io Connected')
    // console.log('socket', socket)
    console.log('user', socket.request.user)
    let user = socket.request.user

    // socket.on('tweet', (data) => {

    // })

  })
}