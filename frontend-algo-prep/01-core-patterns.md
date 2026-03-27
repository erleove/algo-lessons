# Core Patterns

## 1. Arrays And Hashing

### Что нужно уметь

- Выбирать между объектом, `Map` и `Set`.
- Отличать проверку наличия от хранения частот.
- Понимать стоимость `push`, `pop`, `shift`, `unshift`, `sort`.

### Типовые задачи

- Contains Duplicate
- Valid Anagram
- Two Sum
- Group Anagrams
- Top K Frequent Elements
- Product of Array Except Self

### На что смотрит интервьюер

- Быстро ли ты замечаешь, что нужен `Set` или таблица частот.
- Не используешь ли лишние вложенные циклы там, где можно сделать `O(n)`.
- Не путаешь ли сравнение объектов и примитивов.

## 2. Two Pointers

### Что нужно уметь

- Двигать два указателя навстречу друг другу или в одном направлении.
- Отличать случаи для отсортированного массива и строки.

### Типовые задачи

- Valid Palindrome
- Two Sum II
- Merge Sorted Array
- Container With Most Water
- 3Sum

### Частые ошибки

- Неправильное условие движения указателей.
- Лишние копии массивов и строк.
- Пропуск дублей в задачах вроде `3Sum`.

## 3. Sliding Window

### Что нужно уметь

- Поддерживать окно с условием и корректно сужать его.
- Использовать счетчики символов и частот.

### Типовые задачи

- Best Time to Buy and Sell Stock
- Longest Substring Without Repeating Characters
- Longest Repeating Character Replacement
- Minimum Size Subarray Sum
- Permutation in String

### Сигналы паттерна

- Нужно найти максимальный или минимальный подотрезок.
- Есть условие на подмассив или подстроку.
- Brute force по всем окнам слишком дорогой.

## 4. Binary Search

### Что нужно уметь

- Искать в отсортированном массиве.
- Искать левую и правую границу.
- Понимать binary search по answer space.

### Типовые задачи

- Binary Search
- Search Insert Position
- Find First and Last Position
- Search in Rotated Sorted Array
- Koko Eating Bananas

### Частые ошибки

- Бесконечный цикл из-за неверного обновления `left` и `right`.
- Неправильный mid для поиска границы.
- Потеря инварианта диапазона.

## 5. Stack And Queue

### Что нужно уметь

- Узнавать задачи на LIFO.
- Использовать монотонный стек для ближайшего большего или меньшего элемента.
- Реализовать очередь через массив аккуратно, если это требуется.

### Типовые задачи

- Valid Parentheses
- Min Stack
- Daily Temperatures
- Next Greater Element
- Evaluate Reverse Polish Notation

### Частые ошибки

- Пушить значения, когда нужны индексы.
- Забывать очистку стека по условию.
- Смешивать стек символов и стек индексов.

## 6. Prefix Sum And Intervals

### Prefix Sum

- Range Sum Query
- Subarray Sum Equals K
- Continuous Subarray Sum

### Intervals

- Merge Intervals
- Insert Interval
- Meeting Rooms
- Non-overlapping Intervals

## JavaScript/TypeScript Checkpoint

Перед интервью ты должен уверенно объяснять:

- Почему `Map` иногда безопаснее объекта.
- Почему `sort()` без компаратора опасен.
- Что мутирует массив, а что возвращает новый.
- Как влияет использование `slice`, `splice`, `concat`, spread.
- Почему строки immutable.

## Минимум Для Закрытия Темы

Считай тему закрытой, если:

- ты решаешь 5-10 задач одного паттерна подряд без подсказок;
- можешь назвать brute force и оптимальное решение;
- можешь объяснить время и память;
- не ломаешься на edge cases: пустой ввод, один элемент, дубли, отрицательные числа.
