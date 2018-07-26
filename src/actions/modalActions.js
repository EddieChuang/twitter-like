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

export function openCommentModal(tweetId, comments) {
  return dispatch => {
    dispatch({ type: 'OPEN_COMMENT_MODAL', payload: { tweetId, comments } })
  }
}

export function closeCommentModal() {
  return dispatch => {
    dispatch({ type: 'CLOSE_COMMENT_MODAL' })
  }
}

export function openChatModal() {
  return dispatch => {
    dispatch({ type: 'OPEN_CHAT_MODAL' })
  }
}

export function closeChatModal() {
  return dispatch => {
    dispatch({ type: 'CLOSE_CHAT_MODAL' })
  }
}
