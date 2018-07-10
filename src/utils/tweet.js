import axios from 'axios'
import async from 'async'
import auth from './auth'

export default {
  isFollowed: user => {
    const self = auth.getUser()
    const isSelf = self._id === user._id
    return !isSelf && user.followers.indexOf(self._id) !== -1
  }
}
