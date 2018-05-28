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


const app = express()

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret,
  store: new MongoStore({ url: config.database, autoReconnect: true})
}))
app.use(flash())
app.use(cookieParser())
app.use(passport.initialize()) // init passport strategies
app.use(passport.session())

// end middleware


// mongodb
mongoose.connect(config.database, (err) => {
  if(err)
      return console.log(err)
  console.log('Connected to the mongo database')
})
// end mongodb

const userRoutes = require('./routes/user')
app.use(userRoutes)



app.listen(3031, (err) => {
  if(err)
      return console.log(err)
  console.log('API Server is listening on port 3031')
})