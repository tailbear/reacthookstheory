import React, { useState } from "react";
import styles from "./index.module.css";
import resultImg from "./img/result.png";
import { Button } from "antd";
import Practice from "./practice";

const CSSSelector = () => {
  const [showResult, showResultSet] = useState(false);

  return (
    <div className={styles.container}>
      <div>在不改变dom结构的基础上，如何给样式，将各元素实现他们想要的效果(位置：demo/css-selector/practice)</div>

      <Practice />
      <Button
        onClick={() => {
          showResultSet(true);
        }}>
        查看答案:
      </Button>
      {showResult && (
        <div style={{margin:'20px'}}>
          <img width={300} src={resultImg} alt='' />
        </div>
      )}
    </div>
  );
};
export default CSSSelector;
