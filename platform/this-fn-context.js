// function wrapperFn() {
//   this.name = "Hoistring";

// return {
//   obj: {

const obj = {
  name: "Alice",
  regularFunc: function () {
    console.log(this.name); // fn exp не стрелочная имеет собст this и берет его из obj.
  },
  arrowFunc: () => {
    console.log(this.name); // Не имеет собственного this. Объект не область видимости.
  },
  nested: {
    name: "Bob",
    regularFunc: function () {
      console.log(this.name);
    },
    arrowFunc: () => {
      console.log(this.name);
    },
  },
};
// }
// }

// console.log(this.name);

const anotherObj = {
  name: "ANOTHER",
  regularFunc: obj.regularFunc,
};

// Объект не является областью видимости и не создает замыкания

// const { obj } = wrapperFn();

obj.regularFunc(); // Alice // this в fn expression это obj
obj.arrowFunc(); // Alice
obj.nested.regularFunc(); //Bob
obj.nested.arrowFunc(); //Bob

// Вопрос: Что будет выведено?

anotherObj.regularFunc(); // какой объект через точку вызывает метод тот и является this

// this, call, bind, apply, способы вызова
