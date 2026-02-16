let a = 10;

function foo() {
  console.log(a);
}

function bar() {
  foo();
}

bar()

// Лекс окружение контекст в котором объявдена функция { env_record: [], prototype_env_record: []} 