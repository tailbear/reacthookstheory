import React from "react";
import styles from './index.module.css'

const selectPractice = () => {
  return (
    <div className={styles.container}>
      <p>这是container的直接子元素,想要变成红色</p>
      <div className={styles.content}>
        <p id={styles.title}>这是id为title的孙子元素，他不想改变颜色</p>
        <p>这是蓝色的container的孙子元素</p>
        <p>这是蓝色的container的孙子元素</p>
      </div>
    </div>
  );
};

export default selectPractice;
