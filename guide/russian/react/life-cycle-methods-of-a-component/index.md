---
title: Life Cycle Methods Of A Component
localeTitle: Методы жизненного цикла компоненты
---
## Методы жизненного цикла компоненты

Когда мы начинаем работать с компонентами, нам нужно выполнить несколько действий для обновления состояния или для выполнения некоторых действий, когда что-то изменяется в этом компоненте. В этом случае пригодятся методы жизненного цикла компонента! Поэтому давайте в этой статье погрузимся в них.

В широком смысле мы можем разделить методы жизненного цикла на **3** категории.

1.  Mounting
2.  Updating
3.  Unmounting

Поскольку методы жизненного цикла являются очевидными, я просто упомянул имена методов. Пожалуйста, не стесняйтесь внести свой вклад в эту статью, если это необходимо.

## Mounting:

а. `constructor()`

б. `componentWillMount()`

с. `render()`

д. `componentDidMount()`

## Updating:

а. `componentWillRecieveProps()`

б. `shouldComponentUpdate()`

с. `componentWillUpdate()`

д. `render()`

е. `componentDidUpdate()`

## Unmounting:

а. `componentWillUnmount()`

## Некоторые интересные факты, которые можно заметить:

*   `constructor` , `componentWillMount` , `componentDidMount` и `componentWillUnmount` будут вызываться только один раз в течение жизненного цикла компонента.
*   `componentWillUpdate` и `componentDidUpdate` будет выполняться тогда и только тогда, когда `shouldComponentUpdate` возвращает true.
*   `componentWillUnmount()` будет вызываться непосредственно перед unmounting любого компонента и, следовательно, может использоваться для освобождения используемой памяти, закрытия любых подключений к БД и т.д.

Многие вещи можно узнать, погрузившись в код. Так что заставляйте себя больше программировать.

Заметка:

> «Предупреждения об устаревании будут включены с будущим выпуском 16.x, **но устаревшие жизненные циклы будут продолжать работать до версии 17.**<sup>1</sup>
> 
> «Даже в версии 17 все равно будет возможно использовать их, но они будут сглажены префиксом 'UNSAFE_', чтобы указать, что они могут вызвать проблемы. Мы также подготовили [автоматический сценарий, чтобы переименовать их](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) в существующий код». 1

Другими словами, эти методы жизненного цикла будут по-прежнему доступны как:

*   `UNSAFE_componentWillMount`
*   `UNSAFE_componentWillReceiveProps`
*   `UNSAFE_componentWillUpdate`

## Новые методы жизненного цикла

Новые методы жизненного цикла будут введены в Реакт 17

*   `getDerivedStateFromProps` будет более безопасной альтернативой `componentWillReceiveProps` .
*   `getSnapshotBeforeUpdate` будет добавлен для поддержки безопасного чтения свойств из обновлений DOM.

Многие вещи можно узнать, погрузившись в код. Так что заставляйте себя больше программировать.

### Источники

1.  [Вон, Брайан. «React v16.3.0: новый жизненный цикл и контекстный API». 29 марта 2018 года. Доступ: 22 мая 2018 года.](https://reactjs.org/blog/2018/03/29/react-v-16-3.html)

### Ресурсы

[Обновление асинхронного рендеринга](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)