
export function tweetReducers(state={tweet:{}}, action){
  
  switch(action.type){
    case 'NEW_POST':
      return {tweet: action.payload.tweet}
    case 'FAIL_NEW_TWEET':
      return {...state}
    case 'LIKE_TWEET':
      return {tweet: action.payload.tweet}
    case 'UNLIKE_TWEET':
      return {tweet: action.payload.tweet}
  }

  return state
}