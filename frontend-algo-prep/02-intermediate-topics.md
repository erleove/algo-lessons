# Intermediate Topics

## 1. Linked List

### Что нужно уметь

- Разворачивать список.
- Искать цикл через fast/slow pointers.
- Сливать два отсортированных списка.

### Типовые задачи

- Reverse Linked List
- Linked List Cycle
- Merge Two Sorted Lists
- Remove Nth Node From End
- Reorder List

### Зачем это frontend-разработчику

Связные списки почти не встречаются в проде, но отлично показывают, умеешь ли ты работать с указателями, инвариантами и аккуратными изменениями структуры.

## 2. Trees

### Что нужно уметь

- Различать DFS и BFS.
- Писать preorder, inorder, postorder.
- Считать глубину и проверять баланс.
- Понимать свойства BST.

### Типовые задачи

- Maximum Depth of Binary Tree
- Same Tree
- Invert Binary Tree
- Validate Binary Search Tree
- Lowest Common Ancestor of a Binary Search Tree
- Binary Tree Level Order Traversal

### Ключевые сигналы

- Если нужно пройти по всем узлам, это почти всегда DFS или BFS.
- Если спрашивают про уровни, кратчайший путь по ребрам или послойный обход, чаще нужен BFS.
- Если важны границы значений, часто нужен проход с `min` и `max`.

## 3. Graph Basics

### Что нужно уметь

- Представлять граф через adjacency list.
- Считать компоненты связности.
- Обходить граф через DFS и BFS.
- Понимать visited-множество и защиту от циклов.

### Типовые задачи

- Number of Islands
- Clone Graph
- Max Area of Island
- Course Schedule
- Find if Path Exists in Graph

### Что знать дополнительно

- Directed vs undirected graph.
- Weighted vs unweighted graph.
- Когда нужен topo sort.
- Почему BFS подходит для shortest path в невзвешенном графе.

## 4. Heap Basics

### Зачем добавить

Для strong middle и выше иногда ожидают знание `heap`, даже если это не top priority для frontend.

### Типовые задачи

- Kth Largest Element in an Array
- Top K Frequent Elements
- Merge K Sorted Lists

### Минимум

- Понять идею min-heap и max-heap.
- Уметь объяснить, когда heap лучше полной сортировки.

## 5. Dynamic Programming Basics

### Что нужно уметь

- Узнавать повторяющиеся подзадачи.
- Отличать top-down memoization и bottom-up tabulation.
- Формулировать состояние и переход.

### Типовые задачи

- Climbing Stairs
- Min Cost Climbing Stairs
- House Robber
- Coin Change
- Unique Paths
- Longest Increasing Subsequence

### Как думать на собеседовании

1. Сформулировать brute force через рекурсию.
2. Найти повторяющиеся состояния.
3. Выбрать memoization или tabulation.
4. Определить, можно ли сократить память.

## Что реально нужно знать на уровень

### Junior to Middle

- linked list basics;
- tree DFS/BFS;
- Number of Islands;
- Course Schedule на базовом понимании;
- Climbing Stairs, House Robber, Coin Change.

### Strong Middle to Senior

- уверенный topo sort;
- BFS/DFS trade-offs;
- graph modeling;
- 1-2 medium DP задачи без подсказки;
- heap как дополнительное преимущество.

## Минимум Для Закрытия Темы

Считай этот блок закрытым, если ты:

- уверенно пишешь DFS и BFS без шпаргалки;
- не путаешь tree и graph traversal;
- умеешь объяснить visited, recursion stack и queue;
- можешь разложить простую DP-задачу на состояние и переход.
