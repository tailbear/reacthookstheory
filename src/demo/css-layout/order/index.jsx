import React from "react";
import commonStyles from "../index.module.css";
import styles from "./index.module.css";
import FlexItem from "../flexItem";

const Order = () => {
  return (
      <>
          <div className={commonStyles.title1}>5.order: 定义项目在容器中的排列顺序，数值越小，排列越靠前，默认值为 0</div>
          <div className={styles.image}/>
          <div className={commonStyles['flex-container']} style={{display:'flex', flexDirection: 'row'}}>
              <FlexItem color="#3da70d" style={{order: 3}}>1</FlexItem>
              <FlexItem color="#fe4c4c" style={{order: 2}}>2</FlexItem>
              <FlexItem color="#FBBF24" style={{order: 1}}>3</FlexItem>
          </div>
      </>
  );
};

export default Order;
