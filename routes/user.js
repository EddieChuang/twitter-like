const router        = require('express').Router()
const User           = require('../models/user')
const passport       = require('passport')
const passportConfig = require('../config/passport')


router.route('/signup')
  .post((req, res, next) => {
    User.findOne({email: req.body.email}, (err, existingUser) => {
      if(existingUser){
        // req.flash('errors', 'Account with that email address already exist.')
        res.status(500)
        res.json({
          message: 'Account with that email address already exist.'
        })
        // res.redirect('/signup')
      } else {
        let user   = User()
        user.name  = req.body.name
        user.email = req.body.email
        user.photo = user.gravatar()
        user.password = req.body.password
        user.tweets = []
        user.save((err) => {
          if(err)
              return next
          
          
          let {name, email, photo, tweets} = user
          res.status(200)
          res.json({ user: {name, email, photo, tweets} })
        })
      }
    })
  })

router.route('/signin')
  .post((req, res, next) => {
    passport.authenticate('local-login', (err, user) /*done()*/ => {
      
      console.log(err, user)
      if(err){
        res.status(404)
        res.json({message: err})
      } else {

        let {name, email, photo, tweets} = user
        res.status(200)
        res.json({user: {name, email, photo, tweets}})
      }
    })(req, res, next)
  })
  // .post(passport.authenticate('local-login', {
  //   successRedirect: '/home',
  //   failureRedirect: '/signin',
  //   failureFlash: true
  // }))

module.exports = router