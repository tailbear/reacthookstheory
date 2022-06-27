# CSS布局

<br/>

## 浮动

　　浮动被用来将盒子（box）置于左侧或右侧，同时让内容环绕其展示。

　　设置浮动的方式如下：

```css  
            div {
                float: left
            }
```

　　浮动容易出现的问题:

1. 高度塌陷
2. 虽然脱离了文档流，但脱离的不彻底，容易影响其他标签。

## 定位

<a style='margin-left:28px;font-size:16px;' href="/position" target="_blank">定位示例</a>
### 相对定位

　　相对定位可以将元素偏移其原先在正常文档流中的位置。可以使用top、left、bottom和right属性来相对其正常流位置进行移动。

　　设置相对定位的方式如下:

```css  
            div {
                position: relative;
                bottom: 50px;
            }
```

　　页面上的其他元素并不会因该元素的位置变化而受到影响。该元素在正常流中的位置会被保留，因此你需要自己去处理一些元素内容覆盖的情  况。

### 绝对定位

　　绝对定位可以将元素完全从正常流中移除。其原本占据的空间也会被移除。该元素会定位会相对于视口容器或者其最近的祖先元素也具有定位属性的元素（position值不为static）。

   设置绝对定位的方式如下：

```css  
            div {
                position: absolute;
                top: 20px;
                right: 20px;
            }
```

### 固定定位

　　固定定位可以将元素相对于视口定位。其原本占据的空间也会被移除。当页面滚动时，固定的元素会留在相对于视口的位置，而其他正常流中的内容则和通常一样滚动。

   设置固定定位的方式如下：

```css  
            div {
                position:fixed;
                top: 20px;
                right: 20px;
            }
```

### 粘性定位

   粘性定位会让元素在页面滚动时如同在正常流中，但当其滚动到相对于视口的某个特定位置时就会固定在屏幕上，如同fixed一般。

   设置粘性定位的方式如下：

```css  
            div {
                position: sticky;
                top: 20px;
            }
```

   需要注意的是，这个属性值是一个较新的CSS属性，在浏览器兼容性上会差一些，但在不兼容的浏览器中会被忽略并会退到正常的滚动情况

## 弹性布局

   弹性盒子（Flexbox）布局是一种为一维布局而设计的布局方法。一维的意思是你希望内容是按行或者列来布局。你可以使用display: flex来将元素变为弹性布局。

   设置弹性盒子的方式如下：

```css  
            div {
                display: flex;
            }
```

### 弹性布局的轴

   分为主轴和交叉轴，如下图

<div align="center">
  <img src='img/flex-axis.jpg'></img>
</div>

   flex项目默认沿主轴排列，我们可以通过修改flex-direction属性决定主轴的方向（即项目的排列方向）。如下：

```css  
            div {
                display: flex;
                flex-direction: row | row-reverse | column | column-reverse;
            }
```

### flex的其他属性

<a style='margin-left:28px;font-size:16px;' href="/css-layout" target="_blank">弹性盒子属性具体介绍</a>

- flex-wrap: 决定是否换行，flex布局默认不换行
- flex-flow：flex-direction 属性和 flex-wrap 属性的简写形式
- justify-content：定义了项目在主轴上的对齐方式
- align-items：定义项目在交叉轴上如何对齐
- align-content：定义了多根轴线的对齐方式，前提是需要设置flex-wrap: wrap，否则不会有效

```css  
            div {
                display: flex;
                flex-wrap: nowrap | wrap | wrap-reverse;
                flex-flow: <flex-direction>|| <flex-wrap>;
                justify-content: flex-start | flex-end | center | space-around | space-between;
                align-items: flex-start | flex-end | center | baseline | stretch;
                align-content: flex-start | flex-end | center | space-between | space-around | stretch;
            }
```

### flex项目的属性

- order：定义项目的排列顺序。数值越小，排列越靠前，默认为0，可以是负数
- flex-grow：flex容器中剩余空间的多少应该分配给项目，也称为扩展规则。最终的项目的宽度为：自身宽度 + 容器剩余空间分配宽度，flex-grow最大值是1，超过1按照1来扩展
- flex-shrink： flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值，默认值是1

   题目

- flex-basis：子项在容器主轴方向上的初始大小，优先级高于自身的宽度width
- flex：flex-grow , flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto 。后两个属性可选。
- align-self：允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto ，表示继承父元素的 align-items 属性，如果没有父元素，则等同于stretch

```css  
            item {
                order: <integer>;
                flex-grow: <number>;
                flex-shrink: <number>;
                flex-basis: 0 | 100% | auto | <length>;
                flex: none | [ <'flex-grow'><'flex-shrink'>? || <'flex-basis'>];
                align-self: auto | flex-start | flex-end | center | baseline | stretch;
            }
```
