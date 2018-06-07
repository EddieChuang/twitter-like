const router = require('express').Router()
const async  = require('async')
const User   = require('../models/user')
const Tweet  = require('../models/tweet')

router.route('/tweet/save')
  .post((req, res, next) => {
    let owner   = req.body.owner
    let content = req.body.content
    async.waterfall([
      // save tweet 
      function(callback){
        let tweet = new Tweet()
        tweet.owner   = owner
        tweet.content = content
        tweet.comment = []
        tweet.save(function(err){
          console.log('successfully save tweet to mongodb', tweet)
          callback(err, tweet)
        })
      },
      // update user.tweets
      function(tweet, callback){
        User.update(
          {_id: owner},
          {$push: {tweets: {tweet: tweet._id}}},
          function(err, count){ // count is the number of updated documents
            callback(err, tweet)
          }
        )
      },
      // response
      function(tweet, callback){
        res.status(200)
        res.json({tweet: JSON.stringify(tweet)})
      }
    ])

  })

  module.exports = router