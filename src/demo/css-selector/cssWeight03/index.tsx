import React, {useState} from "react";
import styles from "./index.module.css";
import {Button} from "antd";

const CSSWeight03 = () => {
  const [showResult, showResultSet] = useState(false);

  return (
     <>
         <div style={{marginBottom: '16px'}}>练习题3</div>
         <div className={styles.image}/>
         <div className={styles.image2}/>
         <Button style={{margin: '16px 0'}} onClick={()=> {
             showResultSet(true);
         }}>结果</Button>
         {
             showResult && (
                 <div>
                     <button
                         className={styles.btn}
                         style={{background: 'orange'}}
                     >
                         按钮
                     </button>
                     <div style={{margin: '16px 0', fontWeight: 600, fontSize: '16px'}}>
                         行内样式会被!important覆盖
                     </div>
                 </div>
             )
         }
     </>
  );
};

export default CSSWeight03;
