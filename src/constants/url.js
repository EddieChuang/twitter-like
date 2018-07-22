import { IP, PORT } from './config'
const SERVER = `http://${IP}:${PORT}`

export const URL_HOME = `${SERVER}/home`
export const URL_USER_GET = `${SERVER}/api/user`
export const URL_USER_SIGNUP = `${SERVER}/user/signup`
export const URL_USER_SIGNIN = `${SERVER}/user/signin`
export const URL_USER_LOGOUT = `${SERVER}/api/user/logout`
export const URL_USER_FOLLOW = `${SERVER}/api/user/follow`
export const URL_USER_UNFOLLOW = `${SERVER}/api/user/unfollow`
export const URL_USER_GET_FOLLOWER = `${SERVER}/api/user/followers`
export const URL_USER_GET_FOLLOWING = `${SERVER}/api/user/followings`

export const URL_TWEET_GET = `${SERVER}/api/tweet`
export const URL_TWEET_SAVE = `${SERVER}/api/tweet/save`
export const URL_TWEET_LIKE = `${SERVER}/api/tweet/like`
export const URL_TWEET_UNLIKE = `${SERVER}/api/tweet/unlike`
export const URL_SEND_COMMENT = `${SERVER}/api/tweet/sendComment`
