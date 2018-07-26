const router = require('express').Router()
const User = require('../models/user')
const passport = require('passport')
const passportConfig = require('../config/passport')
const async = require('async')
const secretConfig = require('../config/secret')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

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
  const { id, idToFollow } = req.body
  const filters = [{ _id: id }, { _id: idToFollow }]
  const queries = [
    { $push: { followings: idToFollow } },
    { $push: { followers: id } }
  ]
  async.waterfall([
    function(callback) {
      User.update(filters[0], queries[0], function(err, count) {
        callback(err)
      })
    },
    function(callback) {
      User.update(filters[1], queries[1], function(err, count) {
        callback(err)
      })
    },
    function(callback) {
      // User.findById(mongoose.Types.ObjectId(idToFollow))
      User.findById(idToFollow)
        .populate('tweets followers followings')
        .exec(function(err, userToFollow) {
          console.log(userToFollow)
          if (err) return console.log(err)
          res.json({ userToFollow })
        })
    }
  ])
})
router.post('/api/user/unfollow', (req, res, next) => {
  const { id, idToUnFollow } = req.body
  const filters = [{ _id: id }, { _id: idToUnFollow }]
  const queries = [
    { $pull: { followings: idToUnFollow } },
    { $pull: { followers: id } }
  ]
  async.waterfall([
    function(callback) {
      User.update(filters[0], queries[0], function(err, count) {
        callback(err)
      })
    },
    function(callback) {
      User.update(filters[1], queries[1], function(err, count) {
        callback(err)
      })
    },
    function(callback) {
      // User.findById(mongoose.Types.ObjectId(idToUnFollow))
      User.findById(idToUnFollow)
        .populate('tweets followers followings')
        .exec(function(err, userToUnFollow) {
          console.log(userToUnFollow)
          if (err) return console.log(err)
          res.json({ userToUnFollow })
        })
    }
  ])
})

module.exports = router
