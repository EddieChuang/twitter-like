const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

// store user.id in the session when login into platform
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// retreive the stored user.id in the session
passport.deserializeUser((id, done) => {
  User.findById(id, function(err, user){
    done(err, user)
  })
})

passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done){
  User.findOne({email: email}, function(err, user){
    console.log('local-login', user)
    if(err) 
        return done(err)
    if(!user)
        return done('No user found.', false)
    if(!user.comparePassword(password))
        return done('Oops! Wrong Password.', false)
    
    
        
    return done(null, user)
  })
}))
