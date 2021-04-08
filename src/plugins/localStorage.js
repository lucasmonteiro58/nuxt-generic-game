import createPersistedState from 'vuex-persistedstate'
import { name } from '../../package.json'
// import * as Cookies from 'js-cookie'

const session = {
  getItem(key) {
    return JSON.parse(sessionStorage.getItem(key))
  },
  setItem(key, value) {
    return sessionStorage.setItem(key, JSON.stringify(value))
  },
  removeItem(key) {
    return sessionStorage.removeItem(key)
  }
}

export default ({ store }) => {
  createPersistedState({
    key: name,
    storage: session,
    getState: session.getItem,
    setState: session.setItem
  })(store)
}
