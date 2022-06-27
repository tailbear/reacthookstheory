import { Divider, Switch } from "antd";
import React, { useMemo, useState } from "react";
import styles from "./index.module.css";
import expected from "./img/expected.png";

const CSSBox = () => {
  const [isContentBox, isContentBoxSet] = useState(false);

  const cssBoxStyle: any = isContentBox
    ? { boxSizing: "content-box" }
    : { boxSizing: "border-box" };

  return (
    <div className={styles.cssbox}>
      <div>
        <h2 className={styles.title}>IEBox的作用:</h2>
        <p>
          IE盒模型作用就是对于宽度高度计算更简便，我们可以直接按照设计图的尺寸去计算宽高，而不用考虑边框和内边距，
          这与我们平时开发时使用的设计图相同，并且在某些情况下，border-box实际上是更有用的，比如说两栏布局，他们
          的宽度都为50%，这是如果设计师想要加个边框或者内边距时，我们可以直接修改对应属性，而不用再去修改宽度。
        </p>
        <Switch
          checked={isContentBox}
          checkedChildren='content-box'
          unCheckedChildren='border-box'
          onChange={() => isContentBoxSet(!isContentBox)}
        />
        <div className={styles.container}>
          <div className={styles.left} style={cssBoxStyle}>
            <h2>这是一个{isContentBox ? "Content" : "Border"} box</h2>
            <span>by xxx</span>
            <p>box-sizing:{isContentBox ? "content-box" : "border-box"}</p>
            <p>padding:20px</p>
          </div>
          <div className={styles.right} style={cssBoxStyle}>
            <h2>这是一个{isContentBox ? "Content" : "Border"} box</h2>
            <span>by xxx</span>
            <p>box-sizing:{isContentBox ? "content-box" : "border-box"}</p>
            <p>padding:20px</p>
          </div>
        </div>
      </div>
      <Divider dashed />
      <h2 className={styles.title}>外边距重叠</h2>
      <p>下面两个margin为20px的盒子,为什么他们之间的间距只有20px呢？</p>
      <div className={styles.container}>
        <div className={styles.top}>
          <h2>这是一个margin为20px的盒子</h2>
          <span>by xxx</span>
          <p>
            Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi
            radish okra azuki bean corn fava bean mustard tigernut jícama green
            bean celtuce.
          </p>
        </div>
        <div className={styles.bottom}>
          <h2>这是一个margin为20px的盒子</h2>
          <span>by xxx</span>
          <p>
            Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi
            radish okra azuki bean corn fava bean mustard tigernut jícama green
            bean celtuce.
          </p>
        </div>
      </div>
      <b className={styles.question}>question：如何才能避免外边距重叠呢？</b>
      <p className={styles.answer}>
        当两个相邻块级子元素分属于不同的BFC时可以阻止margin重叠
      </p>
      <Divider dashed />

      <h2 className={styles.title}>自适应双栏布局</h2>
      <div className={styles.container}>
        <div className={styles["float-left"]}>
          <h2>这是一个浮动元素</h2>
          <p>1.session1</p>
          <p>2.session2</p>
        </div>
        <div className={styles["float-right"]}>
          <h2>article2</h2>
          <span>by xxx</span>
          <p>
            Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi
            radish okra azuki bean corn fava bean mustard tigernut jícama green
            bean celtuce.
          </p>
        </div>
      </div>
      <div style={{ overflow: "hidden" }}>
        <b className={styles.question}>question：如何变成下图效果？</b>
        <div className={styles.answer}>
          <img src={expected} width='740' alt='' />
        </div>
      </div>
    </div>
  );
};

export default CSSBox;
