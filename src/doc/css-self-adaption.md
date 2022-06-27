# 自适应

<br/>

## 百分比

　　使用百分比单位去定义样式。

```css  
            div {
                width:80%;
            }
```

　　缺点：计算复杂，各个属性中如果使用百分比，相对父元素的属性并不是唯一的。比如width和height相对于父元素的width和height，而margin、padding不管垂直还是水平方向都相对比父元素的宽度，border-radius则是相对于元素自身等等，因此造成我们使用百分比单位容易使布局问题变得复杂。

## 媒体查询

　　使用@media媒体查询可以针对不同的媒体类型定义不同的样式，特别是响应式页面，可以针对不同屏幕的大小，编写多套样式，从而达到自适应的效果。举例来说：

```css
            /*768-960*/
            @media screen and (max-width: 960px){
                body{
                  background-color:#FF6699
                }
            }

            /*550-768*/
            @media screen and (max-width: 768px){
                body{
                  background-color:#00FF66;
                }
            }

            /*320-550*/
            @media screen and (max-width: 550px){
                body{
                  background-color:#6633FF;
                }
            }

            /*0-320*/
            @media screen and (max-width: 320px){
                body{
                  background-color:#FFFF00;
                }
            }
```

　　要注意媒体查询的编写顺序，按照css级联规则，最后一个符合条件的样式会生效，因此如果顺序不对，可能会导致样式问题。

　　缺点：需要针对不同情况编写多套样式

## rem,vh,vw
  
  **rem**:1rem的大小就是根元素<html>的font-size的值

  原理：通过设置html根元素字体大小来控制网页的布局，实现类似于自适应等比例的缩放的布局。
  
  缺点：在响应式布局中，必须通过js来动态控制根元素font-size的大小。也就是说css样式和js代码有一定的耦合性。且必须将改变font-size的代码放在css样式之前。
  
  **vh,vw**:与视图窗口有关，vw表示相对于视图窗口的宽度，vh表示相对于视图窗口高度

  比如对于iphone6/7 375*667的分辨率，那么px可以通过如下方式换算成vw

```css
            1px = （1/375）*100 vw
```

  原理：通过视图窗口的不同去控制网页布局，实现类似于自适应等比例的缩放的布局。

  缺点：部分浏览器不兼容，需要转换单位

<a href='https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md' target='_blank'>postcss-px-to-viewport方案</a>
