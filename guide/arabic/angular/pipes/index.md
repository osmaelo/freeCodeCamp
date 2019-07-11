---
title: Pipes
localeTitle: أنابيب
---
# أنابيب

#### التحفيز

تحويلات بيانات الانتاج. وهي تضمن أن البيانات في صيغة مرغوبة عند تحميلها على شاشة المستخدم. عادةً ما تتحول البيانات خلف الكواليس. باستخدام الأنابيب ، يمكن أن تحدث بيانات التحويل في نموذج HTML. تحويل البيانات قالب القالب مباشرة.

تبدو الأنابيب جميلة ومريحة. أنها تساعد في الحفاظ على الطبقة المكون الهزيل للتحولات الأساسية. لوضعها تقنياً ، تقوم الأنابيب بتغليف منطق تحويل البيانات.

#### تحويل الانتاج

كما هو مذكور في القسم السابق ، تقوم الأنابيب بتحويل البيانات المضمنة. وتربط صيغة الأنابيب برمجة النصوص. في العديد من البرامج النصية ، يتم إخراج إخراج جزء واحد من الأمر _كمخرج_ إلى الجزء التالي كمدخل. هذا الاتجاه نفسه يميز الأنبوب الزاوي.

في Angular ، توجد طرق عديدة للتفاعل مع البيانات في نموذج HTML. يمكن استخدام المواسير في أي مكان يتم فيه تحليل البيانات في نموذج HTML. يمكن أن تحدث داخل المنطق microsyntax والداخلية interML المتغيرات الداخلية. تمثل أنابيب جميع التحولات بدون إضافة إلى فئة المكون.

الأنابيب هي أيضا _قابلة للتسلسل_ . يمكنك دمج الأنابيب واحدة تلو الأخرى لإجراء تحويلات معقدة بشكل متزايد. كمحولات خاصة للبيانات ، فإن الأنابيب بالكاد تافهة.

#### استخدم حالات

يأتي الزاوي معبأ مسبقًا بمجموعة أساسية من الأنابيب. سيعمل العمل مع زوجين منهم على الحدس للتعامل مع الباقي. توفر القائمة التالية مثالين.

*   AsyncPipe
    
*   DatePipe
    

هذان أداء المهام البسيطة. بساطتها هي مفيدة بشكل كبير.

##### AsyncPipe

تتطلب هذه الأقسام فهمًا أساسيًا للوعود أو الملاحظين لتقديرها تمامًا. يعمل AsyncPipe على أي من الاثنين. يقوم AsyncPipe باستخراج البيانات من Promises / Observables كمخرجات لكل ما يأتي بعد ذلك.

في حالة Obervables ، يقوم AsyncPipe بالاشتراك تلقائيًا في مصدر البيانات. بغض النظر عن مصدر البيانات ، يشترك AsyncPipe في المصدر الذي يمكن ملاحظته. `async` هو الاسم syntactical AsyncPipe كما هو موضح أدناه.

```html
<ul *ngFor=“let potato of (potatoSack$ | async); let i=index”>
  <li>Potatoe {{i + 1}}: {{potato}}</li>
</ul>
``` 

في المثال ، `potatoSack$` في انتظار تحميل البطاطس. وبمجرد وصول البطاطا ، إما بشكل متزامن أو غير متزامن ، فإن AsyncPipe يستقبلها كمصفوفة قابلة _للتكرار_ . ثم يملأ عنصر القائمة بالبطاطس.

##### DatePipe

تأخذ سلاسل تاريخ التنسيق جزءًا معقولًا من القرصنة باستخدام كائن `Date` جافا سكريبت. يوفر DatePipe طريقة فعالة لتنسيق التواريخ بافتراض أن الإدخال المحدد هو تنسيق زمني صالح.

 `// example.component.ts 
 
 @Component({ 
  templateUrl: './example.component.html' 
 }) 
 export class ExampleComponent { 
  timestamp:string = '2018-05-24T19:38:11.103Z'; 
 } 
` 

 `
<!-- example.component.html --> 
 
 <div>Current Time: {{timestamp | date:'short'}}</div> 
` 

