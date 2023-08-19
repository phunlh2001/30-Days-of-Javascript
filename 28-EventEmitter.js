class EventEmitter {
  constructor() {
    this.events = {}
  }
  subscribe(event, cb) {
    if (!this.events[event]) this.events[event] = []
    let cbList = this.events[event]
    cbList.push(cb)
    this.events[event] = cbList
    return {
      unsubscribe: () => {
        let arr = this.events[event]
        let index = arr.indexOf(cb)
        if (index !== -1) arr.splice(index, 1)
      },
    }
  }

  emit(event, args = []) {
    if (!this.events[event]) return []

    const listeners = this.events[event]
    const result = []
    for (const listener of listeners) {
      result.push(listener(...args))
    }
    return result
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * console.log(emitter.emit("onClick")); // [99]
 * sub.unsubscribe(); // undefined
 * console.log(emitter.emit("onClick")); // []
 */
