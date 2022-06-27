import React, {useState} from "react";
import styles from "./index.module.css";
import {Button} from "antd";

const CSSWeight05 = () => {
  const [showResult, showResultSet] = useState(false);

  return (
     <>
         <div style={{marginBottom: '16px'}}>练习题5</div>
         <div className={styles.image2}/>
         <div className={styles.image}/>
         <Button style={{margin: '16px 0'}} onClick={()=> {
             showResultSet(true);
         }}>结果</Button>
         {
             showResult && (
                 <div>
                     <div className={styles.parent}>
                         <div className={styles.child}>
                             <span>啦啦啦</span>
                         </div>
                     </div>
                     <div style={{margin: '16px 0', fontWeight: 600, fontSize: '16px'}}>
                         如果两个相同权重的选择器作用在同一元素上：以后面出现的选择器为最后规则
                     </div>
                 </div>
             )
         }
     </>
  );
};

export default CSSWeight05;
