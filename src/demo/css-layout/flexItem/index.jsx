import React from "react";
import styles from "./index.module.css";

const FlexItem = ({children, color, height, className='', style = {}}) => {
  const h = height === 'unset'? 'unset': `${height || 100}px`;

  return (
    <div className={`${styles.item} ${className}`} style={{backgroundColor: color, height: h, ...style}}>{children}</div>
  );
};

export default FlexItem;
