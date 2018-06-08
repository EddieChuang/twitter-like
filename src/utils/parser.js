export default {
  getUrlParams: () => {
    let params = {}
    let url   = window.location.href.replace('#tab-following', '').replace('#tab-follower', '')
    let parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
      params[key] = value
    })
    return params

  }
}