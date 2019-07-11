---
title: UTF 8 Reference
localeTitle: UTF 8 Reference
---
## UTF 8 Reference

UTF 8 هو نظام ترميز يستخدم لترجمة الأحرف التي نراها على الشاشات إلى أرقام يمكن لأجهزة الكمبيوتر تخزينها. سيسمح تحديد ترميز الأحرف مثل UTF8 للمتصفح بعرض الأحرف المتقدمة بشكل صحيح مثل الأحرف المحركة والرموز التعبيرية.

في مستندات HTML ، يمكنك تحديد ترميز الأحرف في الصفحة عن طريق وضع علامة التعريف هذه في علامة `head` لصفحة HTML الخاصة بك: `<meta charset="UTF-8">` . UTF 8 هو الترميز القياسي.

تم تطوير معيار [Unicode](https://www.unicode.org/) من أجل استيعاب الأحرف المستخدمة في اللغات في جميع أنحاء العالم.

لكن انتظر! ما علاقة Unicode بـ UTF 8؟ UTF 8 هو نظام الترميز ولكن من المهم فهم Unicode هو تعريف مجموعة الأحرف. وبعبارة بسيطة ، ما يعنيه هذا هو أن Unicode يحدد رقمًا فريدًا - يسمى نقطة الرمز - للعديد من الأحرف الرئيسية المستخدمة في اللغات في جميع أنحاء العالم ، وسوف يترجم UTF 8 الحرف إلى تنسيق ثنائي متوافق مع الكمبيوتر. 1 هنا مثال على ذلك:

1.  كنت أريد أن أذكر freeCodeCamp في مكان ما في صفحة الويب الخاصة بك (لأن ، كما تعلمون ، freeCodeCamp هو 🔥 🔥 🔥).
    
2.  يشير رمز الحرف إلى تهجئة freeCodeCamp كما هو موضح في Unicode:
    
    | و | ص | ه | ه | ج | س | د | ه | ج | أ | م | ع | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | : ---: | | 102 | 114 | 101 | 101 | 67 | 111 | 100 | 101 | 67 | 97 | 109 | 112 |
    
3.  UTF 8 يترجم النقاط البرمجية إلى ثنائي: 1100110 1110010 1100101 1100101 1000011 1101111 1100100 1100101 1000011 1100001 1101101 1110000
    

### كيفية استخدام UTF-8 في صفحة الويب الخاصة بك

حدد علامة وصفية بها مجموعة أحرف من UTF 8 في علامة رأسك.

```html
<head>
  <meta charset="utf-8">
</head>
``` 

#### معلومات اكثر:

*   [يونيكود رمز الحرف المخططات](https://www.unicode.org/charts/index.html)
*   [HTML Unicode Reference](https://www.w3schools.com/charsets/ref_html_utf8.asp)