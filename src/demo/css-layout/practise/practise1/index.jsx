import React from "react";
import commonStyles from "../../index.module.css";
import styles from "./index.module.css";

const Practise01 = () => {
  return (
    <>
      <div className={commonStyles["practise-title"]}>
        练习题1(位置：demo/css-layout/practice/practice1)
      </div>
      <div className={commonStyles.title}>
        请完成下列布局。要求：随着浏览器的宽高不断变化，三个文案的盒子依然保持同一高度。
      </div>
        <div className={styles.container}>
            <div className={commonStyles.description}className={styles.description}>
                文案1：长久以来，CSS 布局中唯一可靠且跨浏览器兼容的创建工具只有 floats
                和
                positioning。这两个工具大部分情况下都很好使，但是在某些方面它们具有一定的局限性，让人难以完成任务。
            </div>
            <div className={commonStyles.description} className={styles.description}>
                文案2：以下简单的布局需求是难以或不可能用这样的工具（ floats 和
                positioning）方便且灵活的实现的： 在父内容里面垂直居中一个块内容。
                使容器的所有子项占用等量的可用宽度/高度，而不管有多少宽度/高度可用。
                使多列布局中的所有列采用相同的高度，即使它们包含的内容量不同。
            </div>
            <div className={commonStyles.description} className={styles.description}>
                文案3：弹性盒子是一种用于按行或按列布局元素的一维布局方法
                。元素可以膨胀以填充额外的空间, 收缩以适应更小的空间。
            </div>
        </div>

      <div className={styles["practise-01-image"]} />
      {/*-------- 答题区 -----------*/}
    </>
  );
};

export default Practise01;
