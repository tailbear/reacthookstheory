import React from "react";
import {Alert} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import styles from './index.module.css';

const AddLoading = () => {
    return (
        <div className={styles.container}>
            <Alert
                style={{width: '300px'}}
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
            />
            <div className={styles.mask}/>
            <div className={styles.loading}>
                <LoadingOutlined/>
                <span>Loading...</span>
            </div>
        </div>
    );
};

export default AddLoading;
