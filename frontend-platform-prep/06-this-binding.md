# This Binding

Цель: уверенно объяснять `this` в разных режимах вызова и разницу стрелочных/обычных функций.

## Что нужно уметь

- Понимать 4 базовых режима:
  - **method call**: `obj.method()` → `this === obj`
  - **plain call**: `fn()` → `this` зависит от strict mode (обычно `undefined`)
  - **constructor**: `new Fn()` → `this` новый объект
  - **explicit binding**: `fn.call(x)`, `fn.apply(x)`, `fn.bind(x)`
- Отличать стрелочную функцию:
  - **не имеет собственного `this`**, берет его из внешнего лексического контекста.

## Типовые вопросы

- Что выведет код с `obj.regularFunc` и `obj.arrowFunc`?
- Почему `const m = obj.method; m()` теряет `this`?
- Чем отличаются `call/apply/bind`?

