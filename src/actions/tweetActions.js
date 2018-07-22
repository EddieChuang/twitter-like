import axios from 'axios'
import auth from '../utils/auth'
import {
  URL_TWEET_SAVE,
  URL_TWEET_LIKE,
  URL_TWEET_UNLIKE,
  URL_NEW_COMMENT
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

export function newComment(tweetId, commentText) {
  return dispath => {
    const token = auth.getToken()
    const id = auth.getUser()._id
    const params = { token, id, tweetId, commentText }
    console.log(params)
    axios
      .post(URL_NEW_COMMENT, params)
      .then(res => {
        console.log('newComment res', res)
        const { tweet, comments } = res.data
        dispath({ type: 'TWEET_NEW_COMMENT', payload: { tweet } })
        dispath({ type: 'MODAL_NEW_COMMENT', payload: { comments } })
      })
      .catch(err => {
        console.log('newComment err', err.respnose)
      })
  }
}
