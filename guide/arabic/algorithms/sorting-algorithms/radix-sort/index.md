---
title: Radix Sort
localeTitle: تصنيف الجذر
---
## تصنيف الجذر

المتطلب السابق: فرز الفرز

QuickSort و MergeSort و HeapSort هي خوارزميات الفرز على أساس المقارنة. CountSort لا يستند إلى خوارزمية تستند. لديه تعقيد O (n + k) ، حيث k هو العنصر الأقصى لصفيف الإدخال. لذلك ، إذا كانت k هي O (n) ، تصبح CountSort الفرز الخطي ، وهو أفضل من خوارزميات الفرز القائمة على المقارنة التي تحتوي على تعقيد زمن O (nlogn). تتمثل الفكرة في توسيع خوارزمية CountSort للحصول على تعقيد زمني أفضل عندما يصل k إلى O (n2). هنا تأتي فكرة "تصنيف الجذر".

الخوارزمية:

لكل رقم i حيث تختلف من الرقم الأقل أهمية إلى الرقم الأكثر أهمية من رقم ما فرز مصفوفة إدخال باستخدام خوارزمية countsort وفقا لرقم ith. استخدمنا فرز الفرز لأنه نوع مستقر.

مثال: لنفترض أن مصفوفة الإدخال هي:

10،21،17،34،44،11،654،123

استنادًا إلى الخوارزمية ، سنقوم بتصنيف مصفوفة الدخل وفقًا للرقم (الرقم الأقل أهمية).

0: 10  
1: 21 11  
2:  
3: 123  
4: 34 44 654  
5:  
6:  
7: 17  
8:  
9:  

لذلك ، يصبح الصفيف 10،21،11،123،24،44،654،17 الآن ، سنقوم بالفرز وفقًا للأرقام العشرة:

0:  
1: 10 11 17  
2: 21 123  
3: 34  
4: 44  
5: 654  
6:  
7:  
8:  
9:

الآن ، يصبح الصفيف: 10،11،17،21،123،34،44،654 وأخيرًا ، نقوم بالفرز وفقًا لأرقام المائة (الرقم الأكثر أهمية):

0: 010 011 017 021 034 044  
1: 123  
2:  
3:  
4:  
5:  
6: 654  
7:  
8:  
9:

يصبح الصفيف: 10،11،17،21،34،44،123،654 والذي يتم فرزه. هذه هي الطريقة التي تعمل بها الخوارزمية.

تنفيذ في C:

```
void countsort(int arr[],int n,int place){

        int i,freq[range]={0};         //range for integers is 10 as digits range from 0-9

        int output[n];

        for(i=0;i<n;i++)

                freq[(arr[i]/place)%range]++;

        for(i=1;i<range;i++)

                freq[i]+=freq[i-1];

        for(i=n-1;i>=0;i--){

                output[freq[(arr[i]/place)%range]-1]=arr[i];

                freq[(arr[i]/place)%range]--;

        }

        for(i=0;i<n;i++)

                arr[i]=output[i];

}

void radixsort(ll arr[],int n,int maxx){            //maxx is the maximum element in the array

        int mul=1;

        while(maxx){

                countsort(arr,n,mul);

                mul*=10;

                maxx/=10;

        }

}
``` 

### معلومات اكثر:

*   [ويكيبيديا](https://en.wikipedia.org/wiki/Radix_sort)
    
*   [GeeksForGeeks](http://www.geeksforgeeks.org/radix-sort/)