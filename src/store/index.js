export const state = () => ({
  currentBackground: null
})

export const mutations = {
  changeBackground(state, newBackground) {
    state.currentBackground = newBackground
  }
}
