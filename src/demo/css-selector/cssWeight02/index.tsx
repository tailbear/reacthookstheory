import React, {useState} from "react";
import styles from "./index.module.css";
import {Button} from "antd";

const CSSWeight02 = () => {
    const [showResult, showResultSet] = useState(false);

  return (
     <>
         <div style={{marginBottom: '16px'}}>练习题2</div>
         <div className={styles.image2}/>
         <div className={styles.image}/>
         <Button style={{margin: '16px 0'}} onClick={()=> {
             showResultSet(true);
         }}>结果</Button>
         {
             showResult && (
                <div>
                    <button
                        id={styles.btn}
                        className={styles.btn}
                        style={{background: 'orange'}}
                    >
                        按钮
                    </button>
                    <div style={{margin: '16px 0', fontWeight: 600, fontSize: '16px'}}>
                        行内样式总会覆盖外部样式表的任何样式(除了important)
                    </div>
                </div>
             )
         }
     </>
  );
};

export default CSSWeight02;
