---
title: Access Modifiers
localeTitle: Модификаторы доступа
---
# Модификаторы доступа

Вы когда-нибудь хотели определить, как люди будут обращаться к некоторым вашим свойствам? Вы не хотите, чтобы кто-то использовал ваше нижнее белье. Однако ваши близкие друзья и родственники могут использовать ваш свитер и, может быть, ваш автомобиль.

Аналогично тому, как вы устанавливаете уровень доступа к вашим задачам, Java также контролирует доступ. Вы хотите определить уровень доступа для переменных, методов и классов в зависимости от того, к каким другим классам вы хотите получить доступ.

Java предоставляет 4 уровня модификаторов доступа. Это означает, что вы можете изменить доступ к переменной, методу или классу четырьмя способами. Эти 4 способа являются частными, общедоступными, защищенными и дефолтными.

Эти модификаторы доступа могут применяться к полям, методам и классам (классы - это особый случай, мы рассмотрим их в конце этой статьи). Вот краткий обзор 1 того, что `Access Levels` для каждого `Access Modifier` :

#### Модификаторы доступа Таблица Ссылка:

![Таблица модификаторов доступа](https://cdn-media-1.freecodecamp.org/imgr/zoMspyn.png)

#### Модификатор частного доступа

Позволяет доступ к переменной или методу только в классе, в котором она была создана. Никакой другой класс за пределами класса, который создал переменную или метод, не может получить к нему доступ. Это близко похоже на ваши внутренние органы. Они доступны только владельцу. Чтобы сделать переменную или метод закрытыми, вы просто добавляете ключевое слово private перед переменной или типом метода. Давайте используем private в примере кодирования. Если банк хочет предоставить процентную ставку в размере 10% по своим кредитам, он будет следить за тем, чтобы переменная процентной ставки (предположим, что `int int_rate;` ) останется частной, так как никто другой класс не попытается получить к ней доступ и не изменит ее. Например;

`private String name;`

В приведенном выше примере создается переменная с именем name и гарантирует, что она доступна только в классе, из которого она была создана.

Другим примером метода является `java private void setAge(){ System.out.println("Set Age"); }` Вышеприведенный пример гарантирует, что метод setAge доступен только в пределах класса, из которого он был создан, и нигде больше.

#### Модификатор общественного доступа

Модификатор открытого доступа является прямой противоположностью модификатора частного доступа. Класс, метод или переменная могут быть объявлены как общедоступные, а это значит, что они доступны из любого класса. Модификатор общедоступного доступа можно сравнить с общеобразовательной школой, где каждый может искать прием и быть допущенным.

Доступ к общедоступному классу, методу или переменной можно получить из любого другого класса в любое время.

Например, чтобы объявить класс общедоступным, все, что вам нужно, это:

```java
public class Animal{ 
 
 } 
```

Таким образом, класс Animal может быть доступен любым другим классом.

```java
public int age; 
 public int getAge(){ 
 } 
```

Выше указаны способы указания переменной и метода как общедоступные.

#### Модификатор доступа по умолчанию

Модификатор доступа по умолчанию отличается от всех других модификаторов доступа тем, что у него нет ключевого слова. Чтобы использовать модификатор доступа по умолчанию, вы просто не используете ни один из других модификаторов доступа, а просто означает, что вы используете модификатор доступа по умолчанию.

Например, чтобы использовать модификатор доступа по умолчанию для класса, вы используете

```java
class Bird{ 
 } 
```

Это в основном означает, что вы используете модификатор доступа по умолчанию. Модификатор доступа по умолчанию позволяет доступным переменным, методам или классам другим классам в одном пакете. Пакет представляет собой набор связанных классов в каталоге файлов. Дополнительные сведения о пакетах см. В разделе о пакетах.

Любая переменная, метод или класс, объявленные для использования модификатора доступа по умолчанию, не могут быть доступны каким-либо другим классом за пределами пакета, из которого он был объявлен.

```java
int age; 
 void setNewAge(){ 
 } 
```

Выше приведены некоторые способы использования модификатора доступа по умолчанию для переменной или метода. Не забывайте, что модификатор доступа по умолчанию не имеет ключевого слова. Отсутствие трех других модификаторов доступа означает, что вы используете модификатор доступа по умолчанию.

#### Модификатор защищенного доступа

Модификатор защищенного доступа тесно связан с модификатором доступа по умолчанию. Модификатор защищенного доступа имеет свойства модификатора доступа по умолчанию, но с небольшим улучшением.

Переменная и метод - единственные, кто использует модификатор защищенного доступа. Небольшое улучшение заключается в том, что класс вне пакета классов, из которого была объявлена ​​переменная или метод, может получить доступ к указанной переменной или методу. Однако это возможно ТОЛЬКО, если оно наследуется от Класса.

Класс из другого пакета, который может видеть защищенные переменные или методы, должен расширить класс, создавший переменные или методы.

Примечание без преимущества Inheritance, модификатор доступа по умолчанию имеет точно такой же доступ, как и защищенный модификатор доступа.

Примеры использования защищенного модификатора доступа показаны ниже:

```java
protected int age; 
 protected String getName(){ 
  return "My Name is You"; 
 } 
```

#### Модификаторы доступа в классах

По умолчанию классы могут иметь только 2 модификатора:

*   общественности
*   нет модификатора (модификатор по умолчанию)

Таким образом, это означает, что классы никогда не могут быть настроены на `private` или `protected` ?

Это логично, почему вы хотите создать частный класс? Ни один другой класс не сможет его использовать. Но иногда вы можете внедрять класс в другой класс. Эти специальные классы, `inner classes` , могут быть настроены на закрытые или защищенные, чтобы доступ к нему мог только его окружающий класс:

```java
public class Car { 
    private String brand; 
    private Engine engine; 
    // ... 
    private class Engine { 
        // ... 
    } 
 } 
```

В приведенном выше примере только класс `Car` может использовать класс `Engine` . Это может быть полезно в некоторых случаях.

Другие классы никогда не могут быть `protected` и `private` , потому что это не имеет смысла. Модификатор `protected` доступа используется для создания `package-private` но с возможностью доступа к подклассам. В java нет такой концепции, как «подпакеты» или «наследование пакетов».

### источники

[1\. Документы Oracle по модификаторам доступа](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html "Документы Oracle")