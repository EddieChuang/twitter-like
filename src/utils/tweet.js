import axios from 'axios'

export default {

  save: (tweet, callback) => {
    let param = FormData()
    param.append('owner', tweet.owner)
    param.append('content', tweet.content)
    axios.post('/tweet/save', param)
      .then((res) => {
        console.log(res)
        callback(true, JSON.parse(res.tweet))  // (success, tweet)
      })
      .catch((err) => {
        console.log(err.response)
        callback(false, null)
      })
  }

}