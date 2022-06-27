import React from "react";
import styles from "./index.module.css";
import {Col, Row} from "antd";

const Practise03 = () => {
  return (
      <>
          <div className="practise-title">练习题3（位置:demo/css-layout/position/practice/practice3）</div>
          <div className="title">请完善下列布局。</div>
          <div className="description">要求：当滚动到导航栏距离顶部为0时，将导航栏固定到头部</div>
          <div className={styles.container}>
              <div className={styles.title}>我是标题，题题，题，……</div>
              <Row className={styles.nav}>
                  <Col span={8} className={styles['menu-item']}>导航A</Col>
                  <Col span={8} className={styles['menu-item']}>导航B</Col>
                  <Col span={8} className={styles['menu-item']}>导航C</Col>
              </Row>
              <div className={styles.content}>
                  <div>定位类型
                      定位元素（positioned element）是其计算后位置属性为 relative, absolute, fixed 或 sticky 的一个元素（换句话说，除static以外的任何东西）。
                      相对定位元素（relatively positioned element）是计算后位置属性为 relative 的元素。
                      绝对定位元素（absolutely positioned element）是计算后位置属性为 absolute 或 fixed 的元素。
                      粘性定位元素（stickily positioned element）是计算后位置属性为 sticky 的元素。
                  </div>
                  <div>大多数情况下，height和width 被设定为auto的绝对定位元素，按其内容大小调整尺寸。但是，被绝对定位的元素可以通过指定top和bottom ，保留height未指定（即auto），来填充可用的垂直空间。它们同样可以通过指定left 和 right并将width 指定为auto来填充可用的水平空间。</div>
                  <div>除了刚刚描述的情况（绝对定位元素填充可用空间）：

                      如果 top 和 bottom 都被指定（严格来说，这里指定的值不能为 auto ），top 优先。
                      如果指定了 left 和 right ，当 direction设置为 ltr（水平书写的中文、英语）时 left 优先， 当direction设置为 rtl（阿拉伯语、希伯来语、波斯语由右向左书写）时 right 优先。</div>
                  <div>static
                      该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。</div>
              </div>
          </div>
      </>
  );
};

export default Practise03;

