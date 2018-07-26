'use strict'
require('babel-core/register')

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const passport = require('passport')
const secretConfig = require('./config/secret')
const cookieParser = require('cookie-parser')
const passportSocketIo = require('passport.socketio')
const cors = require('cors')
const path = require('path')
// const httpProxy  = require('http-proxy')

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const sessionStore = new MongoStore({
  url: secretConfig.database,
  autoReconnect: true
})
mongoose.connect(
  secretConfig.database,
  err => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Connected to the mongo database')
  }
)

// const apiProxy = new httpProxy.createProxyServer({
//   target: 'http://127.0.0.1:3031'
// })
// app.use('/api', (req, res) => {
//   apiProxy.web(req, res)
// })

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: secretConfig.secret,
    store: sessionStore
  })
)
app.use(flash())
app.use(passport.initialize()) // init passport strategies
app.use(passport.session())
app.use(function(req, res, next) {
  res.locals.user = req.user
  next()
})
// io.use(
//   passportSocketIo.authorize({
//     cookieParser: cookieParser,
//     key: 'connect.sid',
//     secret: secretConfig.secret,
//     store: sessionStore,
//     success: onAuthorizeSuccess,
//     fail: onAuthorizeFail
//   })
// )
function onAuthorizeSuccess(data, accept) {
  console.log('SocketIO Connection Success ')
  accept()
}
function onAuthorizeFail(data, message, error, accept) {
  console.log('SocketIO Connection Fail ', message)
  if (error) accept(new Error(message))
}

require('./realtime/io')(io)
const authJWT = require('./middleware/auth-jwt')
const userRoutes = require('./routes/user')
const tweetRoutes = require('./routes/tweet')
app.use('/api', authJWT)
app.use(userRoutes)
app.use(tweetRoutes)
app.get('*', (req, res) => {
  // console.log(req.get('host') + req.originalUrl)
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT || 3030
http.listen(port, err => {
  if (err) console.log(err)
  console.log('Server is listening on port 3030 ...')
})