تنسيق `timestamp` أعلاه هو [ISO 8601 1](https://en.wikipedia.org/wiki/ISO_8601) - وليس الأسهل في القراءة. يحول DatePipe ( `date` ) تنسيق تاريخ ISO إلى `mm/dd/yy, hh:mm AM|PM` أكثر تقليدية `mm/dd/yy, hh:mm AM|PM` . هناك العديد من خيارات التنسيق الأخرى. كل هذه الخيارات موجودة في [الوثائق الرسمية](https://angular.io/api/common/DatePipe) .

#### خلق أنابيب

بينما يحتوي Angular فقط على عدد محدد من المواسير ، فإن `@Pipe` decorator يتيح للمطورين إنشاء الخاصة بهم. تبدأ العملية باستخدام `ng generate pipe [name-of-pipe]` ، لتحل محل `[name-of-pipe]` مع اسم ملف مفضل. هذا هو أمر [CLI Angular](https://cli.angular.io) . وتنتج ما يلي.

 `import { Pipe, PipeTransform } from '@angular/core'; 
 
 @Pipe({ 
  name: 'example' 
 }) 
 export class ExamplePipe implements PipeTransform { 
  transform(value: any, args?: any): any { 
      return null; 
  } 
 } 
` 

يبسط قالب الأنبوب هذا إنشاء الأنبوب المخصص. يقول `@Pipe` Angular إن الطبقة عبارة عن أنبوب. قيمة `name: 'example'` ، في هذه الحالة ، على `example` ، هي القيمة التي يتعرف عليها Angular عند فحص قالب HTML لأنابيب مخصصة.

إلى منطق الطبقة. يوفر تطبيق `PipeTransform` الإرشادات الخاصة بوظيفة `transform` . هذه الوظيفة لها معنى خاص في سياق الديكور `@Pipe` . يتلقى اثنين من المعلمات بشكل افتراضي.

`value: any` الإخراج الذي يتلقى الأنبوب. فكر في `<div>{{ someValue | example }}</div>` . يتم تمرير قيمة someValue إلى `value: any` دالة `transform` `value: any` معلمة. هذه هي نفس وظيفة `transform` المحددة في فئة ExamplePipe.

`args?: any` هو أي حجة أن الأنبوب يتلقى اختيارياً. فكر في `<div>{{ someValue | example:[some-argument] }}</div>` . يمكن استبدال `[some-argument]` بأي قيمة واحدة. يتم تمرير هذه القيمة إلى `args?: any` الدالة `transform` `args?: any` معلمة. وهذا هو ، وظيفة `transform` المحددة في فئة ExamplePipe.

أيا كانت الدالة ترجع ( `return null;` ) يصبح الإخراج من عملية الأنابيب. ألق نظرة على المثال التالي لمشاهدة مثال كامل على ExamplePipe. بالاعتماد على المتغير الذي يستقبله الأنبوب ، فإنه إما يحد أو يخفض المدخل كإخراج جديد. وسيؤدي وجود وسيطة غير صالحة أو غير موجودة إلى إعادة توجيه نفس المدخلات كإخراج.

```typescript
// example.pipe.ts

@Pipe({
  name: 'example'
})
export class ExamplePipe implements PipeTransform {
  transform(value:string, args?:string): any {
    switch(args || null) {
      case 'uppercase':
        return value.toUpperCase();
      case 'lowercase':
        return value.toLowerCase();
      default:
        return value;
    }
  }
}
``` 

```typescript
// app.component.ts

@Component({
  templateUrl: 'app.component.html'
})
export class AppComponent {
  someValue:string = "HeLlO WoRlD!";
}
``` 

 `
<!-- app.component.html --> 
 
 <!-- Outputs “HeLlO WoRlD!” --> 
 <h6>{{ someValue | example }}</h6> 
 
 <!-- Outputs “HELLO WORLD!” --> 
 <h6>{{ someValue | example:'uppercase' }}</h6> 
 
 <!-- Outputs “hello world!” --> 
 <h6>{{ someValue | example:'lowercase' }}</h6> 
` 

فهم المثال أعلاه يعني أنك تفهم الأنابيب الزاوي. لا يوجد سوى موضوع واحد آخر للمناقشة.

#### أنابيب نقية وطبيعية

كل شيء رأيته حتى الآن كان _أنبوبًا نقيًا_ . `pure: true` يتم تعيين `pure: true` افتراضيًا في البيانات الوصفية لـ `@Pipe` decorator. يشكل الاختلاف بين الاثنين اكتشاف تغيير Angular.

يتم تحديث الأنابيب النقية تلقائيًا كلما تغيرت قيمة مدخلاتها المشتقة. سيتم إعادة تنفيذ الأنبوب لإنتاج مخرج جديد عند تغيير قابل للاكتشاف في قيمة الإدخال. يتم تحديد التغييرات القابلة للكشف من خلال حلقة الكشف عن تغير Angular.

يتم تحديث أنابيب Impure تلقائيًا كلما تحدث دورة اكتشاف التغيير. يحدث اكتشاف التغير في Angular كثيرًا. يشير إلى ما إذا حدثت تغييرات في بيانات عضو فئة المكون. إذا كان الأمر كذلك ، فإن نموذج HTML يتم تحديثه بالبيانات المحدّثة. خلاف ذلك ، لن يحدث شيء.

في حالة وجود أنبوب نجس ، سيتم تحديثه بغض النظر عما إذا كان هناك تغيير قابل للكشف أم لا. تحديث غير صحيح الأنبوب كلما حلقات الكشف عن تغيير. تستهلك أنابيب النجاة الكثير من الموارد وعادة ما تكون غير مستنيرة. ومع ذلك ، فإنها تعمل أكثر كفقاعة للهروب. إذا احتجت في أي وقت إلى أنبوب حساس للاكتشاف ، `@Pipe` بالتبديل `pure: false` في البيانات الوصفية لـ `@Pipe` decorator.

#### استنتاج

التي تغطي الأنابيب. تمتلك أنابيب الكثير من الإمكانيات خارج نطاق هذه المقالة. تساهم الأنابيب في عمليات تحويل بيانات موجزة إلى نموذج HTML الخاص بمكوناتك. وهي ممارسات جيدة في الحالات التي يجب أن تخضع فيها البيانات لتحولات صغيرة.

## مصادر

1.  [مجتمع ويكي. _ISO 8601_ . ويكيبيديا. تم الوصول في 27 مايو 2018](https://en.wikipedia.org/wiki/ISO_8601)

## مصادر

*   [وثائق الزاوي](https://angular.io/guide/pipes)
*   [Angular GitHub Repository](https://github.com/angular/angular)
*   [قائمة الأنابيب مسبقة التعبئة مع الزاوي](https://angular.io/api?query=pipe)
*   [الزاوي CLI](https://cli.angular.io)