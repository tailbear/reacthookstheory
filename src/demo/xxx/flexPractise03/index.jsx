import React from "react";

const FlexPractise03 = () => {
    return (
        <div style={{display: 'flex', height: '400px'}}>
            <div style={{backgroundColor: '#366AFF', width: '200px', padding: '16px', color: '#FFF'}}>sider</div>
            <div style={{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                <div style={{borderBottom: '1px solid #6B7280',display: "flex", justifyContent: 'space-between', padding: '16px'}}>
                    <div>首页</div>
                    <div>设置</div>
                </div>
                <div style={{padding: '16px', flexGrow: 1, overflow: "auto"}}>
                    <div style={{backgroundColor:'#D1D5DB', height: '100vh', padding: '16px'}}>我是高度为100vh内容</div>
                </div>
            </div>
        </div>
    );
};

export default FlexPractise03;
