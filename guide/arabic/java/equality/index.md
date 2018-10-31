---
title: Checking for Equality
localeTitle: التحقق من المساواة
---
# التحقق من المساواة

في Java ، توجد طريقتان للتحقق مما إذا كان هناك متغيرين هما "نفس": `==` و `.equals()` . هذه الطريقتين لا تعمل نفسها ، ولكن.

## و `==` المشغل

عملية المساواة الأساسية في Java ، `==` كما في `var1 == var2` ، تتحقق مما إذا كان `var1` و `var2` يشيران إلى نفس _مرجع الكائن_ . بمعنى ، إذا كان `var1` هو نفس _مثيل_ الفئة في الذاكرة كـ `var2` ، فسيكون `var1 == var2` صحيحًا.

ومع ذلك ، إذا تم إنشاء `var1` و `var2` منفصلتين للفئة (أي مع الكلمة الأساسية `new` ) ، فسيكون `var1 == var2` خاطئًا. حتى إذا كان كل من الكائنين يحتويان على نفس الخصائص والقيم بالضبط ، فإن المقارنة `==` لن تمر لأنها لا تشير إلى نفس الكائن في الذاكرة.

بالنسبة لأنواع المتغيرات البدائية ، مثل `int` و `double` ، يمكن دائمًا استخدام عامل `==` للتحقق من المساواة ، حيث يتم تخزين قيمها مباشرة مع المتغير (وليس كمرجع إلى فتحة أخرى في الذاكرة).

```java
int var1 = 1;
int var2 = 1;
System.out.println(var1 == var2) // true

MyObject obj1 = new MyObject();
MyObject obj2 = obj1;
MyObject obj3 = new MyObject();

System.out.println(obj1 == obj2) // true
System.out.println(obj1 == obj3) // false
System.out.println(obj2 == obj3) // false
``` 

## طريقة `.equals()`

تحتوي فئة `Object` المضمنة في Java ، والتي تمتد بها جميع الفئات الأخرى تلقائيًا ، على عدد من الطرق المضمنة المفيدة. إحدى هذه الطرق `equals()` ، والتي تأخذ كائنًا آخر كوسيطة لها وتعيد ما إذا كان ينبغي اعتبار الكائنين "متساويين" وفقًا للمنطق ذي الصلة لهذه الفئة.

تعد فئة "السلسلة" واحدة من الأمثلة الأكثر شيوعًا للفئة التي تتجاوز طريقة "يساوي ()". عند المقارنة بين "سلعة" للمساواة ، تحتاج إلى استخدام طريقة "يساوي ()" ، لأن "==" لن يعمل كما هو متوقع.

```java
String s1 = "Bob";
String s2 = "ob";
s2 = "B" + s2; //s2 now is also "Bob"
System.out.println(s1 == s2); //false
System.out.println(s1.equals(s2)); //true
``` 

عند إنشاء فئة جديدة في Java ، ستحتاج غالبًا إلى تجاوز طريقة `equals()` لتوفير طريقة أكثر فائدة لمقارنة كائنين من نفس الفئة. كيف يتم تنفيذ هذه الطريقة هو ما يصل تماما إلى حكم المطور.

على سبيل المثال، قد تقرر أن اثنين من `Person` ق ينبغي النظر "على قدم المساواة" إذا هم `name` و `dateOfBirth` هي نفسها. سيتم تنفيذ هذا المنطق في طريقة `equals()` الخاصة بفئة `Person` :

 `public class Person { 
    public String name; 
    public Date dateOfBirth; 
 
    public boolean equals(Person person) { 
        return this.name.equals(person.name) && this.dateOfBirth.equals(person.dateOfBirth); 
    } 
 } 
` 

معظم الفصول المضمنة في Java ، بالإضافة إلى الفئات التي توفرها المكتبات الشائعة ، ستنفذ طريقة `equals()` بطريقة ذات معنى.

على سبيل المثال، `java.util.Set` تحدد اجهة أن `Set` الصورة `equals()` يرد وطريقة يعود صحيحا إذا "الكائن المحدد أيضا مجموعة، مجموعات لهما نفس الحجم، ولكل عضو من مجموعة محددة في هذه المجموعة ".

ومع ذلك ، إذا لم تتجاوز فئة تطبيق `equals()` الافتراضي ، فسيتم تطبيق التطبيق الافتراضي ، والذي يستخدم ببساطة عامل `==` لمقارنة العنصرين.