export default {
  signined: () => {
    return !!sessionStorage.token
  },

  getUser: () => {
    if (!sessionStorage['persis:root']) return null

    const state = JSON.parse(sessionStorage['persist:root'])
    console.log(state)
    const self = JSON.parse(state.user).user
    return self
  },
  getToken: () => sessionStorage.token
}
