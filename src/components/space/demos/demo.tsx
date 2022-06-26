import React from "react";
import { Space,Button } from '../../../index'
import './index.less'

function Demo (){
    return <div className="demo-space">
        <p className="demo-space-title">基础用法</p>
        <div className="demo-space-content">
            <Space>
                <span>文本1</span>
                <Button type="primary" plain>按钮2</Button>
                <Button type="success" plain>按钮3</Button>
            </Space>
        </div>
        <p className="demo-space-title">垂直间距</p>
        <div className="demo-space-content">
            <Space direction="vertical">
                <Button type="primary" plain>按钮2</Button>
                <Button type="success" plain>按钮3</Button>
            </Space>
        </div>
    </div>
}

export default Demo