import axios from 'axios'

export function newTweet(text){
  
  return (dispatch) => {
    let tweet = {owner: sessionStorage._id, content: text}
    return axios.post('/tweet/save', tweet)
      .then((res) => {
        console.log(res.data)
        dispatch({type: "NEW_TWEET", payload: {tweet: res.data.tweet}})
      })
      .catch((err) => {
        alert('fail')
        dispatch({type: "FAIL_NEW_TWEET"})
      })
  }
}

export function likeTweet(idToLike){
  return (dispatch) => {
    let params = {id: sessionStorage._id, idToLike}
    console.log('likeTweet params', params)
    axios.post('/tweet/like', params)
      .then((res) => {
        console.log('like res', res)
        dispatch({type: "LIKE_TWEET", payload: {tweet: res.data.tweet}})
      })
      .catch((err) => {
        console.log('like err', err.response)
        dispatch({type: "FAIL_LIKE_TWEET"})
      })
  }
}

export function unlikeTweet(idToUnlike){
  return (dispatch) => {
    let params = {id: sessionStorage._id, idToUnlike}
    axios.post('/tweet/unlike', params)
      .then((res) => {
        console.log('unlike res', res)
        dispatch({type: "UNLIKE_TWEET", payload: {tweet: res.data.tweet}})
      })
      .catch((err) => {
        console.log('like err', err.response)
        dispatch({type: "FAIL_UNLIKE_TWEET"})
      })
  }
}
  