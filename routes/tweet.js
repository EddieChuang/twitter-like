const router = require('express').Router()
const async = require('async')
const mongoose = require('mongoose')
const User = require('../models/user')
const Tweet = require('../models/tweet')
const Comment = require('../models/comment')

router.get('/api/tweet/', (req, res, next) => {
  Tweet.find({})
    .sort('-created')
    .populate('owner comments', '_id name speaker text created')
    .populate({})
    .exec(function(err, tweets) {
      // console.log(tweets)
      res.json({ tweets })
    })
})
router.get('/api/tweet/:id', (req, res, next) => {
  let id = req.params.id
  Tweet.find({ owner: id }, function(err, tweets) {
    res.json({ tweets })
  })
})

router.route('/api/tweet/save').post((req, res, next) => {
  let owner = req.body.owner
  let content = req.body.content
  async.waterfall([
    // save tweet
    function(callback) {
      let tweet = new Tweet()
      tweet.owner = owner
      tweet.content = content
      tweet.comment = []
      tweet.like = []
      tweet.save(function(err) {
        // console.log('successfully save tweet to mongodb', tweet)
        callback(err, tweet)
      })
    },
    // update user.tweets
    function(tweet, callback) {
      User.update(
        { _id: owner },
        { $push: { tweets: { tweet: tweet._id } } },
        function(err, count) {
          // count is the number of updated documents
          callback(err, tweet)
        }
      )
    },
    // response
    function(tweet, callback) {
      res.status(200)
      Tweet.findById(tweet._id)
        .populate('owner', '_id name')
        .exec(function(err, tweet) {
          // console.log(tweets)
          res.json({ tweet })
        })
    }
  ])
})

router.post('/api/tweet/like', (req, res, next) => {
  const { id, idToLike } = req.body
  Tweet.findByIdAndUpdate(idToLike, { $push: { like: { user: id } } }, function(
    err,
    count
  ) {
    Tweet.findById(idToLike)
      .populate('owner', '_id name')
      .exec(function(err, tweet) {
        res.json({ tweet })
      })
  })
})

router.post('/api/tweet/unlike', (req, res, next) => {
  const { id, idToUnlike } = req.body
  Tweet.findByIdAndUpdate(
    idToUnlike,
    { $pull: { like: { user: id } } },
    function(err, count) {
      Tweet.findById(idToUnlike)
        .populate('owner', '_id name')
        .exec(function(err, tweet) {
          res.json({ tweet })
        })
    }
  )
})

router.post('/api/tweet/sendComment', (req, res, next) => {
  const { id, tweetId, commentText } = req.body
  let comment = Comment()
  comment.speaker = mongoose.Types.ObjectId(id)
  comment.text = commentText
  comment.save(function(err) {
    Tweet.findByIdAndUpdate(
      tweetId,
      { $push: { comments: comment._id } },
      function(err, count) {
        Tweet.findById(tweetId)
          .sort('-created')
          .populate('comments', 'text created')
          .exec(function(err, tweet) {
            console.log(tweet)
            res.json({ comments: tweet.comments })
          })
      }
    )
  })
})

module.exports = router
