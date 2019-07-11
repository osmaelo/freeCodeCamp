---
title: Semicolons
localeTitle: منقوطة
---
الفترات المنقوطة غير مطلوبة في Javascript. ويرجع ذلك إلى أن جافا سكريبت تحتوي على ميزة تسمى "الإدراج التلقائي المنقار" أو ASI للاختصار. يضع ASI الفاصلات المنقوطة في Javascript لك. وهي نشطة دائمًا بشكل افتراضي وهي جزء من اللغة ولا يمكن تعطيلها.

يحتوي ASI على مجموعة من القواعد التي يستخدمها لتحديد مكان إدراج الفواصل المنقوطة. إذا كان هناك فاصلة منقوطة بالفعل ، فلن يغير أي شيء. انظر [هذا الجواب StackOverflow](http://stackoverflow.com/a/2846298/3467946) لمزيد من المعلومات حول كيفية عمل ASI.

هناك حالة واحدة فقط حيث يفشل ASI: عندما يبدأ سطر مع قوس فتح `(` . لتجنب هذا يسبب أخطاء ، عندما يبدأ سطر مع قوس فتح ، يمكنك وضع فاصلة منقوطة في بداية السطر الذي يحتوي على قوس فتح :

```js
;(function() {
  console.log('Hi!')
})
``` 

لاحظ أن هذا مطلوب فقط إذا كنت لا تستخدم الفواصل المنقوطة.

نمط تشفير متناسق يجعل التعليمة البرمجية أكثر قابلية للقراءة. قرر ما إذا كنت ستستخدم الفواصل المنقوطة أو لن تستخدمها في أي مكان.

## الأخطاء التي قد تصادفها

عندما تم إنشاء جافا سكريبت لأول مرة كان من المفترض أن تساعد المبتدئين على الدخول في البرمجة. لا أحد يريد أن يبحث عن فاصلة منقوطة في الشفرة عند بدء البرمجة لأول مرة. لذلك تم تنفيذ اختيار semi-colons ، كما ذكر أعلاه فهي من الناحية الفنية هناك.

فمثلا: `javasctipt function foo(x) { return function(y) { return x + y; } } let z = foo(10); z(10)// TypeError z is not a function // Because of Automatic Semicolon Insertion, our inner function does not exist.` سيتم تنفيذ جافا سكريبت شبه الأعمدة حيث من المتوقع.

### موارد آخرى

[رسالة مفتوحة إلى قادة جافا سكريبت فيما يتعلق بالموزجات المنقوطة](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)