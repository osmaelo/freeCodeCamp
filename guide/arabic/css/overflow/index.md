---
title: Overflow
localeTitle: فيض
---
# فيض

تحدد الخاصية `overflow` ما يحدث إذا تجاوز المحتوى مربع عنصر (هذه الخاصية لا تعمل إلا مع عناصر الحظر ذات الارتفاع المحدد).

تحدد هذه الخاصية ما إذا كان سيتم قص المحتوى أو إضافة أشرطة التمرير عندما يكون محتوى عنصر أكبر من أن يتناسب مع المساحة المحددة.

على سبيل المثال ، يتم تعيين عنصر مستوى الكتلة المحدد ( `<div>` ) إلى عرض 300 بكسل ، ويحتوي على صورة بعرض 400 بكسل. ستتم إزالة الصورة من div وتكون مرئية بشكل افتراضي. ومع ذلك ، إذا تم تعيين قيمة الفائض إلى مخفية ، فستتوقف الصورة عند 300 بكسل.

## القيم

*   `visible` : هذه هي القيمة الافتراضية للموقع. لا يتم قص المحتوى عندما يكون أكبر من المربع.
*   `hidden` : سيتم إخفاء المحتوى المتضائل.
*   `scroll` : مشابه للخفي ، ولكن سيتمكن المستخدمون من التمرير عبر المحتوى المخفي.
*   `auto` : إذا استمر المحتوى خارج المربع الخاص به ، فسيتم إخفاء هذا المحتوى ، بينما يجب أن يكون شريط التمرير مرئيًا للمستخدمين لقراءة بقية المحتوى.
*   `initial` : يستخدم القيمة الافتراضية المرئية.
*   `inherit` : لتعيين تجاوز السعة إلى قيمة العنصر الرئيسي.

## أمثلة

### مرئي:

```css
.box-element { overflow: visible; }
``` 

![صورة المثال](https://s26.postimg.org/gweu6g5yh/1-vissible.png)

### المخفية:

```css
.box-element { overflow: hidden; }
``` 

![صورة المثال](https://s26.postimg.org/l49mf77e1/2-hidden.png)

### انتقل:

```css
.box-element { overflow: scroll; }
``` 

![صورة المثال](https://s26.postimg.org/d8z30dxrd/3-scroll.png)

### تلقاءي:

```css
.box-element { overflow: auto; }
``` 

![صورة المثال](https://s26.postimg.org/z5q7ei0bt/4-autoank.png)

## فيض-س وفائض ص

*   `overflow-x` : يسمح للمستخدم بالتمرير خلال المحتوى الذي يمتد إلى ما بعد ارتفاع عنصر المربع.
*   `overflow-y` : السماح للمستخدم بالتمرير خلال المحتوى الذي يمتد إلى ما وراء عرض المربع.

 `  .box-element { 
    overflow-x: scroll; 
    overflow-y: auto; 
  } 
` 

`.box-element` كالتالي: ![صورة المثال](https://s26.postimg.org/ff2kmdfzd/5-_Xand_Y.png)

إذا تجاوز المحتوى المحور الصادي ، فسيتم إخفاء هذا المحتوى ، بينما يجب أن يكون شريط التمرير مرئيًا للمستخدمين لقراءة بقية المحتوى.

#### معلومات اكثر:

CSS-Tricks: [overflow](https://css-tricks.com/almanac/properties/o/overflow/)