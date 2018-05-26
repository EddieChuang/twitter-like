const router = require('express').Router()
const User   = require('../models/user')

router.route('/signup')
  .post((req, res, next) => {
    User.findOne({email: req.body.email}, (err, existingUser) => {
      if(existingUser){
        req.flash('errors', 'Account with that email address already exist.')
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
        user.save((err) => {
          if(err)
              return next
          res.status(500)
          res.json({
            message: 'Account with that email address already exist.'
          })
        })
      }
    })
  })

module.exports = router