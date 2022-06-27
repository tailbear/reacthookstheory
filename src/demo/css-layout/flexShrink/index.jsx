import React from "react";
import commonStyles from "../index.module.css";
import FlexItem from "../flexItem";

const FlexShrink = () => {
  return (
      <>
          <div className={commonStyles.title1}>8.flex-shrink: 定义了项目的缩小比例</div>
          <div className={commonStyles.title}>默认值: 1，即如果空间不足，该项目将缩小，负值对该属性无效。</div>
          <div className={commonStyles.description}>容器宽度为280px，子元素的宽度为100px，如下面所示，由于容器空间不足，子项目缩小，实际不足100px</div>
          <div className={commonStyles['flex-container']} style={{display:'flex', flexDirection: 'row', width: '280px'}}>
              <FlexItem color="#3da70d">1</FlexItem>
              <FlexItem color="#fe4c4c">2</FlexItem>
              <FlexItem color="#FBBF24">3</FlexItem>
          </div>
          <div className={commonStyles.title}>如果一个子元素的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小</div>
          <div className={commonStyles.description}>容器宽度为280px，子元素的宽度为100px，如下面所示，第一个元素并未缩小</div>
          <div className={commonStyles['flex-container']} style={{display:'flex', flexDirection: 'row', width: '280px'}}>
              <FlexItem color="#3da70d" style={{flexShrink: 0}}>1</FlexItem>
              <FlexItem color="#fe4c4c">2</FlexItem>
              <FlexItem color="#FBBF24">3</FlexItem>
          </div>
      </>
  );
};

export default FlexShrink;
