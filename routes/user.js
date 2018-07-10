const router = require('express').Router()
const User = require('../models/user')
const passport = require('passport')
const passportConfig = require('../config/passport')
const async = require('async')
const secretConfig = require('../config/secret')
const jwt = require('jsonwebtoken')

router.route('/user/signup').post((req, res, next) => {
  User.findOne({ email: req.body.email }, (err, existingUser) => {
    if (existingUser) {
      res.status(500)
      res.json({
        message: 'Account with that email address already exist.'
      })
    } else {
      let user = User()
      user.name = req.body.name
      user.email = req.body.email
      user.photo = user.gravatar()
      user.password = req.body.password
      user.tweets = []
      user.followers = []
      user.followings = []
      user.save(err => {
        if (err) return next

        passport.authenticate(
          'local-login',
          {
            session: true,
            successRedirect: '',
            failureRedirect: '',
            failureFlash: true
          },
          (err, user) => {
            let success = true
            if (err) {
              res.status(404)
              res.json({ success: !success, message: err })
            } else {
              const payload = Object.assign({}, user)
              const expiresIn = 60 * 60 * 24
              const token = jwt.sign(payload, secretConfig.secret, {
                expiresIn
              })
              res.status(200)
              res.json({ success, user, token })
            }
          }
        )(req, res, next)

        // req.login(user, function(err) {
        //   if (err) return next(err)
        //   let { _id, name, email, photo, tweets } = user
        //   res.status(200)
        //   res.json({ user: { _id, name, email, photo, tweets } })
        // })
      })
    }
  })
})
router.route('/user/signin').post((req, res, next) => {
  passport.authenticate(
    'local-login',
    {
      session: true,
      successRedirect: '',
      failureRedirect: '',
      failureFlash: true
    },
    (err, user) => {
      let success = true
      if (err) {
        res.status(404)
        res.json({ success: !success, message: err })
      } else {
        const payload = Object.assign({}, user)
        const expiresIn = 60 * 60 * 24
        const token = jwt.sign(payload, secretConfig.secret, { expiresIn })
        res.status(200)
        res.json({ success, user, token })
      }
    }
  )(req, res, next)
})
router.get('/api/user/logout', (req, res, next) => {
  req.logout()
  res.status(200)
  res.json({ message: 'Logout successfully' })
})
router.get('/api/user/:id', (req, res, next) => {
  let id = req.params.id
  User.findOne({ _id: id }, '_id name email photo tweets followers followings')
    .populate('followers followings')
    .exec(function(err, user) {
      res.json({ user })
    })
})
router.get('/api/user/followings/:id', (req, res, next) => {
  const id = req.params.id
  User.findById(id)
    .populate('followings')
    .exec(function(err, user) {
      res.json({ followings: user.followings })
    })
})
router.get('/api/user/followers/:id', (req, res, next) => {
  const id = req.params.id
  User.findById(id)
    .populate('followers')
    .exec(function(err, user) {
      res.json({ followers: user.followers })
    })
})
router.post('/api/user/follow', (req, res, next) => {
  let { id, idToFollow } = req.body

  async.waterfall([
    function(callback) {
      User.update({ _id: id }, { $push: { followings: idToFollow } }, function(
        err,
        count
      ) {
        callback(err)
      })
    },
    function(callback) {
      User.update({ _id: idToFollow }, { $push: { followers: id } }, function(
        err,
        count
      ) {
        callback(err)
      })
    },
    function(callback) {
      let userToFollow = User.findById(
        idToFollow,
        '_id name email photo tweets followers followings'
      )
      res.json({ userToFollow: userToFollow })
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
