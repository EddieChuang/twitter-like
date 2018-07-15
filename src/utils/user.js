import axios from 'axios'
import auth from './auth'
import {
  URL_USER_GET,
  URL_USER_GET_FOLLOWER,
  URL_USER_GET_FOLLOWING
} from '../constants/url'

export default {
  init: (userId, callback) => {
    const headers = { token: auth.getToken() }
    axios
      .get(`${URL_USER_GET}/${userId}`, { headers })
      .then(res => {
        callback(res.data.user)
      })
      .catch(err => {
        console.log(err)
        console.log(err.response)
      })
  },
  getFollowers: (userId, callback) => {
    const headers = { token: auth.getToken() }
    axios
      .get(`${URL_USER_GET_FOLLOWER}/${userId}`, { headers })
      .then(res => {
        callback(res.data.followers)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getFollowings: (userId, callback) => {
    const headers = { token: auth.getToken() }
    axios
      .get(`${URL_USER_GET_FOLLOWING}/${userId}`, { headers })
      .then(res => {
        callback(res.data.followings)
      })
      .catch(err => {
        console.log(err)
      })
  },
  isFollowed: user => {
    const self = auth.getUser()
    const isSelf = self._id === user._id
    return (
      !isSelf &&
      user.followers.findIndex(follower => follower._id === self._id) !== -1
    )
  }
}
