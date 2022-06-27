import React from "react";
import styles from "./index.module.css";
import FlexDirection from "./flexDirection";
import JustifyContent from "./justifyContent";
import AlignItems from "./alignItems";
import Practise from "./practise";
import FlexWrap from "./flexWrap";
import Order from "./order";
import FlexGrow from "./flexGrow";
import FlexShrink from "./flexShrink";
import FlexBasis from "./flexBasis";
import AlignSelf from "./alignSelf";

const Demo4 = () => {
  return (
    <div className={styles['page-container']}>
      <div className={styles['title-category']}>Flex 容器：</div >
      <FlexDirection/>
      <FlexWrap/>
      <JustifyContent/>
      <AlignItems/>
      <div className={styles['title-category']}>Flex 项目属性：</div>
      <Order/>
      <FlexBasis/>
      <FlexGrow/>
      <FlexShrink/>
      <AlignSelf/>
      <Practise/>    
    </div>
  );
};

export default Demo4;
