import React, {useState} from "react";
import styles from "./index.module.css";
import {Button} from "antd";

const CSSWeight01 = () => {
    const [showResult, showResultSet] = useState(false);

  return (
     <>
       <div style={{marginBottom: '16px'}}>练习题1</div>
       <div className={styles.image}/>
       <Button style={{margin: '16px 0'}} onClick={()=> {
           showResultSet(true);
       }}>结果</Button>
       {
          showResult && <div>
              <button id={styles.btn} className={styles.btn}>按钮</button>
              <div style={{margin: '16px 0', fontWeight: 600, fontSize: '16px'}}>
                  !important 优先级最高，但也会被权重高的important所覆盖
              </div>
          </div>
       }
     </>
  );
};

export default CSSWeight01;
