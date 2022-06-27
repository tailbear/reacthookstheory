import React from "react";
import commonStyles from "../index.module.css";
import FlexItem from "../flexItem";

const FlexBasis = () => {
  return (
      <>
          <div className={commonStyles.title1}>6.flex-basis: 定义了在分配多余空间之前，项目占据的主轴空间，浏览器根据这个属性，计算主轴是否有多余空间</div>
          <div className={commonStyles.title}>默认值：auto，即项目本来的大小, 这时候 item 的宽高取决于 width 或 height 的值。</div>
          <div className={commonStyles['flex-container']} style={{display:'flex', flexDirection: 'row'}}>
              <FlexItem color="#3da70d" style={{flexBasis: 'auto'}}>auto</FlexItem>
              <FlexItem color="#fe4c4c" style={{flexBasis: '200px'}}>200px</FlexItem>
              <FlexItem color="#FBBF24">未设置</FlexItem>
          </div>
      </>
  );
};

export default FlexBasis;
