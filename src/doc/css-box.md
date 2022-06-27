# CSS盒模型

<br/>

## 什么是盒模型

　　盒模型是指所有的元素都可以看做是一个盒子，这个盒子包括了元素的内容，内边距，边框和外边距，如下图：

<div align="center">
  <img  src='img/css-box.png'></img>
</div>

　　内容区是盒子模型的中心，呈现盒子的主要信息内容；内边距是内容区和边框之间的空间；边框是环绕内容区和填充的边界；外边距位于盒子的最外围，是添加在边框外周围的空间。

## 标准盒模型和IE盒模型

　　盒模型有两种，标准盒模型和IE盒模型，他们通过box-sizing来设置，如下

```css
            div{
                box-sizing:content-box;/*border-box*/
            }
```

　　这两种盒模型的差别主要在于对于宽高的计算方式不同，计算方式如下：

　　　　content-box：宽(高)=content

　　　　border-box：宽(高)=content+padding+border

<div align="center">
　<img width='400' height='250' src='img/normal-box.jpeg'></img>
  <img width='400' height='250' src='img/ie-box.jpeg'></img>
</div>

　　目前主流的浏览器盒模型是标准盒模型。那么IE盒模型有什么作用呢？

<a style='margin-left:28px;font-size:16px;' href="/css-box" target="_blank">CSS-box</a>

## BFC

### BFC是什么？

　　BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。

### 如何创建BFC

- float的值不是none。

- position的值不是static或者relative。

- display的值是inline-block、table-cell、flex、table-caption或者inline-flex

- overflow的值不是visible

### BFC布局规则

- 内部的Box会在垂直方向，一个接一个地放置。

- Box**垂直方向**的距离由margin决定。属于**同一个BFC**的两个相邻Box的margin会发生重叠。

- 每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。

- BFC的区域不会与float box重叠。

- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

- 计算BFC的高度时，浮动元素也参与计算。

### BFC作用

<a style='margin-left:28px;font-size:16px;' href="/css-box" target="_blank">BFC作用</a>

1. 利用BFC避免margin重叠
2. 自适应两栏布局
3. 清楚浮动
