---
title: Your first React App
localeTitle: Ваше первое приложение React
---
## Ваше первое React приложение

### Установка

Как указано в предыдущей статье (Установка), запустите инструмент `Create React App`. После того, как все закончится, введите `cd` перейдя в папку приложения и запустите `npm start`. Это запустит сервер разработки, и все, вы готовы начать разработку своего приложения!

```bash
npm install -g react-create-app 
create-react-app my-first-app 
 
cd my-first-app 
npm start 
```

### Редактирование кода

Запустите свой редактор или IDE по выбору и отредактируйте файл `App.js` в папке `src`. При создании с помощью средства `react-create-app` в этом файле уже будет некоторый код.

Код будет состоять из следующих частей:

#### Импорт

```JavaScript
import React, { Component } from 'react'; 
import logo from './logo.svg'; 
import './App.css'; 
```

Это используется [webpack](https://webpack.js.org/) для импорта всех необходимых модулей, чтобы ваш код мог их использовать.
Этот код импортирует 3 модуля:
 1) `React` и `Component` , которые позволяют нам использовать React, как он должен использоваться. (С компонентами)
 2) `logo`, который позволяет использовать `logo.svg` в этом файле.
 3) `./App.css` , который импортирует таблицу стилей для этого файла.

#### Классы / Компоненты

```JavaScript
class App extends Component { 
  render() { 
    return ( 
      <div className="App"> 
        <header className="App-header"> 
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1 className="App-title">Welcome to React</h1> 
        </header> 
        <p className="App-intro"> 
          To get started, edit <code>src/App.js</code> and save to reload. 
        </p> 
      </div> 
    ); 
  } 
} 
```

React - это библиотека, в которой используются компоненты, которые позволяют разделить ваш интерфейс на независимые, многоразовые фрагменты и подумать о каждой части отдельно. Уже создан одна компонента, компонента `App`. Если вы использовали инструмент `create-react-app`, эта компонента является основным компонентом проекта, и вы должны строиться вокруг этого центрального класса.

Мы рассмотрим детали, более подробно описанные в следующих главах.

#### Экспорт

При создании класса в реакции вы должны экспортировать их после объявления, что позволяет использовать компонент в другом файле с помощью ключевого слова `import`. Вы можете использовать `default` после ключевого слова `export`, чтобы сообщить React, что это основной класс этого файла.

```JavaScript
export default App; 
```

### Просмотрите результаты!

Когда вы запускаете сервер разработки, написав команду `npm start`, вы можете просматривать в своем браузере изменения, которые вы делаете в своем проекте в режиме реального времени. После исполнения команды, npm должен открыть браузер, автоматически отображающий ваше приложение.

### Источники

[1. React documentation](https://reactjs.org/docs/hello-world.html)