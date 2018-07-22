export function tweetReducers(state = { tweet: {} }, action) {
  switch (action.type) {
    case 'NEW_TWEET':
      return { ...state, tweet: action.payload.tweet }
    case 'FAIL_NEW_TWEET':
      return { ...state }
    case 'LIKE_TWEET':
      return { ...state, tweet: action.payload.tweet }
    case 'UNLIKE_TWEET':
      return { ...state, tweet: action.payload.tweet }
    case 'TWEET_NEW_COMMENT':
      return { ...state, tweet: action.payload.tweet }
  }

  return state
}
