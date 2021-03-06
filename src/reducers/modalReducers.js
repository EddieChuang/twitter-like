'use strict'

export function modalReducers(
  state = {
    tweetModalVisibility: false,
    commentModalVisibility: false,
    chatModalVisibility: false,
    tweetId: '', // id for commentModal
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
        comments: action.payload.comments,
        tweetId: action.payload.tweetId
      }
    case 'CLOSE_COMMENT_MODAL':
      return { ...state, commentModalVisibility: false }
    case 'OPEN_CHAT_MODAL':
      return { ...state, chatModalVisibility: true }
    case 'CLOSE_CHAT_MODAL':
      return { ...state, chatModalVisibility: false }
    case 'MODAL_NEW_COMMENT':
      return { ...state, comments: action.payload.comments }
  }

  return state
}
