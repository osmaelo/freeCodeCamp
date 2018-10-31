---
title: Flex-grow
localeTitle: Flex-расти
---
# Flex-Grow

Свойство flex-grow - свойство flexbox, которое позволяет указать распределение свободного пространства для контейнеров в гибком контейнере. Он обеспечивает решение всего этого нежелательного пространства!

Он превратит ваш контейнер из этого

![](https://cdn-media-1.freecodecamp.org/imgr/lFJaBUfh.png)

# **к этому**

![](https://cdn-media-1.freecodecamp.org/imgr/4X8ITZih.png)

Что сейчас произошло?

Ну, мы добавили две вещи в синтаксис css.

HTML

```html

<p class = "ten">1</p> 
 <p class = "twenty">2</p> 
```

CSS

```css
body { 
  display:flex; 
 } 
 
 p { 
  flex-grow: 1; 
 } 
```

Две вещи произошли

1.  Родительский контейнер был преобразован в гибкий дисплей посредством `display:flex`
2.  Оставшееся «свободное пространство» затем распределялось среди оставшихся p-контейнеров в равном рационе, поскольку каждый из них обладает свойством flex-grow 1.

Что произойдет, если у нас есть p-контейнеры с различными свойствами гибкого роста?

Давайте посмотрим пример.

Сначала давайте создадим два абзаца и включим отображение: flex;

![](https://cdn-media-1.freecodecamp.org/imgr/wPqUgsih.png)

Обратите внимание на несколько вещей

*   Цветовая схема приятная
*   Справа от двух ящиков есть пустое пространство.

Это пустое пространство - это «свободное пространство», которое будет выделено каждому из разных абзацев позже в зависимости от их свойств гибкого роста.

Чтобы увидеть это в действии, давайте первый класс класса «десять» и свойство flex-grow 1. Давайте также дадим второй класс «двадцать» и свойство flex-grow 2.

![](https://cdn-media-1.freecodecamp.org/imgr/7n0V1G4h.png)

Обратите внимание на несколько вещей

1.  Второй размер не вдвое больше, чем у первого, несмотря на наличие свойства flex-grow, которое вдвое больше, чем у первого.
2.  Все пространство заполнено. (Некоторые поля были добавлены в сторону, чтобы можно было увидеть их более четко).

По мере изменения размера экрана мы также обнаруживаем, что первая сжимается в два раза быстрее второй.

![](https://cdn-media-1.freecodecamp.org/imgr/pa4grM8h.png)

#### Дополнительная информация: