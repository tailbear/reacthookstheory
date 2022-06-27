import React from "react";
import commonStyles from "../index.module.css";
import styles from "./index.module.css";
import FlexItem from "../flexItem";

const FlexWrap = () => {
  return (
      <>
          <div className={commonStyles.title1}>2.flex-wrap: 决定容器内项目是否可换行</div>
          <div className={commonStyles.description}>当容器空间不足时，项目尺寸会随之调整而并不会挤到下一行。</div>
          <div className={commonStyles.description}>下列每个盒子宽度为400，当容器空间不足时，导致每个盒子的宽度实际不足400px，这时可以用flex-wrap属性决定容器内项目是否可换行</div>
          <div className={commonStyles['flex-container']} style={{display:'flex', flexDirection: 'row', paddingBottom: 0, marginBottom: '16px'}}>
              <FlexItem className={styles.item}>1</FlexItem>
              <FlexItem className={styles.item}>2</FlexItem>
              <FlexItem className={styles.item}>3</FlexItem>
              <FlexItem className={styles.item}>4</FlexItem>
              <FlexItem className={styles.item}>5</FlexItem>
              <FlexItem className={styles.item}>6</FlexItem>
          </div>
          <div className={commonStyles.description}>换行后，每个子元素都正常展示</div>
          <div className={commonStyles['flex-container']} style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 0}}>
              <FlexItem className={styles.item}>1</FlexItem>
              <FlexItem className={styles.item}>2</FlexItem>
              <FlexItem className={styles.item}>3</FlexItem>
              <FlexItem className={styles.item}>4</FlexItem>
              <FlexItem className={styles.item}>5</FlexItem>
              <FlexItem className={styles.item}>6</FlexItem>
          </div>
      </>
  );
};

export default FlexWrap;
