---
title: Ruby String Interpolation
localeTitle: روبي السلسلة الاستيفاء
---
# الاستيفاء سلسلة

يوفر الاستيفاء سلسلة صيغة أكثر قابلية للقراءة وموجزة لبناء السلاسل. قد تكون على دراية بالتسلسل عبر الطرق `+` أو `<<` :

```ruby
"Hello " + "World!" #=> Hello World
"Hello " << "World!" #=> Hello World
``` 

يوفر الاستيفاء سلسلة طريقة لتضمين رمز Ruby مباشرة في سلسلة:

```ruby
place = "World"
"Hello #{place}!" #=> Hello World!

"4 + 4 is #{4 + 4}" #=> 4 + 4 is 8
``` 

يتم تقييم كل شيء بين `#{` و `}` برمز روبي. للقيام بذلك ، يجب أن يكون محاطًا بالسلسلة علامات اقتباس مزدوجة ( `"` ).

ستقوم علامات الاقتباس المفردة بإرجاع السلسلة الصحيحة داخل علامات الاقتباس:

```ruby
place = "World"
'Hello #{place}!' #=> Hello #{place}!
```