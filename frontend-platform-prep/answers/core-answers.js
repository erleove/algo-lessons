'use strict';

const { runTests } = require('../node-tasks/_lib/testRunner');

function pipe(...fns) {
  return async (initialValue) => {
    let result = initialValue;
    for (const fn of fns) {
      result = await fn(result);
    }
    return result;
  };
}

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const list = Array.from(promises);

    if (list.length === 0) {
      resolve([]);
      return;
    }

    const results = new Array(list.length);
    let remaining = list.length;
    let settled = false;

    list.forEach((p, index) => {
      Promise.resolve(p).then(
        (value) => {
          if (settled) return;
          results[index] = value;
          remaining -= 1;
          if (remaining === 0) {
            settled = true;
            resolve(results);
          }
        },
        (reason) => {
          if (settled) return;
          settled = true;
          reject(reason);
        }
      );
    });
  });
}

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
    // Snapshot to make behavior stable if listeners mutate during emit.
    const snapshot = arr.slice();
    snapshot.forEach((cb) => cb(...args));

    return this;
  }
}

function scheduleLogs(n, ms) {
  return new Promise((resolve) => {
    if (n <= 0) {
      resolve([]);
      return;
    }

    const out = [];
    let remaining = n;

    for (let i = 0; i < n; i += 1) {
      setTimeout(() => {
        out.push(i);
        remaining -= 1;
        if (remaining === 0) {
          resolve(out);
        }
      }, ms);
    }
  });
}

function promiseAllSettled(promises) {
  const list = Array.from(promises);
  return Promise.all(
    list.map((p) =>
      Promise.resolve(p).then(
        (value) => ({ status: 'fulfilled', value }),
        (reason) => ({ status: 'rejected', reason })
      )
    )
  );
}

async function retry(taskFn, maxRetries) {
  let lastError;
  for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
    try {
      return await taskFn();
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

class EventEmitterWithOnce extends EventEmitter {
  once(eventName, callback) {
    const wrapper = (...args) => {
      this.off(eventName, wrapper);
      callback(...args);
    };
    return this.on(eventName, wrapper);
  }
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const tests = [
  {
    name: 'pipe works with mix sync/async',
    run: async () =>
      await pipe(
        (x) => x + 1,
        async (x) => {
          await delay(5);
          return x * 2;
        },
        (x) => x - 3
      )(10),
    expected: 19,
  },
  {
    name: 'promiseAll preserves order',
    run: async () =>
      await promiseAll([delay(10).then(() => 'a'), delay(1).then(() => 'b')]),
    expected: ['a', 'b'],
  },
  {
    name: 'EventEmitter on/off/emit',
    run: () => {
      const emitter = new EventEmitter();
      const out = [];
      const h1 = (x) => out.push(`h1:${x}`);
      const h2 = (x) => out.push(`h2:${x}`);
      emitter.on('t', h1).on('t', h2);
      emitter.emit('t', 1);
      emitter.off('t', h1);
      emitter.emit('t', 2);
      return out;
    },
    expected: ['h1:1', 'h2:1', 'h2:2'],
  },
  {
    name: 'scheduleLogs returns ordered indices',
    run: async () => await scheduleLogs(4, 1),
    expected: [0, 1, 2, 3],
  },
  {
    name: 'promiseAllSettled keeps order and statuses',
    run: async () =>
      await promiseAllSettled([Promise.resolve(1), Promise.reject('err'), 3]),
    expected: [
      { status: 'fulfilled', value: 1 },
      { status: 'rejected', reason: 'err' },
      { status: 'fulfilled', value: 3 },
    ],
  },
  {
    name: 'retry resolves after failures',
    run: async () => {
      let calls = 0;
      return retry(async () => {
        calls += 1;
        if (calls < 3) throw new Error('temporary');
        return 'ok';
      }, 3);
    },
    expected: 'ok',
  },
  {
    name: 'EventEmitter once',
    run: () => {
      const emitter = new EventEmitterWithOnce();
      const out = [];
      emitter.once('ready', (v) => out.push(v));
      emitter.emit('ready', 1);
      emitter.emit('ready', 2);
      return out;
    },
    expected: [1],
  },
];

if (require.main === module) {
  runTests('Platform core answers', tests);
}

module.exports = {
  EventEmitter,
  EventEmitterWithOnce,
  pipe,
  promiseAllSettled,
  promiseAll,
  retry,
  scheduleLogs,
};

