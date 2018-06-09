const router         = require('express').Router()
const User           = require('../models/user')
const passport       = require('passport')
const passportConfig = require('../config/passport')
const async          = require('async')

router.route('/user/signup')
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
        let user        = User()
        user.name       = req.body.name
        user.email      = req.body.email
        user.photo      = user.gravatar()
        user.password   = req.body.password
        user.tweets     = []
        user.followers  = []
        user.followings = []
        user.save((err) => {
          if(err)
              return next
          
          req.login(user, function(err){
              if(err)
                  return next(err)
              let {_id, name, email, photo, tweets} = user
              res.status(200)
              res.json({ user: {_id, name, email, photo, tweets} })
          })
        })
      }
    })
  })
router.route('/user/signin')
  .post((req, res, next) => {
    passport.authenticate('local-login', {
      session: true,
      successRedirect: '',
      failureRedirect: '',
      failureFlash: true
    }, (err, user) => {
      if(err){
        res.status(404)
        res.json({message: err})
      } else {
        let {_id, name, email, photo, tweets, followers, followings} = user
        res.status(200)
        res.json({user: {_id, name, email, photo, tweets, followers, followings}})
      }
    })(req, res, next)
  })
router.get('/user/logout', (req, res, next) => {
    req.logout()
    res.status(200)
    res.json({message: 'Logout successfully'})
})
router.get('/user/:id', (req, res, next) => {
  let id = req.params.id
  User.findOne({_id: id}, function(err, user){
    let {_id, name, email, photo, tweets, followers, followings} = user
    res.json({user: {_id, name, email, photo, tweets, followers, followings}})
  })
})
router.get('/user/followings/:id', (req, res, next) => {
  let id = req.params.id
  User.findOne({_id: id}, function(err, user){
    let followings = user.followings.map((followingId, i) => {
      User.findOne({_id: followingId})
    })
    res.json({followings})
  })
})
router.get('/user/followers/:id', (req, res, next) => {
  let id = req.params.id
  User.findOne({_id: id}, function(err, user){
    let followers = user.followers.map((followerId, i) => {
      User.findOne({_id: followerId})
    })
    res.json({followers})
  })
})
router.post('/user/follow', (req, res, next) => {
  let {id, idToFollow} = req.params

  async.waterfall([
    function(callback){
      User.update(
        {_id: id},
        {$push: {followings: idToFollow}},
        function(err, count){
          callback(err)
        }
      )
    },
    function(callback){
      User.update(
        {_id: idToFollow},
        {$push: {followers: id}},
        function(err, count){
          callback(err)
        }
      )
    },
    function(callback){
      let userToFollow = User.findById(idToFollow)
      let {_id, name, email, photo, tweets, followers, followings} = user
      res.json({user: {_id, name, email, photo, tweets, followers, followings}})
    }

  ])
  
})


// const multer         = require('multer')()  // extract FormData
// router.post('/user', multer.fields([]), (req, res, next) => {
//   console.log('/user', req.body)
//   User.findOne({_id: req.body.id}, function(err, user){
//     let {_id, name, email, photo, tweets} = user
//     res.json({user: {_id, name, email, photo, tweets}})
//   })
// })

module.exports = router