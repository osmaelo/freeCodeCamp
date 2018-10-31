---
title: Clustering Algorithms
localeTitle: خوارزميات التجميع
--- # خوارزميات التجميع

التجميع هو عملية تقسيم البيانات إلى مجموعات منفصلة (مجموعات) ، مع ضمان ما يلي:

*   كل مجموعة تحتوي على كائنات مماثلة
*   الأشياء التي لا تنتمي إلى نفس العناقيد غير متشابهة

تساعد خوارزميات التجميع في العثور على بنية في مجموعة من البيانات غير المسموح بها وتندرج في فئة التعلم بدون إشراف.

تكمن الصعوبة في تعريف مقياس التشابه الذي يمكن أن يفصل البيانات بالطريقة التي تريدها. على سبيل المثال ، يمكن فصل مجموعة من الأشخاص حسب الجنس ، لون الشعر ، الوزن ، العرق ، إلخ.

مهمة خوارزميات التجميع هي مهمة تجميع مجموعة من الكائنات بطريقة بحيث تكون الكائنات في نفس المجموعة (تسمى الكتلة) أكثر تشابهاً (بمعنى ما أو آخر) مع بعضها البعض غير تلك الموجودة في المجموعات الأخرى (المجموعات). إنها مهمة رئيسية للتنقيب الاستكشافي عن البيانات ، وتقنية مشتركة لتحليل البيانات الإحصائية. يتم استخدامه في العديد من المجالات ، بما في ذلك التعلم الآلي ، والتعرف على الأنماط ، وتحليل الصور ، واسترجاع المعلومات ، والمعلوماتية الحيوية ، وضغط البيانات ، ورسومات الكمبيوتر.

تتضمن بعض تطبيقات خوارزميات التجميع:

*   تجميع المستهلكين وفقًا لأنماط الشراء
*   تجميع صور الحيوانات من نفس النوع معًا
*   تصنيف أنواع مختلفة من الوثائق

## أنواع خوارزميات التجميع:

1.  التكتل القائم على الربط (التكتل الهرمي)
2.  تجميع احادي القاعدة أو نقطة التجمع (تعنى k-clustering)
3.  التجمعات القائمة على التوزيع
4.  المجموعات المستندة إلى الكثافة

بعض الأمثلة على خوارزميات التجميع هي:

1.  التجميع المقعدي
2.  تعنى K-clustering
3.  K-mediods clustering
4.  تقسيم التجميع

### المجموعات الهرمية

توجد طرق لتجميع التي تستخدم فقط أوجه التشابه من الحالات ، دون أي متطلبات أخرى على البيانات ؛ الهدف هو العثور على مجموعات بحيث تكون الحالات في المجموعة أكثر تشابهاً مع بعضها البعض من الحالات في مجموعات مختلفة. هذا هو النهج المتبع بالتسلسل الهرمي.

هذا يحتاج إلى استخدام تشابه ، أو على بعد مسافة ، قياس محدد بين الحالات. عموما يتم استخدام المسافة الإقليدية ، حيث يتعين على المرء التأكد من أن جميع السمات لها نفس المقياس.

### تعيين نقطة

تحافظ هذه الطريقة على مجموعة من العناقيد ، وتضع نقاطًا لأقرب العناقيد.

## خوارزميات التجميع محددة

### K - يعني التجميع

خوارزمية K-means هي خوارزمية تجميعية شائعة لأنها بسيطة نسبياً وسريعة ، على عكس خوارزميات التجميع الأخرى. يتم تعريف الخوارزمية على النحو التالي:

1.  حدد معلمة الإدخال k (عدد العناقيد)
2.  اختيار نقاط البيانات العشوائية لاستخدامها كنجوم
3.  حساب المسافات لجميع نقاط البيانات إلى كل centroids k ، وتعيين كل نقطة بيانات إلى كتلة تحتوي على أقرب النقطه الوسطى
4.  بمجرد تصنيف جميع نقاط البيانات ، قم بحساب نقطة المنتصف لكل النقاط لكل مجموعة وتعيين كنقط مركزي جديد
5.  كرر الخطوتين 3 و 4 حتى يتقارب centroids عند نقاط k معينة.

نظرًا لأننا نحتاج فقط إلى حساب مسافات kxn (بدلاً من n (n-1) بالنسبة إلى خوارزمية knn) ، فإن هذه الخوارزمية قابلة للتوسع تمامًا.

