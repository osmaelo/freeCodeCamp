---
title: jQuery
localeTitle: jQuery
---
## jQuery

![logo](https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/250px-JQuery_logo.svg.png "Логотип jQuery")

jQuery является наиболее широко используемой библиотекой JavaScript и используется в более чем половине всех основных веб-сайтов.

jQuery упрощает использование веб-разработки, предоставляя ряд «вспомогательных» функций. Они помогают разработчикам быстро писать взаимодействия с DOM (Document Object Model) без необходимости вручную записывать как можно больше JavaScript.

jQuery добавляет глобальную переменную со всеми приложенными библиотеками. Соглашение об именах состоит в том, чтобы эта глобальная переменная `$` . набрав `$.` у вас есть все методы jQuery.

## пример

Когда пользователь нажимает кнопку, все

элементы будут скрыты:

```javascript
$(document).ready(function(){ 
    $("button").click(function(){ 
        $("p").hide(); 
    }); 
 }); 
```

#### Больше информации

*   [Главная страница jQuery](https://jquery.com/)