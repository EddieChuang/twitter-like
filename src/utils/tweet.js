import axios from 'axios'
import async from 'async'

export default {

  isFollowed: (user) => {
    let self = sessionStorage._id === user // 自己
    return !self && user.followers.indexOf(sessionStorage._id) !== -1
  }
  

}