
# CSS选择器

　　概念:CSS选择器是用于选择你想要的元素的样式的模式。用于对HTML页面中的元素样式实现一对一，一对多或者多对一的控制。

## 简单选择器

　　简单选择器包括元素,id,类选择器

### 元素选择器

　　根据元素名称来选择 HTML 元素。

```css
        p {
          text-align: center;
          color: red;
        }
```

### id选择器

　　根据id来选择 HTML 元素。

```css
        #id {
          text-align: center;
          color: red;
        }
```

### 类选择器

　　根据class来选择 HTML 元素。

```css
        .class {
          text-align: center;
          color: red;
        }
```

　　　　**tips:类和id选择器命名不能以数字开头**

## 组合器选择器

　　组合器是解释选择器之间关系的某种机制。CSS 选择器可以包含多个简单选择器。在简单选择器之间，我们可以包含一个组合器。CSS 中有四种不同的组合器：

### 后代选择器 (空格)

　　后代选择器匹配属于指定元素后代的所有元素。

```css
        /*选择 <div> 元素内的所有 <p> 元素*/
        div p {
          text-align: center;
          color: red;
        }
```

### 子选择器 (>)

　　匹配属于指定元素子元素的所有元素

```css
        /*属于 <div> 元素子元素的所有 <p> 元素*/
        div > p {
          text-align: center;
          color: red;
        }
```

### 相邻兄弟选择器 (+)

　　匹配所有作为指定元素的相邻同级的元素。兄弟（同级）元素必须具有相同的父元素，“相邻”的意思是“紧随其后”

```css
        /*选择紧随 <div> 元素之后的所有 <p> 元素*/
        div + p {
          text-align: center;
          color: red;
        }
```

### 通用兄弟选择器 (~)

　　匹配属于指定元素的同级元素的所有元素

```css
        /*选择属于 <div> 元素之后的同级元素中所有 <p> 元素*/
        div ~ p {
          text-align: center;
          color: red;
        }
```

## 伪类选择器

　　伪类用于定义元素的特殊状态。

### 锚伪类

　　链接能够以不同的方式显示。

```css
       /* 未访问的链接 */
       a:link {
         color: #FF0000;
       }

       /* 已访问的链接 */
       a:visited {
         color: #00FF00;
       }
       
       /* 鼠标悬停链接 */
       a:hover {
         color: #FF00FF;
       }
       
       /* 已选择的链接 */
       a:active {
         color: #0000FF;
       }
```

### :first-child，:nth-child(n)，:last-child

　　匹配元素是另一个元素的第几个子元素

```css
       /*匹配第一个子元素*/
       p:first-child {
          color: blue;
       }

        /*匹配第n个子元素*/
        p:nth-child(n) {
          color: blue;
       }

        /*匹配最后一个子元素*/
        p:last-child {
          color: blue;
       }
```

### :not(selector)

　　选择每个非selector元素的元素：

```css
        /*匹配div下没有class-item类的元素*/
        div:not(.class-item) {
          color: blue;
       }

```

## 伪元素选择器

　　选取元素的一部分并设置其样式

　　::before,::after 伪元素可用于在元素内容前后插入一些内容。

```css
        /*在h1之后添加图片*/
        h1::after {
          content: url(gif.gif);
        }

        /*之前*/
        h1::before {
          content: url(smiley.gif);
        }
```

## 属性选择器

　　根据属性或属性值来选取元素

　　[attribute]:选择带有attribute属性的元素

　　[attribute='value']：选择带有attribute属性且值为value的元素

```css
        /*选择有target的a元素*/
        a[target] {
          background-color: yellow;
        }

        /*选择target=_blank的a元素*/
        a[target='_blank'] {
          background-color: yellow;
        }
```

<a style='margin-left:28px;font-size:16px;' href="/css-selector" target="_blank">CSS选择器示例</a>


## 选择器优先级

　　在讲选择器优先级之前，先来过一下样式优先级

　　样式优先级如下图

<div align="center">
  <img  width=400 src='img/style-weight.png'></img>
</div>

　　每种类型的选择器都有其权重，如下图：

<div align="center">
  <img width='400' height='200' src='img/css-specificity.jpg'></img>
</div>

　　选择器的权重可以相加，相加的规则如下：

<div align="center">
  <img width='600'  src='img/cul-weight.png'></img>
</div>

　　比如下面这个选择器


```css
       #id .class span{
           color:blue;
       }

```

  | 选择器 | 千  | 百  | 十  | 个  |
  | ------ | --- | --- | --- | --- |
  | #id    | 0   | 1   | 0   | 0   |
  | .class | 0   | 0   | 1   | 0   |
  | span   | 0   | 0   | 0   | 1   |
  | 结果   | 0   | 1   | 1   | 1   |

　　权重相同时，后面的选择器会覆盖前面的选择器相同的属性，权重不同时，权重高的选择器可以生效。

　　**权值跃迁**：无论有多少个低权级选择器，他的权重仍然低于权重高的选择器。下面是截取MDN css继承规则的一张图：

<div align="center">
  <img width='600'  src='img/waring-weight.png'></img>
</div>

　　**tips:尽量不要使用!important,以免造成样式污染，除了必要的为了覆盖行内样式而使用!important外，其余情况应该用提高权重的方式去提高想要的样式优先级。**

<a style='margin-left:28px;font-size:16px;' href="/css-weight" target="_blank">优先级示例</a>
