const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')


// store user.id in the session when login into platform
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// retreive the stored user.id in the session
passport.deserializeUser((id, user) => {
  User.findById(id, function(err, user){
    done(err, user)
  })
})

passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  User.find({email: email}, (err, user) => {
    if(err) 
        return done(err)
    if(!user)
        return done(null, false, req.flash('loginMessage', 'No user found.'))
    console.log(user)
    if(!user.comparePassword(password))
        return done(null, false, req.flash('loginMessage', 'Oops! Wrong Password.'))
    return done(null, user)
  })
}))
