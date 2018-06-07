import axios from 'axios'
import async from 'async'

export default {

   save: (tweet) => {
     
    let param = {owner: tweet.owner, content: tweet.content}
    axios.post('/tweet/save', param)
      .then((res) => {
        // console.log(res)
        // callback(true, JSON.parse(res.data.tweet))  // (success, tweet)
      })
      .catch((err) => {
        // console.log(err.response)
        // callback(false, null)
      })

    // async.waterfall([
    //   // save tweet 
    //   function(next){
    //     console.log('post')
    //     axios.post('/tweet/save', param)
    //       .then((res) => {
    //         console.log(res)
    //         next(null, true, JSON.parse(res.data.tweet))  // (success, tweet)
    //       })
    //       .catch((err) => {
    //         console.log(err.response)
    //         next(null, false, null)
    //       })
    //   },
    //   // update user.tweets
    //   function(success, tweet, next){
    //     console.log('callback')
    //     callback(success, tweet)
    //   }
    // ])
  }

}