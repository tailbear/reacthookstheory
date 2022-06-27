import React from "react";
import commonStyles from "../index.module.css";
import styles from "./index.module.css";
import FlexItem from "../flexItem";

const FlexGrow = () => {
  return (
      <>
          <div className={commonStyles.title1}>7.flex-grow: 定义项目的放大比例</div>
          <div className={commonStyles.title}>若子项flex-grow为0，则即使容器存在剩余空间，也不放大，如子项2，3，子项1设置了flex-grow: 1，则占满了剩余空间</div>
          <div className={`${styles.image} ${styles.image1}`}/>
          <div className={commonStyles['flex-container']} style={{display:'flex', flexDirection: 'row', marginBottom: '8px'}}>
              <FlexItem color="#3da70d" style={{flexGrow: 1}}>1</FlexItem>
              <FlexItem color="#fe4c4c">2</FlexItem>
              <FlexItem color="#FBBF24">3</FlexItem>
          </div>
          <div className={commonStyles.title}>如果所有项目的 flex-grow 属性都为 1，则它们将等分剩余空间。(如果有的话)</div>
          <div className={`${styles.image} ${styles.image2}`}/>
          <div className={commonStyles['flex-container']} style={{display:'flex', flexDirection: 'row', marginBottom: '8px'}}>
              <FlexItem color="#3da70d" style={{flexGrow: 1}}>1</FlexItem>
              <FlexItem color="#fe4c4c" style={{flexGrow: 1}}>2</FlexItem>
              <FlexItem color="#FBBF24" style={{flexGrow: 1}}>3</FlexItem>
          </div>
          <div className={commonStyles.title}>设置了flex-grow子项，剩余空间按照子项的flex-grow的值成比例分配</div>
          <div className={`${styles.image} ${styles.image3}`}/>
          <div className={commonStyles['flex-container']} style={{display:'flex', flexDirection: 'row'}}>
              <FlexItem color="#3da70d" style={{flexGrow: 1}}>1</FlexItem>
              <FlexItem color="#fe4c4c" style={{flexGrow: 2}}>2</FlexItem>
              <FlexItem color="#FBBF24" style={{flexGrow: 3}}>3</FlexItem>
          </div>
          <div className={commonStyles.title}>当然如果当所有项目以 flex-basis 的值排列完后发现空间不够了，且 flex-wrap：nowrap 时，此时 flex-grow 则不起作用了</div>
          <div>容器宽度为280px，子元素的宽度为100px。我们可以看待下面子项1虽然设置了flex-grow，但由于本身容器空间不足，flex-grow并未生效</div>
          <div className={commonStyles['flex-container']} style={{display:'flex', flexDirection: 'row', width: '280px'}}>
              <FlexItem color="#3da70d" style={{flexGrow: 1}}>1</FlexItem>
              <FlexItem color="#fe4c4c">2</FlexItem>
              <FlexItem color="#FBBF24">3</FlexItem>
          </div>
      </>
  );
};

export default FlexGrow;
