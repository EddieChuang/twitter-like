import axios from 'axios'
import auth from '../utils/auth'
import {
  URL_TWEET_SAVE,
  URL_TWEET_LIKE,
  URL_TWEET_UNLIKE,
  URL_SEND_COMMENT
} from '../constants/url'

export function newTweet(text) {
  return dispatch => {
    const params = {
      token: auth.getToken(),
      owner: auth.getUser()._id,
      content: text
    }
    return axios
      .post(URL_TWEET_SAVE, params)
      .then(res => {
        console.log(res.data)
        dispatch({ type: 'NEW_TWEET', payload: { tweet: res.data.tweet } })
        dispatch({ type: 'CLOSE_MODAL' })
      })
      .catch(err => {
        alert('fail')
        dispatch({ type: 'FAIL_NEW_TWEET' })
      })
  }
}

export function likeTweet(idToLike) {
  return dispatch => {
    const token = auth.getToken()
    const id = auth.getUser()._id
    const params = { token, id, idToLike }
    axios
      .post(URL_TWEET_LIKE, params)
      .then(res => {
        console.log('like res', res)
        dispatch({ type: 'LIKE_TWEET', payload: { tweet: res.data.tweet } })
      })
      .catch(err => {
        console.log('like err', err.response)
        dispatch({ type: 'FAIL_LIKE_TWEET' })
      })
  }
}

export function unlikeTweet(idToUnlike) {
  return dispatch => {
    const token = auth.getToken()
    const id = auth.getUser()._id
    const params = { token, id, idToUnlike }
    axios
      .post(URL_TWEET_UNLIKE, params)
      .then(res => {
        console.log('unlike res', res)
        dispatch({ type: 'UNLIKE_TWEET', payload: { tweet: res.data.tweet } })
      })
      .catch(err => {
        console.log('like err', err.response)
        dispatch({ type: 'FAIL_UNLIKE_TWEET' })
      })
  }
}

export function sendComment(tweetId, commentText) {
  return dispath => {
    const token = auth.getToken()
    const id = auth.getUser()._id
    const params = { token, id, tweetId, commentText }
    console.log(params)
    axios
      .post(URL_SEND_COMMENT, params)
      .then(res => {
        console.log('sendComment res', res)
        dispath({ type: 'SEND_COMMENT', payload: { comments: res.comments } })
      })
      .catch(err => {
        console.log('sendComment err', err.respnose)
      })
  }
}
