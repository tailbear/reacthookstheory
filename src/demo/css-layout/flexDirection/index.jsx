import React from "react";
import List from '../flexList';
import styles from "../index.module.css";

const FlexDirection = () => {
  return (
      <>
          <div className={styles.title1}>1.flex-direction: 决定主轴的方向(即项目的排列方向)</div>
          <div className={styles.title}>默认值：row，主轴为水平方向，起点在左端。</div>
          <div className={styles['flex-container']} style={{display:'flex', flexDirection: 'row'}}>
              <List/>
          </div>

          <div className={styles.title}>row-reverse：主轴为水平方向，起点在右端</div>
          <div className={styles['flex-container']} style={{display:'flex', flexDirection: 'row-reverse'}}>
              <List/>
          </div>

          <div className={styles.title}>column：主轴为垂直方向，起点在上沿</div>
          <div className={styles['flex-container']} style={{display:'flex', flexDirection: 'column'}}>
              <List/>
          </div>

          <div className={styles.title}>column-reverse：主轴为垂直方向，起点在下沿</div>
          <div className={styles['flex-container']} style={{display:'flex', flexDirection: 'column-reverse'}}>
              <List/>
          </div>
      </>
  );
};

export default FlexDirection;
