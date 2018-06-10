const router = require('express').Router()
const async  = require('async')
const User   = require('../models/user')
const Tweet  = require('../models/tweet')


router.get('/tweet/', (req, res, next) => {
  Tweet.find({})
  .sort('-created')
  .populate('owner', '_id name')
  // .populate('comment')
  .exec(function(err, tweets){
    // console.log(tweets)
    res.json({tweets})
  })
})
router.get('/tweet/:id', (req, res, next) => {
  let id = req.params.id
  Tweet.find({owner: id}, function(err, tweets){
    res.json({tweets})
  })
})


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
        tweet.like    = 0
        tweet.save(function(err){
          // console.log('successfully save tweet to mongodb', tweet)
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
        Tweet.findById(tweet._id)
          .populate('owner', '_id name')
          .exec(function(err, tweet){
            // console.log(tweets)
            res.json({tweet})
          })
        // res.json({tweet: JSON.stringify(tweet)})
      }
    ])
  })

  module.exports = router