# Node Task Templates

Здесь лежат JavaScript-шаблоны задач для самостоятельного решения.

## Как работать

1. Открой любой файл из `core` или `intermediate`.
2. Найди функцию с `TODO`.
3. Реализуй решение.
4. Запусти файл через Node:

```bash
node "/Users/lerm/projects/lessons/frontend-algo-prep/node-tasks/core/01-contains-duplicate.js"
```

Если все тесты пройдены, увидишь `PASS` по каждому кейсу.

Первые три задачи уже решены как образец:

- `core/01-contains-duplicate.js`
- `core/02-valid-anagram.js`
- `core/03-two-sum.js`

## Структура

- `_lib/testRunner.js` — простой раннер тестов.
- `_lib/structures.js` — linked list и binary tree helper-утилиты.
- `core` — базовые паттерны.
- `intermediate` — деревья, графы, списки и DP.
- `hard` — сложные stretch-задачи.

## Совет по прохождению

Иди по порядку:

1. `core/01-contains-duplicate.js`
2. `core/02-valid-anagram.js`
3. `core/03-two-sum.js`
4. `core/04-valid-palindrome.js`
5. `core/05-longest-substring-without-repeating.js`
6. `core/06-binary-search.js`
7. `core/07-valid-parentheses.js`
8. `core/08-merge-intervals.js`
9. `intermediate/09-reverse-linked-list.js`
10. `intermediate/10-max-depth-binary-tree.js`
11. `intermediate/11-number-of-islands.js`
12. `intermediate/12-climbing-stairs.js`
13. `core/09-group-anagrams.js`
14. `core/10-product-of-array-except-self.js`
15. `core/11-search-in-rotated-sorted-array.js`
16. `core/12-daily-temperatures.js`
17. `core/13-top-k-frequent-elements.js`
18. `core/14-three-sum.js`
19. `intermediate/13-linked-list-cycle.js`
20. `intermediate/14-binary-tree-level-order-traversal.js`
21. `intermediate/15-course-schedule.js`
22. `intermediate/16-house-robber.js`
23. `intermediate/17-coin-change.js`
24. `intermediate/18-kth-largest-element.js`
25. `hard/19-trapping-rain-water.js`
26. `hard/20-median-of-two-sorted-arrays.js`
27. `hard/21-merge-k-sorted-lists.js`
28. `hard/22-serialize-deserialize-binary-tree.js`
29. `hard/23-word-search-ii.js`
30. `hard/24-largest-rectangle-in-histogram.js`

## Если хочешь добавить новую задачу

Скопируй любой существующий файл и замени:

- описание;
- сигнатуру функции;
- тест-кейсы;
- ожидаемую сложность.

## Где смотреть решения

Готовые эталонные решения лежат отдельно в папке:

- `/Users/lerm/projects/lessons/frontend-algo-prep/answers`

Это позволяет решать задачи здесь, не теряя шаблоны с `TODO`.