في ما يلي مثال تجميع في Python يستخدم " [مجموعة بيانات Iris"](https://www.kaggle.com/uciml/iris)

```python
import pandas as pd
import numpy as np
iris = pd.read_csv('Iris.csv')
del iris['Id']
del iris['SepalLengthCm']
del iris['SepalWidthCm']

from matplotlib import pyplot as plt
# k is the input parameter set to the number of species
k = len(iris['Species'].unique())
for i in iris['Species'].unique():
    # select only the applicable rows
    ds = iris[iris['Species'] == i]
    # plot the points
    plt.plot(ds[['PetalLengthCm']],ds[['PetalWidthCm']],'o')
plt.title("Original Iris by Species")
plt.show()

from sklearn import cluster
del iris['Species']
kmeans = cluster.KMeans(n_clusters=k, n_init=10, max_iter=300, algorithm='auto')
kmeans.fit(iris)
labels = kmeans.labels_
centroids = kmeans.cluster_centers_

for i in range(k):
    # select only data observations from the applicable cluster
    ds = iris.iloc[np.where(labels==i)]
    # plot the data observations
    plt.plot(ds['PetalLengthCm'],ds['PetalWidthCm'],'o')
    # plot the centroids
    lines = plt.plot(centroids[i,0],centroids[i,1],'kx')
    # make the centroid x's bigger
    plt.setp(lines,ms=15.0)
    plt.setp(lines,mew=2.0)
plt.title("Iris by K-Means Clustering")
plt.show()
``` 

بما أن نقاط البيانات تنتمي عادة إلى مساحة عالية الأبعاد ، فإن مقياس التشابه غالباً ما يتم تعريفه على أنه مسافة بين متجهين (Euclidean ، Manhathan ، Cosine ، Mahalanobis…)

### كثافة الخلط

يمكننا كتابة _كثافة الخليط على_ النحو التالي: ![كثافة الخليط](https://latex.codecogs.com/gif.latex?p%28x%29%20%3D%20%5Csum_%7Bi%3D1%7D%5E%7Bk%7Dp%28x%7CG_%7Bi%7D%29p%28G_%7Bi%7D%29) حيث Gi هي مكونات الخليط. وتسمى أيضا مجموعة أو مجموعات. p (x | Gi) هي الكثافة المكونة و P (Gi) هي نسب الخليط. عدد المكونات ، k ، هو hyperparameter ويجب تحديده مسبقًا.

### التنبؤ بالتعظيم (EM)

في هذا النهج هو احتمالي ونحن نبحث عن معلمات كثافة المكون الذي يزيد من احتمال العينة.

الخوارزمية EM عبارة عن إجراء تكراري فعال لحساب تقدير أقصى احتمال (ML) في وجود بيانات مفقودة أو مخفية. في تقدير ML ، نرغب في تقدير معلمات النموذج التي تكون البيانات المرصودة هي الأكثر احتمالا.

يتكون كل تكرار لخوارزمية EM من عمليتين: E-step و M-step.

1.  في التوقع ، أو الخطوة E ، يتم تقدير البيانات المفقودة بالنظر إلى البيانات الملاحظة والتقديرات الحالية لمعلمات النموذج. يتم تحقيق ذلك باستخدام التوقع المشروط ، موضحا اختيار المصطلحات.
2.  في الخطوة M ، يتم تكبير وظيفة الاحتمال في ظل افتراض أن البيانات المفقودة معروفة. يتم استخدام تقدير البيانات المفقودة من الخطوة E بدلاً من البيانات المفقودة الفعلية.

يتم ضمان التوافق لأن الخوارزمية مضمونة لزيادة الاحتمالية عند كل عملية تكرار.

## معلومات اكثر:

*   [ويكيبيديا تحليل الكتلة المقالة](https://en.wikipedia.org/wiki/Cluster_analysis)
*   [مقدمة في التجميع والخوارزميات ذات الصلة](https://www.analyticsvidhya.com/blog/2016/11/an-introduction-to-clustering-and-different-methods-of-clustering/)
*   [شرائح التجميع - شرائح جامعة ستانفورد](https://web.stanford.edu/class/cs345a/slides/12-clustering.pdf)
*   [خوارزميات التجميع: من البداية إلى حالة الفن](https://www.toptal.com/machine-learning/clustering-algorithms)
*   [تحليل الكتلة: المفاهيم الأساسية والخوارزميات](https://www-users.cs.umn.edu/~kumar/dmbook/ch8.pdf)
*   [تعنى K-Clustering](https://www.datascience.com/blog/k-means-clustering)
*   [خوارزمية توقع التعظيم](https://www.cs.utah.edu/~piyush/teaching/EM_algorithm.pdf)
*   [استخدام K-Means التجميع مع بايثون](https://code.likeagirl.io/finding-dominant-colour-on-an-image-b4e075f98097)