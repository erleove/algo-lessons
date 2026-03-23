// Структура данных для обработки событий

// Часто имеет функцию ограничивать количество подписчиков в своей реализации

// Реализовать class

class EventEmitter {
  constructor() {
    this.eventsMap = new Map();
  }

  on(eventName, callback) {
    //Получить массив ссылок по событию
    //Добавить ссылку в массив либо создать массив

    if (!this.eventsMap.has(eventName)) {
      this.eventsMap.set(eventName, []);
    }

    const cbArray = this.eventsMap.get(eventName);
    cbArray.push(callback);

    // Модиф мапы не используя обращение к ней

    // чейн

    return this
  }

  off(eventName, callback) {
    // получить cbArray
    // фильтровать cbArray
    // сеттить новый cbArray
    if (!this.eventsMap.has(eventName)) return this

    const cbArray = this.eventsMap.get(eventName);
    const filteredCbArray = cbArray.filter((cb) => cb !== callback);
    if (filteredCbArray.length) {
      this.eventsMap.set(eventName, filteredCbArray);
    } else this.eventsMap.delete(eventName);
// сигнатура метода возвращает boolean
    return this
  }

  emit(eventName, ...rest) {
    // return false no key
    // forEach call all cb by name
    // return true

    if (!this.eventsMap.has(eventName)) return this;

    const cbArray = this.eventsMap.get(eventName);

    cbArray.forEach(cb => cb(rest));

    return this
  }
  // once() {}
}

const emitter = new EventEmitter();

// именованная функция создает ссылку
function emitterHandler1() {
  console.log("emitterHandler1");
}

function emitterHandler2() {
  console.log("emitterHandler2");
}

const emitterHandler3 = () => {
  console.log("emitterHandler3");
}

emitter.on("test", emitterHandler1).on('test', emitterHandler2).emit('test').off('test', emitterHandler1).emit('test').on('test', emitterHandler3).emit('test')
// emitter.on("test", emitterHandler2);

// emitter.emit("test");

// emitter.off("test", emitterHandler1);

// emitter.emit("test");

//доп

// emitter.once("test", emitterHandler1);
