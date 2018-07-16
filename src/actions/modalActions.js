'use strict'

export function openTweetModal() {
  return dispatch => {
    dispatch({ type: 'OPEN_TWEET_MODAL' })
  }
}

export function closeTweetModal() {
  return dispatch => {
    dispatch({ type: 'CLOSE_TWEET_MODAL' })
  }
}

export function openCommentModal() {
  return dispatch => {
    dispatch({ type: 'OPEN_COMMENT_BOX' })
  }
}

export function closeCommentModal() {
  return dispatch => {
    dispatch({ type: 'CLOSE_COMMENT_BOX' })
  }
}
