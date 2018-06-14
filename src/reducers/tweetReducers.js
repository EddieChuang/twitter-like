
export function tweetReducers(state={tweet:{}}, action){
  
  switch(action.type){
    case 'NEW_POST':
      return {visibility: false, tweet: action.payload.tweet}
    case 'FAIL_NEW_TWEET':
      return {...state, visibility: true}
    case 'LIKE_TWEET':
      return {tweet: action.payload.tweet}
  }

  return state
}