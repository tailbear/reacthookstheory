import React from "react";
import commonStyles from "../index.module.css";
import FlexItem from "../flexItem";
import styles from "./index.module.css";

const AlignItems = () => {
  return (
      <>
          <div className={commonStyles.title1}>4.align-items: 定义了项目在交叉轴上的对齐方式</div>
          <div className={commonStyles.title}>默认值为 stretch 即如果项目未设置高度或者设为 auto，将占满整个容器的高度。</div>
          <div className={commonStyles.description}>1未设置高度，占满了容器高度，2，3设置了高度，以他们自己的高度为准</div>
          <div className={commonStyles['flex-container']} style={{display:'flex', flexDirection: 'row', alignItems: 'stretch', height: '200px'}}>
              <FlexItem color="#3da70d" height="unset">1</FlexItem>
              <FlexItem color="#fe4c4c">2</FlexItem>
              <FlexItem color="#FBBF24">3</FlexItem>
          </div>

          <div className={commonStyles.title}>flex-start：交叉轴的起点对齐</div>
          <div className={commonStyles.description}>1: 200px，2: 100px, 3: 50px</div>
          <div className={commonStyles['flex-container']} style={{display:'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
              <FlexItem color="#3da70d" height={200}>1</FlexItem>
              <FlexItem color="#fe4c4c" height={100}>2</FlexItem>
              <FlexItem color="#FBBF24" height={50}>3</FlexItem>
          </div>

          <div className={commonStyles.title}>flex-end：交叉轴的终点对齐</div>
          <div className={commonStyles.description}>1: 200px，2: 100px, 3: 50px</div>
          <div className={commonStyles['flex-container']} style={{display:'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
              <FlexItem color="#3da70d" height={200}>1</FlexItem>
              <FlexItem color="#fe4c4c" height={100}>2</FlexItem>
              <FlexItem color="#FBBF24" height={50}>3</FlexItem>
          </div>

          <div className={commonStyles.title}>center：交叉轴的中点对齐</div>
          <div className={commonStyles.description}>1: 200px，2: 100px, 3: 50px</div>
          <div className={commonStyles['flex-container']} style={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
              <FlexItem color="#3da70d" height={200}>1</FlexItem>
              <FlexItem color="#fe4c4c" height={100}>2</FlexItem>
              <FlexItem color="#FBBF24" height={50}>3</FlexItem>
          </div>

          <div className={commonStyles.title}>baseline: 项目的第一行文字的基线对齐</div>
          <div className={commonStyles['flex-container']} style={{display:'flex', flexDirection: 'row', alignItems: 'baseline', marginBottom: '8px'}}>
              <FlexItem className={`${styles.item} ${styles.item1}`} color="#3da70d" height={200}>1</FlexItem>
              <FlexItem className={`${styles.item} ${styles.item2}`} color="#fe4c4c" height={150}>2</FlexItem>
              <FlexItem className={`${styles.item} ${styles.item3}`} color="#FBBF24" height={100}>3</FlexItem>
          </div>
          <div className={commonStyles['flex-container']} style={{display:'flex', flexDirection: 'row', alignItems: 'baseline'}}>
              <FlexItem color="#3da70d" height={200}>1</FlexItem>
              <FlexItem color="#fe4c4c" height={100}>2</FlexItem>
              <FlexItem color="#FBBF24" height={50}>3</FlexItem>
          </div>

      </>
  );
};

export default AlignItems;
