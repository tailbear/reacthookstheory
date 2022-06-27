import React, {useState} from "react";
import styles from "./index.module.css";
import {Button} from "antd";

const CSSWeight04 = () => {
  const [showResult, showResultSet] = useState(false);

  return (
     <>
         <div style={{marginBottom: '16px'}}>练习题4</div>
         <div className={styles.image}/>
         <Button style={{margin: '16px 0'}} onClick={()=> {
             showResultSet(true);
         }}>结果</Button>
         {
             showResult && (
                 <div>
                     <button id={styles.btn} className={styles.btn}>按钮</button>
                     <div style={{margin: '16px 0', fontWeight: 600, fontSize: '16px'}}>
                         如果两个权重不同的选择器作用在同一元素上，权重值高的css规则生效
                     </div>
                 </div>
             )
         }
     </>
  );
};

export default CSSWeight04;
