"use strict"
require('babel-core/register')

const express      = require('express')
const cookieParser = require('cookie-parser')
const bodyParser   = require('body-parser')
// const session      = require('express-session')
const mongoose     = require('mongoose')
// const MongoStore   = require('connect-mongo')(session)
const config       = require('./config/secret')
const User         = require('./models/user')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cookieParser())

// mongo connection 必須在 apiServer
mongoose.connect(config.database, (err) => {
  if(err)
      return console.log(err)
  console.log('Connected to the mongo database')
})

app.get('/create-new-user', (req, res, next) => {

  let user = new User()
  user.email = 'chiamin@gmail.com'
  user.name  = 'chiamin'
  user.apssword = 'chiamin'
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