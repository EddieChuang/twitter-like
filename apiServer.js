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


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cookieParser())
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret,
  store: new MongoStore({ url: config.database, autoReconnect: true})
}))
app.use(flash())

// mongo connection 必須在 apiServer
mongoose.connect(config.database, (err) => {
  if(err)
      return console.log(err)
  console.log('Connected to the mongo database')
})

const userRoutes = require('./routes/user')
app.use()

app.get('/create-new-user', (req, res, next) => {

  let user = new User()
  user.email = 'chiamin3@gmail.com'
  user.name  = 'chiamin'
  user.password = 'chiamin'
  user.save((err) => {
    if(err)
        return next(err)
    res.json('Successfully created')
  })
})



app.listen(3031, (err) => {
  if(err)
      return console.log(err)
  console.log('API Server is listening on port 3031')
})