'use strict'

const path = require('@/assets/spritesheet.png')
// const path = null

function runBlock(context) {
  if (!context.isDev)
    window.onload = () => {
      const image = new Image()
      image.onload = () => {
        isAssetReady()
      }
      image.src = path
    }
  else {
    window.onload = () => {
      document.querySelector('.stage-container').classList.remove('not-ready')
      document.querySelector('.loading-screen').classList.add('not-ready')
    }
  }

  return false
}

function isAssetReady() {
  setTimeout(() => {
    document.querySelector('.stage-container').classList.remove('not-ready')
    document.querySelector('.loading-screen').classList.add('not-ready')
  }, 2400)
}

export default runBlock
