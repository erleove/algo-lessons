'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: EventEmitter

Implement a minimal EventEmitter with:
- on(eventName, callback) -> returns this (chaining)
- off(eventName, callback) -> returns this
- emit(eventName, ...args) -> returns this

Target:
- Time: O(k) per emit where k is listener count
- Space: O(total listeners)
*/

class EventEmitter {
  constructor() {
    this._events = new Map();
  }

  on(eventName, callback) {
    if (!this._events.has(eventName)) {
      this._events.set(eventName, []);
    }

    const arr = this._events.get(eventName);
    arr.push(callback);
    return this;
  }

  off(eventName, callback) {
    if (!this._events.has(eventName)) return this;

    const arr = this._events.get(eventName);
    const next = arr.filter((cb) => cb !== callback);

    if (next.length === 0) {
      this._events.delete(eventName);
    } else {
      this._events.set(eventName, next);
    }

    return this;
  }

  emit(eventName, ...args) {
    if (!this._events.has(eventName)) return this;

    const arr = this._events.get(eventName);
    const snapshot = arr.slice();
    snapshot.forEach((cb) => cb(...args));

    return this;
  }
}

const tests = [
  {
    name: 'on + emit calls all listeners with args',
    run: () => {
      const emitter = new EventEmitter();
      const out = [];
      emitter.on('a', (x) => out.push(x));
      emitter.on('a', (x) => out.push(x * 2));
      emitter.emit('a', 3);
      return out;
    },
    expected: [3, 6],
  },
  {
    name: 'off removes only specified listener',
    run: () => {
      const emitter = new EventEmitter();
      const out = [];
      const h1 = (x) => out.push(`h1:${x}`);
      const h2 = (x) => out.push(`h2:${x}`);
      emitter.on('a', h1).on('a', h2);
      emitter.off('a', h1);
      emitter.emit('a', 1);
      return out;
    },
    expected: ['h2:1'],
  },
  {
    name: 'off/emit on unknown event is no-op',
    run: () => {
      const emitter = new EventEmitter();
      emitter.off('missing', () => {});
      emitter.emit('missing', 1, 2, 3);
      return 'ok';
    },
    expected: 'ok',
  },
];

if (require.main === module) {
  runTests('EventEmitter', tests);
}

module.exports = { EventEmitter };

