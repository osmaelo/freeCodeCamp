---
title: Defining Attributes
localeTitle: تحديد السمات
---
## تحديد السمات

الصف لديه سمات وأساليب. السمات هي أساسا متغيرات داخل الفئة.

**_مثال:_**

 `public class Vehicle { 
  int maxSpeed; 
  int wheels; 
  String color; 
 
  void horn() { 
    System.out.println("Beep beep!"); 
  } 
 } 
` 

`maxSpeed` `wheels` `color` كلها صفات لفئة `maxSpeed` `horn()` هي الطريقة الوحيدة.

### خلق كائنات

يمكننا إنشاء كائنات متعددة لفئة مركباتنا ، واستخدام بناء الجملة للنقاط للوصول إلى سماتها وأساليبها.

```java
class MyClass {
  public static void main(String[] args) {
    Vehicle v1 = new Vehicle();
    Vehicle v2 = new Vehicle();
    v1.color = "red";
    v2.horn();
  }
}
``` 

### معدلات الرؤية

في مثال السيارة المذكور أعلاه ، يتم الإعلان عن السمات بدون معدّل رؤية (مثل عامة أو خاصة أو محمية). عند عدم تضمين أي تعديل في سمة delaration ، يتم تعيينه افتراضيًا على شيء يسمى "package private" مما يعني أنه يمكن الوصول إلى السمة مباشرة باستخدام "." تدوين النقاط من قبل أي فئة أخرى داخل نفس الحزمة.

يمكن الوصول إلى المتغيرات "العامة" من أي فئة يمكن الوصول إلى المتغيرات "المحمية" من قبل أي فئة داخل نفس الحزمة ، وكذلك من خلال الفئات الفرعية في أي حزم أخرى لديها علاقة الوالدين والطفل يمكن الوصول إلى المتغيرات "الخاصة" فقط من داخل الفئة التي يتم الإعلان عنها يمكن الوصول إلى أعضاء "الحزمة الخاصة" من قبل الطبقات في نفس الحزمة

"العامة" ، والمتغيرات ، والطرق ، والمصنعين ، والطبقات (واحد فقط) يمكن اعتبارها عامة. يمكن اعتبار المتغيرات "المحميّة" والمتغيرات والطرق والمُنشِئَات على أنها خاصة ولكن ليست الطبقات والواجهات. يمكن الإعلان عن "الخاص" والمتغيرات والطرق والمصنعين على أنها خاصة ولكن ليس الطبقات والواجهات. يمكن أن يكون "الافتراضي" والمتغيرات والطرق والمنشئات والفئات من النوع الافتراضي (المعلن عن طريق عدم كتابة أي شيء).

#### عام> محمي> افتراضي> خاص (على أساس سهولة الوصول)

إنها لفكرة جيدة بشكل عام أن تجعل كل صفات صف خاص ، وأن تتحكم في الوصول إليها من خلال استخدام أساليب "getter" و "setter".