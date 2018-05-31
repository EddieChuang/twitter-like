"use strict"
require('babel-core/register')

const express      = require('express')
const cookieParser = require('cookie-parser')
const bodyParser   = require('body-parser')
const mongoose     = require('mongoose')
const config       = require('./config/secret')
const User         = require('./models/user')
const session      = require('express-session')
const MongoStore   = require('connect-mongo')(session)
const flash        = require('express-flash')
const passport     = require('passport')
const passportSocketIo = require('passport.socketio')



const app  = express()
// const http = require('http').Server(app)
// const io   = require('socket.io')(http)

const sessionStore = new MongoStore({ url: config.database, autoReconnect: true})

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret,
  store: sessionStore
}))
app.use(flash())
app.use(cookieParser())
app.use(passport.initialize()) // init passport strategies
app.use(passport.session())

// end middleware


// io.use(passportSocketIo.authorize({
//   cookieParser: cookieParser,
//   key: 'connect.sid',
//   secret: config.secret,
//   store: sessionStore,
//   success: onAuthorizeSuccess,
//   fail: onAuthorizeFail
// }))

// function onAuthorizeSuccess(data, accept){
//   console.log("Successful connection")
//   accept()
// }

// function onAuthorizeFail(data, message, error, accetp){
//   console.log('Failed connection')
//   if(err)
//       accept(new Error(message))
// }

// mongodb
mongoose.connect(config.database, (err) => {
  if(err)
      return console.log(err)
  console.log('Connected to the mongo database')
})
// end mongodb

// require('./realtime/io')(io)

// routing
const userRoutes = require('./routes/user')
app.use(userRoutes)


app.listen(3031, (err) => {
  if(err)
      return console.log(err)
  console.log('API Server is listening on port 3031')
})