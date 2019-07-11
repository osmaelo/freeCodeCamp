---
title: Random Functions
localeTitle: وظائف عشوائية
---
*   الأرقام العشوائية هي طريقة ملائمة لإدخال العشوائية في برنامجك. على سبيل المثال ، إذا كنت ترغب في تشغيل أي من عمليات المحاكاة أو تشغيل الألعاب ، فاحذف المؤشرات العشوائية لمصفوفة إلخ ، ثم الأرقام العشوائية هي الطريقة التي يمكنك اتباعها.
*   ملف الرأس لتضمين استخدام أرقام عشوائية في c ++ `cstdlib` .
*   _نصيحة للمحترفين: -_ يمكنك استخدام `cpp #include<bits/stdc++.h>` لتضمين جميع الوظائف من جميع ملفات الرأس.

وظيفة: - راند ()  
\- إرجاع رقم زائف عشوائي (عدد صحيح) من 0 إلى RAND _MAX. لا يأخذ أي حجج. - RAND_ MAX هو العدد الصحيح الأقصى المسموح به. هو مركب depedent وعادة ما يكون 2147483647.

فيما يلي مثال على ذلك: -

 `#include <cstdlib> 
 #include <iostream> 
 using namespace std; 
 
 int main() { 
  cout << rand() << endl; 
  cout << rand() << endl; 
  cout << rand() << endl; 
  return 0; 
 } 
 
 /* 
 Output:- (Note that the output is random and will differ from what is mentioned here) 
 1804289383 
 846930886 
 1681692777 
 */ 
` 

الآن ، قم بتشغيل البرنامج مرة أخرى. ومره اخرى. ومره اخرى. ماذا ترى؟ يتم طباعة نفس الإخراج مرارًا وتكرارًا.

دعونا نعود إلى تعريف الدالة rand (): -

rand (): - _إرجاع رقم **pseudo-random** (عدد صحيح) من 0 إلى RAND\_MAX. لا يأخذ أي حجج._

إذن ما هو الرقم العشوائي؟

*   كما يوحي الاسم ، الرقم الذي ليس عشوائياً حقاً هو رقم شبه عشوائي.
*   أرقام psuedorandom تخرج آمنة مشفرة وتكون عرضة للهجمات.
*   في سياق C ++ ، يظهر الرقم عشوائيًا ، لكن ليس عشوائيًا. تفترض الدالة أن كل رقم من 0 إلى RAND\_MAX يكون على الأغلب متساوٍ وأن يبصق رقم واحد. (في الواقع، هذا ليس هو الحال ، لكنه قريب). على سبيل المثال ، يستخدم الرقم 5 في كل مكان تقريبًا. إذا كان الرقم العشوائي يبصق 5 ، فقد لا تعتقد أن الرقم غير فعال ، عشوائي.
*   تأخذ رواية funtion العشوائية () رقمًا كبيرًا جدًا ، وتطبق modulo برقم أولي كبير وتقوم بجميع أنواع العمليات على رقم وتقوم بإرجاع قيمة. مهما كانت معقدة ، لا يزال من الممكن كسرها.

كيف نحصل على مجموعة فريدة من الأرقام العشوائية durng كل تنفيذ البرنامج؟

نحن نستخدم `void srand(int seed)` ؛

*   "Seed" هو الاسم الذي يطلق على الرقم الذي يجعل مولد التسلسل العشوائي يبدأ عند نقطة بداية مختلفة في كل مرة. هذا يجعل من أن الدالة العشوائية لا تبصق نفس القيم أثناء تشغيل البرنامج.
*   **من المهم فقط استدعاء استدعاء srand ONCE في بداية البرنامج.**
*   ليست هناك حاجة لإجراء مكالمات متكررة لبذر مولد الرقم العشوائي (في الواقع ، سوف يجعل رقمك أقل بالتساوي وزعت).
*   تقنية شائعة الاستخدام هي لبذر مولد الأرقام العشوائية باستخدام الساعة ، حيث تمنحك الساعة مخرجات مختلفة في كل مرة تنظر إليها. لذلك ، بالنسبة للبذرة ، يمكنك أخذ إخراج الوقت وتوصيله إلى مولد الأرقام العشوائية.
*   ستقوم الدالة time () بإرجاع وقت الكمبيوتر. يتم التعبير عن هذا من حيث عدد ثواني انقضت منذ 1 يناير 1970 (الحقبة).
*   سيعود وقت الدالة (NULL) عدد الثواني المنقضية في وقت الكمبيوتر.
*   ملف الرأس الذي يجب تضمينه لوظائف الوقت: \`ctime '.

مقتطف الشفرة:

```cpp
#include <ctime>

srand(time(NULL));
cout << rand();

/*
Output: (Will differ from computer to computer, and because of the seed, will also differ from time to time, literally. :D)
1696269016
*/
``` 

هذا ينتج قيم مختلفة في كل مرة يتم تشغيل البرنامج.

مكافأة: التغيير والتبديل في راند () لراحتك.

*   منذ إرجاع rand () رقم عشوائي من 0 إلى RAND\_MAX ، إذا كنت تريد رقمًا بين 0 و 8 على سبيل المثال ، فافعل -rand () 9٪. أي رقم modulo 9 سيعود قيمة من 0 إلى 8.
    
*   أكثر رسمية ، إذا كنت تريد رقمًا بين L (ضمنيًا) و U (ضمنيًا) ، فيجب أن تفعل `int num = L + rand()%(U-L+1).` Explanation: - rand ()٪ (UL + 1) تقوم بارجاع رقم عشوائي (pseudo-random، dont forget) betwwen 0 و (UL). ومن ثم ، فإن إضافة L تتأكد من أننا نحصل على قيمة بين L و U.
    
    ملخص:-
    

1.  int rand (): إرجاع رقم عشوائي بين 0 و RAND\_MAX.
    
2.  void srand (int seed): يستخدم لبذر مولد الرقم العشوائي. يكفي استدعاء هذه الوظيفة _مرة واحدة_ فقط.
    
    ### المصادر: - إنشاء [عدد عشوائي](http://www.math.uaa.alaska.edu/~afkjm/csce211/handouts/RandomFunctions)