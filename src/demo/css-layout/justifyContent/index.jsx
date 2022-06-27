import React from "react";
import List from '../flexList';
import styles from "../index.module.css";

const JustifyContent = () => {
  return (
      <>
          <div className={styles.title1}>3.justify-content：定义了项目在主轴的对齐方式</div>
          <div className={styles.title}>默认值: flex-start 左对齐</div>
          <div className={styles['flex-container']} style={{display:'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
              <List/>
          </div>

          <div className={styles.title}>flex-end：右对齐</div>
          <div className={styles['flex-container']} style={{display:'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
              <List/>
          </div>

          <div className={styles.title}>center：居中</div>
          <div className={styles['flex-container']} style={{display:'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <List/>
          </div>

          <div className={styles.title}>space-between：两端对齐，项目之间的间隔相等，即剩余空间等分成间隙。</div>
          <div className={styles['flex-container']} style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <List/>
          </div>

          <div className={styles.title}>space-around：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边缘的间隔大一倍。</div>
          <div className={styles['flex-container']} style={{display:'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
              <List/>
          </div>
      </>
  );
};

export default JustifyContent;
