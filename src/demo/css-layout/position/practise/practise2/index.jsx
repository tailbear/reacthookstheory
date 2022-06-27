import React from "react";
import styles from "./index.module.css";
import {Alert} from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const Practise02 = () => {
  return (
      <>
          <div className="practise-title">练习题2（位置:demo/css-layout/position/practice/practice2）</div>
          <div className="title">请完成下列布局。</div>
          <div className="description">
              <div>为下列Alert组件添加loading状态，如下图所示：</div>
              <div>遮罩：(255, 255, 255, 0.5)</div>
              <div>loading icon <LoadingOutlined/></div>
              <div>icon和文字颜色：#1890ff</div>
          </div>
          <div className={styles.image}/>
          {/*-------- 答题区 -----------*/}
          <Alert
              style={{width: '300px'}}
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
          />
      </>
  );
};

export default Practise02;

