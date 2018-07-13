export default {
  signined: () => {
    return !!sessionStorage.token
  },

  getUser: () => {
    const state = JSON.parse(sessionStorage['persist:root'])
    const self = JSON.parse(state.user).user
    return self
  },
  getToken: () => sessionStorage.token
}
