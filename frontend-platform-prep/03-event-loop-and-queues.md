# Event Loop And Queues

Цель: уметь прогнозировать порядок логов и объяснять очереди задач.

## Что нужно уметь

- Объяснить стек вызовов (call stack).
- Отличать:
  - **macrotasks**: `setTimeout`, `setInterval`, I/O, UI events (в браузере), message channel
  - **microtasks**: `Promise.then/catch/finally`, `queueMicrotask`, `MutationObserver` (в браузере)
- Понимать правило: после каждой macrotask event loop “вычищает” microtask queue до конца.

## Типовые вопросы

- Какой порядок вывода в коде с `console.log`, `setTimeout(0)` и `Promise.resolve().then(...)`?
- Почему `setTimeout(..., 0)` не означает “сразу”?
- Почему microtasks могут “задушить” UI, если бесконечно планировать новые microtasks?

