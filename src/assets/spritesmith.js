const SpritesmithPlugin = require('webpack-spritesmith')

const spriteLogic = [
  new SpritesmithPlugin({
    src: {
      cwd: 'src/assets/images',
      glob: ['**/*.png', '!stickers/**', '!pointers/**']
    },
    target: {
      image: 'src/assets/spritesheet.png',
      css: 'src/assets/styles/_spritesheet.scss'
    },
    apiOptions: {
      cssImageRef: '~@/assets/spritesheet.png'
    },
    spritesmithOptions: {
      padding: 5
    }
  })
]

export default spriteLogic
