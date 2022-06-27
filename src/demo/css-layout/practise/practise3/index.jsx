import React from "react";
import commonStyles from "../../index.module.css";
import styles from "./index.module.css";

const Practise03 = () => {
  return (
    <>
      <div className={commonStyles["practise-title"]}>
        练习题3（位置：demo/practice）
      </div>
      <div className={commonStyles.title}>请完成下列页面布局</div>
      <div className={commonStyles.description}>要求：</div>
      <div className={commonStyles.description}>
        1.左侧边栏宽度200px，右边内容宽度自适应。
      </div>
      <div className={commonStyles.description}>
        2.导航栏高度60px，左右布局,
        上下居中。下面内容高度自适应。当右边内容超过一屏时，下方展示滚动条，导航栏是固定展示的
      </div>
      <a href='/practice' target='_blank'>
        前往练习页面
      </a>
      <div className={styles.image} />
    </>
  );
};

export default Practise03;
