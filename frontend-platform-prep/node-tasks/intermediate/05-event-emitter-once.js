'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: EventEmitter.once

Add once(eventName, callback) to EventEmitter:
- callback must be called only once on first emit for this event
- after first call it must be unsubscribed automatically
- keep chaining API: return this
*/

class EventEmitter {
  constructor() {
    this._events = new Map();
  }

  on(eventName, callback) {
    if (!this._events.has(eventName)) this._events.set(eventName, []);
    this._events.get(eventName).push(callback);
    return this;
  }

  off(eventName, callback) {
    if (!this._events.has(eventName)) return this;
    const next = this._events.get(eventName).filter((cb) => cb !== callback);
    if (next.length === 0) this._events.delete(eventName);
    else this._events.set(eventName, next);
    return this;
  }

  emit(eventName, ...args) {
    if (!this._events.has(eventName)) return this;
    this._events.get(eventName).slice().forEach((cb) => cb(...args));
    return this;
  }

  once(eventName, callback) {
    const wrapper = (...args) => {
      this.off(eventName, wrapper);
      callback(...args);
    };
    return this.on(eventName, wrapper);
  }
}

const tests = [
  {
    name: 'once handler runs only one time',
    run: () => {
      const emitter = new EventEmitter();
      const out = [];
      emitter.once('ready', (v) => out.push(v));
      emitter.emit('ready', 1);
      emitter.emit('ready', 2);
      return out;
    },
    expected: [1],
  },
  {
    name: 'once and on can coexist',
    run: () => {
      const emitter = new EventEmitter();
      const out = [];
      emitter.once('tick', () => out.push('once'));
      emitter.on('tick', () => out.push('on'));
      emitter.emit('tick');
      emitter.emit('tick');
      return out;
    },
    expected: ['once', 'on', 'on'],
  },
];

if (require.main === module) {
  runTests('EventEmitter.once', tests);
}

module.exports = { EventEmitter };

