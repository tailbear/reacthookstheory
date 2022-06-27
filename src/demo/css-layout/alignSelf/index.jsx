import React from "react";
import commonStyles from "../index.module.css";
import FlexItem from "../flexItem";

const AlignSelf = () => {
  return (
      <>
          <div className={commonStyles.title1}>9.align-self: 允许单个项目有与其他项目不一样的对齐方式</div>
          <div className={commonStyles.title}>这个跟 align-items 属性时一样的，只不过 align-self 是对单个项目生效的，而 align-items 则是对容器下的所有项目生效的。</div>
          <div className={commonStyles.description}>
              <div>容器：align-items: 'start'</div>
              <div>元素2：align-self: 'end'</div>
          </div>
          <div className={commonStyles['flex-container']} style={{display:'flex', flexDirection: 'row', alignItems: 'start', height: '200px'}}>
              <FlexItem color="#3da70d">1</FlexItem>
              <FlexItem color="#fe4c4c" style={{alignSelf: 'end'}}>2</FlexItem>
              <FlexItem color="#FBBF24">3</FlexItem>
          </div>
      </>
  );
};

export default AlignSelf;
