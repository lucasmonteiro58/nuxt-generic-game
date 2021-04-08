import anime from 'animejs'

export function fadeIn(el, done) {
  return fade(el, [0, 1], 'easeOutExpo', done)
}

export function fadeOut(el, done) {
  return fade(el, 0, 'linear', done)
}

export function fade(el, opacity, easing, callback) {
  anime({
    targets: el,
    opacity,
    easing,
    complete: callback
  })
}

export function translateAxisY(el, translateY, directionValue, newEasing) {
  const easing = newEasing || 'spring(1, 70, 10, 5)'

  anime({
    targets: el,
    translateY,
    duration: 1200,
    easing,
    delay: anime.stagger(100, {
      start: 200
    })
  })
}

export function translateFrom(el, directionValue, newEasing) {
  const fromY = function(el, i) {
    return [el.offsetHeight * directionValue, 0]
  }
  return translateAxisY(el, fromY, directionValue, newEasing)
}

export function translateTo(el, directionValue, newEasing) {
  const toY = function(el, i) {
    return [0, el.offsetHeight * directionValue]
  }
  return translateAxisY(el, toY, directionValue, newEasing)
}

export function fromBottom(el, easing) {
  return translateFrom(el, 2, easing)
}

export function fromTop(el, easing) {
  return translateFrom(el, -2, easing)
}

export function toBottom(el, easing) {
  return translateTo(el, 2, easing)
}

export function toTop(el, easing) {
  return translateTo(el, -2, easing)
}

export function drop(el) {
  anime({
    targets: el,
    delay: anime.stagger(100, { start: -200 }),
    duration: 500,
    easing: 'easeOutBounce',
    scale: [1.2, 1],
    opacity: [0.9, 1]
  })
}

export function scaleIn(el) {
  anime({
    targets: el,
    opacity: [0, 1],
    scale: [0.9, 1],
    duration: 400,
    easing: 'easeInQuint'
  })
}

export function scaleOut(el) {
  anime({
    targets: el,
    scale: 0,
    duration: 1600,
    easing: 'easeOutElastic'
  })
}

export function followPath(el, svg) {
  const path = anime.path(svg)

  anime({
    targets: el,
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: 'linear',
    duration: 4000,
    loop: true
  })
}

export function removeAnimation(el) {
  anime.remove(el)
  const nodes = document.querySelectorAll(el)
  for (const node of nodes) node.style.transform = 'none'
}

export function centerEl(el, parent) {
  const { centerX, centerY } = getCenterOfElement(parent)
  anime.remove(el)
  anime({
    targets: el,
    translateX(el) {
      const ofLeft = el.offsetLeft + el.offsetWidth / 2
      return centerX - ofLeft
    },
    translateY(el) {
      const ofTop = el.offsetTop + el.offsetHeight / 2
      return centerY - ofTop
    },
    scale: [1.8],
    duration: 600,
    easing: 'easeInOutQuart'
  })
}

export function zoomAndRemoveOthers(event, list, parent) {
  const all = document.querySelectorAll(list)
  const target = event.currentTarget
  const index = Array.prototype.indexOf.call(all, target)
  removeOthers(all, index)
  centerEl(event.currentTarget, parent)
}

export function removeOthers(list, index) {
  anime({
    targets: list,
    translateX(el, i) {
      const direction = i > index ? 1 : -1
      return direction * 2000
    },
    translateY() {
      return anime.random(-250, 200)
    },
    rotate(el, i) {
      const direction = i > index ? 1 : -1
      return direction * anime.random(40, 90)
    },
    easing: 'spring(1, 80, 13, 2)',
    delay: anime.stagger(100, {
      from: index
    })
  })
  anime.remove(list[index])
}

export function shrink(el) {
  const easing = 'easeOutCubic'
  return scaleTo(el, [1, 0], easing)
}

export function grow(el, callback) {
  const easing = 'spring(1, 70, 10, 5)'
  return scaleTo(el, [0, 1], easing, callback)
}

export function scaleTo(el, scale, easing, callback) {
  anime.remove(el)
  anime({
    targets: el,
    scale,
    duration: 200,
    easing,
    update(anim) {
      if (anim.progress > 35) {
        if (callback) callback()
      }
    }
  })
}

export function pop(el) {
  anime({
    targets: el,
    scale: [0, 1],
    duration: 400,
    easing: 'spring(1, 70, 10, 5)'
  })
}

export function scaleOutPop(el) {
  anime({
    targets: el,
    scale: 0,
    duration: 400,
    easing: 'easeOutCirc'
  })
}

export function getCenterOfElement(el) {
  const parent = document.querySelector(el)
  const centerX = parent.offsetWidth / 2
  const centerY = parent.offsetHeight / 2

  return { centerX, centerY }
}
