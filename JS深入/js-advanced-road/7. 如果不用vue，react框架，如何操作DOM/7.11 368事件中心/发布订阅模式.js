/**
 * 订阅发布者模式
 *  1. 通过事件中心维护一个订阅者列表，存储相关的事件类型和事件操作
 *  2. 当发布者发布事件时，通知所有相关订阅者执行相应操作，实现对象间的一对多操作
 *  3. 订阅者可以随时订阅或者取消订阅相关的事件
 */
class Emitter {
  constructor() {
    this._event = Object.create(null)
  }
  on(type, fn) {
    const events = this._event[type] || (this._event[type] = []);
    events.push(fn)
  }
  once(type, fn) {
    const temFn = (...args) => {
      fn(...args)
      this.off(type, fn)
    }
    this.on(type, temFn)
  }
  emit(type, ...args) {
    const events = this._event[type]
    if (!Array.isArray(events) || events.length === 0) {
      return
    }
    events.forEach(fn => fn.apply(null, args))
  }
  off(type, fn) {
    const events = this._event[type] || (this._event[type] = []);
    const index = events.find(f => f === fn)
    if (index < -1) {
      return
    }
    events.splice(index, 1)
  }
}