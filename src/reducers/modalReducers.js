'use strict'

export function modalReducers(
  state = {
    tweetModalVisibility: false,
    commentModalVisibility: false,
    comments: []
  },
  action
) {
  switch (action.type) {
    case 'OPEN_TWEET_MODAL':
      return { ...state, tweetModalVisibility: true }
    case 'CLOSE_TWEET_MODAL':
      return { ...state, tweetModalVisibility: false }
    case 'OPEN_COMMENT_MODAL':
      return {
        ...state,
        commentModalVisibility: true,
        comments: actions.payload.comments
      }
    case 'CLOSE_COMMENT_MODAL':
      return { ...state, commentModalVisibility: false }
  }

  return state
}
