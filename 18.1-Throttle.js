const throttle = function(fn, t) {
  let wait = false

  return function(...args) {
    if (wait) return

    fn(...args)
    wait = true
    setTimeout(() => wait = fasle, t)
  }
}